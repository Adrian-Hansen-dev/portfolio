import { SelectProps } from "./types.tsx";

function Select({ label, value, options, onChange }: SelectProps) {
  return (
    <>
      <label className="">
        {label}
        <select
          value={value}
          onChange={onChange}
          className="relative block w-full max-w-md rounded-lg border-gray-200 px-4 py-3 pe-9 text-sm shadow-md focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </>
  );
}

export default Select;
