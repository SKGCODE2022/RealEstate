import { Grid, GridItem, Text, Center, Square, Circle, Image } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';

export default function SocialSection(){
    return (
<Grid templateColumns='repeat(2, 1fr)' color="white" gap={0}  mt="0" mb="5"  bgGradient="linear(to-r, #ff9999, #ff8080, #ff9999)" >
<GridItem w='100%' p="10" paddingLeft={200}>
  <Text fontSize='2xl' color='white'>Be a friend, be social</Text>
  <Text fontSize='4xl' color='white'>Follow Nowayhome on</Text>
</GridItem>
<GridItem w='100%' p="6" >
  <Grid templateColumns='repeat(3, 1fr)' color="white" gap={0}  mt="5">
    <GridItem w='100%' p="9" align='center'><Link>
    <Image  w="40px"  src='https://cdn-icons-png.flaticon.com/512/145/145802.png' />
      <Text fontSize='2xl' color='white'>Facebook</Text></Link>
    </GridItem>
    <GridItem w='100%' p="9" align='center'><Link>
    <Image  w="40px"  src='https://cdn-icons-png.flaticon.com/512/2111/2111463.png' />
      <Text fontSize='2xl' color='white'>Instagram</Text></Link>
    </GridItem>
    <GridItem w='100%' p="9" align='center'><Link>
      <Image  w="40px"  src='https://cdn-icons-png.flaticon.com/512/1384/1384060.png' />
      <Text fontSize='2xl' color='white'>Youtube</Text></Link>
      
    </GridItem>
  </Grid>
</GridItem> 
</Grid>
    )
};