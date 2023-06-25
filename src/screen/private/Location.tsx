import { StyleSheet, Dimensions, Linking } from 'react-native'
import React, { useState } from 'react'
import {
    Box, Image, Text, Pressable, HStack, ScrollView
} from 'native-base'
import { COLORS, FONTS } from '../../styles'
import ScreenHeader from '../../components/ScreenHeader'
import Feeds from '../../components/Feeds'
import Tag from '../../components/Tag'
import Shorts from '../../components/Shorts'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Location = () => {
    const [select, setSelect] = useState('1')
    return (
        <Box
            bgColor={COLORS.SECONDARY} flex={1}
        >
            <ScreenHeader title={'Location'} isThreeDot />
            <ScrollView>
                <Pressable
                    m={5}
                    _pressed={{
                        opacity: 0.5
                    }}
                >
                    <HStack
                        alignItems={'center'}
                    >
                        <Box
                            alignItems={'center'}
                            justifyContent={'center'}
                            alignSelf={'center'}
                        >
                            <Box
                                bgColor={'rose.400'}
                                borderRadius={'full'}
                                w={20}
                                alignItems={'center'}
                                justifyContent={'center'}
                                h={20}
                            >
                                <Ionicons name='location' size={25} color={'#fff'} />
                            </Box>
                        </Box>
                        <Box
                            mx={5}
                            mt={1}
                        >
                            <Text
                                width={'80%'}
                                fontSize={'md'}
                                // mt={4}
                                color={'#000'}
                                fontFamily={FONTS[600].normal}
                            >
                                Bay@nadi Foundation Ltd, Bhubaneswar, Odisha
                            </Text>
                            <Text
                                py={2}
                                fontSize={'xs'}
                                color={'gray.600'}
                                fontFamily={FONTS[500].normal}
                            >
                                1102 posts
                            </Text>
                        </Box>
                    </HStack>
                </Pressable>
                <Pressable
                    mx={4}
                    mt={2}
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
                <Pressable
                    onPress={() => Linking.openURL('https://itsbiswopaban.netlify.app/')}
                    _pressed={{
                        opacity: 0.5
                    }}
                    m={4}
                    shadow={5}
                    bgColor={'#fff'}
                    borderRadius={20}
                    top={4}
                >
                    <Image
                        alt={''}
                        source={{
                            uri: 'https://img.freepik.com/free-vector/vector-illustration-navigation-map-with-gps-icons_1441-361.jpg?w=740&t=st=1687630979~exp=1687631579~hmac=3d6c4c7bdc2266bf860191363bb01d3207113d900cc4210dbf4dc279fa60dad4'
                        }}
                        width={'100%'}
                        borderRadius={20}

                        height={'40'}
                    />
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

export default Location

const styles = StyleSheet.create({})