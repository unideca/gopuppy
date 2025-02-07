import { Flex, Text } from "@chakra-ui/react";
import { FC } from "react";

const Contact: FC = () => {
    return (
        <Flex
            w="100%"
            minH="30vh"
            color="#333333"
            pt={16}
            zIndex={2}
            flexDir="column"
            alignItems="center"
        >
            {/* <Text fontSize={["16px","16px","16px","24px","24px","24px","24px"]} mb={8} fontWeight="bold">
                Contact Information
            </Text>
            <Flex flexDir="column" alignItems="center" fontSize={["12px","12px","12px","16px","16px","16px","16px"]} lineHeight="1.8">
                <Text>Email: official@gopuppy.com</Text>
            </Flex> */}
            <Text fontSize="12px" mt={28}>
                Faunus Global Inc. 2098133
            </Text>
            <Text fontSize="12px">
                Address : Charles Court, 1st Floor 189 Main Street PO Box 4406 Tortola VG1110 British Virgin Islands
            </Text>
            <Text fontSize="12px">
                Copyright © Faunus Global Inc. 2098133 2024 All Rights Reserved.
            </Text>
        </Flex>
    );
}
export default Contact;
