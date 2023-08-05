/* eslint-disable @next/next/no-img-element */
import react, { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { BiDotsVerticalRounded, BiEditAlt } from "react-icons/bi";


export default function Rubric({ rubricArray }) {

  const [criteria, setCriteria] = useState([
    {
      name: "Solution",
      levels: [
        {
          score: 1,
          description: "Solution does not work",
        },
        {
          score: 3,
          description:
            "The solution partially solves the problem, but errors out after a few seconds",
        },
        {
          score: 5,
          description: "The solution works correctly and efficiently",
        },
      ],
      levelsTotal: "5",
    },
    {
      name: "Versatility",
      levels: [
        {
          score: 2,
          description: "Only works for the original example",
        },
        {
          score: 4,
          description: "Works well on some instances but not others",
        },
        {
          score: 6,
          description:
            "The submission can run successfully on many different instances of the assigned issue",
        },
      ],
      levelsTotal: "6",
    },
    {
      name: "Organization",
      levels: [
        {
          score: 1,
          description: "Very disorganized",
        },
        {
          score: 3,
          description:
            "Fairly organized, but some things are not explained clearly",
        },
        {
          score: 4,
          description: "Very organized, everything makes sense and is readable",
        },
      ],
      levelsTotal: "4",
    },
    // More criteria...
  ]);

  console.log(rubricArray)

  return (
    <div className="mt-10 p-4 bg-white rounded-xl shadow-md">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
          <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <div className="flex flex-row">
                <div className="h-6 w-2 -ml-4 mr-4 bg-rose-400 rounded" />
                <h1 className="text-lg font-semibold leading-6 text-gray-900">
              Rubric
            </h1>
            </div>
            
            <p className="mt-2 text-sm text-gray-700">
              Criteria for this assignment.
            </p>
          </div>
          <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
            <button
              type="button"
              className="flex flex-row rounded-md bg-sky-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Edit
              <BiEditAlt className="ml-2 text-xl" />
            </button>
          </div>
        </div>
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 mb-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead>
                        <tr className="divide-x divide-gray-200">
                          <th
                            scope="col"
                            className="py-3.5 pl-4 pr-4  text-sm font-semibold bg-green-200 text-gray-900 sm:pl-0 rounded-l"
                          >
                            Name
                          </th>
                          <th
                            scope="colgroup"
                            colSpan={rubricArray.length - 2}
                            className="px-4 py-3.5  text-sm font-semibold bg-sky-100 text-gray-900"
                          >
                            Ratings
                          </th>
                          <th
                            scope="col"
                            className="py-3.5 pl-2 pr-2 text-center text-sm font-semibold bg-rose-200 text-gray-900 rounded-r"
                          >
                            Total
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-300 bg-white">
                        {rubricArray.map((criterion) => (
                          <tr
                            key={crypto.randomUUID}
                            className="divide-x divide-gray-300"
                          >
                            <td
                              key={crypto.randomUUID}
                              className="py-4 pl-4 pr-4 text-sm font-medium text-gray-900 bg-green-200 "
                            >
                              {criterion.name}
                            </td>
                            {criterion.levels
                              ? criterion.levels.map((level) => (
                                  <td
                                    key={crypto.randomUUID}
                                    className="p-4 text-sm text-gray-500"
                                  >
                                    + {level.score}
                                    <br />
                                    <hr className="mt-2 text-gray-700 w-10" />
                                    <br />
                                    {level.description}
                                  </td>
                                ))
                              : null}
                            <td
                              key={crypto.randomUUID}
                              className="py-4 pl-4 pr-4 text-sm text-gray-900 font-bold sm:pr-0"
                            >
                              {criterion.levels[0].score}
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
        </div>
      </div>
    </div>
  );
}
