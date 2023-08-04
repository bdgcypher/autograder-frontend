import react from "react";
import { UserCircleIcon } from "@heroicons/react/20/solid";

const people = [
  {
    name: "Lindsay Walton",
    email: "lindsay.walton@example.com",
    submittedOn: "04/27/2023 - 10:23am",
    status: "In progress",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Jordan Grimsley",
    email: "J0r_de_man13@example.com",
    submittedOn: "04/262023 - 5:56pm",
    status: "Graded",
    image: "",
  },
  // More people...
];

export default function Submissions() {
  return (
    <div className="mt-10 p-4 bg-white rounded-xl shadow-md">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <div className="flex flex-row">
                <div className="h-6 w-2 -ml-4 mr-4 bg-rose-400 rounded" />
                <h1 className="text-lg font-semibold leading-6 text-gray-900">
              Submissions
            </h1>
            </div>
            
            <p className="mt-2 text-sm text-gray-700">
              A list of all the students in your class who have submitted this
              assignment.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              className="block rounded-md bg-sky-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Request submission
            </button>
          </div>
        </div>
        <div className="mt-8 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Submitted on
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                    >
                      <span className="sr-only">Grade</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {people.map((person) => (
                    <tr key={person.email}>
                      <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                        <div className="flex items-center">
                          <div className="h-11 w-11 flex-shrink-0">
                            {person.image ? (
                              <img
                                src={person.image}
                                alt=""
                                className="h-11 w-11 flex-shrink-0 rounded-full"
                              />
                            ) : (
                              <UserCircleIcon
                                className="h-11 w-11 flex-shrink-0 text-gray-400"
                                aria-hidden="true"
                              />
                            )}
                          </div>
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">
                              {person.name}
                            </div>
                            <div className="mt-1 text-gray-500">
                              {person.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <div className="text-gray-500">{person.submittedOn}</div>
                      </td>

                      {person.status === "Graded" ? (
                        <>
                          <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                              {person.status}
                            </span>
                          </td>
                        </>
                      ) : person.status === "In progress" ? (
                        <>
                          <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                            <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-yellow-600/20">
                              {person.status}
                            </span>
                          </td>
                        </>
                      ) : null}
                      <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <a href="#" className="text-sky-600 hover:text-sky-900">
                          View<span className="sr-only">, {person.name}</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
