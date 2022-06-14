import Image from 'next/image'
import { Flex, Text, Box, Icon, Button, Link, Center } from '@chakra-ui/react'
import { BsFilter } from 'react-icons/bs';
import DataFetching, { baseUrl, fetchApi } from '../utils/fetchApi';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Property from '../components/Property';
import noresult from '../assets/images/noresult.svg'
import SearchFiltersMin from '../components/SearchFiltersMin';
import BuyRentSection from '../components/BuyRentSection';
import { Divider } from "@chakra-ui/react";
import SearchBar from '../components/SearchBar';

const Banner = ({purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={600} height={400} alt="banner"/>
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{title1}<br />{title2}</Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}<br />{desc2}</Text>
      <Button fontSize="xl" bg="red.600" color="white">
        <Link href={linkName}><a>{buttonText}</a></Link>
      </Button>
    </Box>
  </Flex>
)

const Search = ({ properties }) => {
  const [searchFiltersMin, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <Box > 
      <Flex
        onClick={() => setSearchFilters(!searchFiltersMin)}
        cursor='pointer'
        borderBottom='1px'
        borderColor='gray.100'
        p='2'
        fontWeight='black'
        fontSize='xl'
        justifyContent='center'
        alignItems='center'
        bgGradient='linear(to-r, #ffe6e6, #ff0000, #ffe6e6)'
      >
        <Text fontFamily="verdana" color="#f2f2f2" >Search Property By Filters</Text>
        <Icon paddingLeft='2' w='7' as={BsFilter} color="#f2f2f2"/>
      </Flex>
      {searchFiltersMin && <SearchFiltersMin />}
    </Box>
  );
};

const Home = ({ properties }) => (
  <Box paddingBottom={12}>
      <Flex alignItems='center' justifyContent='center' paddingTop={20}>
        {/* <Text fontFamily="verdana" color="gray.700" fontWeight='black' fontSize='3xl' fontStyle='italic'>Find your dream home</Text> */}
        <Text fontFamily="verdana" color="gray.700" fontWeight='black' fontSize='5xl'  paddingLeft={2}>Find your dream home</Text>

      </Flex>
      <Flex alignItems='center' justifyContent='center' paddingBottom={10}>
      {/* <Text fontFamily="verdana" color="gray.700" fontWeight='black' fontSize='3xl' fontStyle='italic'>to build your brand new life</Text>*/}
        <Text fontFamily="verdana" color="gray.700" fontWeight='black' fontSize='4xl' paddingLeft={2} >to build your brand new life</Text>

      </Flex>
      &nbsp;
      &nbsp;
    <BuyRentSection />
    <br></br>
    <Flex p={2} paddingBottom={9} paddingTop={10}>
      <Center height="40px">
        <Divider orientation="vertical" borderColor="#ff9999" borderWidth={4} paddingTop={2}/>
      </Center>
      <Text fontFamily="verdana" color="gray.700" fontWeight='black' fontSize='4xl' paddingLeft={2}>Featured Listings</Text>
      <Text fontFamily="verdana" color="gray.700" fontSize='2xl' paddingLeft={4} paddingTop={2}>residential properties in your areas of interest</Text>
    </Flex>
    { <Flex flexWrap='wrap' paddingLeft={12}>
      {properties.map((property) => <Property property={property} key={property._id} />)}
    </Flex> }
  </Box>
);

export async function getStaticProps() {
  const properties = await fetchApi(`${baseUrl}/search`);
  // const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      properties
    }
   
  };
}


export default Home;

