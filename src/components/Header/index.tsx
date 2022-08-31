import {
  ArrowBackIcon,
  ArrowForwardIcon,
  TriangleUpIcon,
} from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { getMe, logout } from 'store/actions/userSlice';
import { useAppDispatch } from 'store/hooks';

const Header: FC = () => {
  const user = useSelector(getMe);
  const dispatch = useAppDispatch();

  const onLogout = () => {
    window.localStorage.removeItem('token');
    dispatch(logout);
    window.location.reload();
  };

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
                <Image src={user?.images?.[0]?.url} alt="" borderRadius="50%" />
              </Box>
              <Text fontWeight="700" letterSpacing={1}>
                {user?.display_name}
              </Text>
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuGroup title={user?.product}>
              <MenuItem>{user?.email}</MenuItem>
              <MenuItem onClick={onLogout}>Log out</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Center>
    </Flex>
  );
};

export default Header;
