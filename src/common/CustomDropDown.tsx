interface IDropDownProps {
  options: any;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: any;
  wrapperClass?: string;
  selectClassName?: string;
}

const CustomDropDown = (props: IDropDownProps) => {
  const { options, onChange, value, wrapperClass, selectClassName } = props;

  return (
    <div className={`${wrapperClass}`}>
      <select
        onChange={onChange}
        value={value}
        title="name"
        className={`form-select ${selectClassName} h-[40px] block w-[100px]  border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-gray-100 rounded-lg`}
      >
        {options.map((option: any, index: number) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomDropDown;
