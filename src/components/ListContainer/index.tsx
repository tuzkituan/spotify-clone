import { RepeatClockIcon } from '@chakra-ui/icons';
import {
  Flex,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { fetchSongs, getSongs } from 'store/actions/songsSlice';
import { getToken } from 'store/actions/userSlice';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'store/hooks';
import { convertSecondsToHHmmss } from 'utils/time';
import { convertDateAgo } from 'utils/dates';

const ListContainer: FC = () => {
  const token = useSelector(getToken);
  const dispatch = useAppDispatch();
  const data = useSelector(getSongs);

  useEffect(() => {
    if (token) {
      dispatch(fetchSongs());
    }
  }, [token, dispatch]);

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
            {data?.map((item: any, index: number) => {
              const artists = item.track?.artists
                ?.map((x: any) => x.name)
                ?.join(', ');
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
                          item.track?.album?.images?.[0]?.url ||
                          'https://i.ytimg.com/vi/kxgj5af8zg4/maxresdefault.jpg'
                        }
                        w="36px"
                        h="36px"
                        alt=""
                        objectFit="cover"
                      />
                      <Flex direction="column" gap={2}>
                        <Text fontWeight="bold">{item.track?.name}</Text>
                        <Text color="gray.500" fontSize="12px">
                          {artists}
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td color="gray">{item.track?.album?.name}</Td>
                  <Td color="gray">{convertDateAgo(item.added_at)}</Td>
                  <Td color="gray">
                    {convertSecondsToHHmmss(item.track.duration_ms)}
                  </Td>
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
