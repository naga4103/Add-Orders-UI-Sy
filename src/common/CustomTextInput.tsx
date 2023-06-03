// Import React and TypeScript
import React, { FC } from "react";
import { TextInput } from "flowbite-react";

// Define the interface for the component's props
interface CustomTextInputProps {
  required?: boolean;
  [key: string]: any;
  maxLength?: number;
  placeholder?: string;
}

// Update the component definition to use the props interface
const CustomTextInput: FC<CustomTextInputProps> = ({
  required,
  maxLength,
  ...props
}) => {
  return (
    <div className="relative">
      <TextInput
        {...props}
        maxLength={maxLength && maxLength}
        placeholder="Type to search..."
        className="bg-transparent"
      />
      {required && (
        <span className="absolute text-red-500 top-1/2 transform -translate-y-1/2 right-3">
          *
        </span>
      )}
    </div>
  );
};

export default CustomTextInput;
