import { Text, Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { InputBar } from "../InputBar";
import { TempChanger } from "../TempChanger";
import { useTempMode } from "../TempMode";

type HeadingWrapperProps = {
  onSubmit: (name: string) => void;
  children: ReactNode;
};

export const HeadingWrapper = ({ onSubmit, children }: HeadingWrapperProps) => {
  const { setMode, mode } = useTempMode();

  return (
    <>
      <TempChanger
        selectedMode={mode}
        setImperialMode={() => {
          setMode("imperial");
        }}
        setMetricMode={() => {
          setMode("metric");
        }}
        setStandardMode={() => {
          setMode("standard");
        }}
      />
      <Flex
        margin={"10"}
        alignItems="center"
        justifyContent="center"
        flexDirection={"column"}
        gap={"10"}
      >
        <Text fontSize={"6xl"} fontWeight="bold">
          Weather App
        </Text>

        <InputBar onSubmit={onSubmit} />

        {children}
      </Flex>
    </>
  );
};
