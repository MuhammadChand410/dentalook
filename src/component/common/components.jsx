// import { useEffect, useState } from "react";
// import { addDays, subDays, startOfMonth, endOfMonth } from "date-fns";
// import { DateRangePicker } from "react-date-range";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
// import { FaCalendar, FaCaretDown } from "react-icons/fa";
// import { ButtonIcon, DownArrowIcon } from "../../assets/icon";
// import { DateRangePicker } from "react-date-range";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";


// export default function FilterHeader({ title, subtitle, dropdowns }) {
//     const [state, setState] = useState([
//         {
//             startDate: subDays(new Date(), 29),
//             endDate: new Date(),
//             key: "selection",
//         },
//     ]);

//     const [showPicker, setShowPicker] = useState(false);

//     const formatDateRange = (start, end) => {
//         return `${start.toLocaleDateString("en-US", {
//             month: "long",
//             day: "numeric",
//             year: "numeric",
//         })} - ${end.toLocaleDateString("en-US", {
//             month: "long",
//             day: "numeric",
//             year: "numeric",
//         })}`;
//     };

//     const DROPDOWN_BUTTON = [
//         { id: 1, title: "Province", options: ["Punjab", "Sindh", "KPK", "Balochistan"], extraClass: "sm:max-w-[97px] grow" },
//         { id: 2, title: "Region", options: ["Region 1", "Region 2", "Region 3", "Region 4"], extraClass: "sm:max-w-22 grow" },
//         { id: 3, title: "Clinics", options: ["Clinic 1", "Clinic 2", "Clinic 3", "Clinic 4"], extraClass: "sm:max-w-[84px] grow" },
//         { id: 4, title: "Department", options: ["Department 1", "Department 2", "Department 3", "Department 4"], extraClass: "sm:max-w-[122px] grow" },
//         { id: 5, title: "Users", options: ["User 1", "User 2", "User 3", "User 4"], extraClass: "sm:max-w-20 grow" },
//     ];
//     const [dropdownState, setDropdownState] = useState(
//         DROPDOWN_BUTTON.reduce((acc, cur) => {
//             acc[cur.id] = { open: false, search: "", selected: [] };
//             return acc;
//         }, {})
//     );

//     const toggleOpen = (id) => {
//         setDropdownState(prev => {
//             const updated = {};

//             Object.keys(prev).forEach(key => {
//                 updated[key] = {
//                     ...prev[key],
//                     open: Number(key) === id ? !prev[key].open : false,
//                 };
//             });

//             return updated;
//         });
//     };




//     const setSearch = (id, value) => {
//         setDropdownState((prev) => ({
//             ...prev,
//             [id]: { ...prev[id], search: value },
//         }));
//     };

//     const setSelected = (id, value) => {
//         setDropdownState(prev => {
//             const selected = prev[id].selected;

//             return {
//                 ...prev,
//                 [id]: {
//                     ...prev[id],
//                     selected: selected.includes(value)
//                         ? selected.filter(v => v !== value)
//                         : [...selected, value],
//                 },
//             };
//         });
//     };
//     const getButtonLabel = (state, title) => {
//         if (state.selected.length === 0) return title;
//         if (state.selected.length === 1) return state.selected[0];
//         return `${state.selected[0]}, +${state.selected.length - 1}`;
//     };



//     return (
//         <div className="sticky z-50 top-0 py-8">
 
        
//             <div className="px-8 flex flex-col sm:flex-row justify-between items-start gap-4 py-8 bg-white rounded-2xl border border-[#E2E8F0]">
//                 <div className="md:min-w-[150px] mb-4">
//                     <h2 className="text-2xl font-bold">{title}</h2>
//                     <p className="text-sm text-[#757575]">{subtitle}</p>
//                 </div>
//                 <div className="grid grid-cols-2 sm:flex items-center sm:justify-end flex-wrap gap-2">
//                     {dropdowns.map(({ id, title, options, extraClass }) => {
//                         const state = dropdownState[id];

//                         return (
//                             <div key={id} className="relative">

//                                 <button
//                                     onClick={() => toggleOpen(id)}

//                                     className={`
//                                           inline-flex items-center justify-between gap-2
//                                            px-3 py-2 border border-[#E0E0E0] rounded-3xl
//                                            text-sm text-gray-500 bg-white cursor-pointer
//                                            w-full
//                                             ${extraClass}
//                                         `}

