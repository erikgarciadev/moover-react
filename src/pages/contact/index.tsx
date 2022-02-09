import { Box, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/logo_small.svg";

export default function Contact() {
  return (
    <Box
      h="full"
      backgroundColor="#77b6ea"
      color="white"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      {/* <Image fill='white' src={logo} alt='logo' /> */}
      <Box mb="20" as="h1" fontWeight="bold" fontSize="48px">
        Contáctanos
      </Box>
      <Box
        display="flex"
        flexDirection={{
          base: "column",
          md: "row",
        }}
        gap="10"
      >
        <Box mb="5" textAlign="center">
          <Icon
            fontSize="24px"
            className="fa-solid fa-envelope"
            cursor={false}
          />
          <Box fontWeight="semibold">Dudas o consultas</Box>
          <Box fontWeight="medium">dudas@moover.pe</Box>
        </Box>
        <Box mb="5" textAlign="center">
          <Icon fontSize="24px" className="fa-solid fa-clock" cursor={false} />
          <Box fontWeight="semibold">Horario de atención al cliente</Box>
          <Box fontWeight="medium">Lunes a sábado de 7:00 a 21:00 horas</Box>
        </Box>
        <Box
          display="flex"
          gap="10px"
          alignItems="center"
          justifyContent="center"
        >
          <Icon className="fa-brands fa-facebook" />
          <Icon className="fa-brands fa-instagram" />
          <Icon className="fa-brands fa-linkedin" />
        </Box>
      </Box>
    </Box>
  );
}

function Icon({
  fontSize = "36px",
  cursor = true,
  className,
}: {
  fontSize?: string;
  cursor?: boolean;
  className: string;
}) {
  return (
    <Box
      as="i"
      cursor={cursor ? "pointer" : "default"}
      fontSize={fontSize}
      className={className}
    ></Box>
  );
}
