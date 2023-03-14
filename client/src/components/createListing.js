import React from "react";
import Card from "react-bootstrap/Card";

const newList = () => {
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
              <form action="#" method="POST">
                <div className="overflow-hidden shadow sm:rounded-md">
                  <div className="bg-pale-dark px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium leading-6 text-main-yellow"
                        >
                          Author Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Full Name"
                          autoComplete="given-name"
                          className="mt-2 block w-full rounded-md border-0 py-1.5 text-main-yellow shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                          id="school"
                          name="school"
                          autoComplete="school-name"
                          className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-main-dark shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="rent"
                          className="block text-sm font-medium leading-6 text-main-yellow"
                        >
                          Rent
                        </label>
                        <input
                          type="text"
                          name="price"
                          id="rent"
                          className="mt-2 block w-full rounded-md border-0 py-1.5 text-main-yellow shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="0.00"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="gender"
                          className="block text-sm font-medium leading-6 text-main-yellow"
                        >
                          Roommate Gender
                        </label>
                        <input
                          id="gender"
                          placeholder="Who will I be living with?"
                          name="gender"
                          className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-main-dark shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>

                    <br></br>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium leading-6 text-main-yellow"
                      >
                        Listing Description
                      </label>
                      <textarea
                        type="textarea"
                        name="textValue"
                        id="description"
                        rows={4}
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-main-yellow shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <br></br>
                  </div>

                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-full bg-main-dark py-2 px-3 text-sm font-semibold text-main-yellow shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
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

{
  /* Spacer block thing */
}
{
  /* <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div> */
}

export default newList;
