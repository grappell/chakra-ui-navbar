import { LinkOverlay, LinkBox, Heading, Spacer, Button, Flex, Box, Hide, Show, useDisclosure, Collapse, Portal } from "@chakra-ui/react"
import { HamburgerIcon } from '@chakra-ui/icons'
import React from "react"


export default function Nav () {
    const ref = React.useRef();
    return (
    <><Flex bg='gray.100'>
            <LinkBox> <Box p='5' bg=''>
                <LinkOverlay href="#">
                    <Heading size='md'>Chakra-Ui</Heading>
                </LinkOverlay>
            </Box> </LinkBox>

            <Hide breakpoint='(max-width: 600px)'>
                <NavElement href="/cart" text="My Cart" />

                <NavElement href='/account' text="Accout" />

                <NavElement href='/about' text='About' />

                <Spacer />
                {/* pushes stuff over to the other side */}

                <Box bg='' alignSelf='center' mr='1rem'>
                    <Button colorScheme='orange' mr='4'>
                        Sign Up
                    </Button>
                    <Button colorScheme='orange'>Log in</Button>
                </Box>
            </Hide>

            <Show breakpoint='(max-width: 600px)'>
                <Spacer />
                <DropDown passedInRef={ref}/>
            </Show>
        </Flex>
        <div id="portalDiv" ref={ref}></div></>

)}

let NavElement = function (props) {
    return(
     <LinkBox  _hover={{transition: 'background-color 0.3s', backgroundColor: "rgb(199, 199, 199)"}} className='NavLi'> <Box p='5' bg={props.bg}>
           <LinkOverlay href={props.href} className="NavP"> {props.text} </LinkOverlay>
    </Box> </LinkBox>
    )
}

let DropDown = function (props) {
    const { isOpen, onToggle } = useDisclosure()

    if (!isOpen){
        document.getElementById('portalDiv').style.display = 'none'
    } else {
        document.getElementById('portalDiv').style.display = 'block'
    }

  return (
    <Box p='5' bg={props.bg}>
      <Button onClick={onToggle}> <HamburgerIcon  w={8} h={8} color='orange'/> </Button>
      <Collapse in={isOpen} animateOpacity>
        <Portal containerRef={props.passedInRef}>
            <Flex id="navFlexPortal" bg='gray.200' direction='column'>
                <NavElement href="/cart" text="My Cart" />
                <NavElement href='/account' text="Accout" />
                <NavElement href='/about' text='About' />
            </Flex>
        </Portal>
      </Collapse>
    </Box>
  )
}