//                                 >
//                                     <span
//                                         className={`
//                                                 truncate text-left
//                                         ${state.selected.length > 0
//                                                 ? "text-[#0A0E1A] font-medium "
//                                                 : "text-gray-500 w-full h-full"}
//                                                   `}
//                                     >
//                                         {getButtonLabel(state, title)}
//                                     </span>

//                                     <span>  <ButtonIcon className="shrink-0 w-4 h-4" /></span>
//                                 </button>



//                                 {state.open && (
//                                     <div
//                                         className="absolute right-0 left-auto w-32 z-50 mt-1 p-2 shadow-sm border border-[#E0E0E0] rounded-xl bg-white"

//                                     >
//                                         <input
//                                             className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:outline-none focus:border-[#3CB097]"
//                                             placeholder="Search options"
//                                             value={state.search}
//                                             onChange={(e) => setSearch(id, e.target.value)}
//                                         />

//                                         {options
//                                             .filter((d) => d.toLowerCase().includes(state.search.toLowerCase()))
//                                             .map((d, i) => (
//                                                 <label
//                                                     key={i}
//                                                     className="p-1.5 flex items-center gap-1.5 rounded-lg hover:bg-gray-200 cursor-pointer text-xs"
//                                                 >
//                                                     <input
//                                                         type="checkbox"
//                                                         checked={state.selected.includes(d)}
//                                                         onChange={() => setSelected(id, d)}
//                                                         className="w-4 h-4"
//                                                     />
//                                                     {d}
//                                                 </label>
//                                             ))}

//                                     </div>

//                                 )}

//                             </div>

//                         );
//                     })}
//                     <div className="relative">
//                         <div
//                             className="flex items-center justify- gap-2 bg-white cursor-pointer px-3 py-2 border border-[#E0E0E0] rounded-3xl w-full"
//                             onClick={() => setShowPicker(!showPicker)}
//                         >
//                             <FaCalendar />
//                             <span className="text-sm font-medium text-gray-500">{formatDateRange(state[0].startDate, state[0].endDate)}</span>

//                             <FaCaretDown />
//                         </div>

//                         {showPicker && (
//                             <div>
//                                 <DateRangePicker
//                                     onChange={(item) => setState([item.selection])}
//                                     showSelectionPreview={true}
//                                     moveRangeOnFirstSelection={false}
//                                     months={1}
//                                     ranges={state}
//                                     direction="horizontal"
//                                     rangeColors={["#087BB3"]}
//                                 />
//                                 <div className="flex justify-end mt-2">
//                                     <button
//                                         className="px-4 py-1 bg-[#087BB3] text-white rounded hover:bg-[#087BB3]"
//                                         onClick={() => setShowPicker(false)}
//                                     >
//                                         Apply
//                                     </button>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                     <button class="cursor-pointer px-3 py-2 text-sm text-[#1976D2] hover:bg-blue-50 rounded-lg whitespace-nowrap">Clear Filters</button>
//                 </div>

//             </div>
//         </div>
//     )
// }




import { useState } from "react";
import { subDays } from "date-fns";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { ButtonIcon } from "../../assets/icon";

