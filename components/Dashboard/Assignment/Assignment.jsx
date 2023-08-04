import React from "react";
import { Fragment } from "react";
import { Menu, Popover, Transition, Listbox } from "@headlessui/react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoMdCheckmark, IoIosArrowDown } from "react-icons/io";
import { BiDotsVerticalRounded, BiEditAlt } from "react-icons/bi";
import { LiaClipboardListSolid } from "react-icons/lia";
import AssignmentDescription from "./AssignmentDescription";
import Submissions from "../Submissions";
import Rubrik from "../Rubrik";

export default function Assignment() {

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      {/* Assignment container */}

      <main className="lg:col-span-9 xl:col-span-10">
        <div className="flex justify-between px-4 sm:px-0">
          <div className="text-3xl text-gray-900 font-bold">Assignment 1</div>
          <div className="flex p-2 text-md font-bold text-sky-700 rounded">
            Published
            <IoMdCheckmark className="ml-2 mt-1 p-[2px] bg-sky-700 rounded-full text-lg text-slate-50" />
          </div>
        </div>
        
        {/* Description */}

        <AssignmentDescription />

        {/* Rubrik dropdown */}

        <Rubrik />

        {/* Submissions */}

        <Submissions />

      </main>
    </>
  );
}
