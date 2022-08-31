import {
  ArrowBackIcon,
  ArrowForwardIcon,
  ArrowLeftIcon,
  TriangleUpIcon,
} from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  IconButton,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { FC } from 'react';

const Header: FC = () => {
  return (
    <Flex gap={4} paddingBlock={4} paddingInline={8}>
      <Center>
        <IconButton
          aria-label="Back"
          icon={<ArrowBackIcon />}
          borderRadius="50%"
        />
      </Center>
      <Center>
        <IconButton
          aria-label="Back"
          icon={<ArrowForwardIcon />}
          borderRadius="50%"
        />
      </Center>
      <Center>
        <IconButton
          aria-label="Back"
          icon={<TriangleUpIcon transform="rotate(90deg)" fontSize={20} />}
          borderRadius="50%"
          bg="primaryColor"
          h={14}
          w={14}
        />
      </Center>
      <Center>
        <Text fontSize={24} fontWeight="bold">
          Liked Songs
        </Text>
      </Center>
      <Spacer />
      <Center>
        <Menu>
          <MenuButton
            as={Button}
            // colorScheme="black"
            borderRadius="30px"
            padding={0}
          >
            <Flex alignItems="center" gap={2} paddingRight="16px">
              <Box boxSize={10}>
                <Image
                  src="https://avatars.githubusercontent.com/u/8108337"
                  alt=""
                  borderRadius="50%"
                />
              </Box>
              <Text fontWeight="700" letterSpacing={1}>
                Lewis Nguyen
              </Text>
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuGroup title="Profile">
              <MenuItem>My Account</MenuItem>
              <MenuItem>Payments </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help">
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Center>
    </Flex>
  );
};

export default Header;
