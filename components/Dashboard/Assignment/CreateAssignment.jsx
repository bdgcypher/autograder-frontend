/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Fragment } from "react";
import { Menu, Transition, Listbox } from "@headlessui/react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoIosArrowDown  } from "react-icons/io";
import {
  BiDotsVerticalRounded,
  BiEditAlt,
} from "react-icons/bi";
import {
  PiTextBBold,
  PiTextItalicBold,
  PiTextTBold,
  PiTextUnderlineBold,
} from "react-icons/pi";
import {
  GrTextAlignCenter,
  GrTextAlignFull,
  GrTextAlignLeft,
  GrTextAlignRight,
} from "react-icons/gr";
import {
  LiaClipboardListSolid,
} from "react-icons/lia";
import {
  CalendarIcon,
  TagIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";

export default function CreateAssignment() {
  const assignments = [
    {
      id: "81614",
      points: "50",
      header: {
        name: "Green Tech Paper",
        href: "#",
      },
      href: "#",
      title: "Green Tech Paper",
      body: `
            <p>The objective of this assignment is to deepen your understanding of renewable energy technologies and their potential to address the challenges of climate change and sustainable development.</p>
            <p>You will be required to research and write a comprehensive research paper on a specific renewable energy technology of your choice.</p>
          `,
    },
    //     // {
    //     //   id: "81613",
    //     //   points: "35",
    //     //   header: {
    //     //     name: "Testing AI Essay",
    //     //     href: "#",
    //     //   },
    //     //   href: "#",
    //     //   title: "Testing AI Essay",
    //     //   body: `
    //     //     <p>There has been a lot of excitement over the recent growth of Ai and its potential to disrupt or even enhance students learning potential. Well now is your chance to test it out!</p>
    //     //     <p>Each of you will ask ChatGPT to draft an essay about a topic of your choosing. Then you will need to write a response about whether or not you would use this essay yourself. Why and why not?
    //     //     Do you think that Ai will be good for students like you? What could be some potential dangers of using Ai for education?</p>
    //     //   `,
    //     // },
    //     // {
    //     //   id: "81613",
    //     //   points: "75",
    //     //   header: {
    //     //     name: "Portfolio Analysis",
    //     //     href: "#",
    //     //   },
    //     //   href: "#",
    //     //   title: "Portfolio Analysis",
    //     //   body: `
    //     //     <p>In this assignment you will be taking a look at the professional portfolio of someone you know. You will analyze their work, their references, and experience.</p>
    //     //   `,
    //     // },
    //     // More assignments...
  ];

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
      {/* Assignment section */}

      <main className="lg:col-span-9 xl:col-span-10">
        <div className="px-4 sm:px-0">
          <div className="text-3xl text-gray-900 font-bold">Assignment 1</div>
        </div>
        <form action="#" className="relative mt-4">
          <div className="mt-4">
            <h1 className="sr-only">Assignments</h1>
            <ul role="list" className="space-y-4">
              {assignments.map((assignment) => (
                <li
                  key={assignment.id}
                  className="bg-white px-4 py-6 shadow sm:rounded-lg sm:p-6"
                >
                  <article
                    aria-labelledby={"assignment-title-" + assignment.id}
                  >
                    <div>
                      <div className="flex space-x-3">
                        <div className="flex-shrink-0">
                          <div className="h-6 w-2 rounded bg-rose-400" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-lg text-gray-900 font-bold">
                            {assignment.title}
                          </p>
                        </div>
                        <div className="flex flex-shrink-0 self-center">
                          <Menu
                            as="div"
                            className="relative inline-block text-left"
                          >
                            <div>
                              <Menu.Button className="relative -m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-600">
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
                              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded bg-white shadow-lgfocus:outline-none">
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
                      <div className="mt-4 border border-gray-300 rounded divide-y divide-gray-300">
                        <div className="p-2">
                          <div className="flex flex-row text-slate-700 space-x-2">
                            <div className="p-2 flex flex-row cursor-pointer">
                              <Menu
                                as="div"
                                className="relative inline-block text-left"
                              >
                                <div>
                                  <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded bg-white px-3 py-2 text-sm font-bold text-gray-900 hover:bg-gray-50">
                                    Header #1
                                    <IoIosArrowDown
                                      className="-mr-1 h-5 w-5 text-gray-400"
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
                                  <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                              "block px-4 py-2 text-sm"
                                            )}
                                          >
                                            Header #1
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
                                              "block px-4 py-2 text-sm"
                                            )}
                                          >
                                            Header #2
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
                                              "block px-4 py-2 text-sm"
                                            )}
                                          >
                                            Header #3
                                          </a>
                                        )}
                                      </Menu.Item>
                                    </div>
                                  </Menu.Items>
                                </Transition>
                              </Menu>
                            </div>
                            <span className="w-1 h-1 mt-5 text-md bg-gray-300 text-gray-300" />
                            <div className="p-2 flex flex-row rounded cursor-pointer hover:bg-slate-100">
                              <PiTextBBold className="mt-1 text-lg font-extrabold" />
                            </div>
                            <div className="p-2 flex flex-row rounded cursor-pointer hover:bg-slate-100">
                              <PiTextItalicBold className="mt-1 text-lg font-extrabold" />
                            </div>
                            <div className="p-2 flex flex-row rounded cursor-pointer hover:bg-slate-100">
                              <PiTextTBold className="mt-1 text-lg font-extrabold" />
                            </div>
                            <div className="p-2 flex flex-row rounded cursor-pointer hover:bg-slate-100">
                              <PiTextUnderlineBold className="mt-1 text-lg font-extrabold" />
                            </div>
                            <span className="w-1 h-1 mt-5 text-md bg-gray-300 text-gray-300" />
                            <div className="p-2 flex flex-row rounded cursor-pointer hover:bg-slate-100">
                              <GrTextAlignCenter className="mt-1 text-lg font-extrabold" />
                            </div>
                            <div className="p-2 flex flex-row rounded cursor-pointer hover:bg-slate-100">
                              <GrTextAlignFull className="mt-1 text-lg font-extrabold" />
                            </div>
                            <div className="p-2 flex flex-row rounded cursor-pointer hover:bg-slate-100">
                              <GrTextAlignLeft className="mt-1 text-lg font-extrabold" />
                            </div>
                            <div className="p-2 flex flex-row rounded cursor-pointer hover:bg-slate-100">
                              <GrTextAlignRight className="mt-1 text-lg font-extrabold" />
                            </div>
                          </div>
                        </div>
                        <div
                          className="mt-2 p-4 pb-20 space-y-4 text-sm text-gray-700"
                          dangerouslySetInnerHTML={{
                            __html: assignment.body,
                          }}
                        />
                      </div>
                    </div>
                    <div className="mt-6 flex justify-between space-x-8">
                      <div className="flex space-x-6">
                        <span className="inline-flex items-center text-sm">
                          <button
                            type="button"
                            className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                          >
                            <span className="flex flex-row font-medium text-gray-900">
                              Possible Points
                              <LiaClipboardListSolid className="ml-2 font-bold text-gray-900 text-xl" />
                              - {assignment.points}
                            </span>
                            <span className="sr-only">likes</span>
                          </button>
                        </span>
                      </div>
                      <div className="hidden text-sm p-2 rounded text-gray-600 border border-gray-600 hover:text-gray-100 hover:bg-sky-700">
                        <span className="inline-flex items-center text-sm">
                          <button
                            type="button"
                            className="inline-flex space-x-2"
                          >
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

        {/* Create assinment */}

        <form action="#" className="relative mt-4">
          <div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-sky-700 focus-within:ring-1 focus-within:ring-sky-700">
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
              <div className="flex-shrink-0">
                <button className="inline-flex items-center rounded bg-sky-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                  Create
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}
