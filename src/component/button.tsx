import React, { ReactElement, ReactNode } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import clsx from "clsx";

interface ButtonInterface {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "success"
    | "danger"
    | "danger-outline";
  children: ReactNode;
  size?: "large" | "medium" | "small";
  loading?: boolean;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  className?: string;
}

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  loading = false,
  className = "",
  startIcon = null,
  endIcon = null,
}: ButtonInterface) => {
  const variantClasses: { [key: string]: string } = {
    primary: "bg-black border-black ",
    secondary: "bg-white border-gray-200 ",
    outline: "bg-transparent text-gray-800 border-gray-600",
    success: "bg-blue-500 border-blue-500",
    danger: "bg-red-500 border-red-500",
  };

  const textVariantClasses: { [key: string]: string } = {
    primary: "text-white",
    secondary: "text-black",
    success: "text-white",
    danger: "text-white",
    small: "text-sm",
  };

  const sizeClasses: { [key: string]: string } = {
    large: "px-5 py-3 ",
    medium: "px-3 py-2 ",
    small: "px-2 py-2",
  };

  const textSizeClasses: { [key: string]: string } = {
    large: "text-xl",
    medium: "text-base",
    small: "text-sm",
  };

  return (
    <TouchableOpacity
      style={{ alignSelf: "flex-start" }}
      className={clsx(
        `rounded-md ${variantClasses[variant]} ${sizeClasses[size]} ${className}`
      )}
    >
      {loading ? (
        <View className=" flex flex-row items-center gap-3">
          <ActivityIndicator
            className={clsx(
              `text-center ${textVariantClasses[variant]} ${textSizeClasses[size]}`
            )}
          />
          <Text
            className={clsx(
              `text-center ${textVariantClasses[variant]} ${textSizeClasses[size]}`
            )}
          >
            Loading
          </Text>
        </View>
      ) : (
        <View className=" flex flex-row items-center justify-center gap-2">
          <Text
            className={clsx(
              `${textVariantClasses[variant]} ${textSizeClasses[size]}`
            )}
          >
            {startIcon}
          </Text>
          <Text
            className={clsx(
              `text-center ${textVariantClasses[variant]} ${textSizeClasses[size]}`
            )}
          >
            {children}
          </Text>
          <Text
            className={clsx(
              `${textVariantClasses[variant]} ${textSizeClasses[size]}`
            )}
          >
            {endIcon}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
