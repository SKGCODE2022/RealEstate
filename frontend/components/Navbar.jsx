import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';
import { BsFillHouseDoorFill, BsCashCoin, BsFillPersonFill } from "react-icons/bs";
import logo from "../assets/images/logo_main_no_bg.png"
import Image from 'next/image'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { useDisclosure } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react'

export default function Navbar() {
  const { 
    isOpen: isOpenReportModal, 
    onOpen: onOpenReportModal, 
    onClose: onCloseReportModal 
  } = useDisclosure()

  const { isOpen, onOpen, onClose } = useDisclosure()
  
  return (
  <Flex>
    <Box fontSize='4xl' color='#ff9999' fontWeight='bold' fontStyle='italic'>
      <Link href='/'>
        <Image src={logo} alt="logo" />
      </Link>
    </Box>
    <Spacer />
    {/* { <Box p={14} paddingRight="8px">
    <Select value={'option1'}>
      <option value='option1'>el</option>
      <option value='option2'>en</option>
    </Select>
    </Box> } */}
    <Box p={7} paddingRight="4px">
      <Menu isOpen={isOpen}>
        <MenuButton as={IconButton} icon={<BsFillPersonFill />} variant='outline' color='#ff9999' borderRadius={20} onMouseEnter={onOpen} onMouseLeave={onClose}/> 
          <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
          <Link href={`/login`} passHref>
            <MenuItem>Login</MenuItem>
          </Link>
          <Link href={`/register`} passHref>
            <MenuItem>Register</MenuItem>
          </Link>
          </MenuList>
      </Menu>
      &nbsp;
      &nbsp;
      <Menu isOpen={isOpenReportModal}>
        <MenuButton as={IconButton} icon={<FcMenu />} variant='outline' color='#ff9999' onMouseEnter={onOpenReportModal} onMouseLeave={onCloseReportModal} /> 
        <MenuList onMouseEnter={onOpenReportModal} onMouseLeave={onCloseReportModal}>
          <Link href='/' passHref>
            <MenuItem icon={<BsFillHouseDoorFill />}>Home</MenuItem>
          </Link>
          <Link href='search' passHref>
            <MenuItem icon={<BsSearch />}>Search</MenuItem>
          </Link>
          <Link href='search?purpose=for-sale' passHref>
            <MenuItem icon={<BsCashCoin />}>Buy Property</MenuItem>
          </Link>
          <Link href='search?purpose=for-rent' passHref>
            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
  )
};

// export default Navbar;
