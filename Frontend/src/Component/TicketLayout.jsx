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
import axios from "axios";

function ticketCancel(id) {
  axios
    .patch(`http://localhost:8090/cancel/${id}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err));
}

function TicketLayout() {
  const [arr, setArr] = useState([]);
  const toast = useToast();
  const [count, setCount] = useState(0);

  const getTicketData = () => {
    axios
      .get(`http://localhost:8090/get`)
      .then((res) => {
        // console.log(res.data)
        setArr(res.data);
      })
      .catch((err) => console.log(err));
  };

  const handleTicketCancel = (ele) => {
    if (ele.available === true) {
      toast({
        title: "Ticket is Already Available",
        // description: "We've created your account for you.",
        status: "info",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    } else {
      setCount(count + 1);
      ticketCancel(ele._id);
    }
  };

  useEffect(() => {
    getTicketData();
  }, [count]);

  return (
    <Stack>
      <Box px={4}>
        <Heading as="h3" fontSize={"24px"} fontWeight={500}>
          Train Compartment Layout:
        </Heading>
      </Box>

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

        <Grid
          templateColumns={"repeat(7, 1fr)"}
          gap={2}
          border={"0px solid red"}
          w={"full"}
          p={[0, 3]}
        >
          {arr?.map((elem) => (
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
