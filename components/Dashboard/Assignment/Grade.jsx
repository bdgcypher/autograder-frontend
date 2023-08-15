/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { MdCheckBoxOutlineBlank, MdCheckBox, MdEditNote } from "react-icons/md";
import { BsCheckLg, BsChevronUp } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
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
  inferredGrade,
  setInferredGrade,
  setGradedRubricOpen,
  userSelected,
  setUserSelected,
}) {
  const [criterionId, setCriterionId] = useState(0);
  const [selected, setSelected] = useState(rubricArray[criterionId].levels);
  const [aiSelected, setAiSelected] = useState("");
  const [aiInferred, setAiInferred] = useState("");
  const [assessment, setAssessment] = useState("");
  const [editing, setEditing] = useState(false);

  // Set a variable to represent the grade the AI has selected for the currently viewed criterion
  const setAiSelection = () => {
    for (let i = 0; i < currentCriterion.length; i++) {
      let aiSelection = "";
      grade[criterionId].score === currentCriterion[i].score
        ? ((aiSelection = currentCriterion[i].score),
          setAiSelected(aiSelection))
        : null;
    }
  };

  // Set a variable to represent the grade the AI inferred from previous faculty override for the currently viewed criterion
  const setAiInferredSelection = () => {
    for (let i = 0; i < currentCriterion.length; i++) {
      let aiInferredSelection = "";
      grade[criterionId].inferredScore === currentCriterion[i].score
        ? ((aiInferredSelection = currentCriterion[i].score),
          setAiInferred(aiInferredSelection))
        : null;
    }
  };

  // Toggle editing the assessment for a given grade when the user clicks edit
  const handleToggleEdit = () => {
    setEditing(!editing);
  };

  // Adjust the height of the assessment text box to match the size of its contents
  useEffect(() => {
    const textarea = document.getElementById("assignmentTextarea");
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  });

  // Update the assessment for a given grade after the user finishes editing
  const handleAssessmentChange = (e) => {
    setAssessment(e.target.value);
  };

  // Outline the Ai selected score for the first criterion and set the assessment to match
  // Outline the AI inferred grade if a faculty has made an override
  useEffect(() => {
    setAiSelection();
    setAssessment(grade[criterionId].assessment);

    setAiInferredSelection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Rotate a section's arrow and expand the section to full size
  const expandSection = (id) => {
    const section = document.getElementById(id);
    const arrow = document.getElementById(`${id}Arrow`);

    arrow.classList.toggle("rotate-180");
    section.classList.toggle("h-auto");
    section.classList.toggle("h-10");
    section.classList.toggle("overflow-hidden");
  };

  useEffect(() => {
    setAiSelection();
    setAiInferredSelection();
  });

  // Criterion component

  return (
    <div className="h-full">
      <hr className="my-10 mx-auto w-5/6 text-gray-300 bg-gray-300" />
      <div
        id="criteria"
        className="mt-10 h-auto transition-all ease-in-out duration-100"
      >
        <div className="flex flex-row mb-4 justify-between">
          <h1 className="text-gray-900 font-bold text-xl">Criteria:</h1>
          <BsChevronUp
            id="criteriaArrow"
            className="h-5 w-5 text-gray-900 transition-all ease-in-out duration-300 cursor-pointer"
            aria-hidden="true"
            onClick={() => {
              expandSection("criteria");
            }}
          />
        </div>

        {/* Dropdown for selecting the viewed criterion ratings */}

        <CriterionDropdown
          rubricArray={rubricArray}
          grade={grade}
          criterionId={criterionId}
          setCurrentCriterion={setCurrentCriterion}
          setCriterionId={setCriterionId}
          setAssessment={setAssessment}
        />

        {/* Criterion ratings and selected grade */}

        <RadioGroup value={selected} onChange={setSelected} className="mt-10">
          <div className="space-y-3">
            <legend className="mb-10">
              <div className="flex flex-col">
                {inferredGrade ? (
                  <>
                    {grade[criterionId].inferredScore != null ? (
                      <>
                        <div className="flex flex-row">
                          <div className="h-6 w-2 bg-sky-700 rounded" />
                          <p className="flex flex-row ml-2 text-md font-semibold leading-6 text-gray-700">
                            {" "}
                            -{" "}
                            <FaRobot className="mx-2 my-auto text-lg font-semibold leading-6 text-gray-700" />
                            AI original grade
                            <br />
                          </p>
                        </div>
                        <div className="flex flex-row mt-4">
                          <div className="h-6 w-2 bg-green-400 rounded" />
                          <p className="flex flex-row ml-2 text-md font-semibold leading-6 text-gray-700">
                            {" "}
                            -{" "}
                            <FaRobot className="mx-2 my-auto text-lg font-semibold leading-6 text-gray-700" />
                            AI inferred grade
                          </p>
                        </div>
                      </>
                    ) : (
                      <div className="flex flex-row">
                        <div className="h-6 w-2 bg-sky-700 rounded" />
                        <p className="flex flex-row ml-2 text-md font-semibold leading-6 text-gray-700">
                          {" "}
                          -{" "}
                          <FaRobot className="mx-2 my-auto text-lg font-semibold leading-6 text-gray-700" />
                          AI selected grade
                          <br />
                        </p>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="flex flex-row">
                    <div className="h-6 w-2 bg-sky-700 rounded" />
                    <p className="flex flex-row ml-2 text-md font-semibold leading-6 text-gray-700">
                      {" "}
                      -{" "}
                      <FaRobot className="mx-2 my-auto text-lg font-semibold leading-6 text-gray-700" />
                      AI selected grade
                    </p>
                  </div>
                )}
                <div
                  className={classNames(
                    userSelected ? "" : "hidden",
                    "mt-4 flex flex-row"
                  )}
                >
                  <div className="h-6 w-2 bg-rose-400 rounded" />
                  <p className="flex flex-row ml-2 text-md font-semibold leading-6 text-gray-700">
                    {" "}
                    -{" "}
                    <FaUserGraduate className="mx-2 my-auto text-lg font-semibold leading-6 text-gray-700" />
                    Faculty selected grade
                  </p>
                </div>
              </div>
            </legend>
            {/* Iterate through the selcted criterion array and create a card for each level of the given criterion with its description and score */}
            {currentCriterion.map((rating) => (
              <RadioGroup.Option
                key={rating.name}
                value={rating}
                onClick={setUserSelected}
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
                        <div className="flex flex-col h-full">
                          {/* Show a blank checkbox if not selected */}
                          <MdCheckBoxOutlineBlank
                            className={classNames(
                              checked |
                                (aiSelected === rating.score) |
                                (aiInferred === rating.score) |
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
                          {/* Show a green checkbox if the AI inferred this score after faculty override */}
                          <MdCheckBox
                            className={classNames(
                              aiInferred === rating.score && inferredGrade && grade[criterionId].inferredScore != null ? "" : "hidden",
                              "h-5 w-5 text-green-400"
                            )}
                            aria-hidden="true"
                          />
                          {/* Show a rose checkbox if the Faculty selected this score */}
                          <MdCheckBox
                            className={classNames(
                              checked ? "" : "hidden",
                              "h-5 w-5 text-rose-400"
                            )}
                            aria-hidden="true"
                          />
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
                    {/* Outline in green if the Ai inferred this score from previous faculty override */}
                    <span
                      className={classNames(
                        aiInferred === rating.score && inferredGrade && grade[criterionId].inferredScore != null ? "" : "hidden",
                        "pointer-events-none absolute -inset-px rounded border-2 border-green-400"
                      )}
                      aria-hidden="true"
                    />
                    {/* Outline in rose if the Faculty selected this score */}
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
        {/* Assessment for why the selected score was chosen */}
      </div>
      <div className="py-10">
        <div
          id="assessment"
          className="h-full transition-all ease-in-out duration-100"
        >
          <div className="flex flex-row mb-4 justify-between">
            <h1 className="text-gray-900 font-bold text-xl">Assessment:</h1>
            <BsChevronUp
              id="assessmentArrow"
              className="h-5 w-5 text-gray-900 transition-all ease-in-out duration-300"
              aria-hidden="true"
              onClick={() => {
                expandSection("assessment");
              }}
            />
          </div>
          <div>
            {editing ? (
              <>
                <textarea
                  id="assignmentTextarea"
                  className="w-full min-h-[1.5rem] h-auto resize-none text-gray-700 mb-4 rounded"
                  value={assessment}
                  onChange={handleAssessmentChange}
                  onBlur={handleToggleEdit}
                />
                <div className="mt-4 -mr-4 sm:mt-0">
                  <button
                    onClick={handleToggleEdit}
                    onMouseEnter={() => {
                      setAssessment(assessment);
                    }}
                    type="button"
                    className="flex flex-row p-2 text-center font-semibold hover:font-regular bg-sky-700 hover:bg-sky-600 shadow rounded cursor-pointer"
                  >
                    Save
                    <BsCheckLg className="ml-2 text-xl" />
                  </button>
                </div>
              </>
            ) : (
              <>
                <p className="w-full mb-4 p-2 text-gray-700 rounded">
                  {assessment}
                </p>
                <div className="mt-4 -mr-4 sm:mt-0">
                  <button
                    onClick={handleToggleEdit}
                    type="button"
                    className="flex flex-row p-2 text-center text-white font-semibold hover:font-regular bg-sky-700 hover:bg-sky-600 shadow rounded cursor-pointer"
                  >
                    Edit
                    <BiEditAlt className="ml-2 text-xl" />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
        <hr className="my-10 mx-auto w-5/6 text-gray-300 bg-gray-300" />
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
            onClick={() => {
              setGradedRubricOpen(true);
              setOpen(false);
              // userSelected ? setInferredGrade(true) : null;
            }}
            className="h-10 w-full ml-2 p-2 text-center text-white bg-sky-700 hover:bg-sky-600 shadow rounded cursor-pointer"
          >
            Next
          </div>
        </div>
      </div>
    </div>
  );
}
