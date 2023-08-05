/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, Fragment } from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { Dialog, Transition } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";

export default function ViewSubmission({ open, setOpen, person, submission }) {
  return (
    <div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-30 transition-opacity" />
          </Transition.Child>

          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative w-screen lg:w-3/4 my-0 md:my-10 bg-white rounded-md text-left shadow-xl transform transition-all">
                  <div className="relative min-h-screen py-14 mx-auto rounded-md bg-white">
                    <div className="flex flex-row">
                      <div className="absolute top-6 left-10">
                        <div className="flex flex-row">
                          <div className="h-6 w-2 -ml-4 mr-4 bg-rose-400 rounded" />
                          <h1 className="mb-8 text-lg font-semibold leading-6 text-gray-900">
                            Assignment 1 - {person.name}
                          </h1>
                        </div>
                      </div>
                      <IoMdClose
                        onClick={() => setOpen(false)}
                        className="absolute top-6 right-6 text-3xl text-rose-400 cursor-pointer"
                      />
                    </div>
                    <hr className="mt-6 border-gray-200" />
                    <div className="flex flex-col px-0 lg:px-20">
                      <main className="">
                        <div className="xl:pr-96">
                          <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-6">
                            {/* Main area */}

                            <SyntaxHighlighter
                              language="python"
                              style={docco}
                              className="rounded"
                            >
                              {submission}
                            </SyntaxHighlighter>
                          </div>
                        </div>
                      </main>

                      <aside className="fixed mt-20 inset-y-0 right-0 hidden w-96 overflow-y-auto border-l border-gray-200 px-4 py-6 sm:px-6 lg:px-8 xl:block">
                        {/* Secondary column (hidden on smaller screens) */}
                      </aside>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
