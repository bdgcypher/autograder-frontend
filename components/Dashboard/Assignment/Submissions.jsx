/* eslint-disable @next/next/no-img-element */
import react, { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/20/solid";


// const people = [
//   {
//     name: "Lindsay Walton",
//     email: "lindsay.walton@example.com",
//     submittedOn: "04/27/2023 - 10:23am",
//     submission: "def largest_adjacent_sum(numbers):\n    \"\"\"\n    Finds the largest sum of non-adjacent numbers in a given list of integers.\n\n    Args:\n       numbers (list): A list of integers.\n\n    Returns:\n       int: The largest sum of non-adjacent numbers.\n    \"\"\"\n\n    if not numbers:\n        return 0\n\n    length = len(numbers)\n    if length == 1:\n        return numbers[0]\n\n    # Initialize two variables to track the maximum sum at each step\n    prev_max = max(0, numbers[0])\n    curr_max = max(prev_max, numbers[1])\n\n    # Iterate through the list starting from the third element\n    for i in range(2, length):\n        # Calculate the maximum sum up to the current element\n        temp = curr_max\n        curr_max = max(prev_max + numbers[i], curr_max)\n        prev_max = temp\n\n    return curr_max\n",
//     status: "In progress",
//     image:
//       "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
//   },
//   {
//     name: "Jordan Grimsley",
//     email: "J0r_de_man13@example.com",
//     submittedOn: "04/26/2023 - 5:56pm",
//     submission: "def max_sum_non_adjacent(nums):\n    # Handle edge cases\n    if len(nums) == 0:\n        return 0\n    elif len(nums) == 1:\n        return max(nums[0], 0)\n\n    prev_prev_sum = max(nums[0], 0)\n    prev_sum = max(nums[0], nums[1], 0)\n\n    for i in range(2, len(nums)):\n        current_sum = max(prev_sum, prev_prev_sum + nums[i], 0)\n        prev_prev_sum = prev_sum\n        prev_sum = current_sum\n\n    return prev_sum\nprint(max_sum_non_adjacent([2, 4, 6, 2, 5]))  # Output: 13\nprint(max_sum_non_adjacent([5, 1, 1, 5]))     # Output: 10\nprint(max_sum_non_adjacent([-1, -2, -3, -4])) # Output: 0\nprint(max_sum_non_adjacent([1, 2, 3, 4, 5]))  # Output: 9\n",
//     status: "graded",
//     image: "",
//   },
//   // More people...
// ];

export default function Submissions({ setOpen, setSubmission, submissions, setGrade, rubricArray, setCurrentCriterion }) {


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
                  {submissions.map((submission) => (
                    <tr key={submission.email}>
                      <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
                        <div className="flex items-center">
                          <div className="h-11 w-11 flex-shrink-0">
                            {submission.image ? (
                              <img
                                src={submission.image}
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
                              {submission.name}
                            </div>
                            <div className="mt-1 text-gray-500">
                              {submission.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                        <div className="text-gray-500">
                          {submission.submittedOn}
                        </div>
                      </td>

                      {submission.status === "Graded" ? (
                        <>
                          <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                            <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                              {submission.status}
                            </span>
                          </td>
                        </>
                      ) : submission.status === "In progress" ? (
                        <>
                          <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
                            <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/20">
                              {submission.status}
                            </span>
                          </td>
                        </>
                      ) : null}
                      <td className="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                        <div
                          onClick={() => {
                            setOpen(true);
                            setSubmission(submission);
                            setGrade(submission.grade);
                            setCurrentCriterion(rubricArray[1].levels)
                          }}
                          className="text-sky-600 hover:text-sky-900 cursor-pointer"
                        >
                          View<span className="sr-only">, {submission.name}</span>
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
  );
}
