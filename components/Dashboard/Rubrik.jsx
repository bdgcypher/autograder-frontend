import react from "react";
import { UserCircleIcon } from "@heroicons/react/20/solid";

const criteria = [
  {
    name: "Big O",
    score: 3,
    assessment: "assessment here",
  },
  {
    name: "Validity",
    score: 1,
    assessment: "assessment here",
  },
  // More criteria...
];

export default function Rubrik() {
  return (
    <div className="mt-10 p-4 bg-white rounded-xl shadow-md">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <div className="flex flex-row">
              <div className="h-6 w-2 -ml-4 mr-4 bg-rose-400 rounded" />
              <h1 className="text-base font-semibold leading-6 text-gray-900">
                Rubrik
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
                            scope="col"
                            className="px-4 py-3.5 text-center text-sm font-semibold bg-sky-100 text-gray-900"
                          >
                            Ratings
                          </th>
                          <th
                            scope="col"
                            className="py-3.5 pl-4 pr-4 text-center text-sm font-semibold bg-rose-200 text-gray-900 sm:pr-0 rounded-r"
                          >
                            Points
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        {criteria.map((criterion) => (
                          <tr
                            key={criterion.id}
                            className="divide-x divide-gray-200"
                          >
                            <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                              {criterion.name}
                            </td>
                            <td className="whitespace-nowrap p-4 text-sm text-gray-500">
                              {criterion.assessment}
                            </td>
                            <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 sm:pr-0">
                              {criterion.score}
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
