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
import {FaUser} from 'react-icons/fa'

export default function Login() {
        const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
      })
      const {name, email, password, password2} = formData
      const onChange = () => {}
    return (
        <Center width='100%' h={250} >
          <Box>
            <Flex>
            <FormControl id="email" >
            <InputGroup>
                <form>
                <div className='form-group'> 
                <Box paddingTop={3}>
                <Input type='email' placeholder='Enter your email' className='form-control' id='email' name='email' value={email} onChange={onChange} size="lg" marginRight={1}  bg='white' width={400} _placeholder={{ color: 'gray.400' }}/>
                </Box> 
                </div>
                <div className='form-group'> 
                <Box paddingTop={3}>
                <Input type='password' placeholder='Enter your password' className='form-control' id='password' name='password' value={password} onChange={onChange} size="lg" marginRight={1}  bg='white' width={400} _placeholder={{ color: 'gray.400' }}/>
                </Box>
                </div>          
                <Box paddingTop={3}>
                <Button size='lg' variant='outline' borderColor='#ffffff' backgroundColor="#ff8484" border='2px' color='#ffffff' _hover={{ bg: "#ff9999", color: " white" }} fontWeight='bold'>Login</Button>
                </Box>
                </form>
                </InputGroup>
            </FormControl>
            </Flex>
            </Box>
        </Center>
    )
}