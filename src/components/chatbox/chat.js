import { Box, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import { CiFaceSmile } from "react-icons/ci";
import { VscSend } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";


const Chat = () => {
    const chat = [
        { name: "receiver", text: "When will the event be held?", time: "10:22 am", },
        { name: "sender", text: "Tommorow at 4 pm", time: "10:24 am" },
    ];

    return (
        <Box w="320px"  borderRadius="15px" bg="white">
            <Box borderTopRadius="15px" background="#5DC2C4" color="white" display="flex" justifyContent="space-between" alignItems="center" pl="24px" pr="24px" h="54px">
                <Text>Ironmen</Text>
                <Text cursor="pointer"><IoMdClose /></Text>
            </Box>

            <Box ml="24px" mr="24px" mb="24px">
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Text mt="16px" mb="36px" textAlign="center" color="white" bg=" #072E75" w="68px" h="24px" borderRadius="20px">Today</Text>
                </Box>
                <Box >
                    {chat.map((message, index) => {
                        return (
                            message.name === "receiver" ?
                                <Box mb="24px" display="flex" justifyContent="space-between" w="263px">
                                    <Text size="13px" fontWeight="400px" lineHeight="17.76px" borderRadius="10px" w="197px" color=" #5DC2C4" bg=" #E0F3F3" p="10px" minH="38px" textAlign="center" alignContent="center">{message.text}</Text>
                                    <Text alignSelf="end" color="#8695A0" size="13px">{message.time}</Text>
                                </Box> :
                                <Box mb="16px" display="flex" justifyContent="space-between">
                                    <Text alignSelf="end" color="#8695A0" size="13px">{message.time}</Text>
                                    <Text background=" #5DC2C4" color="white" size="13px" fontWeight="400px" lineHeight="17.76px" borderRadius="10px" w="197px" h="38px" textAlign="center" alignContent="center">{message.text}</Text>
                                </Box>
                        )
                    })}
                </Box>
                <Box display="flex" alignItems="center" mt="9px">
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type='text'
                            placeholder="Type here..."
                            h="40px"
                            maxW="222px"
                            borderRadius="100px"
                        />
                        <InputRightElement width='4.5rem' cursor="pointer">
                            <CiFaceSmile />
                        </InputRightElement>
                    </InputGroup>

                    <Text cursor="pointer" h="35px" w="40px" display="flex" justifyContent="center" alignItems="center" borderRadius="100%" background=" #F4694C" color="white" >
                        <VscSend />
                    </Text>
                </Box>
            </Box>
        </Box>
    );
};

export default Chat;
