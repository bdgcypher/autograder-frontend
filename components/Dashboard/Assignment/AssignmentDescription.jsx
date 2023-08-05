/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Fragment } from "react";
import { Menu, Popover, Transition, Listbox } from "@headlessui/react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoMdCheckmark } from "react-icons/io";
import { BiDotsVerticalRounded, BiEditAlt } from "react-icons/bi";
import { LiaClipboardListSolid } from "react-icons/lia";

export default function AssignmentDescription({ assignment }) {

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <form action="#" className="relative mt-4">
        <div className="mt-4">
          <h1 className="sr-only">Assignments</h1>
          <ul role="list" className="space-y-4">
            {assignment.map((assignment) => (
              <li
                key={assignment.id}
                className="bg-white px-4 py-6 shadow sm:rounded-lg sm:p-6"
              >
                <article aria-labelledby={"assignment-title-" + assignment.id}>
                  <div>
                    <div className="flex space-x-3">
                      <div className="flex-shrink-0">
                        <div className="h-6 w-2 rounded bg-rose-400" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-lg text-gray-900 font-bold">
                          {assignment.title}
                        </p>
                        <div className="flex space-x-6">
                          <span className="inline-flex items-center text-sm">
                            <button
                              type="button"
                              className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                            >
                              <span className="flex flex-row font-medium text-gray-700">
                                <LiaClipboardListSolid className="ml-2 font-bold text-gray-700 text-xl" />
                                - {assignment.totalPoints} Points
                              </span>
                              <span className="sr-only">likes</span>
                            </button>
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                        <button
                          type="button"
                          className="flex flex-row rounded-md bg-sky-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                        >
                          Edit
                          <BiEditAlt className="ml-2 text-xl" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-4 border border-gray-300 rounded divide-y divide-gray-300">
                      <div
                        className="mt-2 p-4 pb-20 space-y-4 text-sm text-gray-700"
                        dangerouslySetInnerHTML={{
                          __html: assignment.body,
                        }}
                      />
                    </div>
                  </div>
                  <div className="mt-6 flex justify-between space-x-8">
                    <div className="hidden text-sm p-2 rounded text-gray-600 border border-gray-600 hover:text-gray-100 hover:bg-sky-700">
                      <span className="inline-flex items-center text-sm">
                        <button type="button" className="inline-flex space-x-2">
                          <span className="font-medium">Save</span>
                        </button>
                      </span>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </form>
    </>
  );
}
