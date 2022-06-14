import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';

import Property from '../components/Property';
import SearchFilters from '../components/SearchFiltersMin';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import noresult from '../assets/images/noresult.svg'

const Search = ({ properties }) => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <Box>
      <Flex
        onClick={() => setSearchFilters(!searchFilters)}
        cursor='pointer'
        // bg='gray.200'
        borderBottom='1px'
        borderColor='gray.100'
        p='2'
        fontWeight='black'
        fontSize='xl'
        justifyContent='center'
        alignItems='center'
        bgGradient='linear(to-r, #ffe6e6, #ff6666, #cc0000)'
      >
        <Text fontFamily="verdana" color="#f2f2f2" >Search Property By Filters</Text>
        <Icon paddingLeft='2' w='7' as={BsFilter} color="#f2f2f2"/>
      </Flex>
      {searchFilters && <SearchFilters />}
      <Text fontSize='2xl' p='4' fontWeight='bold' fontFamily="verdana" color="#595959">
        Properties {router.query.purpose}
      </Text>
      <Flex flexWrap='wrap'>
        {properties.map((property) => <Property property={property} key={property._id} />)}
      </Flex>
      {properties.length === 0 && (
        <Flex justifyContent='center' alignItems='center' flexDir='column' marginTop='5' marginBottom='5'>
          <Image src={noresult} />
          <Text fontSize='xl' marginTop='3'>No Result Found.</Text>
        </Flex>
      )}
    </Box>
  );
};

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || 'for-rent';
  const rentFrequency = query.rentFrequency || 'monthly';
  const minPrice = query.minPrice || '0';
  const maxPrice = query.maxPrice || '1000000';
  const roomsMin = query.roomsMin || '0';
  const bathsMin = query.bathsMin || '0';
  const sort = query.sort || 'price-desc';
  const areaMax = query.areaMax || '35000';
  const locationExternalIDs = query.locationExternalIDs || 'athens';
  // const categoryExternalID = query.categoryExternalID || '4';

  const data = await fetchApi(`${baseUrl}/search?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&minPrice=${minPrice}&maxPrice=${maxPrice}&roomsMin=${roomsMin}&areaMax=${areaMax}&sort=${sort}`);

  return {
    props: {
      properties:  JSON.parse(JSON.stringify(data)),
    },
  };
}

export default Search;