import { Avatar, Box, FlatList, HStack, Pressable, Row, StatusBar, Text } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import React from 'react'
import { PrivateNavigationProps } from '../../types/AllRoutes'
import ScreenHeader from '../../components/ScreenHeader'
import { COLORS, FONTS } from '../../styles'

const Message_data = [
    {
        id: '1',
        img: 'https://img.freepik.com/free-photo/beautiful-businesswoman-portrait_144627-28110.jpg?w=996&t=st=1686203902~exp=1686204502~hmac=945b558e2421fa294014895dd5631a682e90f46bd59fed966a8fdd26e0483ed6',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
        count: '10',
        day: 'Yesterday',
    },
    {
        id: '2',
        img: 'https://img.freepik.com/free-photo/cheerful-cute-curly-haired-girl-using-mobile-phone-smiling_176420-20214.jpg?w=996&t=st=1686201863~exp=1686202463~hmac=9a44d441281de27210d3dec6fb79d2b5c99383b16b4bec9ad7fd6a09be0d7588',
        name: 'Rajesh Baal',
        message: 'How are you ',
        count: '5',
        day: 'Yesterday',
    },
    {
        id: '3',
        img: 'https://img.freepik.com/free-photo/cheerful-cute-curly-haired-girl-using-mobile-phone-smiling_176420-20214.jpg?w=996&t=st=1686201863~exp=1686202463~hmac=9a44d441281de27210d3dec6fb79d2b5c99383b16b4bec9ad7fd6a09be0d7588',
        name: 'Ashis Nayak',
        message: 'How are you ',
        count: '5',
        day: 'Yesterday',
    },
    {
        id: '4',
        img: 'https://img.freepik.com/free-photo/portrait-blonde-woman-striped-shirt-with-phone_273609-5147.jpg?w=996&t=st=1686202483~exp=1686203083~hmac=814973a8cb13bbfb06efd036e6ec9a4b213dd1d2b5d4039e837a2fb5fee51b7b',
        name: 'Patita Paban Sahoo',
        message: 'How are you ',
        count: '12',
        day: 'Yesterday',
    },
    {
        id: '5',
        img: 'https://img.freepik.com/free-photo/business-concept-portrait-business-woman-using-mobile-phone-isolated-white-background_1258-104579.jpg?w=996&t=st=1686202892~exp=1686203492~hmac=797ce8f8b228098217d58f63b6fac8b9805f1f722c626ffc77668499d024498e',
        name: 'Biswajit Parida',
        message: 'How are you ',
        count: '5',
        day: 'Yesterday',
    },
    {
        id: '6',
        img: 'https://img.freepik.com/free-photo/business-concept-portrait-business-woman-using-mobile-phone-isolated-white-background_1258-104579.jpg?w=996&t=st=1686202892~exp=1686203492~hmac=797ce8f8b228098217d58f63b6fac8b9805f1f722c626ffc77668499d024498e',
        name: 'Dinesh Bala',
        message: 'How are you ',
        count: '8',
        day: 'Yesterday',
    },
    {
        id: '7',
        img: 'https://img.freepik.com/free-photo/business-concept-portrait-business-woman-using-mobile-phone-isolated-white-background_1258-104579.jpg?w=996&t=st=1686202892~exp=1686203492~hmac=797ce8f8b228098217d58f63b6fac8b9805f1f722c626ffc77668499d024498e',
        name: 'Bulia Nayak',
        message: 'How are you ',
        count: '5',
        day: 'Yesterday',
    },
    {
        id: '8',
        img: 'https://img.freepik.com/free-photo/business-concept-portrait-business-woman-using-mobile-phone-isolated-white-background_1258-104579.jpg?w=996&t=st=1686202892~exp=1686203492~hmac=797ce8f8b228098217d58f63b6fac8b9805f1f722c626ffc77668499d024498e',
        name: 'Payodhar Nayak',
        message: 'How are you ',
        count: '42',
        day: 'Yesterday',
    },
    {
        id: '9',
        img: 'https://img.freepik.com/free-photo/business-concept-portrait-business-woman-using-mobile-phone-isolated-white-background_1258-104579.jpg?w=996&t=st=1686202892~exp=1686203492~hmac=797ce8f8b228098217d58f63b6fac8b9805f1f722c626ffc77668499d024498e',
        name: 'K P Lipsa',
        message: 'How are you ',
        count: '12',
        day: 'Yesterday',
    },
    {
        id: '10',
        img: 'https://img.freepik.com/free-photo/business-concept-portrait-business-woman-using-mobile-phone-isolated-white-background_1258-104579.jpg?w=996&t=st=1686202892~exp=1686203492~hmac=797ce8f8b228098217d58f63b6fac8b9805f1f722c626ffc77668499d024498e',
        name: 'Barsha Dhal',
        message: 'How are you ',
        count: '50',
        day: 'Yesterday',
    },
    {
        id: '1.a',
        img: 'https://img.freepik.com/free-photo/beautiful-businesswoman-portrait_144627-28110.jpg?w=996&t=st=1686203902~exp=1686204502~hmac=945b558e2421fa294014895dd5631a682e90f46bd59fed966a8fdd26e0483ed6',
        name: 'Dinesh Bala',
        message: 'How are you ',
        count: '80',
        day: 'Yesterday',
    },
    {
        id: '2.a',
        img: 'https://img.freepik.com/free-photo/cheerful-cute-curly-haired-girl-using-mobile-phone-smiling_176420-20214.jpg?w=996&t=st=1686201863~exp=1686202463~hmac=9a44d441281de27210d3dec6fb79d2b5c99383b16b4bec9ad7fd6a09be0d7588',
        name: 'Sanjukta Bilasa',
        message: 'How are you ',
        count: '75',
        day: 'Yesterday',
    },
    {
        id: '3.a',
        img: 'https://img.freepik.com/free-photo/cheerful-cute-curly-haired-girl-using-mobile-phone-smiling_176420-20214.jpg?w=996&t=st=1686201863~exp=1686202463~hmac=9a44d441281de27210d3dec6fb79d2b5c99383b16b4bec9ad7fd6a09be0d7588',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
        count: '22',
        day: 'Yesterday',
    },
    {
        id: '564',
        img: 'https://img.freepik.com/free-photo/portrait-blonde-woman-striped-shirt-with-phone_273609-5147.jpg?w=996&t=st=1686202483~exp=1686203083~hmac=814973a8cb13bbfb06efd036e6ec9a4b213dd1d2b5d4039e837a2fb5fee51b7b',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
        count: '55',
        day: 'Yesterday',
    },
    {
        id: '155',
        img: 'https://img.freepik.com/free-photo/business-concept-portrait-business-woman-using-mobile-phone-isolated-white-background_1258-104579.jpg?w=996&t=st=1686202892~exp=1686203492~hmac=797ce8f8b228098217d58f63b6fac8b9805f1f722c626ffc77668499d024498e',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
        count: '10',
        day: 'Yesterday',
    },
    {
        id: '65',
        img: 'https://img.freepik.com/free-photo/business-concept-portrait-business-woman-using-mobile-phone-isolated-white-background_1258-104579.jpg?w=996&t=st=1686202892~exp=1686203492~hmac=797ce8f8b228098217d58f63b6fac8b9805f1f722c626ffc77668499d024498e',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
        count: '5',
        day: 'Yesterday',
    },
    {
        id: '71',
        img: 'https://img.freepik.com/free-photo/business-concept-portrait-business-woman-using-mobile-phone-isolated-white-background_1258-104579.jpg?w=996&t=st=1686202892~exp=1686203492~hmac=797ce8f8b228098217d58f63b6fac8b9805f1f722c626ffc77668499d024498e',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
        count: '56',
        day: 'Yesterday',
    },
    {
        id: '82',
        img: 'https://img.freepik.com/free-photo/business-concept-portrait-business-woman-using-mobile-phone-isolated-white-background_1258-104579.jpg?w=996&t=st=1686202892~exp=1686203492~hmac=797ce8f8b228098217d58f63b6fac8b9805f1f722c626ffc77668499d024498e',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
        count: '8',
        day: 'Yesterday',
    },
    {
        id: '91',
        img: 'https://img.freepik.com/free-photo/business-concept-portrait-business-woman-using-mobile-phone-isolated-white-background_1258-104579.jpg?w=996&t=st=1686202892~exp=1686203492~hmac=797ce8f8b228098217d58f63b6fac8b9805f1f722c626ffc77668499d024498e',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
        count: '15',
        day: 'Yesterday',
    },
    {
        id: '101',
        img: 'https://img.freepik.com/free-photo/business-concept-portrait-business-woman-using-mobile-phone-isolated-white-background_1258-104579.jpg?w=996&t=st=1686202892~exp=1686203492~hmac=797ce8f8b228098217d58f63b6fac8b9805f1f722c626ffc77668499d024498e',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
        count: '5',
        day: 'Yesterday',
    },
    {
        id: '11',
        img: 'https://img.freepik.com/free-photo/beautiful-businesswoman-portrait_144627-28110.jpg?w=996&t=st=1686203902~exp=1686204502~hmac=945b558e2421fa294014895dd5631a682e90f46bd59fed966a8fdd26e0483ed6',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
        count: '5',
        day: 'Yesterday',
    },
    {
        id: '12',
        img: 'https://img.freepik.com/free-photo/cheerful-cute-curly-haired-girl-using-mobile-phone-smiling_176420-20214.jpg?w=996&t=st=1686201863~exp=1686202463~hmac=9a44d441281de27210d3dec6fb79d2b5c99383b16b4bec9ad7fd6a09be0d7588',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
        count: '15',
        day: 'Yesterday',
    },
    {
        id: '13',
        img: 'https://img.freepik.com/free-photo/cheerful-cute-curly-haired-girl-using-mobile-phone-smiling_176420-20214.jpg?w=996&t=st=1686201863~exp=1686202463~hmac=9a44d441281de27210d3dec6fb79d2b5c99383b16b4bec9ad7fd6a09be0d7588',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
        count: '5',
        day: 'Yesterday',
    },
    {
        id: '14',
        img: 'https://img.freepik.com/free-photo/portrait-blonde-woman-striped-shirt-with-phone_273609-5147.jpg?w=996&t=st=1686202483~exp=1686203083~hmac=814973a8cb13bbfb06efd036e6ec9a4b213dd1d2b5d4039e837a2fb5fee51b7b',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
        count: '10',
        day: 'Yesterday',
    },
    {
        id: '15',
        img: 'https://img.freepik.com/free-photo/business-concept-portrait-business-woman-using-mobile-phone-isolated-white-background_1258-104579.jpg?w=996&t=st=1686202892~exp=1686203492~hmac=797ce8f8b228098217d58f63b6fac8b9805f1f722c626ffc77668499d024498e',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
        count: '56',
        day: 'Yesterday',
    },
    {
        id: '16',
        img: 'https://img.freepik.com/free-photo/business-concept-portrait-business-woman-using-mobile-phone-isolated-white-background_1258-104579.jpg?w=996&t=st=1686202892~exp=1686203492~hmac=797ce8f8b228098217d58f63b6fac8b9805f1f722c626ffc77668499d024498e',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
        count: '58',
        day: 'Yesterday',
    },
    {
        id: '17',
        img: 'https://img.freepik.com/free-photo/business-concept-portrait-business-woman-using-mobile-phone-isolated-white-background_1258-104579.jpg?w=996&t=st=1686202892~exp=1686203492~hmac=797ce8f8b228098217d58f63b6fac8b9805f1f722c626ffc77668499d024498e',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
        count: '55',
        day: 'Yesterday',
    },
    {
        id: '18',
        img: 'https://img.freepik.com/free-photo/business-concept-portrait-business-woman-using-mobile-phone-isolated-white-background_1258-104579.jpg?w=996&t=st=1686202892~exp=1686203492~hmac=797ce8f8b228098217d58f63b6fac8b9805f1f722c626ffc77668499d024498e',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
        count: '5',
        day: 'Yesterday',
    },
    {
        id: '19',
        img: 'https://img.freepik.com/free-photo/business-concept-portrait-business-woman-using-mobile-phone-isolated-white-background_1258-104579.jpg?w=996&t=st=1686202892~exp=1686203492~hmac=797ce8f8b228098217d58f63b6fac8b9805f1f722c626ffc77668499d024498e',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
        count: '5',
        day: 'Yesterday',
    },
    {
        id: '20',
        img: 'https://img.freepik.com/free-photo/business-concept-portrait-business-woman-using-mobile-phone-isolated-white-background_1258-104579.jpg?w=996&t=st=1686202892~exp=1686203492~hmac=797ce8f8b228098217d58f63b6fac8b9805f1f722c626ffc77668499d024498e',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
        count: '5',
        day: 'Yesterday',
    },
]

