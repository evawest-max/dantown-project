'use client'

import { ChakraProvider } from '@chakra-ui/react'
import App from "./app";

export default function Home() {
  return (
    <ChakraProvider>
      <App/>
    </ChakraProvider>
  );
}

