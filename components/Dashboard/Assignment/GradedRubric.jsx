/* eslint-disable @next/next/no-img-element */
import react, { useState, useEffect } from "react";
import { BiEditAlt } from "react-icons/bi";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function GradedRubric({
  setOpen,
  gradedRubricOpen,
  setGradedRubricOpen,
  grade,
  setInferredGrade,
  rubricArray,
  totalPoints,
  userSelected,
}) {
  const [totalGrade, setTotalGrade] = useState(0);

  useEffect(() => {
    var gradeCount = 0;
    for (let i = 0; i < grade.length; i++) {
      grade[i].inferredScore != null
        ? (gradeCount += grade[i].inferredScore)
        : (gradeCount += grade[i].score);
    }
    console.log(gradeCount);
    setTotalGrade(gradeCount);
  }, [gradedRubricOpen]);

  return (
    <div>
      {gradedRubricOpen ? (
        <div className="relative z-40" onBlur={setGradedRubricOpen}>
          <div className="fixed inset-0 bg-black bg-opacity-30 transition-opacity" />
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end sm:items-center justify-center min-h-full text-center sm:p-0">
              <div className="absolute top-4 z-10 w-11/12 mx-auto m-10 p-4 bg-white rounded shadow-md">
                <div className="px-2">
                  <div className="">
                    <div className="sm:flex-auto">
                      <div className="flex flex-row px-4 justify-between sm:flex sm:items-center">
                        <div className="sm:flex-auto">
                          <div className="flex flex-row">
                            <div className="h-6 w-2 -ml-4 mr-4 bg-rose-400 rounded" />
                            <h1 className="text-lg font-semibold leading-6 text-gray-900">
                              Final Grade
                            </h1>
                          </div>
                          <p className="mt-2 text-sm text-left text-gray-700">
                            The submissions final score after all grading has
                            been finished.
                          </p>
                        </div>
                        {/* <div className="mt-4 -mr-4 sm:mt-0">
                              <button
                                type="button"
                                className="flex flex-row rounded bg-sky-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                              >
                                Edit
                                <BiEditAlt className="ml-2 text-xl" />
                              </button>
                            </div> */}
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
                                  {rubricArray.map((criterion, rowIndex) => (
                                    <>
                                      <tr
                                        key={rowIndex}
                                        className="flex divide-x text-left divide-gray-300"
                                      >
                                        <td
                                          key={rowIndex + 1}
                                          className="flex-none w-28 lg:w-32 py-4 pl-2 pr-4 text-sm font-medium text-gray-900"
                                        >
                                          {criterion.name}
                                        </td>
                                        {criterion.levels
                                          ? criterion.levels.map(
                                              (level, index) => (
                                                <td
                                                  key={index + 2}
                                                  className={classNames(
                                                    grade[rowIndex].score ===
                                                      level.score &&
                                                      grade[rowIndex]
                                                        .inferredScore === null
                                                      ? "bg-sky-100"
                                                      : grade[rowIndex].score !=
                                                          level.score &&
                                                        grade[rowIndex]
                                                          .inferredScore ===
                                                          level.score
                                                      ? "bg-sky-100"
                                                      : "",
                                                    "w-full p-4 text-sm text-gray-500"
                                                  )}
                                                >
                                                  <div
                                                    className={classNames(
                                                      grade[rowIndex].score ===
                                                        level.score &&
                                                        grade[rowIndex]
                                                          .inferredScore ===
                                                          null
                                                        ? "bg-white"
                                                        : grade[rowIndex]
                                                            .score !=
                                                            level.score &&
                                                          grade[rowIndex]
                                                            .inferredScore ===
                                                            level.score
                                                        ? "bg-white"
                                                        : "bg-sky-100",
                                                      "rounded-full w-16 text-center"
                                                    )}
                                                  >
                                                    + {level.score}
                                                  </div>
                                                  <br />
                                                  <hr className="text-gray-700 mt-2 w-10" />
                                                  <br />
                                                  {level.description}
                                                </td>
                                              )
                                            )
                                          : null}
                                        <td
                                          key={rowIndex + 5}
                                          className="flex-none w-14 py-4 text-center text-sm text-gray-900 font-bold sm:pr-0"
                                        >
                                          { grade[rowIndex].inferredScore != null ? grade[rowIndex].inferredScore : grade[rowIndex].score }
                                        </td>
                                      </tr>
                                      <tr key={rowIndex + 6} className="flex divide-x divide-gray-300 text-sm text-left text-gray-500 ring-2 ring-sky-100">
                                        <td key={rowIndex + 7} className="flex-none w-28 lg:w-32 py-4 pl-2 pr-4 text-sm text-left font-medium text-gray-900 bg-sky-100">
                                          Assessment
                                        </td>
                                        <td key={rowIndex + 8} className="p-2">
                                          {grade[rowIndex].assessment}
                                        </td>
                                      </tr>
                                    </>
                                  ))}
                                  <tr key={809809} className="flex px-4 py-1 text-right text-gray-900">
                                    <td key={3492834} className="w-full pt-2">
                                      <div className="float-right text-gray-700">
                                        Total Points
                                        <p className="float-right w-24 ml-4 text-center bg-sky-100 text-gray-500 rounded-full">
                                          {totalGrade} / 300
                                        </p>
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div className="mt-4 px-6 text-right text-gray-900">
                            <div
                              onClick={() => {
                                setGradedRubricOpen(false);
                                setOpen(false);
                                userSelected ? setInferredGrade(true) : null;
                              }}
                              className="float-right h-10 w-40 ml-2 p-2 text-center text-white bg-sky-700 hover:bg-sky-600 shadow rounded cursor-pointer"
                            >
                              Submit
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
