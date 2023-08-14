/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Fragment } from "react";
import { Transition, Listbox } from "@headlessui/react";
import {
  CalendarIcon,
  TagIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import { BsCheckLg } from "react-icons/bs";

export default function CreateDescription() {
  const assignees = [
    { name: "Unassigned", value: null },
    {
      name: "Wade Cooper",
      value: "wade-cooper",
      avatar:
        "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Maddie Bacins",
      value: "Maddie-Bacins",
      avatar: "",
    },
    // More items...
  ];
  const labels = [
    { name: "Unlabelled", value: null },
    { name: "English 1010", value: "english-1010" },
    { name: "English 2040", value: "english-2040" },
    // More items...
  ];
  const dueDates = [
    { name: "No due date", value: null },
    { name: "Today", value: "today" },
    { name: "Tomorrow", value: "tomorrow" },
    { name: "Next Week", value: "next-week" },
    // More items...
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [assigned, setAssigned] = useState(assignees[0]);
  const [labelled, setLabelled] = useState(labels[0]);
  const [dated, setDated] = useState(dueDates[0]);

  return (
    <>
      <main className="w-full">
        <form action="#" className="relative mt-4 bg-white">
          <div className="overflow-hidden rounded-lg shadow-md outline-none focus:ring-none">
            <div className="flex flex-row px-4 justify-between sm:flex sm:items-center">
              <div className="p-6 sm:flex-auto">
                <div className="flex flex-row">
                  <div className="h-6 w-2 -ml-4 mr-4 bg-rose-400 rounded" />
                  <h1 className="text-lg font-semibold leading-6 text-gray-900">
                    Description
                  </h1>
                </div>
                <p className="mt-2 text-sm text-gray-700">
                  Briefly summarize your assignment.
                </p>
              </div>
            </div>
            <div className="px-6">
              <label htmlFor="title" className="sr-only">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="block w-full border-0 pt-2.5 text-lg font-medium text-gray-900 placeholder:text-gray-400 focus:ring-0"
                placeholder="Title"
                defaultValue={""}
              />
              <label htmlFor="description" className="sr-only">
                Description
              </label>
              <textarea
                rows={4}
                name="description"
                id="description"
                className="block w-full resize-none border-0 py-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Write a description..."
                defaultValue={""}
              />
            </div>

            {/* Spacer element to match the height of the toolbar */}
            <div className="-mt-2" aria-hidden="true">
              <div className="py-2">
                <div className="h-9" />
              </div>
              <div className="h-px" />
              <div className="py-2">
                <div className="py-px">
                  <div className="h-9" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-x-px bottom-0 bg-white text-gray-900">
            {/* Actions: These are just examples to demonstrate the concept, replace/wire these up however makes sense for your project. */}
            <div className="flex flex-nowrap justify-end space-x-2 px-2 py-2 sm:px-3">
              <Listbox
                as="div"
                value={assigned}
                onChange={setAssigned}
                className="flex-shrink-0"
              >
                {({ open }) => (
                  <>
                    <Listbox.Label className="sr-only">Assign</Listbox.Label>
                    <div className="relative">
                      <Listbox.Button className="relative inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 sm:px-3">
                        {assigned.value === null ? (
                          <UserCircleIcon
                            className="h-5 w-5 flex-shrink-0 text-gray-300 sm:-ml-1"
                            aria-hidden="true"
                          />
                        ) : (
                          <img
                            src={assigned.avatar}
                            alt=""
                            className="h-5 w-5 flex-shrink-0 rounded-full"
                          />
                        )}

                        <span
                          className={classNames(
                            assigned.value === null ? "" : "text-gray-900",
                            "hidden truncate sm:ml-2 sm:block"
                          )}
                        >
                          {assigned.value === null ? "Assign" : assigned.name}
                        </span>
                      </Listbox.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute right-0 z-10 mt-1 max-h-56 w-52 overflow-auto rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {assignees.map((assignee) => (
                            <Listbox.Option
                              key={assignee.value}
                              className={({ active }) =>
                                classNames(
                                  active ? "bg-gray-100" : "bg-white",
                                  "relative cursor-default select-none px-3 py-2"
                                )
                              }
                              value={assignee}
                            >
                              <div className="flex items-center">
                                {assignee.avatar ? (
                                  <img
                                    src={assignee.avatar}
                                    alt=""
                                    className="h-5 w-5 flex-shrink-0 rounded-full"
                                  />
                                ) : (
                                  <UserCircleIcon
                                    className="h-5 w-5 flex-shrink-0 text-gray-400"
                                    aria-hidden="true"
                                  />
                                )}

                                <span className="ml-3 block truncate font-medium">
                                  {assignee.name}
                                </span>
                              </div>
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </>
                )}
              </Listbox>

              <Listbox
                as="div"
                value={labelled}
                onChange={setLabelled}
                className="flex-shrink-0"
              >
                {({ open }) => (
                  <>
                    <Listbox.Label className="sr-only">
                      Add a label
                    </Listbox.Label>
                    <div className="relative">
                      <Listbox.Button className="relative inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 sm:px-3">
                        <TagIcon
                          className={classNames(
                            labelled.value === null
                              ? "text-gray-300"
                              : "text-gray-500",
                            "h-5 w-5 flex-shrink-0 sm:-ml-1"
                          )}
                          aria-hidden="true"
                        />
                        <span
                          className={classNames(
                            labelled.value === null ? "" : "text-gray-900",
                            "hidden truncate sm:ml-2 sm:block"
                          )}
                        >
                          {labelled.value === null ? "Label" : labelled.name}
                        </span>
                      </Listbox.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute right-0 z-10 mt-1 max-h-56 w-52 overflow-auto rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {labels.map((label) => (
                            <Listbox.Option
                              key={label.value}
                              className={({ active }) =>
                                classNames(
                                  active ? "bg-gray-100" : "bg-white",
                                  "relative cursor-default select-none px-3 py-2"
                                )
                              }
                              value={label}
                            >
                              <div className="flex items-center">
                                <span className="block truncate font-medium">
                                  {label.name}
                                </span>
                              </div>
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </>
                )}
              </Listbox>

              <Listbox
                as="div"
                value={dated}
                onChange={setDated}
                className="flex-shrink-0"
              >
                {({ open }) => (
                  <>
                    <Listbox.Label className="sr-only">
                      Add a due date
                    </Listbox.Label>
                    <div className="relative">
                      <Listbox.Button className="relative inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 sm:px-3">
                        <CalendarIcon
                          className={classNames(
                            dated.value === null
                              ? "text-gray-300"
                              : "text-gray-500",
                            "h-5 w-5 flex-shrink-0 sm:-ml-1"
                          )}
                          aria-hidden="true"
                        />
                        <span
                          className={classNames(
                            dated.value === null ? "" : "text-gray-900",
                            "hidden truncate sm:ml-2 sm:block"
                          )}
                        >
                          {dated.value === null ? "Due date" : dated.name}
                        </span>
                      </Listbox.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute right-0 z-10 mt-1 max-h-56 w-52 overflow-auto rounded-lg bg-white py-3 text-base shadow ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {dueDates.map((dueDate) => (
                            <Listbox.Option
                              key={dueDate.value}
                              className={({ active }) =>
                                classNames(
                                  active ? "bg-gray-100" : "bg-white",
                                  "relative cursor-default select-none px-3 py-2"
                                )
                              }
                              value={dueDate}
                            >
                              <div className="flex items-center">
                                <span className="block truncate font-medium">
                                  {dueDate.name}
                                </span>
                              </div>
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </>
                )}
              </Listbox>
            </div>
            <div className="flex items-center justify-between space-x-3 border-t border-gray-200 px-2 py-2 sm:px-3">
              <div className="flex text-gray-500">
                <label htmlFor="points">Possible Points - </label>
                <input
                  className="rounded h-6 w-14 ml-2 boder-gray-500"
                  type="text"
                  id="points"
                  name="points"
                  defaultValue=""
                  required
                />
              </div>
              {/* <div className="flex-shrink-0">
                <button className="inline-flex items-center rounded bg-sky-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                  Save <BsCheckLg className="ml-2 text-xl" />
                </button>
              </div> */}
            </div>
          </div>
        </form>
      </main>
    </>
  );
}
