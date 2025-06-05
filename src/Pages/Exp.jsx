import Select from "react-select";

const options = [
  { value: "one", label: "One" },
  { value: "two", label: "Two" },
];

const darkStyles = {
  control: (base) => ({
    ...base,
    backgroundColor: "#1f2937", // Tailwind's gray-800
    borderColor: "#374151", // Tailwind's gray-700
    color: "white",
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: "#1f2937",
    color: "white",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? "#374151" : "#1f2937",
    color: "white",
  }),
  singleValue: (base) => ({
    ...base,
    color: "white",
  }),
  input: (base) => ({
    ...base,
    color: "white",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#9ca3af", // gray-400
  }),
};

export default function DarkSelect() {
  return (
    <div className="w-64">
      <Select options={options} styles={darkStyles} />
    </div>
  );
}
