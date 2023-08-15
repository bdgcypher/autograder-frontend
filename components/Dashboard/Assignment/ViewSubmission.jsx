/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, Fragment } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { Dialog, Transition } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";
import { PiCalendarCheckDuotone } from "react-icons/pi";
import SubmissionDropdown from "./SubmissionDropdown";
import Grade from "./Grade";

export default function ViewSubmission({
  open,
  setOpen,
  submissions,
  submission,
  setSubmission,
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
  return (
    <div>
      {open ? (
        <div
          className="relative z-40"
          onBlur={setOpen}
        >
          <div className="fixed inset-0 bg-black bg-opacity-30 transition-opacity" />
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
              <div className="relative h-screen-90 w-full md:w-11/12 lg:w-5/6 my-0 md:my-10 bg-white rounded text-left shadow-xl transform transition-all">
                <div className="relative py-14 mx-auto rounded bg-white">
                  <div className="flex flex-row">
                    <div className="absolute top-6 left-10">
                      <div className="flex flex-col md:flex-row">
                        <div className="h-6 w-2 -ml-4 mr-4 bg-rose-400 rounded" />
                        <h1 className="-mt-6 md:-mt-0 mb-0 text-lg font-semibold leading-6 text-gray-900">
                          Assignment 1
                        </h1>
                        <h1 className="mb-8 text-lg font-regular leading-6 text-gray-900">
                          - {submission.name}
                        </h1>
                      </div>
                    </div>
                    <IoMdClose
                      onClick={() => setOpen(false)}
                      className="absolute top-6 right-6 text-3xl text-rose-400 cursor-pointer"
                    />
                  </div>
                  <hr className="mt-6 border-gray-200" />
                  <div className="flex flex-col px-0">
                    <main className="">
                      <div className="lg:pr-96">
                        <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
                          {/* Main area */}

                          {/* View the selected submission */}

                          <SyntaxHighlighter
                            language="python"
                            style={docco}
                            className="rounded"
                          >
                            {submission.submission}
                          </SyntaxHighlighter>
                        </div>
                      </div>
                    </main>

                    {/* Secondary column (hidden on smaller screens) */}

                    <aside className="fixed mt-20 inset-y-0 right-0 hidden h-full w-96 border-l border-gray-200 px-4 py-6 lg:block overflow-y-scroll">
                      {/* Select which submission you are viewing with the dropdown */}
                      <SubmissionDropdown
                        submission={submission}
                        setSubmission={setSubmission}
                        submissions={submissions}
                        setGrade={setGrade}
                      />
                      <div className="flex flex-row mt-4 text-sm text-gray-900">
                        <div className="mr-2 p-2 bg-sky-100 rounded-full">
                          <PiCalendarCheckDuotone className="text-sky-900 text-xl bg-sky-100" />
                        </div>
                        <p className="mt-2 font-semibold">
                          Submitted {submission.submittedOn}
                        </p>
                      </div>

                      {/* Grade of submission */}
                      <Grade
                        setOpen={setOpen}
                        grade={grade}
                        setGrade={setGrade}
                        rubricArray={rubricArray}
                        currentCriterion={currentCriterion}
                        setCurrentCriterion={setCurrentCriterion}
                        inferredGrade={inferredGrade}
                        setInferredGrade={setInferredGrade}
                        setGradedRubricOpen={setGradedRubricOpen}
                        userSelected={userSelected}
                        setUserSelected={setUserSelected}
                      />
                    </aside>
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
