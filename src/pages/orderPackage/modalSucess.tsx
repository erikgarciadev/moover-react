import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Code,
  Button,
  Box
} from "@chakra-ui/react";

export default function modalSucess({
  isOpen,
  onClose,
  code,
}: {
  isOpen: boolean;
  onClose: () => void;
  code?: string;
}) {
  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Pedido realizado</ModalHeader>
        <ModalBody>Su pedido fue realizado con éxito, para revisar el estado de su pedido utilice el siguiente código: 
          <Box mt='2' display='flex' justifyContent='center'>
          <Code textAlign='center' p='2' fontSize='20px'>{code}</Code> 
          </Box>
          </ModalBody>
        <ModalFooter display="flex" justifyContent="center" w="full">
          <Button
            minW="80px"
            color="white"
            bg={"#77b6ea"}
            mr={3}
            onClick={onClose}
            _hover={{}}
          >
            OK
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
