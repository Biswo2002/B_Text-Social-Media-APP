import { StyleSheet, Dimensions } from 'react-native'
import React, { useState } from 'react'
import {
    Box, Image, Text, Pressable, HStack, ScrollView
} from 'native-base'
import ScreenHeader from '../../components/ScreenHeader'
import Shorts from '../../components/Shorts'
import { COLORS, FONTS } from '../../styles'
import Feeds from '../../components/Feeds'
import Tag from '../../components/Tag'

const SearchProfile = () => {
    const [select, setSelect] = useState('1')
    return (
        <Box
            bgColor={COLORS.SECONDARY} flex={1}
        >
            <ScreenHeader title={'#Biswopaban'} isThreeDot />
            <ScrollView>
                <Box
                    bgColor={COLORS.SECONDARY}
                    borderRadius={'full'}
                    // shadow={'4'}
                    m={8}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Image
                        source={{
                            uri:
                                'https://img.freepik.com/free-photo/smiling-girl-with-ponytail-colourful-pullover-snowy-day_1140-584.jpg?w=740&t=st=1686403803~exp=1686404403~hmac=0638a286939dbf8c000c3934790d2f54d095f6267cfc809592dbf99e0974c36b'
                        }}
                        size="24"
                        alt=""
                        borderRadius={'full'}
                    />
                    <Text
                        color={'#000'}
                        top={3}
                        fontFamily={FONTS[600].normal}
                        fontSize={'sm'}
                    >
                        217 M posts
                    </Text>
                </Box>
                <Pressable
                    mx={4}
                    bgColor={COLORS.PRIMARY}
                    alignItems={'center'}
                    justifyContent={'center'}
                    p={2}
                    borderRadius={'20'}
                    _pressed={{
                        opacity: 0.5
                    }}
                >
                    <Text
                        mx={2}
                        color={'white'}
                        fontFamily={FONTS[600].normal}
                    >
                        Follow
                    </Text>
                </Pressable>
                <HStack
                    m={4}
                    borderRadius={'6'}
                    justifyContent={'space-around'}
                    borderBottomWidth={1}
                    borderColor={'gray.200'}
                    width={Dimensions.get('window').width / 1.08}
                    mx={2}
                >
                    <Pressable
                        onPress={() => setSelect('1')}
                        borderBottomWidth={select === '1' ? '3' : 0}
                        borderRadius={5}
                        top={1}
                        p={3}
                        borderColor={select === '1' ? COLORS.PRIMARY : '#fff'}
                        alignItems={'center'}
                        width={'30%'}
                    >
                        <Text
                            fontFamily={FONTS[600].normal}
                            fontSize={'sm'}
                            color={select === '1' ? COLORS.PRIMARY : 'gray.600'}
                        >
                            Top
                        </Text>
                    </Pressable>
                    <Pressable
                        onPress={() => setSelect('2')}
                        borderBottomWidth={select === '2' ? '3' : 0}
                        borderRadius={2}
                        p={3}
                        borderColor={select === '2' ? COLORS.PRIMARY : '#fff'}
                        alignItems={'center'}
                        width={'30%'}
                        top={1}
                    >
                        <Text
                            fontFamily={FONTS[600].normal}
                            fontSize={'sm'}
                            color={select === '2' ? COLORS.PRIMARY : 'gray.600'}
                        >
                            Recent
                        </Text>
                    </Pressable>
                    <Pressable
                        onPress={() => setSelect('3')}
                        borderBottomWidth={select === '3' ? '3' : 0}
                        borderRadius={2}
                        p={3}
                        borderColor={select === '3' ? COLORS.PRIMARY : '#fff'}
                        alignItems={'center'}
                        width={'30%'}
                        top={1}
                    >
                        <Text
                            fontFamily={FONTS[600].normal}
                            fontSize={'sm'}
                            color={select === '3' ? COLORS.PRIMARY : 'gray.600'}
                        >
                            Shorts
                        </Text>
                    </Pressable>
                </HStack>
                <>
                    {select === '1' && <Feeds />}
                    {select === '2' && <Shorts />}
                    {select === '3' && <Tag />}
                </>
            </ScrollView>
        </Box>
    )
}

export default SearchProfile

const styles = StyleSheet.create({})