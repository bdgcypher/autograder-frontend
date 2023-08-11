/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";
import jsonData from "/data.json";

import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Assignment from "./Assignment/Assignment";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {

  let data = jsonData

  return (
    <>
      <div className="min-h-full">
        <Navbar />

        <div className="pb-10 bg-slate-50">
          <div className="mx-auto max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-full px-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <Sidebar />

            <Assignment dataArray={data} />
          </div>
        </div>
      </div>
    </>
  );
}
