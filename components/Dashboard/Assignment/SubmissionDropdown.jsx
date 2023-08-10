/* eslint-disable @next/next/no-img-element */
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { UserCircleIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SubmissionDropdown({ submissions, submission, setSubmission, setGrade}) {
  const [selected, setSelected] = useState(submission);

  const handleChange = (e) => {
    setSelected(e);
    setSubmission(e);
    setGrade(e.grade);
  }


  return (
    <Listbox value={selected} onChange={handleChange}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900"></Listbox.Label>
          <div className="relative mt-2">
            <Listbox.Button className="relative w-full cursor-default rounded bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                {selected.image ? (
                  <img
                    src={selected.image}
                    alt=""
                    className="h-5 w-5 flex-shrink-0 rounded-full"
                  />
                ) : (
                  <UserCircleIcon
                    className="h-5 w-5 flex-shrink-0 text-gray-400 rounded-full"
                    aria-hidden="true"
                  />
                )}
                <span className="ml-3 block truncate font-semibold">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {submissions.map((person, index) => (
                  <Listbox.Option
                    key={index}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-sky-600 text-white" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          {person.image ? (
                            <img
                              src={person.image}
                              alt=""
                              className="h-5 w-5 flex-shrink-0 rounded-full"
                            />
                          ) : (
                            <UserCircleIcon
                              className="h-5 w-5 flex-shrink-0 text-gray-400 rounded-full"
                              aria-hidden="true"
                            />
                          )}
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block truncate"
                            )}
                          >
                            {person.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-sky-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
