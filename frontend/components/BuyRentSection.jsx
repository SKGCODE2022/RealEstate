import { Grid, GridItem, Text, Center, Square, Circle } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';

export default function BuyRentSection(){
    return (
        <Grid templateColumns='repeat(2, 1fr)' color="white" gap={10}  mt="5" paddingBottom={63}>
        <Center rounded={'2xl'} overflow={'hidden'} w='100%' backgroundImage="https://i.ibb.co/Pcp0xTT/home-buy.jpg" h="300" p="6"  color='#E8E9ED' fontWeight='bold' fontSize='7xl' ><Link textShadow='2px 1px #000000' href='/search?purpose=for-sale'>BUY</Link></Center>
        <Center rounded={'2xl'} overflow={'hidden'} w='100%' backgroundImage="https://i.ibb.co/tsR9gb6/home-rent.jpg" h="300" p="6"  color='#E8E9ED' fontWeight='bold' fontSize='7xl'><Link textShadow='2px 1px #000000' href='/search?purpose=for-rent'>RENT</Link></Center>
      </Grid>
    )
};


