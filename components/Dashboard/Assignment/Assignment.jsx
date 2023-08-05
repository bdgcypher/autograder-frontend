/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Fragment } from "react";
import { Menu, Popover, Transition, Listbox } from "@headlessui/react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoMdCheckmark, IoIosArrowDown } from "react-icons/io";
import { BiDotsVerticalRounded, BiEditAlt } from "react-icons/bi";
import { LiaClipboardListSolid } from "react-icons/lia";
import AssignmentDescription from "./AssignmentDescription";
import Submissions from "./Submissions";
import Rubric from "./Rubric";
import ViewSubmission from "./ViewSubmission";

export default function Assignment({ dataArray }) {

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const [open, setOpen] = useState(false)
  const [person, setPerson] = useState("")
  const [submission, setSubmission] = useState("")

  return (
    <>
      {/* Assignment container */}

      <main className="md:col-span-2 lg:col-span-9 xl:col-span-10">
        <div className="flex justify-between px-4 sm:px-0">
          <div className="text-3xl text-gray-900 font-bold">Assignment 1</div>
          <div className="flex p-2 text-md font-bold text-sky-700 rounded">
            Published
            <IoMdCheckmark className="ml-2 mt-1 p-[2px] bg-sky-700 rounded-full text-lg text-slate-50" />
          </div>
        </div>
        
        {/* Description */}

        <AssignmentDescription />

        {/* Rubric dropdown */}

        <Rubric rubricArray={dataArray.rubric} />

        {/* Submissions */}

        <Submissions setOpen={setOpen} setPerson={setPerson} setSubmission={setSubmission} />

        {/* View Submission popup */}

        <ViewSubmission open={open} setOpen={setOpen} person={person} submission={submission} />

      </main>
    </>
  );
}
