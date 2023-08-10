/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { MdCheckBoxOutlineBlank, MdCheckBox, MdEditNote } from "react-icons/md";
import { FaRobot, FaUserGraduate } from "react-icons/fa";
import CriterionDropdown from "./CriterionDropdown";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Grade({
  setOpen,
  grade,
  setGrade,
  rubricArray,
  currentCriterion,
  setCurrentCriterion,
}) {
  const [criterionId, setCriterionId] = useState(0);
  const [selected, setSelected] = useState(rubricArray[criterionId].levels);
  const [aiSelected, setAiSelected] = useState("");
  const [userSelected, setUserSelected] = useState("");

  const setUserSelection = (e) => {
    setUserSelected(e);
  };

  // Automatically set a variable to represent the grade the AI has selected for the currently viewed criterion

  const setAiSelection = () => {
    for (let i = 0; i < currentCriterion.length; i++) {
      let aiSelection = "";
      // console.log(
      //   // grade[criterionId].name,
      //   // grade[criterionId].score,
      //   // currentCriterion[i].score
      // );
      grade[criterionId].score === currentCriterion[i].score
        ? ((aiSelection = currentCriterion[i].score),
          setAiSelected(aiSelection))
        : null;
    }
  };

  useEffect(() => {
    setAiSelection();
  });

  // Criterion component

  return (
    <>
      <div className="mt-10">
        <h1 className="text-gray-900 font-bold text-xl">Criteria:</h1>

        {/* Dropdown for selecting the viewed criterion ratings */}

        <CriterionDropdown
          rubricArray={rubricArray}
          criterionId={criterionId}
          currentCriterion={currentCriterion}
          setCurrentCriterion={setCurrentCriterion}
          setCriterionId={setCriterionId}
        />

        {/* Criterion ratings and selected grade */}

        <RadioGroup value={selected} onChange={setSelected} className="mt-10">
          <div className="space-y-3">
            <legend className="mb-10">
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <div className="h-6 w-2 bg-sky-700 rounded" />
                  <p className="flex flex-row ml-2 text-md font-semibold leading-6 text-gray-700">
                    {" "}
                    -{" "}
                    <FaRobot className="mx-2 my-auto text-lg font-semibold leading-6 text-gray-700" />
                    AI selected grade
                  </p>
                </div>
                <div className="mt-4 flex flex-row">
                  <div className="h-6 w-2 bg-rose-400 rounded" />
                  <p className="flex flex-row ml-2 text-md font-semibold leading-6 text-gray-700">
                    {" "}
                    -{" "}
                    <FaUserGraduate className="mx-2 my-auto text-lg font-semibold leading-6 text-gray-700" />
                    User selected grade
                  </p>
                </div>
              </div>
            </legend>
            {/* Iterate through the selcted criterion array and create a card for each level of the given criterion with its description and score */}
            {currentCriterion.map((rating) => (
              <RadioGroup.Option
                key={rating.name}
                value={rating}
                className={({ active }) =>
                  classNames(
                    active ? "" : "border border-gray-300",
                    "relative block cursor-pointer rounded bg-white px-4 py-4 shadow focus:outline-none sm:flex sm:justify-between hover:shadow-lg"
                  )
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex flex-row w-full justify-between">
                      <div className="flex text-sm w-full">
                        <div className="flex flex-col w-full">
                          <div className="text-gray-500">
                            <p className="">{rating.description}</p>
                          </div>
                          <div className="text-gray-500">
                            <p className="w-14 mt-4 text-center font-sm text-gray-700 bg-sky-100 rounded-full">
                              + {rating.score}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col justify-between h-full">
                          {/* Show a blank checkbox if not selected */}
                          <MdCheckBoxOutlineBlank
                            className={classNames(
                              checked |
                                (aiSelected === rating.score) |
                                (userSelected === rating.score)
                                ? "hidden"
                                : "",
                              "h-5 w-5 text-gray-300"
                            )}
                            aria-hidden="true"
                          />
                          {/* Show a blue checkbox if the AI selected this score */}
                          <MdCheckBox
                            className={classNames(
                              aiSelected === rating.score ? "" : "hidden",
                              "h-5 w-5 text-sky-700"
                            )}
                            aria-hidden="true"
                          />
                          {/* Show a rose checkbox if the User selected this score */}
                          <MdCheckBox
                            className={classNames(
                              checked ? "" : "hidden",
                              "h-5 w-5 text-rose-400"
                            )}
                            aria-hidden="true"
                          />
                          {/* Show feedback icon with assessment if the AI selected this score */}
                          <div className="group">
                            <MdEditNote
                              className={classNames(
                                aiSelected === rating.score
                                  ? ""
                                  : "hidden",
                                "h-6 w-6 text-gray-500"
                              )}
                              aria-hidden="true"
                            />
                            <div id="assessment" className="hidden group-hover:block absolute z-40 w-11/12 bottom-10 -left-2 p-4 bg-white border border-gray-300 shadow rounded">
                              <h3 className="text-gray-900 text-lg font-semibold">Assessment:</h3>
                              <p className="text-gray-700">{ grade[criterionId].assessment }</p>
                            </div>
                          </div>
                          {/* Show feedback icon with blank text area if the User selected this score */}
                          <div className="group">
                            <MdEditNote
                              className={classNames(
                                checked
                                  ? ""
                                  : "hidden",
                                "h-6 w-6 text-gray-500"
                              )}
                              aria-hidden="true"
                            />
                            <div id="assessment" className="hidden group-hover:block absolute z-40 w-11/12 bottom-10 -left-2 p-4 bg-white border border-gray-300 shadow rounded">
                              <h3 className="text-gray-900 text-lg font-semibold">Assessment:</h3>
                              <textarea placeholder="give feedback..." className="w-full text-gray-700 rounded"></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Outline in blue if the Ai selected this score */}
                    <span
                      className={classNames(
                        aiSelected === rating.score ? "" : "hidden",
                        "pointer-events-none absolute -inset-px rounded border-2 border-sky-700"
                      )}
                      aria-hidden="true"
                    />
                    {/* Outline in rose if the User selected this score */}
                    <span
                      className={classNames(
                        checked ? "" : "hidden",
                        "pointer-events-none absolute -inset-px rounded border-2 border-rose-400"
                      )}
                      aria-hidden="true"
                    />
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
        {/* Submit or cancel the grading */}
        <div className="flex flex-row w-full mt-10">
          <div
            onClick={() => {
              setOpen(false);
            }}
            className="h-10 w-32 p-2 text-center font-semibold hover:font-regular text-sky-700 hover:text-white border border-sky-700 bg-white hover:bg-sky-600 shadow rounded cursor-pointer"
          >
            Cancel
          </div>
          <div
            onClick={() => {}}
            className="h-10 w-full ml-2 p-2 text-center bg-sky-700 hover:bg-sky-600 shadow rounded cursor-pointer"
          >
            Submit
          </div>
        </div>
      </div>
    </>
  );
}
