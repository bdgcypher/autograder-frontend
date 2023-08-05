/* eslint-disable @next/next/no-img-element */
import react, { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { BiDotsVerticalRounded, BiEditAlt } from "react-icons/bi";


export default function Rubric({ rubricArray }) {


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
                  <div className="inline-block min-w-full rounded border border-gray-300">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead>
                        <tr className="flex divide-x divide-gray-300">
                          <th
                            scope="col"
                            className="w-32 lg:w-36 py-3.5 pl-4 pr-4 text-sm font-semibold bg-green-200 text-gray-900 sm:pl-0 rounded-l"
                          >
                            Name
                          </th>
                          <th
                            scope="colgroup"
                            colSpan={rubricArray.length - 2}
                            className="grow px-4 py-3.5  text-sm font-semibold bg-sky-100 text-gray-900"
                          >
                            Ratings
                          </th>
                          <th
                            scope="col"
                            className="w-12 py-3.5 pl-2 pr-2 text-sm font-semibold bg-rose-200 text-gray-900 rounded-r"
                          >
                            Total
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-300 bg-white">
                        {rubricArray.map((criterion) => (
                          <tr
                            key={crypto.randomUUID}
                            className="flex divide-x divide-gray-300"
                          >
                            <td
                              key={crypto.randomUUID}
                              className="flex-none w-32 lg:w-36 py-4 pl-4 pr-4 text-sm font-medium text-gray-900"
                            >
                              {criterion.name}
                            </td>
                            {criterion.levels
                              ? criterion.levels.map((level) => (
                                  <td
                                    key={crypto.randomUUID}
                                    className="w-full p-4 text-sm text-gray-500"
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
                              className="flex-none w-12 py-4 px-4 text-sm text-gray-900 font-bold sm:pr-0"
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
