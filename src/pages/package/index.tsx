import {
  Box,
  Spinner,
  Heading,
  Badge,
  FormLabel,
  Text,
  FormControl,
} from "@chakra-ui/react";
import React from "react";
import UsePackage from "./usePackage";

export default function Package() {
  const { order, loader, getStatus } = UsePackage();

  const status = getStatus(order?.status || 1)
  return (
    <Box h="full" display="flex" justifyContent="center" alignItems="center">
      {loader && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}
      {!loader && (
        <Box w="500px" m="1em" p="1em" boxShadow="2xl" borderRadius="5px">
          <Heading
            mb="5"
            as="h3"
            fontWeight="bold"
            fontSize="28px"
            color="#77b6ea"
          >
            Estado del pedido
          </Heading>
          <Badge p='2' fontSize='sm' mb="5" colorScheme={status.color}>{status.text}</Badge>
          <FormControl mb="5">
            <FormLabel htmlFor="order_detail">Detalle del pedido</FormLabel>
            <Text>{order?.order_detail}</Text>
          </FormControl>
          <FormControl
            mb="5"
            display="flex"
            flexDirection={{
              base: "column",
              md: "row",
            }}
            gap='3'
          >
            <Box w="50%">
              <FormLabel htmlFor="client_name">Cliente</FormLabel>
              <Text>{order?.client_name}</Text>
            </Box>
            <Box w="50%">
              <FormLabel htmlFor="client_address">Dirección del cliente</FormLabel>
              <Text>{order?.client_address}</Text>
            </Box>
          </FormControl>
          <FormControl mb="5" display="flex"
            flexDirection={{
              base: "column",
              md: "row",
            }}
            gap='3'>
            <Box w="50%">
              <FormLabel htmlFor="recipient_name">Destinatario</FormLabel>
              <Text>{order?.recipient_name}</Text>
            </Box>
            <Box w="50%">
              <FormLabel htmlFor="recipient_address">Dirección del destinatario</FormLabel>
              <Text>{order?.recipient_address}</Text>
            </Box>
          </FormControl>
        </Box>
      )}
    </Box>
  );
}
