/* eslint-disable @next/next/no-img-element */
import react from "react";
import { UserCircleIcon } from "@heroicons/react/20/solid";

const criteria = [
  {
    name: "Big O",
    points: [1, 3, 5],
    description: [
      "did nothing",
      "tried really really really hard",
      "Worked their butts off and deserve an A++",
    ],
    pointsTotal: "5",
  },
  {
    name: "Versatility",
    points: [1, 3, 5],
    description: [
      "did nothing",
      "tried really really really hard",
      "Worked their butts off and deserve an A++",
    ],
    pointsTotal: "5",
  },
  {
    name: "Organization",
    points: [1, 3, 5],
    description: [
      "did nothing",
      "tried really really really hard",
      "Worked their butts off and deserve an A++",
    ],
    pointsTotal: "5",
  },
  // More criteria...
];

export default function Rubric() {
  return (
    <div className="mt-10 p-4 bg-white rounded-xl shadow-md">
      <div className="px-4 sm:px-6 lg:px-8">
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
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead>
                        <tr className="divide-x divide-gray-200">
                          <th
                            scope="col"
                            className="py-3.5 pl-4 pr-4 text-center text-sm font-semibold bg-green-200 text-gray-900 sm:pl-0 rounded-l"
                          >
                            Name
                          </th>
                          <th
                            scope="colgroup"
                            colSpan="3"
                            className="col-span-3 px-4 py-3.5 text-center text-sm font-semibold bg-sky-100 text-gray-900"
                          >
                            Ratings
                          </th>
                          <th
                            scope="col"
                            className="py-3.5 pl-0 pr-0 text-center text-sm font-semibold bg-rose-200 text-gray-900 rounded-r"
                          >
                            Points
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-300 bg-white">
                        {criteria.map((criterion) => (
                          <tr
                          key={crypto.randomUUID}
                            className="divide-x divide-gray-300"
                          >
                            <td key={crypto.randomUUID} className="py-4 pl-4 pr-4 text-sm font-medium text-gray-900 bg-green-200 ">
                              {criterion.name}
                            </td>
                            {criterion.points
                              ? criterion.points.map((points) => (
                                  <td key={crypto.randomUUID} className="p-4 text-sm text-gray-500">
                                    + {points}
                                    <br />
                                    {criterion.description[points.id]}
                                  </td>
                                ))
                              : null}
                            <td key={crypto.randomUUID} className="py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                              {criterion.pointsTotal}
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
