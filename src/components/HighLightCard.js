import { Box, Card, CardBody, Grid, Image, Stack, Text } from "@chakra-ui/react";


const HighlightCard = () => {
    const highlights = [
        { title: "Skater Boys", description: "The best states of skaters.", photo: "https://images.unsplash.com/photo-1611453621839-da40752783fa?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2thdGVyJTIwYm95fGVufDB8fDB8fHww" },
        { title: "Yoga Forces", description: "Welcome to the biggest yoga group.", photo: "https://fusionyogawellness.com/wp-content/uploads/2023/01/gina-reverse-warrior-BMC.jpg" },
        { title: "Real Wild Cyclist", description: "We are the wildest cyclist.", photo: "https://wild-rye.com/cdn/shop/files/Emily-Sierra-2024-Wild-Rye-SS24-Sedona-233_12626b54-8a3d-4073-b59f-5c36c24a8c0c.jpg?v=1708714641&width=2048" },
    ];
    return (
        <Box pl="40px" pr="40px" display="flex" justifyContent="space-between" backgroundColor="#f7fafc">
            <Grid templateColumns="repeat(3, 1fr)" gap="21px" textAlign="center">
                {highlights.map((highlight, index) => (
                    <Card W='226px' key={index} _hover={{ transform: "scale(1.01)" }}>
                        <CardBody p={0}>
                            <Image
                                src={highlight.photo}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                                w="100%"
                                h="205px"
                            />
                            <Stack mt='20px' spacing='3' mb="24px">
                                <Text mb="10px" fontWeight="900px" size="16px" fontFamily="Avenir" lineHeight="21.86px" >{highlight.title}</Text>
                                <Text mb="10px" fontWeight="400px" size="14px" lineHeight="19.12px">
                                    {highlight.description}
                                </Text>
                            </Stack>
                        </CardBody>
                    </Card>
                ))}

            </Grid>
        </Box>
    );
};

export default HighlightCard;
