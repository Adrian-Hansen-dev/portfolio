import { SelectProps } from "./types.tsx";

function Select({ label, value, options, onChange }: SelectProps) {
  return (
    <div>
      <label className="flex items-center gap-1 text-sm">
        {label}
        <select
          value={value}
          onChange={onChange}
          className="block max-w-md cursor-pointer appearance-none rounded-xl px-2 py-3 font-bold hover:bg-gray-100 focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default Select;
