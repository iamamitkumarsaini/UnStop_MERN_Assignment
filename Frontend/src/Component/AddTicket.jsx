import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import React from "react";

function AddTicket() {
  return (
    <Stack maxW={["90%", "70%", "50%", "30%"]}>
      <FormControl>
        <FormLabel>Enter Number of Tickets you wants to Book</FormLabel>
        <Input type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
    </Stack>
  );
}

export default AddTicket;
