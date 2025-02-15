import { Box, Button, Flex, Grid, GridItem, Image, Img, Input, Text } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import serviceTopKR from "../data/servicesTopKR.json"
import serviceBottomKR from "../data/servicesBottomKR.json"
import { motion, useAnimation, Variants } from "framer-motion"; 
import { useTranslation } from "react-i18next";
import i18n from "../locales/i18n";
import {CopyToClipboard} from "react-copy-to-clipboard";

interface ServicesProps {
    setIsRender : React.Dispatch<React.SetStateAction<boolean>>;
    tokenExInVariants : Variants;
    isRender : boolean;
    language : string;
}

const epepeImg = [
    {
    "image" : "images/G.png",
    },{
    "image" : "images/O.png",
    },{
    "image" : "images/P.png",
    }
]

const Services : FC<ServicesProps> = ({isRender, setIsRender, tokenExInVariants, language}) => {
    const { t } = useTranslation();
    const filename = `guide_${i18n.language}.pdf`;
    const serviceTopAnimation = useAnimation();
    const serviceBottomAnimation = useAnimation();
    
    useEffect(() => {
        setIsRender(true); //컴포넌트가 렌더링 될 때 발생하는 시간 차를 감지 하기 위함
    },[])

    useEffect(() => {
        const targetElement = document.querySelector('#serviceTop');
        const targetBottomElement = document.querySelector('#serviceBottom');
        console.log(targetElement);
        const observer = new IntersectionObserver(
            (entries) => {
                for(let i=0; i<entries.length; i++) {
                    const entry = entries[0];
                    console.log(entry.target);
                    if(entry.target === targetElement) {
                        if(entry.isIntersecting) {
                            serviceTopAnimation.start("visible");
                            console.log("serviceTop visible")
                        }
                    }
                    
                    if(entry.target === targetBottomElement) {
                        if(entry.isIntersecting) {
                            serviceBottomAnimation.start("visible");
                            console.log("serviceBottom visible")
                        }
                    }
                }
                
            },
            {threshold : 0.1}
        );
        //entries추가
        if(targetElement) {
            console.log("Observing Service Top Element");
            observer.observe(targetElement);
        }
        if(targetBottomElement) {
            console.log("Observing Service Bottom Element");
            observer.observe(targetBottomElement);
        }
        
        return () => {
            if (targetElement) observer.unobserve(targetElement);
            if (targetBottomElement) observer.unobserve(targetBottomElement);
        } //이 코드가 있으면 내려갈 때 1번 올라올 때 1번 29번 줄이 출력
          //return 함수가 없을 때 내려갈 때 3번 올라올 때 3번 29번 줄이 출력
          //정확한 상태 감지하려면 정리함수 사용해주는 것을 권장
    },[isRender])
    
        return (  
        <>
        {language === "EN" ? <Flex
            w="100%"
            minH="100vh"
            color="#333333"
            pt={28}
            zIndex={2}
            flexDir="column"
            alignItems="center"
        >
            <Box textAlign="center">
      {/* 제목 */}
      <Text fontSize="36px" fontWeight="bold" mb={8}>
        {t(`service.title`)}
      </Text>
      
      {/* 3단계 카드 */}
      <Grid
        templateColumns={["repeat(1, 1fr)","repeat(1, 1fr)", "repeat(3, 1fr)"]}
        justifyContent={"center"}
        mb={12}
        maxW="1200px"
        mx="auto"
      >
        <GridItem textAlign="center" bg="#FFF7E0" p={8} borderRadius="md">
          <Text
            bg="#FFD700"
            color="black"
            fontSize="18px"
            fontWeight="bold"
            borderRadius="full"
            display="inline-block"
            px={4}
            py={2}
            mb={4}
          >
            01
          </Text>
          <Text fontSize="20px" fontWeight="bold" mb={2}>
            {t(`service.step1.title`)}
          </Text>
          <Text color="#333333" mb={4} h="72px">
            {t(`service.step1.content`)}
          </Text>
        </GridItem>
        <GridItem textAlign="center" bg="#FFF7E0" p={8} borderRadius="md">
          <Flex 
            flexDirection={"column"} 
            alignItems={"center"} 
            justifyContent={"center"}
            width={"100%"}
          >
            <Text
              bg="#FFD700"
              color="black"
              fontSize="18px"
              fontWeight="bold"
              borderRadius="full"
              display="inline-block"
              px={4}
              py={2}
              mb={4}
            >
              02
            </Text>
            <Text fontSize="20px" fontWeight="bold" mb={2}>
              {t(`service.step2.title`)}
            </Text>
            <Text color="#333333" mb={4} h="72px">
            {t(`service.step2.content`)}
            </Text>
          </Flex>
        </GridItem>
        <GridItem textAlign="center" bg="#FFF7E0" p={8} borderRadius="md">
          <Text
            bg="#FFD700"
            color="black"
            fontSize="18px"
            fontWeight="bold"
            borderRadius="full"
            display="inline-block"
            px={4}
            py={2}
            mb={4}
          >
            03
          </Text>
          <Text fontSize="20px" fontWeight="bold" mb={2}>
            {t(`service.step3.title`)}
          </Text>
          <Text color="#333333" mb={4} h="72px">
            {t(`service.step3.content`)}
          </Text>
        </GridItem>
      </Grid>
      <Flex
        bg="#FFFFFF"
        flexWrap={"wrap"}
        borderRadius={10}
        gap={"1rem"}
        height={150} 
        justifyContent={"space-evenly"} 
        alignItems={"center"}
      >
        <Box>
          <Button
                bg="#FFD700"
                as="a" //down
                href={`/documents/${filename}`} //down
                download={filename} // 다운로드 속성 추가
          >{t(`service.guide`)}</Button>
        </Box>
        <Box>
          <label style={{}}>
            {t(`service.contract.label`)}
          </label>
          <Input mx={"1rem"} width="150px" readOnly value={"0x06D995BCA328758a668255fe8B8F7e893D58037c"}/>
          <CopyToClipboard 
            text={"0x06D995BCA328758a668255fe8B8F7e893D58037c"}
            onCopy={()=>{alert(t(`service.contract.alert`))}}
          >
            <Button bg="#FFD700">{t(`service.contract.copy`)}</Button>
          </CopyToClipboard>
        </Box>
      </Flex>
      <Flex justifyContent="center">
        <motion.div
            initial="hidden"
            animate={serviceTopAnimation}
            variants={tokenExInVariants}
            >
            <Flex alignItems="center" mt={20}>
                {epepeImg.map((v) => (
                    <Image
                    src={v.image}
                    alt="DOGE"
                    width={["110px","160px","280px","380px","400px","400px","400px"]}
                    zIndex={2}
                    id="serviceTop"
                    />
                ))}
            </Flex>
        </motion.div>
      </Flex>
    </Box>
        </Flex> 
        
        : 
        
        <Flex
            w="100%"
            minH="100vh"
            color="#333333"
            pt={28}
            zIndex={2}
            flexDir="column"
            alignItems="center"
        >
            <Text fontSize="26px" mb={12}>
                우리의 솔루션을 만나보세요
            </Text>
            <Text color="#333333" textAlign="center">
            비트코인의 확장성, 거래 속도, 에너지 효율성 등 여러 가지 한계점이 존재합니다. <br/>이러한 문제를 해결하고자 새로운 형태의 블록체인 기반 프로젝트가 등장하고 있으며, 그 중 하나가 “GPT BITCOIN(GBIT)”입니다.
            </Text>
            <motion.div
            initial="hidden"
            animate={serviceTopAnimation}
            variants={tokenExInVariants}
            >
                <Grid templateColumns={['repeat(1,1fr)','repeat(1,1fr)','repeat(2,1fr)','repeat(3,1fr)','repeat(3,1fr)','repeat(3,1fr)','repeat(3,1fr)']} w={["330px","330px","780px","1100px","1100px","1100px","1100px"]} mt={20} gap={8} id="serviceTop" justifyItems="center">
                    {serviceTopKR.map((v, i) => (
                        <GridItem w={["320px","320px","320px","320px","340px","340px","340px"]} minH="400px" p="20px" flexDir="column" display="flex" justifyContent="center" alignItems="center" bgColor="#121833" key={i}>
                            <Img w="40px" src={v.image}/>
                            <Text mt="20px" mb="20px" h="48px" textAlign="center" >
                                {v.title}
                            </Text>
                            <Flex justifyContent="center">
                                <Text textAlign="center" h="330px">
                                    {v.content}
                                </Text>
                            </Flex>
                        </GridItem>
                    ))}
                    {serviceBottomKR.map((v, i) => (
                        <GridItem w ={["320px","320px","320px","320px","340px","340px","340px"]} minH="400px" p="20px" flexDir="column" display="flex" justifyContent="center" alignItems="center" bgColor="#121833" key={i}>
                            <Img w="40px" src={v.image}/>
                            <Text mt="20px" mb="20px" h="48px" textAlign="center">
                                {v.title}
                            </Text>
                            <Flex justifyContent="center">
                                <Text textAlign="center" h="350px">
                                    {v.content}
                                </Text>
                            </Flex>
                        </GridItem>
                    ))}
                </Grid>
            </motion.div>
        </Flex>}
        </>
    )
}

export default Services;