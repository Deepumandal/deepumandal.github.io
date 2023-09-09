import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Img,
  Stack,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import React from "react";
// import { Fade } from "react-reveal";
import Greetings from "../../components/greetings/Greetings";
import Socials from "../../components/socialmedia/Socials";
import What from "../../components/WhatIDo/What";
import { seo, skills } from "../../portfolio";

const Home: React.FC = () => {
  return (
    <Box>
      <Grid
        id={"Home"}
        height={{ base: "800px", sm: "600px" }}
        w={{
          base: "100%",
          sm: "90%",
          md: "800px",
          lg: "1000px",
          xl: "1100px",
          "2xl": "1400px",
        }}
        templateRows={{ base: "repeat(3, 1fr)", sm: "repeat(1, 1fr)" }}
        templateColumns={{ base: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" }}
        gridTemplateAreas={{
          base: `"greet"
                  "Social"
                  "Image"
          `,
          sm: `    " greet Image" 
                    " Social Image"
           `,
        }}
        m={"auto"}
      // border={"1px"}
      >
        <GridItem area={"greet"} h={{ sm: "450px" }}>
          <Greetings />
        </GridItem>
        <GridItem area={"Image"} h={{ sm: "600px", base: "500px" }}>
          {/* <Fade distance="20px" duration={1000} bottom> */}
          <br />
          <Tooltip label={"Feeling Proud"}>
            <Img
              w={{ base: "80%", sm: "100%" }}
              m={"auto"}
              mt={"40px"}
              src={`./images/greetings.png`}
            />
          </Tooltip>
          {/* </Fade> */}
        </GridItem>
        <GridItem
          area={"Social"}
          // border={"1px"}
          h={"150px"}
        >
          {/* <Fade distance={"20px"} duration={1000} bottom> */}
          <Socials />
          <Button
            mt={"20px"}
            bg={"thistheme.text"}
            color={"#c5d3e1"}
            className={"gitbun"}
            transition="1s"
            variant={"outline"}
            colorScheme={"thistheme.text"}
          >
            <a href={seo.og.url} rel="noreferrer" target={"_blank"}>
              ⭐ Star Me On Github
            </a>
          </Button>
          {/* </Fade> */}
        </GridItem>
      </Grid>

      {/* what i do  */}
      <VStack mt={{ base: "1rem", sm: "200px" }}>

        {/* <Fade bottom  distance={"40px"} duration={1000}> */}
        <Heading
          mb={{ sm: "80px", base: "40px" }}
          sx={{
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 600,
            fontSize: "45px",
          }}
          color={"thistheme.text"}
        >
          What I do?
        </Heading>
        {/* </Fade> */}
        <Stack gap={"2rem"}>

          <What {...skills.data[0]} />
          <What {...skills.data[1]} even={true} />
          <What {...skills.data[2]} />
        </Stack>
      </VStack>
    </Box>
  );
};

export default Home;
