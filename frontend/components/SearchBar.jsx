import { Flex , Button, Box, Center} from "@chakra-ui/react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Text,
  } from "@chakra-ui/react";
import {
    Input,
    InputGroup,
    InputAddon,
    InputLeftAddon,
    InputRightAddon,
    InputElement,
    InputLeftElement,
    InputRightElement,
  } from "@chakra-ui/react"
  import {useState, useEffect} from 'react'

export default function SearchBar() {
  const [formData, setFormData] = useState({        
  location: '',
})

  const onChange = (e) => {setFormData((prevState) => ({...prevState, [e.target.name]: e.target.value}) )} 
  const onSubmit = () => {}
    return (
  
        <Center width='100%' h={200} bg='#FEEBD6' p={0} color='white' >
          <Box >
            <Flex>
            <FormControl id="email" >
            <InputGroup>
            
                <Input type='location' onChange={onChange} placeholder=' e.g. Thessaloniki, Kalamaria' color='#B2C581' size="lg" marginRight={1}  bg='white' width={400} _placeholder={{ color: 'gray.400' }}/>
                <Input type='location' onChange={onChange} placeholder='€ Min' color='#B2C581' marginRight={1} size="lg" bg='white' width={130} _placeholder={{ color: 'gray.400' }} />
                <Input type='location' onChange={onChange} placeholder='€ Max' color='#B2C581' marginRight={1} size="lg" bg='white' width={130} _placeholder={{ color: 'gray.400' }}/>
                <Input type='location' onChange={onChange} placeholder='m² Min' color='#B2C581' size="lg" marginRight={1} bg='white' width={130} _placeholder={{ color: 'gray.400' }}/>
                <Input type='location' onChange={onChange} placeholder='m² Max' color='#B2C581' size="lg" marginRight={1} bg='white' width={130} _placeholder={{ color: 'gray.400' }}/>
                <Box paddingLeft={6}>
                <Button size='lg' variant='outline' borderColor='#ffffff' backgroundColor="#B2C581" border='2px' color='#ffffff' _hover={{ bg: "#DACA7C", color: " white" }} fontWeight='bold'>Search</Button>
                </Box>
                </InputGroup>
            </FormControl>
            </Flex>
            </Box>
        </Center>
    )
}