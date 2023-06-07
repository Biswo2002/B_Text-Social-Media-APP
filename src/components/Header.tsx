import AntDesign from 'react-native-vector-icons/AntDesign'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import { Flex, HStack, Image, Text } from 'native-base'
import React, { useState } from 'react'
import { IMAGES } from '../assets'
import { FONTS } from '../styles'

const Header = () => {
    const [show, setShow] = useState(false)
    const { navigate } = useNavigation<any>();
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

                <TouchableOpacity
                    onPress={() => {
                        setShow(!show);
                    }}>
                    <Ionicons
                        name={show ? 'heart' : 'heart-outline'}
                        size={30}
                        color={'red'}
                        style={{
                            marginHorizontal: 20
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigate('Inbox')}
                >
                    <AntDesign name='message1' size={23} color={'gray'} />
                </TouchableOpacity>
            </Flex>
        </HStack>
    )
}

export default Header

const styles = StyleSheet.create({})