export default function FilterHeader({ title, subtitle, dropdowns }) {
  const [state, setState] = useState([
    {
      startDate: subDays(new Date(), 29),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [showPicker, setShowPicker] = useState(false);

  const formatDateRange = (start, end) =>
    `${start.toLocaleDateString()} - ${end.toLocaleDateString()}`;

  const [dropdownState, setDropdownState] = useState(
    dropdowns.reduce((acc, cur) => {
      acc[cur.id] = { open: false, search: "", selected: [] };
      return acc;
    }, {})
  );

  const toggleOpen = (id) => {
    setDropdownState((prev) => {
      const updated = {};
      Object.keys(prev).forEach((key) => {
        updated[key] = {
          ...prev[key],
          open: Number(key) === id ? !prev[key].open : false,
        };
      });
      return updated;
    });
  };

  const setSearch = (id, value) => {
    setDropdownState((prev) => ({
      ...prev,
      [id]: { ...prev[id], search: value },
    }));
  };

  const setSelected = (id, value) => {
    setDropdownState((prev) => {
      const selected = prev[id].selected;
      return {
        ...prev,
        [id]: {
          ...prev[id],
          selected: selected.includes(value)
            ? selected.filter((v) => v !== value)
            : [...selected, value],
        },
      };
    });
  };

  const getButtonLabel = (state, title) => {
    if (state.selected.length === 0) return title;
    if (state.selected.length === 1) return state.selected[0];
    return `${state.selected[0]}, +${state.selected.length - 1}`;
  };

  return (
    <div className="sticky top-0 z-50 bg-white py-6 px-6 rounded-2xl border">
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {dropdowns.map(({ id, title, options }) => {
            const state = dropdownState[id];

            return (
              <div key={id} className="relative">
                <button
                  onClick={() => toggleOpen(id)}
                  className="flex items-center justify-between gap-2 px-3 py-2 border rounded-3xl text-sm bg-white"
                >
                  <span className="truncate">
                    {getButtonLabel(state, title)}
                  </span>
                  <ButtonIcon className="w-4 h-4" />
                </button>

                {state.open && (
                  <div className="absolute mt-2 w-40 bg-white border rounded-xl shadow p-2 z-50">
                    <input
                      className="w-full px-2 py-1 border rounded text-xs mb-2"
                      placeholder="Search..."
                      value={state.search}
                      onChange={(e) => setSearch(id, e.target.value)}
                    />

                    {options
                      .filter((o) =>
                        o.toLowerCase().includes(state.search.toLowerCase())
                      )
                      .map((o) => (
                        <label
                          key={o}
                          className="flex items-center gap-2 text-xs p-1 cursor-pointer hover:bg-gray-100 rounded"
                        >
                          <input
                            type="checkbox"
                            checked={state.selected.includes(o)}
                            onChange={() => setSelected(id, o)}
                          />
                          {o}
                        </label>
                      ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* DATE PICKER */}
          <div className="relative">
            <div
              onClick={() => setShowPicker(!showPicker)}
              className="flex items-center gap-2 px-3 py-2 border rounded-3xl cursor-pointer"
            >
              <ButtonIcon className="w-4 h-4" />
              <span className="text-sm text-gray-600">
                {formatDateRange(state[0].startDate, state[0].endDate)}
              </span>
              <ButtonIcon className="w-3 h-3" />
            </div>

            {showPicker && (
              <div className="absolute right-0 mt-2 z-50 bg-white shadow p-2 rounded-xl">
                <DateRangePicker
                  onChange={(item) => setState([item.selection])}
                  ranges={state}
                  months={1}
                  direction="horizontal"
                  rangeColors={["#087BB3"]}
                />
                <div className="flex justify-end">
                  <button
                    className="px-4 py-1 bg-blue-600 text-white rounded"
                    onClick={() => setShowPicker(false)}
                  >
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>

          <button className="px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg">
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
}

// import { useState } from "react";

// import { addDays, subDays, startOfMonth, endOfMonth } from "date-fns";
// import { DateRangePicker } from "react-date-range";
// import "react-date-range/dist/styles.css";
// import "react-date-range/dist/theme/default.css";
// // import { FaCalendar, FaCaretDown } from "react-icons/fa";
// import { ButtonIcon } from "../../assets/icon";

// export default function FilterHeader({ title, subtitle, dropdowns }) {
//   const [state, setState] = useState([
//     {
//       startDate: subDays(new Date(), 29),
//       endDate: new Date(),
//       key: "selection",
//     },
//   ]);

//   const [showPicker, setShowPicker] = useState(false);

//   const formatDateRange = (start, end) => {
//     return `${start.toLocaleDateString("en-US", {
//       month: "long",
//       day: "numeric",
//       year: "numeric",
//     })} - ${end.toLocaleDateString("en-US", {
//       month: "long",
//       day: "numeric",
//       year: "numeric",
//     })}`;
//   };

//   const DROPDOWN_BUTTON = [
//     { id: 1, title: "Province", options: ["Punjab", "Sindh", "KPK", "Balochistan"], extraClass: "sm:max-w-[97px] grow" },
//     { id: 2, title: "Region", options: ["Region 1", "Region 2", "Region 3", "Region 4"], extraClass: "sm:max-w-22 grow" },
//     { id: 3, title: "Clinics", options: ["Clinic 1", "Clinic 2", "Clinic 3", "Clinic 4"], extraClass: "sm:max-w-[84px] grow" },
//     { id: 4, title: "Department", options: ["Department 1", "Department 2", "Department 3", "Department 4"], extraClass: "sm:max-w-[122px] grow" },
//     { id: 5, title: "Users", options: ["User 1", "User 2", "User 3", "User 4"], extraClass: "sm:max-w-20 grow" },
//   ];

//   const [dropdownState, setDropdownState] = useState(
//     DROPDOWN_BUTTON.reduce((acc, cur) => {
//       acc[cur.id] = { open: false, search: "", selected: [] };
//       return acc;
//     }, {})
//   );

//   const toggleOpen = (id) => {
//     setDropdownState(prev => {
//       const updated = {};
//       Object.keys(prev).forEach(key => {
//         updated[key] = {
//           ...prev[key],
//           open: Number(key) === id ? !prev[key].open : false,
//         };
//       });
//       return updated;
//     });
//   };

//   const setSearch = (id, value) => {
//     setDropdownState(prev => ({
//       ...prev,
//       [id]: { ...prev[id], search: value },
//     }));
//   };

//   const setSelected = (id, value) => {
//     setDropdownState(prev => {
//       const selected = prev[id].selected;
//       return {
//         ...prev,
//         [id]: {
//           ...prev[id],
//           selected: selected.includes(value)
//             ? selected.filter(v => v !== value)
//             : [...selected, value],
//         },
//       };
//     });
//   };

//   const getButtonLabel = (state, title) => {
//     if (state.selected.length === 0) return title;
//     if (state.selected.length === 1) return state.selected[0];
//     return `${state.selected[0]}, +${state.selected.length - 1}`;
//   };

//   return (
//     <div className="sticky z-50 top-0 py-8">
//       <div className="px-8 flex flex-col sm:flex-row justify-between items-start gap-4 py-8 bg-white rounded-2xl border border-[#E2E8F0]">

//         {/* Title */}
//         <div className="md:min-w-[150px] mb-4">
//           <h2 className="text-2xl font-bold">{title}</h2>
//           <p className="text-sm text-[#757575]">{subtitle}</p>
//         </div>

//         {/* Filters */}
//         <div className="grid grid-cols-2 sm:flex items-center sm:justify-end flex-wrap gap-2">

//           {dropdowns.map(({ id, title, options, extraClass }) => {
//             const state = dropdownState[id];

//             return (
//               <div key={id} className="relative">
//                 <button
//                   onClick={() => toggleOpen(id)}
//                   className={`inline-flex items-center justify-between gap-2
//                     px-3 py-2 border border-[#E0E0E0] rounded-3xl
//                     text-sm bg-white cursor-pointer w-full ${extraClass}`}
//                 >
//                   <span className={`truncate text-left ${state.selected.length ? "text-[#0A0E1A] font-medium" : "text-gray-500"}`}>
//                     {getButtonLabel(state, title)}
//                   </span>
//                   <ButtonIcon className="w-4 h-4 shrink-0" />
//                 </button>

//                 {state.open && (
//                   <div className="absolute right-0 w-32 z-50 mt-1 p-2 shadow-sm border border-[#E0E0E0] rounded-xl bg-white">
//                     <input
//                       className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:outline-none"
//                       placeholder="Search options"
//                       value={state.search}
//                       onChange={(e) => setSearch(id, e.target.value)}
//                     />

//                     {options
//                       .filter((d) => d.toLowerCase().includes(state.search.toLowerCase()))
//                       .map((d, i) => (
//                         <label key={i} className="p-1.5 flex items-center gap-1.5 rounded-lg hover:bg-gray-200 cursor-pointer text-xs">
//                           <input
//                             type="checkbox"
//                             checked={state.selected.includes(d)}
//                             onChange={() => setSelected(id, d)}
//                             className="w-4 h-4"
//                           />
//                           {d}
//                         </label>
//                       ))}
//                   </div>
//                 )}
//               </div>
//             );
//           })}

//           {/* Date Range */}
//           <div className="relative">
//             <div
//               className="flex items-center gap-2 bg-white cursor-pointer px-3 py-2 border border-[#E0E0E0] rounded-3xl"
//               onClick={() => setShowPicker(!showPicker)}
//             >
//               <FaCalendar />
//               <span className="text-sm font-medium text-gray-500">
//                 {formatDateRange(state[0].startDate, state[0].endDate)}
//               </span>
//               <FaCaretDown />
//             </div>

//             {showPicker && (
//               <div className="absolute right-0 z-50 mt-2 bg-white border rounded-xl p-2 shadow">
//                 <DateRangePicker
//                   onChange={(item) => setState([item.selection])}
//                   months={1}
//                   ranges={state}
//                   direction="horizontal"
//                   rangeColors={["#087BB3"]}
//                 />
//                 <div className="flex justify-end mt-2">
//                   <button
//                     className="px-4 py-1 bg-[#087BB3] text-white rounded"
//                     onClick={() => setShowPicker(false)}
//                   >
//                     Apply
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Clear Button */}
//           <button
//             className="cursor-pointer px-3 py-2 text-sm text-[#1976D2] hover:bg-blue-50 rounded-lg whitespace-nowrap"
//           >
//             Clear Filters
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
