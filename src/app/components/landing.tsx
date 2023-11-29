"use client";
import { useState, useEffect } from "react";
import PageLink from "next/link";
import {
  Flex,
  Button,
  Highlight,
  Heading,
  Input,
  Container,
  Card,
  Center,
  Stack,
  Text,
  useColorModeValue,
  CardBody,
  CardHeader,
  CardFooter,
  SimpleGrid,
  Link,
  Box,
  VStack,
  Spacer,
} from "@chakra-ui/react";
import { jobCrate, TJob } from "@apply-up/utils";
import { useJobs } from "@apply-up/app/hooks";

export const Landing = () => {
  const { loadJobs } = useJobs();

  const [analysis, setAnalysis] = useState("");
  const [availableJobs, setAvailableJobs] = useState<
    TJob[]
  >([]);

  // console.log("set", [...new Set(availableJobs)]);
  const testEndpoint = async (e: any) => {
    const res = await fetch(
      "https://jobsearch4.p.rapidapi.com/api/v2/Jobs/Search?SearchQuery=javascript&PageSize=100&PageNumber=1",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "da107207ccmsh6c66098c73c5e9ep143ac5jsn4f046b8cc5c8",
          "X-RapidAPI-Host": "jobsearch4.p.rapidapi.com",
        },
      }
    );
    const r = await res.json();
    console.log(r);
  };
  const doStuff = async () => {
    // const url = "https://weatherapi-com.p.rapidapi.com/current.json?q=K2G";
    // const options = {
    //   method: "GET",
    //   headers: {
    //     "X-RapidAPI-Key": "84f1311ademsh51049eedf95ad99p16ea8cjsn959901fb1258",
    //     "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    //   },
    // };

    try {
      // const response = await fetch(url, options);
      // const data = await response.json();
      // const processed = {
      //   location_name: data.location.name,
      //   location_country: data.location.country,
      //   current_last_updated: data.current.last_updated,
      //   condition_wind_kph: data.current.wind_kph,
      //   condition_humidity: data.current.humidity,
      //   condition_cloud: data.current.cloud,
      //   condition_precip_mm: data.current.precip_mm,
      //   current_temp: data.current.temp_c,
      //   condition_tem_feels_like: data.current.feelslike_c,
      // };
      // const res = await fetch("/api/weather", {
      //   method: "POST",
      //   body: JSON.stringify(processed),
      // });
      const res = await fetch("/api/weather", {
        method: "POST",
        // body: JSON.stringify(processed),
      });

      // console.log(await res.json());
    } catch (error) {
      console.error(error);
    }
  };

  const handleFile = async (e: any) => {
    const file = e.target.files[0];
    const arrayBuffer = await file.arrayBuffer();
    const result = await jobCrate.convertPDFToText(arrayBuffer);
    // console.log(result.length);
    //  const res = await fetch("/api/nlp", {
    //   method: "POST",
    //   body: result,
    // });
    // const r =  await res.json()
    // console.log(r)
    // console.log(result.substring(0, 50))
    console.log("about to analyze");
    const analysis = await jobCrate.analyzeResume(
      JSON.stringify(result)
    );
    setAnalysis(analysis);
    console.log("done analyzing");
  };

  // http://jobsite.experimentsinthedeep3.com/api/v2/Jobs/Search?pageNumber=872&pageSize=10

  useEffect(() => {
    // fetch

    // const url = "https://weatherapi-com.p.rapidapi.com/current.json?q=K2G";
    // const options = {
    //   method: "GET",
    //   headers: {
    //     "X-RapidAPI-Key": "84f1311ademsh51049eedf95ad99p16ea8cjsn959901fb1258",
    //     "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    //   },
    // };

    const jobs = localStorage.getItem("jobs-crates");
    if (jobs) {
      console.log(JSON.parse(jobs)[0]);
      setAvailableJobs(JSON.parse(jobs));
    }

    // console.log(localStorage.getItem('jobs-crates'))

    // fetch('/api/crates', {
    //   method: 'GET'
    // }).then(res => res.json()).then(r => {
    //   console.log(r.data)
    //  localStorage.setItem('jobs-crates', JSON.stringify(r.data))
    // })

    // console.log('log')

    // return(() => {})
  }, []);
  return (
    <div>
      <Flex alignItems="center" justifyContent="center" marginTop="12">
        <Heading
          fontWeight="medium"
          letterSpacing="wider"
          fontSize={{ base: "sm", md: "2xl", lg: "2xl" }}
        >
          <Highlight
            query="fit right"
            styles={{
              rounded: "full",
              bg: "blue.400",
              px: 3,
              py: 2,
              fontWeight: "semibold",
              color: "#FFF",
            }}
          >
            Make your resume fit right for the job
          </Highlight>
        </Heading>
      </Flex>
      {/* <Button
        onClick={testEndpoint}
        colorScheme="teal"
        size={{ base: "xs", md: "md" }}
      >
        Fetch New Data
      </Button>

      <Input variant="outline" type="file" onChange={handleFile} style={{ cursor: 'pointer' }} /> */}
      <Container maxWidth="2xl" marginTop={10}>
        {/* <Box height="300px" overflowY="scroll"> */}
        <SimpleGrid
          columns={[1, null, 2]}
          spacing={2}
          height="500px"
          overflowY="scroll"
        >
          {availableJobs.map((job, idx) => {
            return (
              <Card key={`${availableJobs[0].slug}-${idx}`} boxShadow="lg" variant='elevated'>
                <CardBody paddingBottom={1}>
                  <Box fontSize="xs" marginBottom={2}>
                    <Flex>
                      <Text fontWeight="semibold" maxWidth={150}>
                        {job.title}
                      </Text>
                      <Spacer />
                      <Text textColor="blue.400" fontWeight="semibold">
                        {" "}
                        <Link href={job.url.slice(0, job.url.indexOf("?"))}>
                          [{job.company}]
                        </Link>
                      </Text>
                    </Flex>
                  </Box>
                  <Stack gap={0}>
                    <Flex marginY="0.5" paddingY={0}>
                      <Text fontSize="xs">Date Added: </Text>
                      <Text fontSize="xs" marginLeft={3}>
                        {job.dateAdded &&
                          new Date(job.dateAdded).toDateString()}
                      </Text>
                    </Flex>
                    <Flex marginY="0.5" paddingY={0}>
                      <Text fontSize="xs">Date Posted: </Text>
                      <Text fontSize="xs" marginLeft={3}>
                        {job.postDate && new Date(job.postDate).toDateString()}
                      </Text>
                    </Flex>
                  </Stack>
                </CardBody>
                <CardFooter paddingTop={2}>
                  <Flex minWidth="full" justifyContent="center" fontSize="xs">
                    {/* <Text color="blue.400" fontWeight="semibold">
                      <Link
                        href={job.url.slice(0, job.url.indexOf("?"))}
                      ></Link>
                    </Text> */}
                    <Text color="green.400" fontWeight="semibold">
                      <PageLink
                        href={{
                          pathname: "/job",
                          query: { name: job.slug },
                        }}
                      >
                        Open
                      </PageLink>
                    </Text>
                  </Flex>
                </CardFooter>
              </Card>
              // </PageLink>
            );
          })}
        </SimpleGrid>
        {/* </Box> */}
      </Container>

      <p>{analysis}</p>
    </div>
  );
};
