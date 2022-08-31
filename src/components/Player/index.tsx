import {
  ChevronLeftIcon,
  ChevronRightIcon,
  RepeatClockIcon,
  RepeatIcon,
  StarIcon,
  TriangleUpIcon,
  UpDownIcon,
} from '@chakra-ui/icons';
import {
  Center,
  Flex,
  IconButton,
  Image,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from '@chakra-ui/react';
import { FC } from 'react';

const Player: FC = () => {
  return (
    <Flex w="100%" alignItems="center" h="100%" padding={4} gap={4}>
      <Center>
        <Flex gap={8}>
          <Center>
            <Image
              src="https://i.ytimg.com/vi/kxgj5af8zg4/maxresdefault.jpg"
              alt=""
              boxSize={20}
              objectFit="cover"
              marginRight={4}
              // h="fit-content"
            />
            <Flex direction="column">
              <Text fontWeight="700">Out of Time</Text>
              <Text fontSize="12px">The Weekend</Text>
            </Flex>
          </Center>
          <Center>
            <StarIcon fontSize={16} cursor="pointer" />
          </Center>
        </Flex>
      </Center>

      <Center flex={1}>
        <Flex direction="column" gap={4} alignItems="center" paddingBlock={2}>
          <Flex gap={2} alignItems="center">
            <IconButton
              aria-label="previous"
              size="md"
              bg="none"
              icon={<RepeatIcon fontSize={16} />}
            />
            <IconButton
              aria-label="previous"
              size="md"
              bg="none"
              icon={<ChevronLeftIcon fontSize={24} />}
            />
            <IconButton
              aria-label="Back"
              icon={
                <TriangleUpIcon
                  transform="rotate(90deg)"
                  fontSize={20}
                  color="black"
                />
              }
              borderRadius="50%"
              bg="white"
              h={12}
              w={12}
            />
            <IconButton
              aria-label="next"
              size="md"
              bg="none"
              icon={<ChevronRightIcon fontSize={24} />}
            />
            <IconButton
              aria-label="previous"
              size="md"
              bg="none"
              icon={<RepeatClockIcon fontSize={16} />}
            />
          </Flex>
          <Flex gap={6} alignItems="center">
            <Text fontSize={11} color="gray">
              0:00
            </Text>
            <Slider aria-label="volume-bar" defaultValue={30} w="30vw">
              <SliderTrack h="3px">
                <SliderFilledTrack bg="primaryColor" h="3px" />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <Text fontSize={11} color="gray">
              5:29
            </Text>
          </Flex>
        </Flex>
      </Center>
      <Center>
        <Flex gap={4}>
          <Center>
            <UpDownIcon />
          </Center>
          <Center>
            <Slider aria-label="volume-bar" defaultValue={30} w="100px">
              <SliderTrack>
                <SliderFilledTrack bg="primaryColor" />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Center>
        </Flex>
      </Center>
    </Flex>
  );
};

export default Player;
