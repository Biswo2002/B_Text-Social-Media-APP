import { Box, Flex, HStack, Image, Text } from 'native-base'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import { StyleSheet } from 'react-native'
import React from 'react'
import { IMAGES } from '../assets'
import { FONTS } from '../styles'

const Header = () => {
    return (
        <HStack
            justifyContent={'space-between'}
            m={'5'}
            alignItems={'center'}
        >
            <Flex
                direction='row'
                alignItems={'center'}
            >
                <Image alt={''}
                    source={IMAGES.LOGO2}
                    size={10}
                />
                <Text
                    fontSize={'xl'}
                    fontFamily={FONTS[700].normal}
                    mx={4}
                    mt={1}
                >
                    Bak Bak
                </Text>
            </Flex>
            <Flex
                direction='row'
            >
                <Feather name='heart' size={25} color={'gray'} style={{
                    marginHorizontal: 20
                }} />
                <AntDesign name='message1' size={23} color={'gray'} />
            </Flex>
        </HStack>
    )
}

export default Header

const styles = StyleSheet.create({})