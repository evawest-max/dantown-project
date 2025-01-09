import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Box, Card, CardBody, Heading, Image, Menu, MenuButton, MenuItem, MenuList, Stack, } from '@chakra-ui/react';
import { IoMailOutline } from "react-icons/io5";
import { RiNotification2Line } from "react-icons/ri";
import Chat from './chat';
import React from "react";

export function MobileChatbox() {
    const [size, setSize] = React.useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }

    const sizes = [
        // 'xs',
        //  'sm', 
        //  'md', 'lg', 'xl', 
        'full'
    ]

    const messages = [
        { name: "Ironmen", text: "When will the event be held?", newMessage: "1", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s" },
        { name: "Ariana Grande", text: "Alright then. See you there", photo: "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=MsKXmwf7TDRdKRn_lHohhmD5rvVvnGs9ry0xl6CrMT4=" },
        { name: "Ariana Grande", text: "Come on join to my party!", photo: "https://img.freepik.com/free-photo/shot-positive-european-young-female-with-dark-curly-hair-has-gentle-smile-freckled-skin-wears-casual-beige-shirt_273609-15736.jpg" },
        { name: "Ebun Akinwumi", text: "I will be at home today", photo: "https://variety.com/wp-content/uploads/2024/06/5N7A0541-e1718042484447.jpg" },
    ];

    return (
        <>
            {sizes.map((size) => (
                <Button
                    onClick={() => handleClick(size)}
                    key={size}
                    m={4}
                    variant="outline"
                    color="orange.500"
                >Chatbox</Button>
            ))}

            <Drawer onClose={onClose} isOpen={isOpen} size={size} placement='left' >
                <DrawerOverlay />
                <DrawerContent pb="120px">
                    <DrawerCloseButton shadow="none" />
                    <DrawerHeader>
                        <Box display="flex" flexDirection="row" alignItems="center" mt="40px" mb="80px" w="100%" gap="41.35px">
                            <Box h="13.5px" ml="94" display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" gap="27.5px">
                                <Text color=" #0F3F62">
                                    <IoMailOutline style={{ width: "18px", height: "13.5px" }} />
                                </Text>
                                <Text color=" #0F3F62" pos>
                                    <RiNotification2Line />
                                </Text>
                            </Box>
                            <Box mr="40px" w="164px" h="50px" display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                                <Image cursor="pointer" w="50px" h="50px" borderRadius="100px" src='https://s3-alpha-sig.figma.com/img/5f33/6d73/0e75c4d0bb88d974a6753cddc4f8070d?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pp388uAd-lPLw-p9BMuwKWD3w0l4BaY0MpJSIWzO-BIRgwt4-a5wqe98ZuwlgcmEyjP8OGUIub3E4~ql3oGQzqb4i91kn4QV~DR2tOkSRbcqpb~p7QirckfHiv4-WpACBmsU4x4aWMG-m6boMMFN5Bd8IhbPamyIeMKpEJwyl2Vrsymxn1AiVghtCE-ZogIWW8yi2TvbYWJXmBp9ROnA1r0W27gUPgKGwBpnW2DaU-2hweS2OAFDFf6BlbLKXeExeYN1b9MJfk-2YxA0y-w1fBdZLCB3o~X7keOi3ydxRUJLiSTKmMToIA5hIMcXVqH639NtGAUDZe0mCucXm9oepw__' alt="profile picture" />
                                <Menu>
                                    <MenuButton as={Text} weight="800px" size="16px" lineHeight="21.86px" color=" #0F3F62" display="flex" flexDirection="row" alignItems="center">

                                        <Text>Jamet Roy <ChevronDownIcon /></Text>
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem cursor="pointer">Profile</MenuItem>
                                        <MenuItem cursor="pointer">Verification</MenuItem>
                                        <MenuItem cursor="pointer">settings</MenuItem>
                                        <MenuItem cursor="pointer">Attend a Workshop</MenuItem>
                                        <MenuItem cursor="pointer">Sign out</MenuItem>
                                    </MenuList>
                                </Menu>
                            </Box>
                        </Box>
                    </DrawerHeader>
                    <DrawerBody >
                        <Box display="flex" flexDirection="column" alignItems="center" borderLeft="1px solid #ebeff1" bg="#f7fafc" h="100%" >
                            <Box width="320px" mb="40px" mt="50px" bg="white" >
                                <Box w="96px" mb="24px" h="25px" display="flex" justifyContent="space-between" alignItems="center">
                                    <Text color="#0F3F62" fontWeight="900px" size="18px" lineHeight="24.59px" fontFamily="avenir" className="text-xl font-bold mb-2">Chats</Text>
                                    <Text w="37px" h="24px" borderRadius="20px" bg=" #E0F3F3" color=" #54BCBD" textAlign="center">14</Text>
                                </Box>
                                {messages.map((message, index) => (
                                    <Box key={index} className="border-b py-2">
                                        <Card
                                            direction={{ base: 'column', sm: 'row' }}
                                            overflow='hidden'
                                            variant='none'
                                            // h="56px"
                                            w="320px"
                                        >
                                            <Image
                                                objectFit='cover'
                                                w="56px"
                                                h="56px"
                                                src={message.photo}
                                                alt='Caffe Latte'
                                                borderRadius="50%"
                                            />

                                            <Box border="none" mt="6px" h="45px" w="100%" display="flex" justifyContent="space-between" alignItems="center">
                                                <Stack border="none">
                                                    <CardBody border="none" pl="16px" display="flex" flexDirection="column" gap="4px">
                                                        <Heading cursor="pointer" size='16px' fontFamily='avenir' fontWeight="800px" lineHeight="21.86px" color="background: #0F3F62;">{message.name}</Heading>

                                                        <Text size='14px' fontWeight="400px" lineHeight="19.12px" color=" #8695A0;">
                                                            {message.text}
                                                        </Text>
                                                    </CardBody>
                                                </Stack>
                                                {message.newMessage && <Text background="#F4694C" w="24px" h="24px" borderRadius="20px" color="white" textAlign="center"> {message.newMessage}</Text>}
                                            </Box>
                                        </Card>
                                        {index < 3 ? <Box mt="16px" mb="16px" float="right" w="248px" bg="#D6DCE0" h="1px"></Box> : <Text></Text>}
                                    </Box>
                                ))}
                            </Box>
                            <Chat />
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
