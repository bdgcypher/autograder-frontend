/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Fragment } from "react";
import { Menu, Popover, Transition, Listbox } from "@headlessui/react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoMdCheckmark, IoIosArrowDown } from "react-icons/io";
import { BiDotsVerticalRounded, BiEditAlt } from "react-icons/bi";
import { LiaClipboardListSolid } from "react-icons/lia";
import AssignmentDescription from "./AssignmentDescription";
import Submissions from "./Submissions";
import Rubric from "./Rubric";
import ViewSubmission from "./ViewSubmission";

export default function Assignment({ dataArray }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [open, setOpen] = useState(false);
  const [grade, setGrade] = useState([{}]);
  const [submission, setSubmission] = useState("");
  const [currentCriterion, setCurrentCriterion] = useState([{}]);

  return (
    <>
      {/* Assignment container */}

      <main className="md:col-span-2 lg:col-span-9 xl:col-span-10">
        <div className="flex justify-between px-4 sm:px-0">
          <div className="text-xl md:text-3xl text-gray-900 font-bold">Assignment 1</div>
          <div className="flex p-1 md:p-2 text-sm md:text-md font-bold text-sky-700 rounded">
            Published
            <IoMdCheckmark className="ml-2 mt-0 md:mt-1 p-[2px] bg-sky-700 rounded-full text-sm md:text-lg text-slate-50" />
            <div className="flex flex-shrink-0 self-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="relative -m-2 ml-4 flex items-center rounded-full p-2 text-gray-700 hover:text-sky-700">
                    <span className="absolute -inset-1" />
                    <span className="sr-only">Open options</span>
                    <BiDotsVerticalRounded
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "flex px-4 py-2 text-sm"
                            )}
                          >
                            <BiEditAlt
                              className="mr-3 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <span>Edit</span>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "flex px-4 py-2 text-sm"
                            )}
                          >
                            <RiDeleteBin5Line
                              className="mr-3 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <span>Delete</span>
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>

        {/* Description */}

        <AssignmentDescription assignment={dataArray.assignment} />

        {/* Rubric dropdown */}

        <Rubric rubricArray={dataArray.rubric} />

        {/* Submissions */}

        <Submissions
          setOpen={setOpen}
          setSubmission={setSubmission}
          submissions={dataArray.submissions}
          setGrade={setGrade}
          rubricArray={dataArray.rubric}
          setCurrentCriterion={setCurrentCriterion}
        />

        {/* View Submission popup */}

        <ViewSubmission
          open={open}
          setOpen={setOpen}
          submissions={dataArray.submissions}
          submission={submission}
          setSubmission={setSubmission}
          grade={grade}
          setGrade={setGrade}
          rubricArray={dataArray.rubric}
          currentCriterion={currentCriterion}
          setCurrentCriterion={setCurrentCriterion}
        />
      </main>
    </>
  );
}
