import Button from "@/component/button";
import { Link } from "expo-router";
import React from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import Input from "@/component/input";
import Card from "@/component/card";

export default function Page() {
  const customFontFamily = { fontFamily: "spaceGrotesk" };
  return (
    <View
      className={`flex min-h-screen justify-center flex-row items-center`}
      style={{ fontFamily: "spaceGrotesk" }}
    >
      <StatusBar backgroundColor={"transparent"} barStyle="dark-content" />
      <Card
        footer={
          <View>
            <Text className="text-center">Don't have an account? Sign-up</Text>
          </View>
        }
        className="w-[90%]"
        title="SignIn Form"
        description="Please fill the form to create an account"
      >
        <Input placeholder="Enter Username" label="Username" />
        <Input placeholder="Enter Password" label="Password" className="" />

        <View className="flex flex-row items-center my-4">
          <View className="flex-1 h-[1px] bg-gray-300" />
          <Text className="px-3 text-gray-500 text-sm">or continue with</Text>
          <View className="flex-1 h-[1px] bg-gray-300" />
        </View>

        <View className="">
          <Button
            startIcon={<AntDesign name="google" size={15} />}
            className="mx-auto my-2 w-full"
          >
            Sign In with Google
          </Button>

          <Button
            className="mx-auto my-2 w-full"
            startIcon={<AntDesign name="github" size={17} />}
          >
            Sign In with GitHub
          </Button>
        </View>
      </Card>
    </View>
  );
}
