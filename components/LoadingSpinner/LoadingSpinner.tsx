import { Center, CircularProgress } from "@chakra-ui/react";
import React from "react";

export const LoadingSpinner = () => {
  return (
    <Center height={"100vh"}>
      <CircularProgress isIndeterminate color="blue.300" />
    </Center>
  );
};
