/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { RiDashboard2Fill } from "react-icons/ri";
import { MdOutlineDiamond, MdOutlinePeopleAlt } from "react-icons/md";
import { BiPieChartAlt2 } from "react-icons/bi";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";

import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Assignment from "./Assignment/Assignment";
import CreateAssignment from "./Assignment/CreateAssignment";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {

  return (
    <>
      <div className="min-h-full">
        <Navbar />

        <div className="py-10 bg-slate-50">
          <div className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
            <Sidebar />

            <Assignment />
          </div>
        </div>
      </div>
    </>
  );
}
