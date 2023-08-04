import React from "react";
import { Fragment } from "react";
import { Menu, Popover, Transition, Listbox } from "@headlessui/react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoMdCheckmark } from "react-icons/io";
import { BiDotsVerticalRounded, BiEditAlt } from "react-icons/bi";
import { LiaClipboardListSolid } from "react-icons/lia";

export default function AssignmentDescription() {
  const assignments = [
    {
      id: "81614",
      points: "15",
      header: {
        name: "Green Tech Paper",
        href: "#",
      },
      href: "#",
      title: "Green Tech Paper",
      body: `<p>Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.\n\nFor example, 
      [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.
      \n\nFollow-up: Can you do this in O(N) time and constant space?\n\nFor your submission, 
      create a python function which accepts a single list of integers and/or floats.</p>`,
    },
    // {
    //   id: "81613",
    //   points: "35",
    //   header: {
    //     name: "Testing AI Essay",
    //     href: "#",
    //   },
    //   href: "#",
    //   title: "Testing AI Essay",
    //   body: `
    //     <p>There has been a lot of excitement over the recent growth of Ai and its potential to disrupt or even enhance students learning potential. Well now is your chance to test it out!</p>
    //     <p>Each of you will ask ChatGPT to draft an essay about a topic of your choosing. Then you will need to write a response about whether or not you would use this essay yourself. Why and why not?
    //     Do you think that Ai will be good for students like you? What could be some potential dangers of using Ai for education?</p>
    //   `,
    // },
    // {
    //   id: "81613",
    //   points: "75",
    //   header: {
    //     name: "Portfolio Analysis",
    //     href: "#",
    //   },
    //   href: "#",
    //   title: "Portfolio Analysis",
    //   body: `
    //     <p>In this assignment you will be taking a look at the professional portfolio of someone you know. You will analyze their work, their references, and experience.</p>
    //   `,
    // },
    // More assignments...
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <form action="#" className="relative mt-4">
        <div className="mt-4">
          <h1 className="sr-only">Assignments</h1>
          <ul role="list" className="space-y-4">
            {assignments.map((assignment) => (
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
                                - {assignment.points} Points
                              </span>
                              <span className="sr-only">likes</span>
                            </button>
                          </span>
                        </div>
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
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lgfocus:outline-none">
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
