import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { useMutation } from "@apollo/client";

import { ADD_LISTING } from "../utils/mutations";
import { QUERY_LISTINGS } from "../utils/queries";

const ListForm = () => {
  const [formState, setFormState] = useState({
    listingText: "",
    listingAuthor: "",
    listingAvgRent: "",
    listingRoomies: "",
    listingSchool: "",
  });

  const [characterCount, setCharacterCount] = useState(0);

  const [addListing, { error }] = useMutation(ADD_LISTING, {
    update(cache, { data: { addListing } }) {
      try {
        const { listings } = cache.readQuery({ query: QUERY_LISTINGS });

        cache.writeQuery({
          query: QUERY_LISTINGS,
          data: { listings: [addListing, ...listings] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addListing({
        variables: { ...formState },
      });

      setFormState({
        listingText: "",
        listingAuthor: "",
        listingAvgRent: "",
        listingRoomies: "",
        listingSchool: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "listingText" && value.length <= 500) {
      setFormState({ ...formState, [name]: value });
      setCharacterCount(value.length);
    } else if (name !== "listingText") {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <body className="card bg-main-yellow full-class">
      <style type="text/css">{`.full-class{
      height: 911px;
    }`}</style>
      <br></br>
      <Card
        className="max-w-[60rem] rounded-lg ml-96 mt-10"
        style={{
          backgroundColor: "#333533",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card.Body className="relative">
          <Card.Title
            style={{
              color: "#FFD100",
              display: "flex",
              justifyContent: "center",
              fontSize: "40px",
            }}
          >
            New Listing
          </Card.Title>
          <div className="md:grid md:grid-cols-2 md:gap-3">
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form onSubmit={handleFormSubmit}>
                <div className="overflow-hidden shadow sm:rounded-md">
                  <div className="bg-pale-dark px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label className="block text-sm font-medium leading-6 text-main-yellow">
                          Author Name
                        </label>
                        <input
                          onChange={handleChange}
                          value={formState.listingAuthor}
                          type="text"
                          name="listingAuthor"
                          id="name"
                          placeholder="Full Name"
                          autoComplete="given-name"
                          className="mt-2 block w-full rounded-md border-0 py-1.5 text-main-yellow shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-bright-yellow sm:text-sm sm:leading-6"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="school"
                          className="block text-sm font-medium leading-6 text-main-yellow"
                        >
                          School/University
                        </label>
                        <input
                          value={formState.listingSchool}
                          onChange={handleChange}
                          type="text"
                          placeholder="What school do you attend?"
                          name="listingSchool"
                          autoComplete="school-name"
                          className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-main-dark shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-bright-yellow sm:text-sm sm:leading-6"
                        />
                      </div>
                      {/* Rent */}
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="rent"
                          className="block text-sm font-medium leading-6 text-main-yellow"
                        >
                          Rent
                        </label>
                        <input
                          value={formState.listingAvgRent}
                          onChange={handleChange}
                          type="text"
                          name="listingAvgRent"
                          className="mt-2 block w-full rounded-md border-0 py-1.5 text-main-yellow shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-bright-yellow sm:text-sm sm:leading-6"
                          placeholder="Ex: $950-$1200"
                        />
                      </div>
                      {/* Roommates */}
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="gender"
                          className="block text-sm font-medium leading-6 text-main-yellow"
                        >
                          Roommate Gender
                        </label>
                        <input
                          value={formState.listingRoomies}
                          onChange={handleChange}
                          type="text"
                          placeholder="Who will I be living with?"
                          name="listingRoomies"
                          className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-main-dark shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-bright-yellow sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    {/* Desc */}
                    <br></br>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium leading-6 text-main-yellow"
                      >
                        Listing Description
                      </label>
                      <textarea
                        value={formState.listingText}
                        onChange={handleChange}
                        placeholder="Give a good description about your lease!"
                        type="textarea"
                        name="listingText"
                        rows={4}
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-main-yellow shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-bright-yellow sm:text-sm sm:leading-6"
                      />
                    </div>
                    <br></br>
                  </div>

                  <div className="bg-gray-50  py-3 text-center sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-full bg-main-dark py-3 px-8 text-lg font-semibold text-main-yellow shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </Card.Body>
      </Card>
    </body>
  );
};

export default ListForm;
