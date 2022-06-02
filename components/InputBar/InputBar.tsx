import { Alert, AlertIcon, Box, Input, Stack } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";

type InputBarProps = {
  onSubmit: (name: string) => void;
};

export const InputBar = ({ onSubmit }: InputBarProps) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data.cityName))}>
      <Stack gap={2}>
        {errors.cityName && (
          <Alert status="error">
            <AlertIcon />
            This is a requird field
          </Alert>
        )}

        <Input
          id="name"
          placeholder="Enter city name"
          size="lg"
          isInvalid={errors.cityName}
          {...register("cityName", {
            required: "This is required",
            min: 1,
          })}
        />
      </Stack>
    </form>
  );
};
