/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FiSettings } from "react-icons/fi";
import { RiDashboard2Fill } from "react-icons/ri";

export default function Dashboard() {
  return (
    <>
      <div className="w-[1440px] h-[1024px] relative bg-slate-50">
        <div className="w-[312px] h-[1024px] left-0 top-0 absolute">
          <div className="w-[312px] h-[912px] left-0 top-[112px] absolute bg-white" />
          <div className="w-[248px] h-[848px] left-[32px] top-[144px] absolute">
            <div className="w-[248px] h-12 left-0 top-[800px] absolute">
              <div className="w-[248px] h-12 left-0 top-0 absolute bg-slate-50 rounded-lg" />
              <div className="w-[103px] h-6 left-[16px] top-[12px] absolute justify-center items-start gap-4 inline-flex">
                <div className="w-10 h-10 relative flex-col justify-start items-start flex">
                  <FiSettings className="h-6 w-6 text-slate-900" />
                </div>
                <div className="text-sky-950 text-base font-medium leading-normal">
                  Settings
                </div>
              </div>
            </div>
            <div className="w-[248px] h-[304px] left-0 top-0 absolute">
              <div className="w-[248px] h-12 left-0 top-[256px] absolute">
                <div className="w-[248px] h-12 left-0 top-0 absolute opacity-0 bg-zinc-100 rounded-lg" />
                <div className="w-4 h-4 left-[212px] top-[16px] absolute">
                  <div className="w-4 h-4 left-0 top-0 absolute" />
                </div>
                <div className="w-[101px] h-6 left-[16px] top-[12px] absolute justify-center items-start gap-4 inline-flex">
                  <div className="w-6 h-6 relative flex-col justify-start items-start flex">
                    <div className="w-6 h-6" />
                    <img
                      className="w-[21.75px] h-[18.75px]"
                      src="https://via.placeholder.com/22x19"
                    />
                  </div>
                  <div className="text-sky-950 text-base font-medium leading-normal">
                    Invoices
                  </div>
                </div>
              </div>
              <div className="w-[248px] h-12 left-0 top-[192px] absolute">
                <div className="w-[248px] h-12 left-0 top-0 absolute opacity-0 bg-zinc-100 rounded-lg" />
                <div className="w-[122px] h-6 left-[16px] top-[12px] absolute justify-center items-start gap-4 inline-flex">
                  <div className="w-6 h-6 relative flex-col justify-start items-start flex">
                    <div className="w-6 h-6" />
                    <img
                      className="w-[23.25px] h-[17.23px]"
                      src="https://via.placeholder.com/23x17"
                    />
                  </div>
                  <div className="text-sky-950 text-base font-medium leading-normal">
                    Customers
                  </div>
                </div>
              </div>
              <div className="w-[248px] h-12 left-0 top-[128px] absolute">
                <div className="w-[248px] h-12 left-0 top-0 absolute opacity-0 bg-zinc-100 rounded-lg" />
                <div className="w-6 h-6 left-[208px] top-[12px] absolute">
                  <div className="w-6 h-6 left-0 top-0 absolute bg-rose-400 rounded-lg" />
                  <div className="w-6 left-0 top-[4px] absolute text-center text-white text-xs font-bold leading-none">
                    12
                  </div>
                </div>
                <div className="w-[111px] h-6 left-[16px] top-[12px] absolute justify-center items-start gap-4 inline-flex">
                  <div className="w-6 h-6 relative flex-col justify-start items-start flex">
                    <div className="w-6 h-6" />
                    <img
                      className="w-[20.25px] h-[20.25px]"
                      src="https://via.placeholder.com/20x20"
                    />
                  </div>
                  <div className="text-sky-950 text-base font-medium leading-normal">
                    Analytics
                  </div>
                </div>
              </div>
              <div className="w-[248px] h-12 left-0 top-[64px] absolute">
                <div className="w-[248px] h-12 left-0 top-0 absolute opacity-0 bg-zinc-100 rounded-lg" />
                <div className="w-14 h-6 left-[172px] top-[12px] absolute">
                  <div className="w-4 h-4 left-[40px] top-[4px] absolute flex-col justify-start items-start inline-flex">
                    <div className="w-4 h-4" />
                  </div>
                  <div className="w-6 h-6 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
                    <div className="w-6 h-6" />
                    <img
                      className="w-[20.25px] h-[20.25px]"
                      src="https://via.placeholder.com/20x20"
                    />
                  </div>
                </div>
                <div className="w-[100px] h-6 left-[16px] top-[12px] absolute justify-center items-start gap-4 inline-flex">
                  <div className="w-6 h-6 relative flex-col justify-start items-start flex">
                    <div className="w-6 h-6" />
                    <img
                      className="w-[23.25px] h-[19.50px]"
                      src="https://via.placeholder.com/23x19"
                    />
                  </div>
                  <div className="text-sky-950 text-base font-medium leading-normal">
                    Product
                  </div>
                </div>
              </div>
              <div className="w-[248px] h-12 left-0 top-0 absolute">
                <div className="w-[248px] h-12 left-0 top-0 absolute opacity-10 bg-sky-700 rounded-lg" />
                <div className="w-[123px] h-6 left-[16px] top-[12px] absolute justify-center items-start gap-4 inline-flex">
                  <div className="w-6 h-6 relative flex-col justify-start items-start flex">
                    <RiDashboard2Fill className="w-6 h-6 text-sky-700" />
                  </div>
                  <div className="text-sky-700 text-base font-bold leading-normal">
                    Dashboard
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[312px] h-28 left-0 top-0 absolute">
            <div className="w-[312px] h-28 left-0 top-0 absolute bg-white shadow-inner" />
            <div className="w-[150px] h-8 left-[89px] top-[40px] absolute justify-center items-center gap-4 inline-flex">
              <div className="w-10 h-10 relative">
                <img src="apporto_logo.png/" alt="Apporto logo" className="w-10" />
                <div className="w-0 h-0 left-0 top-0 absolute">
                </div>
              </div>
              <div className="text-sky-950 text-2xl font-bold leading-loose">
                Apporto
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1064px] h-[1104px] left-[344px] top-[144px] absolute">
          <div className="w-[1064px] h-[1024px] left-0 top-[80px] absolute">
            <div className="w-[1064px] h-[408px] left-0 top-[616px] absolute">
              <div className="w-[1064px] h-[408px] left-0 top-0 absolute bg-white rounded-lg" />
              <div className="w-[1064px] h-[408px] left-0 top-0 absolute bg-white rounded-lg" />
              <div className="w-[1000px] h-72 left-[32px] top-[88px] absolute">
                <div className="w-[1000px] h-12 left-0 top-[240px] absolute">
                  <div className="w-[1000px] h-12 left-0 top-0 absolute bg-slate-50 rounded-bl-lg rounded-br-lg" />
                  <div className="w-40 h-6 left-[420px] top-[12px] absolute justify-center items-start gap-3 inline-flex">
                    <div className="w-6 h-6 relative flex-col justify-start items-start flex">
                      <div className="w-6 h-6" />
                      <img
                        className="w-[19.50px] h-[19.50px]"
                        src="https://via.placeholder.com/19x19"
                      />
                    </div>
                    <div className="text-sky-700 text-base font-bold leading-normal">
                      Add assignment
                    </div>
                  </div>
                </div>
                <div className="w-[1000px] h-48 left-0 top-[48px] absolute">
                  <div className="w-[1000px] h-12 left-0 top-[144px] absolute">
                    <div className="w-[1000px] h-12 left-0 top-0 absolute bg-slate-50 shadow-inner" />
                    <div className="w-6 h-6 left-[766px] top-[12px] absolute">
                      <img
                        className="w-[3px] h-[15.75px] left-[10.50px] top-[4.12px] absolute"
                        src="https://via.placeholder.com/3x16"
                      />
                      <div className="w-6 h-6 left-0 top-0 absolute" />
                    </div>
                    <div className="w-[154px] h-6 left-[516px] top-[12px] absolute justify-center items-center inline-flex">
                      <div className="px-2 py-1 bg-sky-700 bg-opacity-10 rounded justify-center items-center gap-2.5 inline-flex">
                        <div className="text-sky-950 text-xs font-bold leading-none">
                          Fri 19 Oct to Wed 26 Oct
                        </div>
                      </div>
                    </div>
                    <div className="w-[132px] h-6 left-[266px] top-[12px] absolute justify-center items-start gap-3 inline-flex">
                      <img
                        className="w-6 h-6"
                        src="https://via.placeholder.com/24x24"
                      />
                      <div className="text-sky-950 text-base font-bold leading-normal">
                        Beatriz Brito
                      </div>
                    </div>
                    <div className="w-20 h-6 left-[16px] top-[12px] absolute justify-center items-center inline-flex">
                      <div className="px-2 py-1 bg-sky-700 bg-opacity-10 rounded justify-center items-center gap-2.5 inline-flex">
                        <div className="text-sky-950 text-xs font-bold leading-none">
                          Sun 17 Sep
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[1000px] h-12 left-0 top-[96px] absolute">
                    <div className="w-[1000px] h-12 left-0 top-0 absolute bg-slate-50 shadow-inner" />
                    <div className="w-6 h-6 left-[766px] top-[12px] absolute">
                      <img
                        className="w-[3px] h-[15.75px] left-[10.50px] top-[4.12px] absolute"
                        src="https://via.placeholder.com/3x16"
                      />
                      <div className="w-6 h-6 left-0 top-0 absolute" />
                    </div>
                    <div className="w-[148px] h-6 left-[516px] top-[12px] absolute justify-center items-center inline-flex">
                      <div className="px-2 py-1 bg-sky-700 bg-opacity-10 rounded justify-center items-center gap-2.5 inline-flex">
                        <div className="text-sky-950 text-xs font-bold leading-none">
                          Sun 7 Oct to Mon 8 Oct
                        </div>
                      </div>
                    </div>
                    <div className="w-36 h-6 left-[266px] top-[12px] absolute justify-center items-start gap-3 inline-flex">
                      <img
                        className="w-6 h-6"
                        src="https://via.placeholder.com/24x24"
                      />
                      <div className="text-sky-950 text-base font-bold leading-normal">
                        Jurrien Oldhof
                      </div>
                    </div>
                    <div className="w-20 h-6 left-[16px] top-[12px] absolute justify-center items-center inline-flex">
                      <div className="px-2 py-1 bg-sky-700 bg-opacity-10 rounded justify-center items-center gap-2.5 inline-flex">
                        <div className="text-sky-950 text-xs font-bold leading-none">
                          Thu 13 Aug
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[1000px] h-12 left-0 top-[48px] absolute">
                    <div className="w-[1000px] h-12 left-0 top-0 absolute bg-slate-50 shadow-inner" />
                    <div className="w-6 h-6 left-[766px] top-[12px] absolute">
                      <img
                        className="w-[3px] h-[15.75px] left-[10.50px] top-[4.12px] absolute"
                        src="https://via.placeholder.com/3x16"
                      />
                      <div className="w-6 h-6 left-0 top-0 absolute" />
                    </div>
                    <div className="w-[171px] h-6 left-[516px] top-[12px] absolute justify-center items-center inline-flex">
                      <div className="px-2 py-1 bg-sky-700 bg-opacity-10 rounded justify-center items-center gap-2.5 inline-flex">
                        <div className="text-sky-950 text-xs font-bold leading-none">
                          Wed 28 Sep to Wed 29 Sep
                        </div>
                      </div>
                    </div>
                    <div className="w-[107px] h-6 left-[266px] top-[12px] absolute justify-center items-start gap-3 inline-flex">
                      <div className="w-6 h-6 relative flex-col justify-start items-start flex">
                        <div className="w-6 h-6" />
                        <img
                          className="w-[23.25px] h-[17.23px]"
                          src="https://via.placeholder.com/23x17"
                        />
                      </div>
                      <div className="text-sky-950 text-base font-bold leading-normal">
                        Everyone
                      </div>
                    </div>
                    <div className="w-[79px] h-6 left-[16px] top-[12px] absolute justify-center items-center inline-flex">
                      <div className="px-2 py-1 bg-sky-700 bg-opacity-10 rounded justify-center items-center gap-2.5 inline-flex">
                        <div className="text-sky-950 text-xs font-bold leading-none">
                          Wed 26 Jul
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[1000px] h-12 left-0 top-0 absolute">
                    <div className="w-[1000px] h-12 left-0 top-0 absolute bg-slate-50 shadow-inner" />
                    <div className="w-6 h-6 left-[766px] top-[12px] absolute">
                      <img
                        className="w-[3px] h-[15.75px] left-[10.50px] top-[4.12px] absolute"
                        src="https://via.placeholder.com/3x16"
                      />
                      <div className="w-6 h-6 left-0 top-0 absolute" />
                    </div>
                    <div className="w-[156px] h-6 left-[516px] top-[12px] absolute justify-center items-center inline-flex">
                      <div className="px-2 py-1 bg-sky-700 bg-opacity-10 rounded justify-center items-center gap-2.5 inline-flex">
                        <div className="text-sky-950 text-xs font-bold leading-none">
                          Tue 7 Sep to Wed 13 Sep
                        </div>
                      </div>
                    </div>
                    <div className="w-[157px] h-6 left-[266px] top-[12px] absolute justify-center items-start gap-3 inline-flex">
                      <img
                        className="w-6 h-6"
                        src="https://via.placeholder.com/24x24"
                      />
                      <div className="text-sky-950 text-base font-bold leading-normal">
                        Mattie Blooman
                      </div>
                    </div>
                    <div className="w-[78px] h-6 left-[16px] top-[12px] absolute justify-center items-center inline-flex">
                      <div className="px-2 py-1 bg-sky-700 bg-opacity-10 rounded justify-center items-center gap-2.5 inline-flex">
                        <div className="text-sky-950 text-xs font-bold leading-none">
                          Mon 24 Jul
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[1000px] h-12 left-0 top-0 absolute">
                  <div className="w-[1000px] h-12 left-0 top-0 absolute bg-slate-50 rounded-tl-lg rounded-tr-lg shadow-inner" />
                  <div className="w-[793px] h-4 left-[16px] top-[16px] absolute">
                    <div className="left-[750px] top-0 absolute text-sky-950 text-xs font-medium leading-none">
                      Actions
                    </div>
                    <div className="left-[500px] top-0 absolute text-sky-950 text-xs font-medium leading-none">
                      Availability
                    </div>
                    <div className="left-[250px] top-0 absolute text-sky-950 text-xs font-medium leading-none">
                      For
                    </div>
                    <div className="left-0 top-0 absolute text-sky-950 text-xs font-medium leading-none">
                      Due
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[67px] h-6 left-[32px] top-[32px] absolute justify-center items-start gap-4 inline-flex">
                <div className="w-2 h-6 bg-rose-400 rounded" />
                <div className="text-sky-950 text-base font-bold leading-normal">
                  Label
                </div>
              </div>
            </div>
            <div className="w-[1064px] h-48 left-0 top-[392px] absolute">
              <div className="w-[1064px] h-48 left-0 top-0 absolute bg-white rounded-lg" />
              <div className="w-[1064px] h-48 left-0 top-0 absolute bg-white rounded-lg" />
              <div className="w-[1000px] h-[72px] left-[32px] top-[88px] absolute">
                <div className="w-[492px] h-[72px] left-[508px] top-0 absolute flex-col justify-center items-start gap-2 inline-flex">
                  <div className="text-sky-950 text-xs font-medium leading-none">
                    Submitting
                  </div>
                  <div className="w-[492px] h-12 relative">
                    <div className="w-[492px] h-12 left-0 top-0 absolute bg-white rounded-lg border border-sky-700" />
                    <div className="w-0.5 h-6 left-[16px] top-[12px] absolute bg-sky-700" />
                  </div>
                </div>
                <div className="w-[492px] h-[72px] left-0 top-0 absolute flex-col justify-center items-start gap-2 inline-flex">
                  <div className="text-sky-950 text-xs font-medium leading-none">
                    Points
                  </div>
                  <div className="w-[492px] h-12 relative flex-col justify-start items-start flex">
                    <div className="w-[492px] h-12 bg-white rounded-lg border border-sky-950 border-opacity-20" />
                    <div className="opacity-60 text-sky-950 text-base font-normal leading-normal">
                      e.g., 50
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[67px] h-6 left-[32px] top-[32px] absolute justify-center items-start gap-4 inline-flex">
                <div className="w-2 h-6 bg-rose-400 rounded" />
                <div className="text-sky-950 text-base font-bold leading-normal">
                  Label
                </div>
              </div>
            </div>
            <div className="w-[1064px] h-[360px] left-0 top-0 absolute">
              <div className="w-[1064px] h-[360px] left-0 top-0 absolute bg-white rounded-lg" />
              <div className="w-[1064px] h-[360px] left-0 top-0 absolute bg-white rounded-lg" />
              <div className="w-[1000px] h-60 left-[32px] top-[88px] absolute">
                <div className="w-[1000px] h-48 left-0 top-[48px] absolute">
                  <div className="w-[1000px] h-48 left-0 top-0 absolute bg-white rounded-bl-lg rounded-br-lg border border-sky-950 border-opacity-20" />
                  <div className="w-[968px] h-[120px] left-[16px] top-[16px] absolute justify-center items-center inline-flex">
                    <div className="w-[968px] text-sky-950 text-base font-normal leading-normal">
                      The objective of this assignment is to deepen your
                      understanding of renewable energy technologies and their
                      potential to address the challenges of climate change and
                      sustainable development.
                      <br />
                      <br />
                      You will be required to research and write a comprehensive
                      research paper on a specific renewable energy technology
                      of your choice.
                    </div>
                  </div>
                </div>
                <div className="w-[1000px] h-12 left-0 top-0 absolute">
                  <div className="w-[1000px] h-12 left-0 top-0 absolute bg-white rounded-tl-lg rounded-tr-lg border border-sky-950 border-opacity-20" />
                  <div className="w-[369px] h-6 left-[16px] top-[12px] absolute">
                    <div className="w-[88px] h-4 left-[281px] top-[4px] absolute">
                      <div className="w-4 h-4 left-[72px] top-0 absolute">
                        <img
                          className="w-[12.50px] h-[9px] left-[1.75px] top-[3.25px] absolute"
                          src="https://via.placeholder.com/12x9"
                        />
                        <div className="w-4 h-4 left-0 top-0 absolute" />
                      </div>
                      <div className="w-4 h-4 left-[48px] top-0 absolute">
                        <img
                          className="w-[12.50px] h-[9px] left-[1.75px] top-[3.25px] absolute"
                          src="https://via.placeholder.com/12x9"
                        />
                        <div className="w-4 h-4 left-0 top-0 absolute" />
                      </div>
                      <div className="w-4 h-4 left-[24px] top-0 absolute">
                        <img
                          className="w-[12.50px] h-[9px] left-[1.75px] top-[3.25px] absolute"
                          src="https://via.placeholder.com/12x9"
                        />
                        <div className="w-4 h-4 left-0 top-0 absolute" />
                      </div>
                      <div className="w-4 h-4 left-0 top-0 absolute">
                        <img
                          className="w-[12.50px] h-[9px] left-[1.75px] top-[3.25px] absolute"
                          src="https://via.placeholder.com/12x9"
                        />
                        <div className="w-4 h-4 left-0 top-0 absolute" />
                      </div>
                    </div>
                    <div className="w-1 h-1 left-[261px] top-[10px] absolute opacity-20 bg-sky-950" />
                    <div className="w-[88px] h-4 left-[157px] top-[4px] absolute">
                      <div className="w-4 h-4 left-[72px] top-0 absolute">
                        <img
                          className="w-[9.50px] h-3 left-[3.25px] top-[2.75px] absolute"
                          src="https://via.placeholder.com/9x12"
                        />
                        <div className="w-4 h-4 left-0 top-0 absolute" />
                      </div>
                      <div className="w-4 h-4 left-[48px] top-0 absolute">
                        <div className="w-4 h-4 left-0 top-0 absolute" />
                      </div>
                      <div className="w-4 h-4 left-[24px] top-0 absolute">
                        <div className="w-4 h-4 left-0 top-0 absolute" />
                      </div>
                      <div className="w-4 h-4 left-0 top-0 absolute">
                        <img
                          className="w-[9px] h-[11px] left-[3.75px] top-[2.25px] absolute"
                          src="https://via.placeholder.com/9x11"
                        />
                        <div className="w-4 h-4 left-0 top-0 absolute" />
                      </div>
                    </div>
                    <div className="w-1 h-1 left-[137px] top-[10px] absolute opacity-20 bg-sky-950" />
                    <div className="w-[121px] h-6 left-0 top-0 absolute justify-center items-center gap-4 inline-flex">
                      <div className="text-sky-950 text-base font-bold leading-normal">
                        Headline #1
                      </div>
                      <div className="w-4 h-4 relative flex-col justify-start items-start flex">
                        <div className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[67px] h-6 left-[32px] top-[32px] absolute justify-center items-start gap-4 inline-flex">
                <div className="w-2 h-6 bg-rose-400 rounded" />
                <div className="text-sky-950 text-base font-bold leading-normal">
                  Label
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1064px] h-12 left-0 top-0 absolute justify-center items-start gap-[537px] inline-flex">
            <div className="text-sky-950 text-[32px] font-bold leading-[48px]">
              Green Tech Paper
            </div>
            <div className="w-[257px] self-stretch relative">
              <div className="w-28 h-12 left-[145px] top-0 absolute">
                <div className="w-12 h-12 left-[64px] top-0 absolute">
                  <div className="w-12 h-12 left-0 top-0 absolute bg-white rounded-lg" />
                  <div className="w-6 h-6 left-[12px] top-[12px] absolute">
                    <img
                      className="w-[3px] h-[15.75px] left-[10.50px] top-[4.12px] absolute"
                      src="https://via.placeholder.com/3x16"
                    />
                    <div className="w-6 h-6 left-0 top-0 absolute" />
                  </div>
                </div>
                <div className="w-12 h-12 left-0 top-0 absolute">
                  <div className="w-12 h-12 left-0 top-0 absolute bg-white rounded-lg" />
                  <div className="w-6 h-6 left-[12px] top-[12px] absolute">
                    <img
                      className="w-[23.25px] h-[15.75px] left-[0.37px] top-[4.12px] absolute"
                      src="https://via.placeholder.com/23x16"
                    />
                    <div className="w-6 h-6 left-0 top-0 absolute" />
                  </div>
                </div>
              </div>
              <div className="w-[113px] h-6 left-0 top-[12px] absolute justify-center items-start gap-3 inline-flex">
                <div className="text-sky-700 text-base font-bold leading-normal">
                  Published
                </div>
                <div className="w-6 h-6 relative flex-col justify-start items-start flex">
                  <div className="w-6 h-6" />
                  <img
                    className="w-[19.50px] h-[19.50px]"
                    src="https://via.placeholder.com/19x19"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1128px] h-28 left-[312px] top-0 absolute">
          <div className="w-[1128px] h-28 left-0 top-0 absolute bg-slate-50 shadow-inner" />
          <div className="w-[1064px] h-12 left-[32px] top-[32px] absolute">
            <div className="w-40 h-12 left-[904px] top-0 absolute">
              <img
                className="w-12 h-12 left-[112px] top-0 absolute rounded"
                src="https://via.placeholder.com/48x48"
              />
              <div className="w-6 h-6 left-[56px] top-[12px] absolute flex-col justify-start items-start inline-flex">
                <div className="w-6 h-6" />
                <img
                  className="w-[18.75px] h-[20.25px]"
                  src="https://via.placeholder.com/19x20"
                />
              </div>
              <div className="w-9 h-9 left-0 top-0 absolute">
                <div className="w-6 h-6 left-0 top-[12px] absolute">
                  <img
                    className="w-[21.77px] h-[20.29px] left-[1.11px] top-[1.84px] absolute"
                    src="https://via.placeholder.com/22x20"
                  />
                  <div className="w-6 h-6 left-0 top-0 absolute" />
                </div>
                <div className="w-6 h-6 left-[12px] top-0 absolute">
                  <div className="w-6 h-6 left-0 top-0 absolute bg-rose-400 rounded-lg" />
                  <div className="w-6 left-0 top-[4px] absolute text-center text-white text-xs font-bold leading-none">
                    7
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[577px] h-12 left-0 top-0 absolute justify-center items-center gap-8 inline-flex">
              <div className="w-[264px] h-12 relative">
                <div className="w-[264px] h-12 left-0 top-0 absolute bg-white rounded-lg" />
                <div className="w-[38px] h-6 pr-1 left-[210px] top-[12px] absolute justify-start items-center inline-flex">
                  <div className="px-2 py-1 bg-sky-700 bg-opacity-10 rounded justify-center items-center gap-2.5 inline-flex">
                    <div className="text-sky-950 text-xs font-bold leading-none">
                      ⌘ F
                    </div>
                  </div>
                </div>
                <div className="w-[105px] h-6 left-[16px] top-[12px] absolute justify-center items-start gap-4 inline-flex">
                  <div className="w-6 h-6 relative flex-col justify-start items-start flex">
                    <div className="w-6 h-6" />
                    <img
                      className="w-[20.27px] h-[20.27px]"
                      src="https://via.placeholder.com/20x20"
                      alt=""
                    />
                  </div>
                  <div className="opacity-60 text-sky-950 text-base font-normal leading-normal">
                    Search...
                  </div>
                </div>
              </div>
              <div>
                <span className="text-sky-950 text-xs font-medium leading-none">
                  Breadcrumb #1 / Breadcrumb #2 /{" "}
                </span>
                <span className="text-sky-700 text-xs font-bold leading-none">
                  Breadcrumb #3
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
