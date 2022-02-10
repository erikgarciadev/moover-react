import {
  Box,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import ModalSuccess from "./modalSucess";
import UseOrderPackage from "./useOrderPackage";

export default function orderPackage() {
  const {
    handleSubmit,
    handleChange,
    form,
    error,
    loading,
    openModal,
    setOpenModal,
    code,
  } = UseOrderPackage();
  return (
    <>
      <ModalSuccess
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        code={code}
      />
      <Box h="full" display="flex" justifyContent="center" alignItems="center">
        <Box w="500px" m="1em" p="1em" boxShadow="xl" borderRadius="5px">
          <Box mb="3" as="h3" fontWeight="bold" fontSize="20px">
            Realizar pedido
          </Box>
          <form onSubmit={handleSubmit}>
            <FormControl mb="2" isInvalid={error.client_name !== ""}>
              <FormLabel htmlFor="client_name">Nombre del cliente</FormLabel>
              <Input
                onChange={handleChange}
                name="client_name"
                placeholder="Ingresar su nombre"
                value={form.client_name}
              />
              <FormErrorMessage>El nombre es requerido</FormErrorMessage>
            </FormControl>
            <FormControl mb="2" isInvalid={error.client_address !== ""}>
              <FormLabel htmlFor="client_address">
                Dirección del cliente
              </FormLabel>
              <Input
                onChange={handleChange}
                value={form.client_address}
                name="client_address"
                placeholder="Ingresar dirección"
              />
              <FormErrorMessage>La dirección es requerida</FormErrorMessage>
            </FormControl>
            <FormControl mb="2" isInvalid={error.recipient_name !== ""}>
              <FormLabel htmlFor="recipient_name">
                Nombre del destinatario
              </FormLabel>
              <Input
                value={form.recipient_name}
                onChange={handleChange}
                name="recipient_name"
                placeholder="Ingresar su nombre"
              />
              <FormErrorMessage>El nombre es requerido</FormErrorMessage>
            </FormControl>
            <FormControl mb="2" isInvalid={error.recipient_address !== ""}>
              <FormLabel htmlFor="recipient_address">
                Dirección del destinatario
              </FormLabel>
              <Input
                value={form.recipient_address}
                onChange={handleChange}
                name="recipient_address"
                placeholder="Ingresar dirección"
              />
              <FormErrorMessage>La dirección es requerida</FormErrorMessage>
            </FormControl>
            <FormControl mb="2" isInvalid={error.order_detail !== ""}>
              <FormLabel htmlFor="order_detail">Detalle del pedido</FormLabel>
              <Textarea
                value={form.order_detail}
                onChange={handleChange}
                name="order_detail"
                resize="none"
                placeholder="Ingresar detalle del pedido"
              />
              <FormErrorMessage>
                El detalle del pedido es requerido
              </FormErrorMessage>
            </FormControl>
            <Box display="flex" justifyContent="center">
              <Button
                type="submit"
                h="45px"
                bg={"#77b6ea"}
                spinnerPlacement="end"
                _hover={{}}
                color="white"
                isLoading={loading}
              >
                Realizar pedido
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
}
