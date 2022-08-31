import { RepeatClockIcon } from '@chakra-ui/icons';
import {
  Flex,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { FC } from 'react';

const ListContainer: FC = () => {
  const data = [
    {
      id: 1,
      title: 'In Your Eyes',
      author: 'The Weekend',
      album: 'After Hours',
      dateAdded: '15 days ago',
      songLength: '3:58',
      image: 'https://i.ytimg.com/vi/kxgj5af8zg4/maxresdefault.jpg',
    },
    {
      id: 2,
      title: 'Breathless',
      author: 'Shayne Ward',
      album: 'Breathless (Expanded Edition)',
      dateAdded: '15 days ago',
      songLength: '3:58',
    },
    {
      id: 2,
      title: 'Breathless',
      author: 'Shayne Ward',
      album: 'Breathless (Expanded Edition)',
      dateAdded: '15 days ago',
      songLength: '3:58',
    },
    {
      id: 1,
      title: 'In Your Eyes',
      author: 'The Weekend',
      album: 'After Hours',
      dateAdded: '15 days ago',
      songLength: '3:58',
    },
    {
      id: 2,
      title: 'Breathless',
      author: 'Shayne Ward',
      album: 'Breathless (Expanded Edition)',
      songLength: '3:58',
      dateAdded: '15 days ago',
    },
    {
      id: 1,
      title: 'In Your Eyes',
      author: 'The Weekend',
      album: 'After Hours',
      dateAdded: '15 days ago',
      songLength: '3:58',
    },
    {
      id: 2,
      title: 'Breathless',
      author: 'Shayne Ward',
      album: 'Breathless (Expanded Edition)',
      songLength: '3:58',
      dateAdded: '15 days ago',
    },
    {
      id: 2,
      title: 'Breathless',
      author: 'Shayne Ward',
      album: 'Breathless (Expanded Edition)',
      songLength: '3:58',
      dateAdded: '15 days ago',
    },
    {
      id: 1,
      title: 'In Your Eyes',
      author: 'The Weekend',
      album: 'After Hours',
      dateAdded: '15 days ago',
      songLength: '3:58',
    },
    {
      id: 1,
      title: 'In Your Eyes',
      author: 'The Weekend',
      album: 'After Hours',
      dateAdded: '15 days ago',
      songLength: '3:58',
    },
    {
      id: 2,
      title: 'Breathless',
      author: 'Shayne Ward',
      album: 'Breathless (Expanded Edition)',
      dateAdded: '15 days ago',
      songLength: '3:58',
    },
  ];

  return (
    <Flex padding={8} overflowY="auto" height="100%" w="100%">
      <TableContainer w="100%" overflowY="auto">
        <Table variant="simple" size="md">
          {/* <TableCaption>End</TableCaption> */}
          <Thead>
            <Tr>
              <Th w="50px">#</Th>
              <Th>Title</Th>
              <Th>Album</Th>
              <Th>Date Added</Th>
              <Th>
                <RepeatClockIcon />
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, index) => {
              return (
                <Tr
                  key={index}
                  cursor="pointer"
                  _hover={{
                    bg: 'gray.900',
                  }}
                >
                  <Td>{index + 1}</Td>
                  <Td>
                    <Flex gap={4} alignItems="center">
                      <Image
                        src={
                          item.image ||
                          'https://i.ytimg.com/vi/kxgj5af8zg4/maxresdefault.jpg'
                        }
                        w="36px"
                        h="36px"
                        alt=""
                        objectFit="cover"
                      />
                      <Text fontWeight="bold">{item.title}</Text>
                    </Flex>
                  </Td>
                  <Td color="gray">{item.album}</Td>
                  <Td color="gray">{item.dateAdded}</Td>
                  <Td color="gray">{item.songLength}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default ListContainer;
