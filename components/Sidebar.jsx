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

export default function Sidebar() {
  const navigation = [
    { name: "Dashboard", href: "#", icon: RiDashboard2Fill, current: true },
    // { name: "Product", href: "#", icon: MdOutlineDiamond, current: false },
    // { name: "Analytics", href: "#", icon: BiPieChartAlt2, current: false },
    // { name: "Customers", href: "#", icon: MdOutlinePeopleAlt, current: false },
  //   {
  //     name: "Invoice",
  //     href: "#",
  //     icon: LiaFileInvoiceDollarSolid,
  //     current: false,
  //   },
    { name: "Settings", href: "#", icon: FiSettings, current: false },
  // ];
  // const userNavigation = [
  //   { name: "Your Profile", href: "#" },
  //   { name: "Settings", href: "#" },
  //   { name: "Sign out", href: "#" },
  ];

  return (
    <>
      <div className="hidden lg:block z-10 group min-h-full h-screen-85 w-16 hover:w-60 transition-all ease-in-out duration-300 p-3 bg-white shadow">
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
                  "group min-w-10 w-10 group-hover:w-full transition-all ease-in-out duration-300 flex items-center rounded px-3 py-2 text-sm font-medium"
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
    </>
  );
}
