import { Box, Image } from "@chakra-ui/react";
import logo from "../assets/logo_small.svg";
import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box as="header">
      <Box
        as="nav"
        display="flex"
        justifyContent={{
          base: "center",
          md: "space-between",
        }}
        px="1em"
        h="80px"
      >
        <Image
          display={{
            base: "none",
            md: "block",
          }}
          alt="logo"
          src={logo}
          width="80px"
          height="80px"
        />
        <Box as="ul" display="flex" alignItems="center">
          <Anchor to="/home">Inicio</Anchor>
          <Anchor to="/order-package">Realizar pedido</Anchor>
          <Box
            as="li"
            listStyleType="none"
            p={{
              base: "0.5em",
              md: "0.8em",
            }}
            h="full"
            display="flex"
            alignItems="center"
          >
            Ver estado de pedido
          </Box>
          <Anchor to="/contact">Contacto</Anchor>
        </Box>
      </Box>
    </Box>
  );
}

function Anchor({ children, to }: { children: React.ReactNode; to: string }) {
  return (
    <Box
      cursor="pointer"
      as="li"
      listStyleType="none"
      p={{
        base: "0.5em",
        md: "0.8em",
      }}
      h="full"
      display="flex"
      alignItems="center"
    >
      <Link to={to}>{children}</Link>
    </Box>
  );
}
