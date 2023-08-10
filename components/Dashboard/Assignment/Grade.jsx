/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { FaRobot, FaUserGraduate } from "react-icons/fa";
import CriterionDropdown from "./CriterionDropdown";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Grade({
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

  const setAiSelection = () => {
    for (let i = 0; i < currentCriterion.length; i++) {
      let aiSelection = "";
      console.log(
        grade[criterionId].name,
        grade[criterionId].score,
        currentCriterion[i].score
      );
      grade[criterionId].score === currentCriterion[i].score
        ? ((aiSelection = currentCriterion[i].score),
          setAiSelected(aiSelection))
        : null;
    }
  };

  const setUserSelection = (e) => {
    setUserSelected(e);
  };

  useEffect(() => {
    setAiSelection();
  });

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
                    <FaRobot className="mx-2 text-2xl font-semibold leading-6 text-gray-700" />
                    AI selected grade
                  </p>
                </div>
                <div className="mt-4 flex flex-row">
                  <div className="h-6 w-2 bg-rose-400 rounded" />
                  <p className="flex flex-row ml-2 text-md font-semibold leading-6 text-gray-700">
                    {" "}
                    -{" "}
                    <FaUserGraduate className="mx-2 text-2xl font-semibold leading-6 text-gray-700" />
                    User selected grade
                  </p>
                </div>
              </div>
            </legend>
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
                        <div className="">
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
                          <MdCheckBox
                            className={classNames(
                              aiSelected === rating.score ? "" : "hidden",
                              "h-5 w-5 text-sky-700"
                            )}
                            aria-hidden="true"
                          />
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
                    <span
                      className={classNames(
                        aiSelected === rating.score ? "" : "hidden",
                        "pointer-events-none absolute -inset-px rounded border-2 border-sky-700"
                      )}
                      aria-hidden="true"
                    />
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
      </div>
    </>
  );
}