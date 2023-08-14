/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";
import jsonData from "/data.json";

import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Assignment from "./Assignment/Assignment";
import Assignments from "./Assignments";
import Breadcrumbs from "../Breadcrumbs";
import CreateAssignment from "./CreateAssignment/CreateAssignment";

function classNames(...classes) {
  return classes.filter(Boolean).join("");
}

export default function Dashboard() {
  const [breadcrumbData, setBreadcrumbData] = useState("");
  const [selectedAssignment, setSelectedAssignment] = useState("");

  let data = jsonData;

  return (
    <>
      <div className="min-h-full">
        <Navbar />

        <div className="h-full pb-10 bg-slate-50">
          <div className="mx-auto h-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-full pr-0 md:pr-4 lg:pr-10 lg:grid lg:grid-cols-12 lg:gap-8">
            <Sidebar />
            <Breadcrumbs currentBreadcrumb={breadcrumbData} setBreadcrumbData={setBreadcrumbData} />
            {breadcrumbData === "" ? (
              <Assignments
                assignments={data}
                setBreadcrumbData={setBreadcrumbData}
                setSelectedAssignment={setSelectedAssignment}
              />
            ) : breadcrumbData === "Create Assignment" ? (
              <CreateAssignment setBreadcrumbData={setBreadcrumbData} />
            ) : breadcrumbData === selectedAssignment ? (
              <Assignment dataArray={data} />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
