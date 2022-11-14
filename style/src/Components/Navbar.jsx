import React from 'react'
import {Flex,Button,Image,Link,IconButton,Icon} from '@chakra-ui/react'
import {HamburgerIcon,CloseIcon,SearchIcon} from '@chakra-ui/icons';
import Logo from '../Logo.png'
import {NavLink} from 'react-router-dom';
import { AiOutlineShopping } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';



const Navbar = () => {
    const [position,setPostion] = React.useState('-50vw');

    const active = {
        color:'red',
        textDecoration:'none',
    }
    const normal = {
        color:'black',
        textDecoration:'none',
    }



  return (
    <>
        <Flex>

            {/* this flex is for desktop view */}
            <Flex
                pos='fix'
                top={'1rem'}
                left={'1rem'}
                align='center'
                w='100vw'
                px={'20px'}
                justify={'space-between'}
            >
                <IconButton 
                    display={['flex','flex','none','none']}
                    aria-label='Open menu'
                    icon={<HamburgerIcon />}
                    onClick={()=>setPostion('0')}
                />
                

                <Link as={NavLink} to='/'>
                    <Image width={['40px','40px','70px','70px']} h={['40px','40px','70px','70px']} borderRadius={'50%'} src={Logo} mt={'10px'} />
                </Link>

                <Flex display={['none','none','flex','flex']}>
                    <Link as={NavLink} to='/' style={({isActive})=>isActive ? active : normal} end>
                        <Button variant='ghost'>Home</Button>
                    </Link>

                    <Link as={NavLink} to='/about' style={({isActive})=>isActive ? active : normal}>
                        <Button variant='ghost'>About Us</Button>
                    </Link>

                    <Link as={NavLink} to='/shop' style={({isActive})=>isActive ? active : normal}>
                        <Button variant='ghost'>Shop</Button>
                    </Link>

                    <Link as={NavLink} to='/categories' style={({isActive})=>isActive ? active : normal}>
                        <Button variant='ghost'>Categories</Button>
                    </Link>

                    <Link as={NavLink} to='/contact' style={({isActive})=>isActive ? active : normal}>
                        <Button variant='ghost'>Contact Us</Button>
                    </Link>
                </Flex>

                <Flex 
                    // border='1px solid red'
                    // w={'10%'}
                    // justify='space-between'
                    // gap={5}
                >
                    <Button variant={'ghost'} >
                        <SearchIcon w={'18px'} h={'18px'} />
                    </Button>
                    
                    <Link as={NavLink} to='/cart' >
                        <Button variant={'ghost'}>
                            <Icon w={'18px'} h={'18px'} as={AiOutlineShopping} />
                        </Button>
                    </Link>

                    <Link as={NavLink} to='/auth'>
                        <Button variant={'ghost'}>
                            <Icon w={'18px'} h={'18px'} as={AiOutlineUser} />
                        </Button>
                    </Link>

                </Flex>

            </Flex>


            {/* Mobile view */}

            <Flex 
                pos='fixed'
                top={0}
                left={position}
                zIndex={10}
                // border='1px solid red'
                direction={'column'}
                overflow='hidden'
                w={'50vw'}
                h={'100vh'}
                bg={'white'}
                transition={'.6s left'}
            >
                <Flex 
                    justify={'space-between'}
                >
                    <Image src={Logo} w={'40px'} h={'40px'} borderRadius='50%' />

                    <IconButton
                        aria-label='Close menu'
                        icon={<CloseIcon/>}  
                        onClick={()=>setPostion('-50vw')}
                    />
                </Flex>

                <Flex flexDir={'column'}>
                    <Link as={NavLink} to='/' style={({isActive})=>isActive ? active : normal} end>
                        <Button variant='ghost'>Home</Button>
                    </Link>

                    <Link as={NavLink} to='/about' style={({isActive})=>isActive ? active : normal}>
                        <Button variant='ghost'>About Us</Button>
                    </Link>

                    <Link as={NavLink} to='/shop' style={({isActive})=>isActive ? active : normal}>
                        <Button variant='ghost'>Shop</Button>
                    </Link>

                    <Link as={NavLink} to='/categories' style={({isActive})=>isActive ? active : normal}>
                        <Button variant='ghost'>Categories</Button>
                    </Link>

                    <Link as={NavLink} to='/contact' style={({isActive})=>isActive ? active : normal}>
                        <Button variant='ghost'>Contact Us</Button>
                    </Link>
                </Flex>

            </Flex>

        </Flex>

    </>
  )
}

export default Navbar
