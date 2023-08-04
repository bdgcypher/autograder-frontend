/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";
import { Fragment } from "react";
import { Menu, Popover, Transition, Listbox } from "@headlessui/react";
import { FiSettings } from "react-icons/fi";
import { RiDashboard2Fill, RiDeleteBin5Line, RiMenuFill } from "react-icons/ri";
import { MdOutlineDiamond, MdOutlinePeopleAlt } from "react-icons/md";
import {
  BiPieChartAlt2,
  BiSearch,
  BiBell,
  BiDotsVerticalRounded,
  BiEditAlt,
  BiShareAlt,
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
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { TbMessages } from "react-icons/tb";
import {
  CalendarIcon,
  PaperClipIcon,
  TagIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";

const user = {
  name: "Chelsea Hagon",
  email: "chelsea.hagon@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", icon: RiDashboard2Fill, current: true },
  { name: "Product", href: "#", icon: MdOutlineDiamond, current: false },
  { name: "Analytics", href: "#", icon: BiPieChartAlt2, current: false },
  { name: "Customers", href: "#", icon: MdOutlinePeopleAlt, current: false },
  {
    name: "Invoice",
    href: "#",
    icon: LiaFileInvoiceDollarSolid,
    current: false,
  },
  { name: "Settings", href: "#", icon: FiSettings, current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
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

export default function Dashboard() {
  const [assigned, setAssigned] = useState(assignees[0]);
  const [labelled, setLabelled] = useState(labels[0]);
  const [dated, setDated] = useState(dueDates[0]);

  return (
    <>
      <div className="min-h-full">
        {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
        <Popover
          as="header"
          className={({ open }) =>
            classNames(
              open ? "fixed inset-0 z-40 overflow-y-auto" : "",
              "bg-white shadow-sm lg:static lg:overflow-y-visible"
            )
          }
        >
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
                  <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
                    <div className="flex flex-shrink-0 items-center">
                      <a href="#" className="flex flex-row">
                        <img
                          src="apporto_logo.png/"
                          alt="Apporto logo"
                          className="w-10 h-10"
                        />
                        <div className="ml-2 text-sky-950 text-xl font-bold leading-loose">
                          Apporto
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                    <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                      <div className="w-full">
                        <label htmlFor="search" className="sr-only">
                          Search
                        </label>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <BiSearch
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </div>
                          <input
                            id="search"
                            name="search"
                            className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-700 sm:text-sm sm:leading-6"
                            placeholder="Search"
                            type="search"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden">
                    {/* Mobile menu button */}
                    <Popover.Button className="relative -mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-700">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open menu</span>
                      {open ? (
                        <IoMdClose
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <RiMenuFill
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Popover.Button>
                  </div>
                  <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-900 hover:underline"
                    >
                      <TbMessages
                        className="h-6 w-6 text-gray-700"
                        aria-hidden="true"
                      />
                    </a>
                    <a
                      href="#"
                      className="ml-5 flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:ring-offset-2"
                    >
                      <span className="sr-only">View notifications</span>
                      <BiBell
                        className="h-6 w-6 text-gray-700"
                        aria-hidden="true"
                      />
                    </a>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-5 flex-shrink-0">
                      <div>
                        <Menu.Button className="relative flex rounded-full bg-white">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-md"
                            src={user.imageUrl}
                            alt=""
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
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>

              <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
                <div className="mx-auto max-w-3xl space-y-1 px-2 pb-3 pt-2 sm:px-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "bg-gray-100 text-sky-700"
                          : "hover:bg-gray-50",
                        "block rounded-md py-2 px-3 text-base font-medium"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="mx-auto flex max-w-3xl items-center px-4 sm:px-6">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium text-gray-500">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BiBell
                        className="h-6 w-6 text-gray-700"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                  <div className="mx-auto mt-3 max-w-3xl space-y-1 px-2 sm:px-4">
                    {userNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mx-auto mt-6 max-w-3xl px-4 sm:px-6">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-sky-700 px-4 py-2 text-base font-medium text-black shadow-sm hover:bg-rose-700"
                  >
                    New Post
                  </a>

                  <div className="mt-6 flex justify-center">
                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:underline"
                    >
                      <TbMessages className="h-6 w-6" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </>
          )}
        </Popover>

        <div className="py-10 bg-slate-50">
          <div className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
            <div className="hidden lg:col-span-3 lg:block xl:col-span-2">
              <nav
                aria-label="Sidebar"
                className="sticky top-4 divide-y divide-gray-300"
              >
                <div className="space-y-1 pb-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-200 text-sky-700 font-bold"
                          : "text-gray-700 hover:bg-gray-50",
                        "group flex items-center rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-sky-700"
                            : "text-gray-400 group-hover:text-gray-500",
                          "-ml-1 mr-3 h-6 w-6 flex-shrink-0"
                        )}
                        aria-hidden="true"
                      />
                      <span className="truncate">{item.name}</span>
                    </a>
                  ))}
                </div>
              </nav>
            </div>

            {/* Assignment section */}

            <main className="lg:col-span-9 xl:col-span-10">
              <div className="px-4 sm:px-0">
                <div className="text-3xl text-gray-900 font-bold">
                  Assignment 1
                </div>
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
                                      <span className="sr-only">
                                        Open options
                                      </span>
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
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                                              <BiShareAlt
                                                className="mr-3 h-5 w-5 text-gray-400"
                                                aria-hidden="true"
                                              />
                                              <span>Share</span>
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
                                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-bold text-gray-900 hover:bg-gray-50">
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
                                        <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                                  <span className="font-medium text-gray-900">
                                    Possible Points - {assignment.points}
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
                          <Listbox.Label className="sr-only">
                            Assign
                          </Listbox.Label>
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
                                  assigned.value === null
                                    ? ""
                                    : "text-gray-900",
                                  "hidden truncate sm:ml-2 sm:block"
                                )}
                              >
                                {assigned.value === null
                                  ? "Assign"
                                  : assigned.name}
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
                                  labelled.value === null
                                    ? ""
                                    : "text-gray-900",
                                  "hidden truncate sm:ml-2 sm:block"
                                )}
                              >
                                {labelled.value === null
                                  ? "Label"
                                  : labelled.name}
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
                      <button className="inline-flex items-center rounded-md bg-sky-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                        Create
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
