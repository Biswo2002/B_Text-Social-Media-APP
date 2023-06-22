import { StyleSheet } from 'react-native'
import React from 'react'
import { Avatar, Box, FlatList, HStack, Pressable, Row, Text } from 'native-base'
import { COLORS, FONTS } from '../styles'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Message_data = [
    {
        id: '1',
        img: 'https://img.freepik.com/free-photo/beautiful-businesswoman-portrait_144627-28110.jpg?w=996&t=st=1686203902~exp=1686204502~hmac=945b558e2421fa294014895dd5631a682e90f46bd59fed966a8fdd26e0483ed6',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
    },
    {
        id: '2',
        img: 'https://img.freepik.com/free-photo/cheerful-cute-curly-haired-girl-using-mobile-phone-smiling_176420-20214.jpg?w=996&t=st=1686201863~exp=1686202463~hmac=9a44d441281de27210d3dec6fb79d2b5c99383b16b4bec9ad7fd6a09be0d7588',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
    },
    {
        id: '3',
        img: 'https://img.freepik.com/free-photo/cheerful-cute-curly-haired-girl-using-mobile-phone-smiling_176420-20214.jpg?w=996&t=st=1686201863~exp=1686202463~hmac=9a44d441281de27210d3dec6fb79d2b5c99383b16b4bec9ad7fd6a09be0d7588',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
    },
    {
        id: '4',
        img: 'https://img.freepik.com/free-photo/portrait-blonde-woman-striped-shirt-with-phone_273609-5147.jpg?w=996&t=st=1686202483~exp=1686203083~hmac=814973a8cb13bbfb06efd036e6ec9a4b213dd1d2b5d4039e837a2fb5fee51b7b',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
    },
    {
        id: '5',
        img: 'https://img.freepik.com/free-photo/business-concept-portrait-business-woman-using-mobile-phone-isolated-white-background_1258-104579.jpg?w=996&t=st=1686202892~exp=1686203492~hmac=797ce8f8b228098217d58f63b6fac8b9805f1f722c626ffc77668499d024498e',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
    },
    {
        id: '6',
        img: 'https://img.freepik.com/free-photo/business-concept-portrait-business-woman-using-mobile-phone-isolated-white-background_1258-104579.jpg?w=996&t=st=1686202892~exp=1686203492~hmac=797ce8f8b228098217d58f63b6fac8b9805f1f722c626ffc77668499d024498e',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
    },
    {
        id: '7',
        img: 'https://img.freepik.com/free-photo/business-concept-portrait-business-woman-using-mobile-phone-isolated-white-background_1258-104579.jpg?w=996&t=st=1686202892~exp=1686203492~hmac=797ce8f8b228098217d58f63b6fac8b9805f1f722c626ffc77668499d024498e',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
    },
    {
        id: '8',
        img: 'https://img.freepik.com/free-photo/business-concept-portrait-business-woman-using-mobile-phone-isolated-white-background_1258-104579.jpg?w=996&t=st=1686202892~exp=1686203492~hmac=797ce8f8b228098217d58f63b6fac8b9805f1f722c626ffc77668499d024498e',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
    },
    {
        id: '9',
        img: 'https://img.freepik.com/free-photo/business-concept-portrait-business-woman-using-mobile-phone-isolated-white-background_1258-104579.jpg?w=996&t=st=1686202892~exp=1686203492~hmac=797ce8f8b228098217d58f63b6fac8b9805f1f722c626ffc77668499d024498e',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
    },
    {
        id: '10',
        img: 'https://img.freepik.com/free-photo/business-concept-portrait-business-woman-using-mobile-phone-isolated-white-background_1258-104579.jpg?w=996&t=st=1686202892~exp=1686203492~hmac=797ce8f8b228098217d58f63b6fac8b9805f1f722c626ffc77668499d024498e',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
    },
]
const Search5 = () => {
    return (
        <Box>
            <FlatList
                data={Message_data}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Pressable
                        m={4}
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
                                    bgColor={COLORS.PRIMARY}
                                    borderRadius={'full'}
                                    w={16}
                                    alignItems={'center'}
                                    justifyContent={'center'}
                                    h={16}
                                >
                                    <Ionicons name='location' size={25} color={'#fff'} />
                                </Box>
                            </Box>
                            <Box
                                mx={5}
                                mt={1}
                            >
                                <Text
                                    fontSize={'sm'}
                                    // mt={4}
                                    color={'#000'}
                                    fontFamily={FONTS[600].normal}
                                >
                                    {item?.name}
                                </Text>
                                <Text
                                    fontSize={'xs'}
                                    color={'gray.600'}
                                    fontFamily={FONTS[500].normal}
                                >
                                    {item?.message}
                                </Text>
                            </Box>
                        </HStack>
                    </Pressable>
                )}
            />
        </Box>
    )
}

export default Search5

const styles = StyleSheet.create({})