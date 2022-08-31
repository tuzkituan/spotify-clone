import {
  AddIcon,
  MoonIcon,
  PlusSquareIcon,
  Search2Icon,
  UpDownIcon,
} from '@chakra-ui/icons';
import { Button, Divider, Flex, Spacer } from '@chakra-ui/react';
import { FC } from 'react';

const Sidebar: FC = () => {
  const mainItems = [
    {
      label: 'Home',
      icon: <UpDownIcon />,
    },
    {
      label: 'Search',
      icon: <Search2Icon />,
    },
    {
      label: 'Library',
      icon: <PlusSquareIcon />,
    },
  ];

  const secondaryItems = [
    {
      label: 'Create Playlist',
      icon: <AddIcon />,
    },
    {
      label: 'Liked Songs',
      icon: <MoonIcon />,
    },
  ];

  return (
    <Flex gap={4} padding={1} direction="column" overflowY="auto" height="100%">
      <Flex direction="column" gap={2}>
        <Spacer />
        <Spacer />
        {mainItems.map((item) => {
          return (
            <Button
              iconSpacing={4}
              leftIcon={item.icon}
              key={item.label}
              bg="none"
              justifyContent="flex-start"
              size="lg"
            >
              {item.label}
            </Button>
          );
        })}
        <Spacer />
        <Spacer />
        {secondaryItems.map((item) => {
          return (
            <Button
              iconSpacing={4}
              leftIcon={item.icon}
              key={item.label}
              bg="none"
              justifyContent="flex-start"
              size="lg"
            >
              {item.label}
            </Button>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Sidebar;
