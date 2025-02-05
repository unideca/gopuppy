import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { motion, useAnimation, Variants } from "framer-motion"; 
import { useTranslation } from "react-i18next";

interface AboutProps {
    isRender : boolean;
    tokenExInVariants : Variants;
    language : string;
}

const TokenAllocation : FC<AboutProps> = ({isRender, tokenExInVariants}) => {
    const { t } = useTranslation();
    const tokenMidAnimation = useAnimation();

    useEffect(() => {
        const targetElement = document.querySelector('#tokenMid');
        console.log(targetElement);
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                console.log(entry.target)
                if(entry.target === targetElement) {
                    if(entry.isIntersecting) {
                        tokenMidAnimation.start("visible");
                    }
                }
            },
            {threshold: 0.0}
        )
        if(!targetElement) return;
        observer.observe(targetElement);

        return () => {
            observer.unobserve(targetElement);
        }
    },[isRender])

    return (
        <>
        <Flex
            w="100%"
            minH="80vh"
            color="#333333"
            pt={28}
            zIndex={2}
            flexDir="column"
            alignItems="center"
        >
            <Text fontSize="26px" mb={20} textAlign="center">
                {t(`distribution.title`)}
            </Text>
            <motion.div
            initial="hidden"
            animate={tokenMidAnimation}
            variants={tokenExInVariants}
            >
                <Flex w={["330px","330px","780px","1100px","1100px","1100px","1100px"]} mx="auto" gap={12} id="tokenMid" justifyContent="center" flexDir="column" alignItems="center">
                    <Img w={["330px","330px","400px","400px","400px","400px","400px"]} src="images/distribution.png"/>
                    <Flex w={["340px","400px","480px","560px","560px","560px","560px"]} justifyContent="space-between">
                        <Flex flexDir="column" fontSize={["12px","12px","16px","16px","16px","16px","16px"]}>
                            <Flex as="li" align="center">
                                <Box boxSize={3} bg="red.400" borderRadius="sm" mr={2}></Box>
                                <Text>{t(`distribution.list.item1`)}</Text>
                            </Flex>
                            <Flex as="li" align="center">
                                <Box boxSize={3} bg="blue.400" borderRadius="sm" mr={2}></Box>
                                <Text>{t(`distribution.list.item2`)}</Text>
                            </Flex>
                            <Flex as="li" align="center">
                                <Box boxSize={3} bg="green.400" borderRadius="sm" mr={2}></Box>
                                <Text>{t(`distribution.list.item3`)}</Text>
                            </Flex>
                            <Flex as="li" align="center">
                                <Box boxSize={3} bg="orange.300" borderRadius="sm" mr={2}></Box>
                                <Text>{t(`distribution.list.item4`)}</Text>
                            </Flex>
                        </Flex>
                        <Flex flexDir="column" fontSize={["12px","12px","16px","16px","16px","16px","16px"]}>
                            <Flex as="li" align="center">
                                <Box boxSize={3} bg="purple.300" borderRadius="sm" mr={2}></Box>
                                <Text>{t(`distribution.list.item5`)}</Text>
                            </Flex>
                            <Flex as="li" align="center">
                                <Box boxSize={3} bg="pink.300" borderRadius="sm" mr={2}></Box>
                                <Text>{t(`distribution.list.item6`)}</Text>
                            </Flex>
                            <Flex as="li" align="center">
                                <Box boxSize={3} bg="yellow.400" borderRadius="sm" mr={2}></Box>
                                <Text>{t(`distribution.list.item7`)}</Text>
                            </Flex>
                            <Flex as="li" align="center">
                                <Box boxSize={3} bg="gray.500" borderRadius="sm" mr={2}></Box>
                                <Text>{t(`distribution.list.item8`)}</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </motion.div>
        </Flex> 
        </>
        
    )
}

export default TokenAllocation;