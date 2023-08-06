/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import { FiSettings } from "react-icons/fi";
import { RiDashboard2Fill, RiMenuFill } from "react-icons/ri";
import { MdOutlineDiamond, MdOutlinePeopleAlt } from "react-icons/md";
import { BiPieChartAlt2, BiSearch, BiBell } from "react-icons/bi";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { IoMdClose } from "react-icons/io";
import { TbMessages } from "react-icons/tb";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const user = {
    name: "Chelsea Hagon",
    email: "chelsea.hagon@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };
  const navigation = [
    { name: "Dashboard", href: "#", icon: RiDashboard2Fill, current: true },
    // { name: "Product", href: "#", icon: MdOutlineDiamond, current: false },
    // { name: "Analytics", href: "#", icon: BiPieChartAlt2, current: false },
    // { name: "Customers", href: "#", icon: MdOutlinePeopleAlt, current: false },
    // {
    //   name: "Invoice",
    //   href: "#",
    //   icon: LiaFileInvoiceDollarSolid,
    //   current: false,
    // },
    { name: "Settings", href: "#", icon: FiSettings, current: false },
  ];
  const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
  ];

  return (
    <Popover
      as="header"
      className={({ open }) =>
        classNames(
          open ? "fixed inset-0 z-40 overflow-y-auto" : "",
          "bg-white shadow-sm rounded-t lg:static lg:overflow-y-visible"
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
                  <div className="ml-4 md:ml-24 w-10 sm:w-5/6 lg:w-full">
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
                        className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-1 md:pr-3 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-700 sm:text-sm sm:leading-6"
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
                    <IoMdClose className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <RiMenuFill className="block h-6 w-6" aria-hidden="true" />
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
                                active ? "bg-gray-100 text-black" : "",
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
                      : "hover:bg-gray-50 text-gray-900",
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
                <div className="relative ml-auto flex-shrink-0">
                  <button
                    type="button"
                    className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-sky-700"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View messages</span>
                    <TbMessages
                      className="h-6 w-6 text-gray-700"
                      aria-hidden="true"
                    />
                  </button>
                  <button
                    type="button"
                    className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-sky-700"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BiBell
                      className="h-6 w-6 text-gray-700"
                      aria-hidden="true"
                    />
                  </button>
                </div>
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
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-sky-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-sky-600"
              >
                New Assignment
              </a>
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
}
