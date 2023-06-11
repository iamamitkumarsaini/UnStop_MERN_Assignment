import { Box, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import AddTicket from "../Component/AddTicket";
import TicketLayout from "../Component/TicketLayout";

function Homepage() {
  return (
    <Stack spacing={6}>
      <Box>
        <Heading as="h3" fontSize={"24px"} textAlign={"center"}>
          Welcome to TicketBooking.com
        </Heading>
      </Box>
      <TicketLayout />
    </Stack>
  );
}

export default Homepage;
