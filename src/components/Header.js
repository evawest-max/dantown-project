import { Box, Input, Text } from "@chakra-ui/react";
import { InputGroup, InputLeftElement, } from '@chakra-ui/react';
import { FaSearch } from "react-icons/fa";
import { MobileNav } from "./Navbar/MobileNav";
import { MobileChatbox } from "./chatbox/MobileChatbox";


const Header = () => {
    return (
        <Box>
            <Box
                display={['flex', 'flex', 'flex', 'flex', 'none', 'none']}
                justifyContent="space-between"
                backgroundColor="#f7fafc"
                pl="40PX"
                pr="40PX"
                as="div"
            >
                <MobileNav />
                <MobileChatbox />
            </Box>
            <Box p="40px" display="flex" justifyContent="space-between" backgroundColor="#f7fafc">
                <Box >
                    <Text fontWeight="800px" size="24px" lineHeight="32.78px" color="#0F3F62" fontFamily="Avenir">Hey, Dustin!</Text>
                    <Text fontWeight="500px" size="14px" lineHeight="19.12px" color="#8695A0">Welcome back, nice to see you again!</Text>
                </Box>
                <Box >

                    <InputGroup >
                        <InputLeftElement width='4.5rem'>
                            <FaSearch style={{ marginTop: "11px", marginRight: "12.51", color: "#8695A0" }} />
                        </InputLeftElement>
                        <Input
                            type="text"
                            placeholder="Search here"
                            w="320px"
                            h="50px"
                            borderRadius="50px"
                            bg="white"
                            outline="none"
                            border="none"
                        />
                    </InputGroup>
                </Box>

            </Box>
        </Box>
    );
};

export default Header;