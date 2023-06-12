import { Box, HStack, Heading, Stack, Text } from "@chakra-ui/react";
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

      {/* Component for showing Seats layout */}
      <TicketLayout />

      <Box pt={8} px={6}>
        <Heading fontSize={"21px"} fontWeight={500}>
          Book Tickets Here:
        </Heading>
      </Box>
      
      {/* Component for Ticket Booking */}
      <AddTicket />

      <HStack spacing={3} pb={8}>
        <Text fontWeight={500} fontSize={"20px"}>
          Note:
        </Text>
        <Text fontSize={"14px"} mt={1} fontWeight={500}>
          If all tickets are booked then you can cancel the tickets by clicking
          on the Seat Numbers
        </Text>
      </HStack>
    </Stack>
  );
}

export default Homepage;
