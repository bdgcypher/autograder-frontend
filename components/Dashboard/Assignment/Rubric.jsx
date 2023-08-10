/* eslint-disable @next/next/no-img-element */
import react, { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { BiDotsVerticalRounded, BiEditAlt } from "react-icons/bi";

export default function Rubric({ rubricArray }) {
  return (
    <div className="mt-10 p-4 bg-white rounded-xl shadow-md">
      <div className="px-2">
        <div className="">
          <div className="sm:flex-auto">
            <div className="flex flex-row px-4 justify-betweensm:flex sm:items-center">
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
              <div className="mt-4 -mr-4 sm:mt-0">
                <button
                  type="button"
                  className="flex flex-row rounded bg-sky-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                >
                  Edit
                  <BiEditAlt className="ml-2 text-xl" />
                </button>
              </div>
            </div>
            <div className="">
              <div className="mt-8 flow-root">
                <div className=" -my-2 mb-4">
                  <div className="w-full overflow-x-scroll inline-block rounded border border-gray-300">
                    <table className="divide-y divide-gray-300">
                      <thead>
                        <tr className="flex divide-x divide-gray-300">
                          <th
                            scope="col"
                            className="w-28 lg:w-32 py-3.5 pl-4 pr-4 text-sm font-semibold bg-green-200 text-gray-900 sm:pl-0 rounded-tl"
                          >
                            Name
                          </th>
                          <th
                            scope="colgroup"
                            colSpan={rubricArray.length - 2}
                            className="grow px-4 py-3.5  text-sm font-semibold bg-slate-100 text-gray-900"
                          >
                            Ratings
                          </th>
                          <th
                            scope="col"
                            className="w-14 py-3.5 pl-2 pr-2 text-sm font-semibold bg-rose-200 text-gray-900 rounded-tr"
                          >
                            Total
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-300 bg-white">
                        {rubricArray.map((criterion, index) => (
                          <tr
                            key={index}
                            className="flex divide-x divide-gray-300"
                          >
                            <td
                              key={index + 1}
                              className="flex-none w-28 lg:w-32 py-4 pl-2 pr-4 text-sm font-medium text-gray-900"
                            >
                              {criterion.name}
                            </td>
                            {criterion.levels
                              ? criterion.levels.map((level, index) => (
                                  <td
                                    key={index + 2}
                                    className="w-full p-4 text-sm text-gray-500"
                                  >
                                    <div className="bg-sky-100 rounded-full w-16 text-center">
                                      + {level.score}
                                    </div>
                                    <br />
                                    <hr className="mt-2 text-gray-700 w-10" />
                                    <br />
                                    {level.description}
                                  </td>
                                ))
                              : null}
                            <td
                              key={index + 5}
                              className="flex-none w-14 py-4 text-center text-sm text-gray-900 font-bold sm:pr-0"
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