const RequestMessage = () => {
    const [select, setSelect] = React.useState('');
    const { navigate } = useNavigation<PrivateNavigationProps>();
    return (
        <Box bgColor={'#fff'} flex={1} >
            <ScreenHeader title={'Message Request'} />
            <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
            <Box
                my={5}
            >
                <FlatList
                    data={Message_data}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 25,
                    }}
                    renderItem={({ item }) => (
                        <Pressable
                            onPress={() => { navigate('Message', { UserDetails: item?.name, UserImage: item?.img }), setSelect(item?.id) }}
                        >
                            <Row
                                mx={4}
                                my={1}
                                justifyContent={'space-between'}
                                borderWidth={select === (item?.id) ? 2 : 0}
                                p={3}
                                borderRadius={'12'}
                                borderColor={select === (item?.id) ? COLORS.PRIMARY : '#fff'}
                            >
                                <HStack
                                >
                                    <Avatar
                                        source={{
                                            uri: item?.img
                                        }}
                                        size="12"
                                    />
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
                                            {/* {item?.A_Name} */}
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
                                <Box
                                    alignItems={'center'}
                                    justifyContent={'center'}
                                    alignSelf={'center'}
                                >
                                    {
                                        item?.count &&
                                        <Box
                                            bgColor={COLORS.PRIMARY}
                                            borderRadius={'full'}
                                            w={6}
                                            alignItems={'center'}
                                            justifyContent={'center'}
                                            h={6}
                                        >
                                            <Text
                                                fontSize={'xs'}
                                                color={'#FFFF'}
                                                fontFamily={FONTS[500].normal}
                                            >
                                                {item?.count}
                                            </Text>
                                        </Box>
                                    }
                                    <Text
                                        fontSize={'xs'}
                                        color={'gray.600'}
                                        fontFamily={FONTS[500].normal}
                                    >
                                        {item?.day}
                                    </Text>
                                </Box>
                            </Row>
                        </Pressable>


                    )}
                />

            </Box>
        </Box >
    )
}

export default RequestMessage

const styles = StyleSheet.create({})