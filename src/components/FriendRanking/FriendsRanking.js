import { Box, Image, Text } from "@chakra-ui/react";
import { FaCrown } from "react-icons/fa6";
import "./FriendRanking.css"
import { BsDot } from "react-icons/bs";

const FriendsRank = () => {
    const friends = [
        { rank: 1, name: "Mamang Ironmen", category: "Skaters", points: 2140, photo: "https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" },
        { rank: 2, name: "Ariana Grande", category: "Cyclist", points: 1814, photo: "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?b=1&s=612x612&w=0&k=20&c=MsKXmwf7TDRdKRn_lHohhmD5rvVvnGs9ry0xl6CrMT4=" },
        { rank: 3, name: "Trent Alexander Arnold", category: "Skaters", points: 1620, photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&s" },
        { rank: 4, name: "Shakira Wakawaka", category: "Yogas", points: 1280, photo: "https://i.pinimg.com/originals/c8/3f/7e/c83f7e2c623dd570821c07a16913432a.jpg" },
    ];
    return (
        <Box p="40px" pt="30px" display={['none', 'none', 'none', 'flex', 'flex', 'flex']} flexDirection="column" backgroundColor="#f7fafc" >
            <Box bg="white" p="24px" borderRadius="15px">
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Text size="16px" fontWeight="800px" lineHeight="21.86px" fontFamily="Avenir">Friends Rank</Text>
                    <Text display="flex"  justifyContent="space-between" w="22px"><BsDot /><BsDot /></Text>
                </Box>

                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    h="40px"
                    mt="15px"
                    mb="15px"
                    mr="73px"
                >
                    <Text textAlign="center" >Rank </Text>
                    <Box display="flex" alignItems="center" gap="13px" ml="-16px">

                        <Text display="flex" alignItems="center" size="14px" fontWeight="800px" lineHeight="19.12px" justifyContent="space-between" w="224px" textAlign="left">Name</Text>
                    </Box>
                    <Text ml="25px" size="14px" fontWeight="400px" lineHeight="19.12px" w="102px" h="32px" borderRadius="30px" display="flex" justifyContent="center" alignItems="center">Category</Text>
                    <Text size="16px" fontWeight="500px" lineHeight="21.86px">Points</Text>
                </Box>

                <Box>
                    {friends.map((friend, index) => (
                        <Box display="flex" flexDirection="column" >
                            <Box
                                key={friend.rank}
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                h="40px"
                                mt="15px"
                                mb="15px"
                                mr="73px"
                            >
                                <Text id={friend.rank === 1 ? "clippedDiv" : "clippedDivNOne"} >{friend.rank} </Text>
                                <Box display="flex" alignItems="center" gap="13px" >
                                    <Image w="40px" h="40px" borderRadius="50%" src={friend.photo} alt="Friend image" />
                                    <Text color="#0F3F62" display="flex" alignItems="center" pr="29px" size="16px" fontWeight="800px" lineHeight="21.86px" fontFamily="Avenir" justifyContent="space-between" w="224px" textAlign="left">{friend.name}{friend.rank === 1 && <FaCrown style={{ color: " #FBAF29", width:"26px", height:"18px" }} />}</Text>
                                </Box>
                                <Text size="14px" fontWeight="400px"  lineHeight="19.12px" w="102px" h="32px" borderRadius="30px" bg={
                                    friend.category === "Skaters" ? "#e7f7f8" :
                                        friend.category === "Cyclist" ? "#dafdff" :
                                            friend.category === "Skaters" ? "#e7f7f8" :
                                                friend.category === "Yogas" && "#ffece8"
                                } display="flex" justifyContent="center" gap="8px" alignItems="center"
                                >
                                    <Box w="8px" h="8px" borderRadius="50%" gap="8px" bg={
                                        friend.category === "Skaters" ? "#54bcbd" :
                                            friend.category === "Cyclist" ? "#3debf6" :
                                                friend.category === "Skaters" ? "#54bcbd" :
                                                    friend.category === "Yogas" && "#f4694c"
                                    }>
                                    </Box> 
                                    {friend.category}
                                </Text>
                                <Text color="#0F3F62" size="16px" fontWeight="500px" lineHeight="21.86px">{friend.points}</Text>
                            </Box>
                            {index < 3 ? <Box alignSelf="end" w="641px" bg="#D6DCE0" h="1px"></Box> : <Text></Text>}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default FriendsRank;
