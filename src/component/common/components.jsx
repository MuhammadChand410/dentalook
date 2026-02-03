import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { CalenderIcon, DropdownRotateIcon } from "../../assets/icon";
import { subDays } from "date-fns";
import { enUS } from "date-fns/locale";

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

  const [open, setOpen] = React.useState(false);
  return (
    <div className="sm:sticky sm:top-0 z-25 bg-white py-6 px-6 rounded-2xl border border-[#E0E0E0]">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <div className="max-w-[320px] w-full">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>

        <div className="grid grid-cols-2 sm:flex 2xl:flex-nowrap flex-wrap gap-2 sm:justify-end">
          {dropdowns.map(({ id, title, options, extraClass }) => {
            const state = dropdownState[id];

            return (
              <div key={id} className="relative">
                <button
                  onClick={() => toggleOpen(id)}
                  className={`flex cursor-pointer items-center justify-between gap-2 px-3 py-2 border border-[#E0E0E0] font-normal shadow-xs rounded-3xl text-sm bg-white ${extraClass}`}
                >
                  <span className="truncate">{getButtonLabel(state, title)}</span>
                  <DropdownRotateIcon rotated={state.open} className="w-4 h-4" />
                </button>


                {state.open && (
                  <div className="absolute mt-2 w-30 bg-white border border-[#E0E0E0] rounded-xl shadow p-2 z-50">
                    <input
                      className="w-full px-2 py-1 border border-[#E0E0E0] shadow-xs rounded text-xs mb-2"
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

          <div className="relative">
            <div
              onClick={() => setShowPicker(!showPicker)}
              className="flex items-center gap-2 px-3 py-2 border border-[#E0E0E0] rounded-3xl cursor-pointer"
            >
              <CalenderIcon className="w-4 h-4" />
              <span className="text-sm text-gray-600">
                {formatDateRange(state[0].startDate, state[0].endDate)}
              </span>
              <CalenderIcon className="w-3 h-3" />
            </div>

            {showPicker && (
              <div className="absolute right-0 mt-2 z-50 bg-white shadow p-2 rounded-xl">
                <DateRangePicker
                  onChange={(item) => setState([item.selection])}
                  ranges={state}
                  months={1}
                  direction="horizontal"
                  rangeColors={["#087BB3"]}
                  locale={enUS}
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
