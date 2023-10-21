import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
  Center,
  Image,
  Input,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, SearchIcon } from '@chakra-ui/icons';
import usericon from '../Images/usericon.png';
import logo from '../Images/disasterLogo.png';
import { Link } from 'react-router-dom';
import {GiHamburgerMenu} from "react-icons/gi"

interface Props {
  children: React.ReactNode;
}

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
        color: useColorModeValue('black', 'white'), // Set text color based on color mode
      }}
      href={'#'}>
      {children}
    </Box>
  );
};

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Image src={logo} w={'8%'} />

          {/* Search Bar */}
          <Input
            type="text"
            placeholder="Search"
            size="sm"
            w={'300px'}
            h={'35px'}
            bg={useColorModeValue('white', 'gray.800')}
            borderColor={useColorModeValue('gray.300', 'gray.700')}
            _placeholder={{
              color: useColorModeValue('gray.600', 'gray.300'),
            }}
          />

          {/* YourGroup Section */}
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Text fontWeight={'bold'} mt={2}><Link>YourGroup</Link></Text>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar size={'sm'} src={usericon} />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem
                    _hover={{
                      bgColor: useColorModeValue('black', 'white'), // Set background color based on color mode
                      color: useColorModeValue('white', 'black'), // Set text color based on color mode
                    }}
                  >
                    <Link>Sign Up</Link>
                  </MenuItem>
                  <MenuItem
                    _hover={{
                      bgColor: useColorModeValue('black', 'white'), // Set background color based on color mode
                      color: useColorModeValue('white', 'black'), // Set text color based on color mode
                    }}
                  >
                    <Link>Sign In</Link>
                  </MenuItem>
                  <MenuItem
                    _hover={{
                      bgColor: useColorModeValue('black', 'white'), // Set background color based on color mode
                      color: useColorModeValue('white', 'black'), // Set text color based on color mode
                    }}
                  >
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
