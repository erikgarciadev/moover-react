import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import UseModalCode from "./useModalCode";

export default function ModalCode({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { form, error, handleSubmit, handleChange, handleClose } = UseModalCode(onClose);
  return (
    <Modal isOpen={isOpen} onClose={handleClose} isCentered>
      <ModalOverlay />
      <ModalContent >
        <ModalHeader>Ver estado de pedido</ModalHeader>
        <form onSubmit={handleSubmit}>
        <ModalBody>
          Si quieres ver una demostración del estado de un pedido, ingresar
          unos de los siguientes Códigos PRUEBA1, PRUEBA2 o PRUEBA3
          <FormControl mt="3" isInvalid={error.code !== ""}>
            <FormLabel htmlFor="code">Código</FormLabel>
            <Input onChange={handleChange} value={form.code} name="code" />
            <FormErrorMessage>{error.code}</FormErrorMessage>
          </FormControl>
        </ModalBody>
        <ModalFooter display="flex" justifyContent="center" w="full">
          <Button
            minW="80px"
            color="white"
            bg={"#77b6ea"}
            mr={3}
            _hover={{}}
            type="submit"
          >
            Ver estado
          </Button>
        </ModalFooter>
        </form>
       
      </ModalContent>
    </Modal>
  );
}
