import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTicketsData, patchCancelTicketData } from "../Reducer/action";

function TicketLayout() {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.tickets);

  const toast = useToast();


  const handleTicketCancel = (ele) => {
    if (ele.available === true) {
      toast({
        title: "Ticket is Already Available",
        status: "info",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    } 
    
    else {
      dispatch(patchCancelTicketData(ele._id)).then((res) => {
        toast({
          title: res.payload[0]?.message,
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });

        dispatch(getAllTicketsData());
      });
    }
  };

  useEffect(() => {
    dispatch(getAllTicketsData());
  }, []);

  return (
    <Stack>
      <Box px={4}>
        <Heading as="h3" fontSize={"24px"} fontWeight={500}>
          Train Compartment Layout:
        </Heading>
      </Box>

      {/* Here I am demonstrating the Layout of the Train coach seating arrangement */}
      <Flex
        w={["90%", "80%", "65%", "55%", "50%"]}
        justifyContent={"space-between"}
        px={[0, 2, 4, 6]}
        border={"0px solid red"}
        gap={[2, 2, 4, 5]}
      >
        <Stack
          fontSize={["14px", "14px", "16px", "18px"]}
          fontWeight={500}
          py={3}
          maxW={"40px"}
        >
          <Stack boxSize={12} py={[0, 2]}>
            <Text>Row1</Text>
          </Stack>
          <Stack boxSize={12} py={[0, 2]}>
            <Text>Row2</Text>
          </Stack>
          <Stack boxSize={12} py={[0, 2]}>
            <Text>Row3</Text>
          </Stack>
          <Stack boxSize={12} py={[0, 2]}>
            <Text>Row4</Text>
          </Stack>
          <Stack boxSize={12} py={[1, 2]}>
            <Text>Row5</Text>
          </Stack>
          <Stack boxSize={12} py={[1, 2]}>
            <Text>Row6</Text>
          </Stack>
          <Stack boxSize={12} py={[1, 2]}>
            <Text>Row7</Text>
          </Stack>
          <Stack boxSize={12} py={[2]}>
            <Text>Row8</Text>
          </Stack>
          <Stack boxSize={12} py={[3, 2]}>
            <Text>Row9</Text>
          </Stack>
          <Stack boxSize={12} py={[3, 2]}>
            <Text>Row10</Text>
          </Stack>
          <Stack boxSize={12} py={[4, 2]}>
            <Text>Row11</Text>
          </Stack>
          <Stack boxSize={12} py={[4, 2]}>
            <Text>Row12</Text>
          </Stack>
        </Stack>


        {/* Mapping all the seats here in a grid version displaying 7 seats in a row */}
        <Grid
          templateColumns={"repeat(7, 1fr)"}
          gap={2}
          border={"0px solid red"}
          w={"full"}
          p={[0, 3]}
        >
          {tickets?.map((elem) => (
            <GridItem key={elem._id}>
              <Flex
                fontSize={["14px", "14px", "16px", "18px"]}
                color={"#fff"}
                fontWeight={500}
                align={"center"}
                boxSize={[8, 10]}
                justifyContent={"center"}
                bgColor={elem.available ? "green.600" : "red.600"}
                borderRadius={4}
                _hover={{ cursor: "pointer" }}
                onClick={() => handleTicketCancel(elem)}
              >
                <Text>{elem.seatNumber}</Text>
              </Flex>
            </GridItem>
          ))}
        </Grid>
      </Flex>

      <Flex
        w={["90%", "80%", "65%", "55%", "50%"]}
        justify={"center"}
        gap={[4, 6, 8]}
      >
        <Flex gap={2} align={"center"}>
          <Text>Available:</Text>
          <Box p={2} maxH={"15px"} bgColor={"green.600"}></Box>
        </Flex>

        <Flex gap={2} align={"center"}>
          <Text>Booked:</Text>
          <Box p={"9.5px"} maxH={"15px"} bgColor={"red.600"}></Box>
        </Flex>
      </Flex>
    </Stack>
  );
}

export default TicketLayout;
