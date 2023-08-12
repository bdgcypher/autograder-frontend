import React, { useEffect, useRef, useState } from "react";
import { BiEditAlt } from "react-icons/bi";

export default function EditableRubric() {
  const [tableData, setTableData] = useState([
    ["..."],
    ["..."],
    // ... additional rows ...
  ]);

  const [editedCell, setEditedCell] = useState({
    rowIndex: null,
    columnIndex: null,
    value: "",
  });

  const inputRef = useRef(null); // Ref to the input element

  const longestRowLength = Math.max(...tableData.map((row) => row.length));

  const handleAddRow = () => {
    const newRow = Array.from({ length: 1 }, () => "...");
    setTableData([...tableData, newRow]);
  };

  const handleAddColumn = (rowIndex) => {
    const updatedTableData = tableData.map((row, index) => {
      if (index === rowIndex) {
        return [...row, "..."];
      } else {
        return row;
      }
    });
    setTableData(updatedTableData);
  };

  const handleSaveCell = () => {
    if (editedCell.rowIndex !== null && editedCell.columnIndex !== null) {
      const updatedTableData = tableData.map((row, rowIndex) =>
        row.map((cell, columnIndex) =>
          rowIndex === editedCell.rowIndex &&
          columnIndex === editedCell.columnIndex
            ? editedCell.value
            : cell
        )
      );
      setTableData(updatedTableData);
      setEditedCell({
        rowIndex: null,
        columnIndex: null,
        value: "",
      });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSaveCell();
    }
  };

  useEffect(() => {
    if (editedCell.rowIndex !== null && editedCell.columnIndex !== null) {
      // Focus the input element after it has been rendered
      const inputElement = document.getElementById(
        `input-${editedCell.rowIndex}-${editedCell.columnIndex}`
      );
      if (inputElement) {
        inputElement.focus();
      }
    }
  }, [editedCell]);

  return (
    <div className="max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-6xl w-screen mx-auto p-4">
      <div className="mt-10 p-4 bg-white rounded shadow-md">
        <div className="px-2">
          <div className="">
            <div className="sm:flex-auto">
              <div className="flex flex-row px-4 justify-between sm:flex sm:items-center">
                <div className="sm:flex-auto">
                  <div className="flex flex-row">
                    <div className="h-6 w-2 -ml-4 mr-4 bg-rose-400 rounded" />
                    <h1 className="text-lg font-semibold leading-6 text-gray-900">
                      Rubric
                    </h1>
                  </div>
                  <p className="mt-2 text-sm text-gray-700">
                    Criteria for this assignment.
                  </p>
                </div>
                <div className="mt-4 -mr-4 sm:mt-0">
                  <button
                    type="button"
                    className="flex flex-row rounded bg-sky-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                  >
                    Edit
                    <BiEditAlt className="ml-2 text-xl" />
                  </button>
                </div>
              </div>
              <div className="">
                <div className="mt-8 flow-root">
                  <div className="-my-2 mb-4">
                    <div className="w-full overflow-x-scroll inline-block rounded">
                      <table className="w-full border border-gray-300">
                        <thead>
                          <tr className="flex divide-x divide-gray-300">
                            <th
                              scope="col"
                              className="w-28 lg:w-32 py-3.5 pl-4 pr-4 text-sm font-semibold bg-green-200 text-gray-900 sm:pl-0 rounded-tl"
                            >
                              Name
                            </th>
                            <th
                              scope="colgroup"
                              colSpan={longestRowLength - 2}
                              className="grow px-4 py-3.5  text-sm font-semibold bg-slate-100 text-gray-900"
                            >
                              Ratings
                            </th>
                            <th
                              scope="col"
                              className="w-14 py-3.5 pl-2 pr-2 text-sm font-semibold bg-rose-200 text-gray-900 rounded-tr"
                            >
                              Total
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          {tableData.map((row, rowIndex) => (
                            <tr
                              key={rowIndex}
                              className="flex divide-x divide-y divide-gray-300"
                            >
                              <td
                                key={rowIndex + 1}
                                className="flex-none w-28 lg:w-32 py-4 pl-2 pr-4 text-sm font-medium text-gray-900 border-b border-gray-300"
                              >
                                Criterion...
                              </td>
                              {row.map((cell, columnIndex) => (
                                <td
                                  key={columnIndex}
                                  className="w-full border relative text-sm text-gray-500"
                                >
                                  <div className="relative w-full h-full px-6 py-1 flex flex-row justify-between">
                                    {editedCell.rowIndex === rowIndex &&
                                    editedCell.columnIndex === columnIndex ? (
                                      <input
                                        id={`input-${rowIndex}-${columnIndex}`} // Set a unique id for the input
                                        type="text"
                                        value={editedCell.value}
                                        onChange={(e) =>
                                          setEditedCell({
                                            rowIndex: editedCell.rowIndex,
                                            columnIndex: editedCell.columnIndex,
                                            value: e.target.value,
                                          })
                                        }
                                        onBlur={handleSaveCell}
                                        onKeyDown={handleKeyPress}
                                        ref={inputRef} // Set the ref to the input element
                                        className="w-full outline-none bg-transparent rounded text-gray-900"
                                      />
                                    ) : (
                                      <div
                                        onClick={() => {
                                          setEditedCell({
                                            rowIndex: rowIndex,
                                            columnIndex: columnIndex,
                                            value: cell,
                                          });
                                        }}
                                        className="w-full h-full cursor-pointer"
                                      >
                                        {cell}
                                      </div>
                                    )}
                                    {columnIndex === row.length - 1 &&
                                      rowIndex >= 0 && (
                                        <button
                                          onClick={() =>
                                            handleAddColumn(rowIndex)
                                          } // Pass the rowIndex
                                          className="bg-sky-200 text-gray-700 font-semibold z-10 h-8 w-8 -mr-10 mt-1 rounded-full opacity-70 hover:opacity-100"
                                        >
                                          +
                                        </button>
                                      )}
                                  </div>
                                </td>
                              ))}
                              <td
                                key={rowIndex + 5}
                                className="flex-none w-14 py-4 text-center text-sm text-gray-900 font-bold sm:pr-0 border-b border-gray-300"
                              >
                                ...
                              </td>
                              {/* {rowIndex > 0 && (
                                <div className="mt-4 text-gray-900 group cursor-pointer">
                                  <button
                                    onClick={() => handleRemoveRow(rowIndex)}
                                    className="bg-rose-400 text-white font-semibold z-10 px-2 py-1 ml-10 -mr-6 my-auto rounded opacity-70 group-hover:opacity-100"
                                  >
                                    Criterion -
                                  </button>
                                </div>
                              )} */}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className="mt-4 text-gray-900">
                        <button
                          onClick={handleAddRow}
                          className="bg-blue-200 text-gray-700 font-semibold z-10 px-2 py-1 mb-10 -mr-6 my-auto rounded opacity-70 hover:opacity-100 cursor-pointer"
                        >
                          Criterion +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
