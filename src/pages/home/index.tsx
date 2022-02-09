import { Box, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
import React from "react";

export default function Home() {
  return (
    <Box
      h="full"
      display="flex"
      flexDirection={{
        base: "column-reverse",
        md: "row",
      }}
    >
      <BoxCustom>
        <Image
          w="80%"
          objectFit="cover"
          src={logo}
          alt="logo"
          borderRadius={50}
        />
      </BoxCustom>
      <BoxCustom>
        <Box
          as="p"
          textAlign="center"
          fontWeight="bold"
          fontSize={{
            base:'24px',
            md:'36px'
          }}
          color="#77b6ea"
        >
          Realizamos servicio de traslado de paquetes de manera segura y
          sanitizada
        </Box>
      </BoxCustom>
    </Box>
  );
}

function BoxCustom({ children }: { children: React.ReactNode }) {
  return (
    <Box
      h="full"
      px="1em"
      w={{
        base: "100%",
        md: "50%",
      }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Box>
  );
}
