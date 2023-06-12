import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Heading,
  Input,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTicketsData, postBookTicketsData } from "../Reducer/action";

function AddTicket() {
  const [flag, setFlag] = useState(false);
  const [numTickets, setNumTickets] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);

  const dispatch = useDispatch();
  const bookedTickets = useSelector((state) => state.bookedTickets[0]?.data);
  const isLoading = useSelector((state) => state.isLoading);

  const toast = useToast();

  const handleChange = (e) => {
    setNumTickets(Number(e.target.value));
    setIsEmpty(false);
    if (e.target.value == "") {
      setFlag(false);
      setIsEmpty(true);
    }
  };

  const handleClick = () => {
    if (numTickets == 0) {
      toast({
        title: "Select atleast 1 ticket to book",
        status: "warning",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    } 
    
    else if (numTickets > 7) {
      setFlag(true);
    } 
    
    else if (numTickets > 0 && numTickets <= 7) {
      dispatch(postBookTicketsData({ numTickets })).then((res) => {
        toast({
          title: res.payload[0]?.message,
          status: "warning",
          duration: 2000,
          isClosable: true,
          position: "top",
        });

        dispatch(getAllTicketsData());
      });

      setNumTickets("");
    }
  };

  return (
    <>
      <Flex m={"auto"} pb={6} gap={[0,4]} direction={['column',"row"]} >
        <FormControl>
          <FormLabel>Enter Number of Tickets you wants to Book</FormLabel>
          <Input
            type="number"
            required
            value={numTickets}
            onChange={handleChange}
            isInvalid={flag}
          />
          {flag && (
            <FormHelperText color={"red"}>
              You Cannot book more than 7 tickets at one time
            </FormHelperText>
          )}
        </FormControl>
        {isLoading ? (
          <Spinner mt={8} size={"md"} />
        ) : (
          <Button
            isDisabled={isEmpty}
            mt={8}
            colorScheme="blue"
            onClick={handleClick}
          >
            Book
          </Button>
        )}
      </Flex>

      <HStack m={"auto"} pb={16}>
        <Heading fontWeight={600} display={bookedTickets ? "block" : "none"} fontSize={"24px"}>
          Your Booked Setas are:
        </Heading>
        {bookedTickets?.map((elem) => (
          <Box key={elem._id}>
            <Text fontSize={"19px"} mt={1} fontWeight={500}>
            {elem.seatNumber},
            </Text>
          </Box>
        ))}
      </HStack>
    </>
  );
}

export default AddTicket;
