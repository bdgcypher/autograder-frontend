/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";

export default function Grade({ grade, setGrade, rubricArray, currentCriterion, setCurrentCriterion }) {
  const [selected, setSelected] = useState("");

  const setAiSelection = () => {
    for (let i = 0; i < currentCriterion.length; i++) {
      let aiSelection = ""
      console.log(grade[1].id, grade[1].score, currentCriterion[i].score)
      grade[1].score === currentCriterion[i].score ? (
        aiSelection = grade[1].id,
        setSelected(aiSelection)
      ) : (null)
    }
  }

  const setUserSelection = (e) => {
    setSelected(e)
  }

  useEffect(() => {
    setCurrentCriterion(rubricArray[0].levels);
    setAiSelection();
  }, []);

  return (
    <>
      <div className="mt-10">
        <fieldset>
          <legend className="text-lg font-bold leading-6 text-gray-900">
            {rubricArray[0].name}
          </legend>
          <div className="mt-4 divide-gray-200">
            {currentCriterion.map((grade, gradeIdx) => (
              <div
                key={gradeIdx}
                id={grade.id}
                // onClick={setUserSelection}
                
                className={`relative flex items-start mb-4 p-4 ${ selected === grade.id ? "border-2 border-sky-700" : "border border-gray-200" }  rounded shadow hover:shadow-xl`}
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
        </fieldset>
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

