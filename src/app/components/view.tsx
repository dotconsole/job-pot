"use client";
import { useState } from "react";
import {
  Box,
  Stack,
  Text,
  Flex,
  Card,
  CardHeader,
  Button,
  ButtonGroup,
  Container,
  Center,
} from "@chakra-ui/react";
import { TJob, jobCrate } from "../utils";
import { Inter } from "next/font/google";

const roboto = Inter({ subsets: ["latin"] });
// import
export const JobView = ({ job }: { job: TJob | undefined }) => {
  const [coverLetter, setCoverLetter] = useState(`
  [Your Name]
  [Your Address]
  [City, State ZIP Code]
  [Email Address]
  [Phone Number]
  [Date]
  
  [Company Name]
  [Company Address]
  [City, State ZIP Code]
  
  Dear Hiring Manager,
  
  I am writing to apply for the Senior Software Engineer, Backend position at Interface AI, as advertised on Greenhouse.io. With [number of years] of experience in backend development and a strong passion for solving complex problems, I am confident in my ability to contribute to your team's success.
  
  Having worked in various software development roles throughout my career, I have gained comprehensive expertise in designing and implementing scalable solutions. My proficiency in programming languages like Java and Python, along with experience in utilizing frameworks such as Spring and Django, has enabled me to successfully build and optimize robust backend systems.
  
  In my previous role at [Previous Company], I played a key role in developing a highly efficient and scalable backend architecture that supported a user base of over a million. This not only improved the overall performance of the application but also significantly reduced operational costs.
  
  Furthermore, I am well-versed in agile methodologies, collaborating closely with cross-functional teams to deliver high-quality software products within strict timelines.
  
  I am excited about the opportunity to join Interface AI, a company that values innovation and cutting-edge technology. I am confident that my skills and experience make me the right fit for this role.
  
  Thank you for considering my application. I look forward to discussing how my expertise and passion for software development can contribute to the success of Interface AI.
  
  Sincerely,`);

  // console.log(natural)

  const generateLetter = async () => {

    // const tokenized = jobCrate.tokenizeText(coverLetter)
    // console.log(tokenized)
  //   const generatedLetter = await fetch("/api/crates", {
  //     method: "POST",
  //     body: JSON.stringify({ job }),
  //   });

  //   const response = await generatedLetter.json();


  //   console.log(response.data)

    // setCoverLetter(`[Your Name]
    // [Your Address]
    // [City, State ZIP Code]
    // [Email Address]
    // [Phone Number]
    // [Date]
    
    // [Company Name]
    // [Company Address]
    // [City, State ZIP Code]
    
    // Dear Hiring Manager,
    
    // I am writing to apply for the Senior Software Engineer, Backend position at Interface AI, as advertised on Greenhouse.io. With [number of years] of experience in backend development and a strong passion for solving complex problems, I am confident in my ability to contribute to your team's success.
    
    // Having worked in various software development roles throughout my career, I have gained comprehensive expertise in designing and implementing scalable solutions. My proficiency in programming languages like Java and Python, along with experience in utilizing frameworks such as Spring and Django, has enabled me to successfully build and optimize robust backend systems.
    
    // In my previous role at [Previous Company], I played a key role in developing a highly efficient and scalable backend architecture that supported a user base of over a million. This not only improved the overall performance of the application but also significantly reduced operational costs.
    
    // Furthermore, I am well-versed in agile methodologies, collaborating closely with cross-functional teams to deliver high-quality software products within strict timelines.
    
    // I am excited about the opportunity to join Interface AI, a company that values innovation and cutting-edge technology. I am confident that my skills and experience make me the right fit for this role.
    
    // Thank you for considering my application. I look forward to discussing how my expertise and passion for software development can contribute to the success of Interface AI.
    
    // Sincerely,
    // `);

    // const letter = await jobCrate.generateCoverLetter(job!.title, job!.url)
    // setCoverLetter(letter)
  };

  if (!job) return;
  return (
    <Box marginTop="40px">
      <Flex height="680px" justifyContent="center">
        <Box width="90%">
          <Card marginBottom="5px">
            <Box padding="1em">
              <Box>
                <Text
                  fontSize="x-large"
                  fontWeight="semibold"
                  textAlign="center"
                  marginBottom="5px"
                >
                  {job.title} <span className="text-blue-500">at</span>{" "}
                  {job.company}
                </Text>
              </Box>
              {/* <Flex justify="center">
                <ButtonGroup>
                  <Button colorScheme="teal">Generate Letter</Button>
                  <Button colorScheme="purple">Generate Letter</Button>
                </ButtonGroup>
              </Flex> */}
            </Box>
          </Card>
          <Card p="1em" height="500px">
            {!coverLetter ? (
              <Flex
                justifyContent="center"
                alignItems="center"
                height="100%"
                width="100%"
              >
                <ButtonGroup>
                  <Button colorScheme="teal" onClick={generateLetter}>
                    Generate Letter
                  </Button>
                  <Button colorScheme="purple">Generate Letter</Button>
                </ButtonGroup>
              </Flex>
            ) : (
              <>
                <Flex justify="center">
                  <Container
                    height="400px"
                    backgroundColor="blue.900"
                    overflowY="scroll"
                    border="2px"
                  >
                    <Text
                      textColor="whitesmoke"
                      className={roboto.className}
                      paddingY="1em"
                      fontSize="small"
                    >
                      {coverLetter}
                    </Text>
                  </Container>
                </Flex>
                <Flex justify="center">
                  <Button marginTop="10px">Copy</Button>
                </Flex>
              </>
            )}
          </Card>
        </Box>
      </Flex>
    </Box>
  );
};
