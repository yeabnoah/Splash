import React, { ReactNode } from "react";
import { View, Text } from "react-native";
import clsx from "clsx";

interface CardInterface {
  title?: string;
  description?: string;
  header?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
  className?: string;
}

const Card = ({
  title,
  description,
  header,
  footer,
  children,
  className,
}: CardInterface) => {
  return (
    <View
      className={clsx(
        "border border-gray-300 rounded-lg shadow-md bg-white m-5 p-4",
        className
      )}
    >
      {/* Header Section */}
      {header && <View className="mb-4">{header}</View>}

      {/* Title and Description */}
      {(title || description) && (
        <View className="mb-4">
          {title && (
            <Text className="text-lg font-semibold text-gray-800">{title}</Text>
          )}
          {description && (
            <Text className="text-sm text-gray-600 mt-1">{description}</Text>
          )}
        </View>
      )}

      {/* Content Section */}
      <View className="mb-4">{children}</View>

      {/* Footer Section */}
      {footer && <View className="mt-4">{footer}</View>}
    </View>
  );
};

export default Card;
