/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Grade({
  grade,
  setGrade,
  rubricArray,
  currentCriterion,
  setCurrentCriterion,
}) {
  const [selected, setSelected] = useState(rubricArray[0].levels);
  const [aiSelected, setAiSelected] = useState("");
  const [userSelected, setUserSelected] = useState("");

  const setAiSelection = () => {
    for (let i = 0; i < currentCriterion.length; i++) {
      let aiSelection = "";
      console.log(grade[1].id, grade[1].score, currentCriterion[i].score);
      grade[1].score === currentCriterion[i].score
        ? ((aiSelection = "1"), setAiSelected(aiSelection))
        : null;
    }
  };

  const setUserSelection = (e) => {
    setUserSelected(e);
  };

  useEffect(() => {
    setCurrentCriterion(rubricArray[0].levels);
    setAiSelection();
  }, []);

  return (
    <>
      <div className="mt-10">
        {/* <fieldset>
          <legend className="text-lg font-bold leading-6 text-gray-900">
            {rubricArray[0].name}
          </legend>
          <div className="mt-4 divide-gray-200">
            {currentCriterion.map((grade, gradeIdx) => (
              <div
                key={gradeIdx}
                id={grade.id}
                // onClick={setUserSelection}
                
                className={`relative flex items-start mb-4 p-4 ${ aiSelected === gradeIdx ? "border-2 border-sky-700" : "border border-gray-200" }  rounded shadow hover:shadow-xl`}
              >
                <div className="min-w-0 w-full flex flex-col text-sm leading-6">
                  <label
                    htmlFor={`person-${grade.id}`}
                    className="select-none mt-2 font-sm text-gray-700"
                  >
                    {grade.description}
                  </label>
                  <label
                    htmlFor={`person-${grade.id}`}
                    className="select-none w-16 mt-4 text-center font-sm text-gray-700 bg-sky-100 rounded-full"
                  >
                    + {grade.score}
                  </label>
                </div>
                <div className="ml-3 flex h-6 items-center">
                  <input
                    id={`grades-${grade.id}`}
                    name={`grades-${grade.id}`}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-sky-700 focue-ring-none"
                  />
                </div>
              </div>
            ))}
          </div>
        </fieldset> */}

        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-4">
            {currentCriterion.map((criterion) => (
              <RadioGroup.Option
                key={criterion.name}
                value={criterion}
                className={({ active }) =>
                  classNames(
                    active
                      ? "border-2 border-rose-400 ring-none outline-none"
                      : "border border-gray-300",
                    "relative block cursor-pointer rounded-lg bg-white px-6 py-4 shadow focus:outline-none sm:flex sm:justify-between hover:shadow-lg"
                  )
                }
              >
                {({ active, checked }) => (
                  <>
                    <span className="flex items-center">
                      <span className="flex flex-col text-sm">
                        <RadioGroup.Label
                          as="span"
                          className="font-medium text-gray-900"
                        >
                          {criterion.name}
                        </RadioGroup.Label>
                        <RadioGroup.Description
                          as="span"
                          className="text-gray-500"
                        >
                          <span className="block sm:inline">
                            {criterion.description}
                          </span>{" "}
                          <span
                            className="hidden sm:mx-1 sm:inline"
                            aria-hidden="true"
                          >
                            &middot;
                          </span>{" "}
                          <span className="block sm:inline">{criterion.score}</span>
                        </RadioGroup.Description>
                      </span>
                    </span>
                    <RadioGroup.Description
                      as="span"
                      className="mt-2 flex text-sm sm:ml-4 sm:mt-0 sm:flex-col sm:text-right"
                    >

                    </RadioGroup.Description>
                    <span
                      className={classNames(
                        active ? "border" : "border-2",
                        checked ? "border-rose-400" : "border-transparent",
                        "pointer-events-none absolute -inset-px rounded-lg"
                      )}
                      aria-hidden="true"
                    />
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </>
  );
}

// Other potential code

// /* eslint-disable @next/next/no-img-element */
// import React, { useEffect, useState } from "react";
// import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

// export default function Grade({ grade, setGrade, rubricArray }) {
//   const [currentCriteron, setCurrentCriteron] = useState([{}]);

//   const toggleCheck = (id, selector) => {
//     const selection = document.getElementById(`${id}Container`);
//     const aiSelectionChecked = document.getElementById(`${id}AiChecked`);
//     const userSelectionChecked = document.getElementById(`${id}UserChecked`);
//     const selectionUnchecked = document.getElementById(`${id}Unhecked`);
//     selection != undefined && selector === "ai"
//       ? (
//         selection.classList.toggle("border"),
//         selection.classList.toggle("border-2"),
//         selection.classList.toggle("border-gray-200"),
//         selection.classList.toggle("border-sky-700"),
//         console.log(selection)
//         )
//       : null;
//     selection != undefined && selector === "user"
//       ? (
//         selection.classList.toggle("border"),
//         selection.classList.toggle("border-2"),
//         selection.classList.toggle("border-gray-200"),
//         selection.classList.toggle("border-rose-400"),
//         console.log(selection)
//         )
//       : null;
//     aiSelectionChecked != undefined && selector === "ai"
//       ?aiSelectionChecked.classList.toggle("hidden")
//       : null;
//     userSelectionChecked != undefined && selector === "user"
//       ?userSelectionChecked.classList.toggle("hidden")
//       : null;
//     selectionUnchecked != undefined
//       ? selectionUnchecked.classList.toggle("hidden")
//       : null;
//   };

//   const setSelected = (id, selector) => {
//     toggleCheck(id, selector);
//   };

//   const setAiSelection = () => {
//     setSelected("0Container", "ai")
//     // for (let i = 0; i < currentCriteron.length; i++) {
//     //   grade[1].score === currentCriteron[i].score
//     //     ? setSelected(grade[currentCriteron[i].id], "ai")
//     //     : null;
//     // }
//   };

//   const setUserSelection = (id) => {
//     setSelected(id, "user");
//   };

//   useEffect(() => {
//     setCurrentCriteron(rubricArray[0].levels);
//     setAiSelection();
//   }, []);

//   return (
//     <>
//       <div className="mt-10">
//         <fieldset>
//           <legend className="text-lg font-bold leading-6 text-gray-900">
//             {rubricArray[0].name}
//           </legend>
//           <div className="mt-4 divide-gray-200">
//             {currentCriteron.map((grade, gradeIdx) => (
//               <div
//                 key={gradeIdx}
//                 id={`${gradeIdx}Container`}
//                 onClick={() => {
//                   console.log(gradeIdx, `${gradeIdx}Container`);
//                   setUserSelection(gradeIdx);
//                 }}
//                 className="relative flex items-start mb-4 p-4 border border-gray-200 rounded shadow hover:shadow-xl cursor-pointer"
//               >
//                 <div className="min-w-0 w-full flex flex-col text-sm leading-6">
//                   <label
//                     htmlFor={`${gradeIdx}Description`}
//                     className="select-none mt-2 font-sm text-gray-700"
//                   >
//                     {grade.description}
//                   </label>
//                   <label
//                     htmlFor={`${gradeIdx}Score`}
//                     className="select-none w-16 mt-4 text-center font-sm text-gray-700 bg-sky-100 rounded-full"
//                   >
//                     + {grade.score}
//                   </label>
//                 </div>
//                 <div className="ml-3 flex h-6 items-center">
//                   <MdCheckBoxOutlineBlank
//                     id={`${gradeIdx}Unhecked`}
//                     name={`${gradeIdx}Unhecked`}
//                     className="h-4 w-4 rounded border-gray-300 text-gray-700 outline-none ring-none"
//                   />
//                   <MdCheckBox
//                     id={`${gradeIdx}AiChecked`}
//                     name={`${gradeIdx}AiChecked`}
//                     className="hidden h-4 w-4 rounded border-gray-300 text-sky-700 outline-none ring-none"
//                   />
//                   <MdCheckBox
//                     id={`${gradeIdx}UserChecked`}
//                     name={`${gradeIdx}UserChecked`}
//                     className="hidden h-4 w-4 rounded border-gray-300 text-rose-400 outline-none ring-none"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </fieldset>
//       </div>
//     </>
//   );
// }
