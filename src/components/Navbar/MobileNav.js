import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { LuMenu } from "react-icons/lu";
import { Box, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { CiHome } from "react-icons/ci";
import "./navbar.css"
import { IoTimeOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { RiCompass3Line } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { MdOutlineEventBusy } from "react-icons/md";
import { BsChatSquareDots } from "react-icons/bs";
import { PiSoccerBallFill } from "react-icons/pi";
import { IoGameControllerSharp } from "react-icons/io5";
import { IoMusicalNotes } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import React from "react";

export function MobileNav() {
    const [size, setSize] = React.useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }

    const sizes = [
        'xs',
        //  'sm', 
        //  'md', 'lg', 'xl', 'full'
    ]

    return (
        <>
            {sizes.map((size) => (
                <Box
                    onClick={() => handleClick(size)}
                    key={size}
                    m={4}
                ><LuMenu /></Box>
            ))}

            <Drawer onClose={onClose} isOpen={isOpen} size={size} placement='left'>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton shadow="none"/>
                    <DrawerHeader>
                        <Box display="flex" justifyContent="space-between" w="135px" h="27px" mt="42px" mb="35" gap="9.27px">
                            <Image src='https://bcassetcdn.com/public/blog/wp-content/uploads/2023/02/28141228/orange-abstract-letter-a-by-bryad-brandcrowd.png' maxW="16.71px" maxH="24px" alt="logo" />
                            <Text maxW="109px" maxH="27px" size="20px" fontWeight="800px" lineHeight="27.32px" fontFamily="Avenir" color=" #F4694C">
                                Sedboi.euy
                            </Text>
                        </Box>
                    </DrawerHeader>
                    <DrawerBody>
                        <nav style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                            
                            <section style={{ display: "flex", flexDirection: "column", width: "100%", alignItems:"center" }}>
                                <Link className='navLink' href="/" >
                                    <Box display="flex" alignItems="center" ml="40px" gap="19px">
                                        <Text size="14px" fontWeight="800px" lineHeight="19.12px" ><CiHome /></Text>
                                        <Text size="14px" fontWeight="800px" lineHeight="19.12px">Home</Text>
                                    </Box>
                                </Link>
                                <Link className='navLink' href="/" >
                                    <Box display="flex" alignItems="center" ml="40px" gap="19px">
                                        <Text size="14px" fontWeight="800px" lineHeight="19.12px" ><IoTimeOutline /></Text>
                                        <Text size="14px" fontWeight="800px" lineHeight="19.12px">TimeLine</Text>
                                    </Box>
                                </Link>
                                <Link className='navLink' href="/" >
                                    <Box display="flex" alignItems="center" ml="40px" gap="19px">
                                        <Text size="14px" fontWeight="800px" lineHeight="19.12px" ><HiOutlineUsers /></Text>
                                        <Text size="14px" fontWeight="800px" lineHeight="19.12px">Community</Text>
                                    </Box>
                                </Link>
                                <Link className='navLink' href="/" >
                                    <Box display="flex" alignItems="center" ml="40px" gap="19px">
                                        <Text size="14px" fontWeight="800px" lineHeight="19.12px" ><RiCompass3Line /></Text>
                                        <Text size="14px" fontWeight="800px" lineHeight="19.12px">Discover</Text>
                                    </Box>
                                </Link>
                                <Link className='navLink' href="/" >
                                    <Box display="flex" alignItems="center" ml="40px" gap="19px">
                                        <Text size="14px" fontWeight="800px" lineHeight="19.12px" ><CiUser /></Text>
                                        <Text size="14px" fontWeight="800px" lineHeight="19.12px">Friends</Text>
                                    </Box>
                                </Link>
                                <Link className='navLink' href="/" >
                                    <Box display="flex" alignItems="center" ml="40px" gap="19px">
                                        <Text size="14px" fontWeight="800px" lineHeight="19.12px" ><CiBookmark /></Text>
                                        <Text size="14px" fontWeight="800px" lineHeight="19.12px">Bookmark</Text>
                                    </Box>
                                </Link>
                                <Link className='navLink' href="/" >
                                    <Box display="flex" alignItems="center" ml="40px" gap="19px">
                                        <Text size="14px" fontWeight="800px" lineHeight="19.12px" ><MdOutlineEventBusy /></Text>
                                        <Text size="14px" fontWeight="800px" lineHeight="19.12px">Event</Text>
                                    </Box>
                                </Link>
                                <Link className='navLink' href="/" >
                                    <Box display="flex" alignItems="center" ml="40px" gap="19px">
                                        <Text size="14px" fontWeight="800px" lineHeight="19.12px" ><BsChatSquareDots /></Text>
                                        <Text size="14px" fontWeight="800px" lineHeight="19.12px">Discussion</Text>
                                    </Box>
                                </Link>
                            </section>

                            <Box h="1px" w="170px" bg="#D6DCE0" mt="42px" mb="40px"></Box>

                            {/* <hr style={{color:"", background:"red"}}/> */}
                            <section style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                                <Text w="72px" h="22px" size="16px" fontWeight="800px" lineHeight="21.86px" fontFamily="Avenir">
                                    Category
                                </Text>
                                <Link className='navLink' href="/" >
                                    <Box display="flex" alignItems="center" ml="40px" gap="19px">
                                        <Text size="14px" fontWeight="800px" lineHeight="19.12px" p="9px" bg=" #FFEEEB" color=" #F4694C" borderRadius="100%"><PiSoccerBallFill /></Text>
                                        <Text size="14px" fontWeight="800px" lineHeight="19.12px">Sports</Text>
                                    </Box>
                                </Link>
                                <Link className='navLink' href="/" >
                                    <Box display="flex" alignItems="center" ml="40px" gap="19px">
                                        <Text size="14px" fontWeight="800px" lineHeight="19.12px" p="9px" bg=" #FFEEEB" color=" #F4694C" borderRadius="100%"><IoGameControllerSharp /></Text>
                                        <Text size="14px" fontWeight="800px" lineHeight="19.12px">Gaming</Text>
                                    </Box>
                                </Link>
                                <Link className='navLink' href="/" >
                                    <Box display="flex" alignItems="center" ml="40px" gap="19px">
                                        <Text size="14px" fontWeight="800px" lineHeight="19.12px" p="9px" bg=" #FFEEEB" color=" #F4694C" borderRadius="100%"><IoMusicalNotes /></Text>
                                        <Text size="14px" fontWeight="800px" lineHeight="19.12px">Music</Text>
                                    </Box>
                                </Link>
                                <Link className='navLink' href="/" >
                                    <Box display="flex" alignItems="center" ml="40px" gap="19px">
                                        <Text size="14px" fontWeight="800px" lineHeight="19.12px" p="9px" bg=" #FFEEEB" color=" #F4694C" borderRadius="100%"><FaReact /></Text>
                                        <Text size="14px" fontWeight="800px" lineHeight="19.12px">Tech & Science</Text>
                                    </Box>
                                </Link>
                            </section>
                        </nav>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
