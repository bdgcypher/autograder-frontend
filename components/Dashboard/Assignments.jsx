/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

export default function Assignments({
  assignments,
  setBreadcrumbData,
  setSelectedAssignment,
}) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      {/* Assignments container */}
      <div className="lg:col-span-11">
        <main className="w-full mt-14 lg:col-span-11">
          <div className="flex justify-between px-4 sm:px-0">
            <div className="text-xl md:text-3xl text-gray-900 font-bold">
              Dashboard
            </div>
          </div>

          {/* Assignments */}
          <div className="mt-10 p-4 bg-white rounded-xl shadow-md">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                  <div className="flex flex-row">
                    <div className="h-6 w-2 -ml-4 mr-4 bg-rose-400 rounded" />
                    <h1 className="text-lg font-semibold leading-6 text-gray-900">
                      Assignments
                    </h1>
                  </div>

                  <p className="mt-2 text-sm text-gray-700">
                    A list of all the Assignments you have created for this
                    class.
                  </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                  <button
                    type="button"
                    onClick={() => {
                      setBreadcrumbData("Create Assignment");
                    }}
                    className="block rounded bg-sky-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                  >
                    Create +
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
                            Title
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {assignments.assignment.map((assignment) => (
                          <tr key={assignment.id}>
                            <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                              <div className="flex items-center">
                                <div className="ml-4">
                                  <div className="font-medium text-gray-900">
                                    {assignment.title}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                              <div
                                onClick={() => {
                                  setBreadcrumbData(assignment.title);
                                  setSelectedAssignment(assignment.title);
                                }}
                                className="text-sky-600 hover:text-sky-900 cursor-pointer"
                              >
                                View
                                <span className="sr-only">
                                  , {assignment.title}
                                </span>
                              </div>
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
        </main>
      </div>
    </>
  );
}
