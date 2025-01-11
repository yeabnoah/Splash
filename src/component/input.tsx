import clsx from "clsx";
import { View, Text, TextInput, TextInputProps } from "react-native";

interface InputInterface extends TextInputProps {
  label?: string;
  errorMessage?: string;
  error?: boolean;
  className?: string;
  placeholder: string;
}

const Input = ({
  label,
  error,
  errorMessage,
  className,
  placeholder,
  ...props
}: InputInterface) => {
  return (
    <View className="w-[95%] m-2">
      {label && (
        <Text className="text-base font-medium text-gray-700 mb-1">
          {label}
        </Text>
      )}
      <TextInput
        placeholder={placeholder}
        className={clsx(
          "w-full rounded-md border text-gray-900 placeholder-gray-400 sm:text-lg py-2 px-3",
          error
            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:border-gray-500 focus:ring-black/50",
          className
        )}
        {...props}
      />

      {error && errorMessage && (
        <Text className="text-sm text-red-500 mt-1">{errorMessage}</Text>
      )}
    </View>
  );
};

export default Input;
