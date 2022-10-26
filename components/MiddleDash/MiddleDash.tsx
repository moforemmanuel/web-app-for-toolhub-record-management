import {
  Box,
  Button,
  Center,
  Flex,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { IUser } from 'interfaces/user';
import React from 'react';
import CountUp from 'react-countup';

// 3 import line types
import { Line } from 'react-chartjs-2';

// 1 Import controllers and elements
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ScriptableContext,
} from 'chart.js';
import { useViewport } from 'hooks/useViewport';
import { MockTools } from 'storage/tools';
import { FaTools } from 'react-icons/fa';
import { useRouter } from 'next/router';
import DashSwiper from '../DashSwiper/DashSwiper';

const lineData = () =>
  // canvas: HTMLCanvasElement
  {
    // const ctx = canvas.getContext('2d');
    // let gradient = ctx!.createLinearGradient(0, 0, 0, 150);
    // gradient.addColorStop(0, 'rgba(0, 124, 194, 0.1');
    // gradient.addColorStop(0.5, 'rgba(0, 124, 194, 0.3');
    // gradient.addColorStop(1, 'rgba(0, 124, 194, 0.9');

    return {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      datasets: [
        {
          label: 'My Contribution',
          fill: true,
          lineTension: 0.5,
          backgroundColor: (context: ScriptableContext<'line'>) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 150);
            // gradient.addColorStop(0, 'rgba(240, 255, 244, 1)');
            // gradient.addColorStop(1, 'rgba(250,174,50,0)');
            gradient.addColorStop(1, 'rgba(72, 187, 120, 0.2)');
            gradient.addColorStop(0.5, 'rgba(72, 187, 120, 0.5)');
            gradient.addColorStop(0, 'rgba(72, 187, 120, 0.8)');
            return gradient;
          },
          // borderColor: '#B57295',
          borderColor: '#1C4532',
          borderCapStyle: 'butt',
          // borderDashOffset: 0.0,
          borderJoinStyle: '#B57295',
          pointBorderColor: '#B57295',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#B57295',
          pointHoverBorderColor: '#B57295',
          pointHoverBorderWidth: 2,
          pointRadius: 3,
          pointHitRadius: 10,
          showLine: true,

          data: [1, 3, 2, 5, 4, 6, 7, 6, 10, 4],
        },
      ],
    };
  };

const lineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    line: {
      tensions: 0.5,
      borderWidth: 2,
      borderColor: 'rgba(47,97,68,1)',
      fill: 'start',
      backgroundColor: 'rgba(47,97,68,1)',
    },
    point: {
      radius: 0,
      hitRadius: 0,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        beginAtZero: true,
        display: true,
      },
      ticks: {
        stepSize: 2,
      },
    },
  },
};

interface MiddleDashProps {
  user: IUser;
}
const MiddleDash = ({ user }: MiddleDashProps) => {
  const { width: deviceWidth } = useViewport();
  const router = useRouter();

  // 2 register them
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

  // ChartJS.defaults.scale.grid.display = false;

  return (
    <Flex align="center" justify="center" direction="column" gap={3}>
      <SimpleGrid
        // templateRows="repeat(4, 1fr)"
        // border="thin solid green"
        w="100%"
        spacing={5}
      >
        <GridItem
          // rowSpan={2}
          bg="white"
          shadow="md"
          rounded="lg"
          p={{ base: 3, md: 6 }}
          pb={{ md: 6 }}
          mb={0}
          // border="thin solid purple"
          maxH="fit-content"
        >
          {/* First Section */}
          <Box
            // p={3}
            textAlign="left"
            w="100%"
            minH="60%"
            maxH="60vh"
            // border="thin solid purple"
          >
            <Heading
              as="h1"
              fontFamily="var(--chakara-fonts-manjari)"
              textAlign="left"
              mb={3}
              color="green.600"
              className="animate__animated animate__fadeInDown animate__slow"
            >
              Hey {user.firstName},
            </Heading>

            <Box>
              <Heading
                as="h2"
                fontSize="xl"
                textAlign="start"
                className="animate__animated animate__bounceIn animate__slow"
              >
                Your Contribution Activity
              </Heading>

              <Box
                // border="thin solid red"
                mt={6}
                minH="100%"
                maxH="100%"
                h="inherit"
              >
                <Line
                  // @ts-ignore
                  data={lineData()}
                  // width={100}
                  // height={40}
                  // width={deviceWidth <= 768 ? '60%' : '100%'}
                  // height={deviceWidth <= 768 ? '35%' : '15%'}
                  width="100%"
                  height="250%"
                  options={lineOptions}
                />
              </Box>
            </Box>
          </Box>
          {/* First Section */}
        </GridItem>

        <GridItem
          shadow="md"
          rounded="lg"
          // rowSpan={1}
          // border="thin solid purple"
          // p={3}
          pb={3}
          bg="white"
          h="100%"
          data-aos="fade-up"
        >
          <VStack p={3} mb={0}>
            <Heading
              mb={3}
              className="animate__animated animate__bounceIn animate__slow"
            >
              Record Statistics
            </Heading>
            <Box>
              <SimpleGrid columns={{ base: 2, md: 4 }} spacing={3}>
                {[
                  {
                    title: 'Total Contributions',
                    value: parseInt(`${user.contributions_count}`),
                  },
                  {
                    title: 'Tools Edited',
                    value: parseInt(`${user.edited_tools}`),
                  },
                  {
                    title: 'Tools in Record',
                    value: 100,
                  },
                  {
                    title: 'Tools Missing Information',
                    value: 25,
                  },
                ].map((item, index) => (
                  <GridItem
                    key={index}
                    bg="linear-gradient(45deg, rgba(72, 187, 120, 0.4), rgba(66, 153, 225, 0.2))"
                    shadow="md"
                    rounded="xl"
                    data-aos="zoom-in"
                  >
                    <Flex
                      align="center"
                      justify="space-around"
                      direction="column"
                      gap={3}
                      p={6}
                    >
                      <Text
                        fontFamily="var(--chakra-fonts-roboto"
                        fontWeight="bold"
                        textAlign="center"
                        noOfLines={2}
                        h="20%"
                      >
                        {item.title}
                      </Text>
                      <Text
                        fontSize="5xl"
                        fontWeight="bolder"
                        textAlign="center"
                      >
                        <CountUp
                          start={0}
                          end={item.value}
                          duration={2}
                          enableScrollSpy={true}
                        />
                      </Text>
                    </Flex>
                  </GridItem>
                ))}
              </SimpleGrid>
            </Box>
          </VStack>
        </GridItem>

        <GridItem
          data-aos="fade-up"
          shadow="md"
          rounded="lg"
          bg="white"
          // rowSpans={1}
          // border="thin solid purple"
          p={3}
          py={5}
          minW="100%"
          maxW="100%"
        >
          <Box>
            <Heading
              mb={3}
              textStyle="h1"
              className="animate__animated animate__bounceIn animate__slow"
            >
              Tools You Edited
            </Heading>
            <DashSwiper />
          </Box>
        </GridItem>
      </SimpleGrid>
    </Flex>
  );
};

export default MiddleDash;
