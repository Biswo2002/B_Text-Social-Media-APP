import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { StyleSheet, TouchableOpacity } from 'react-native'
import Octicons from 'react-native-vector-icons/Octicons';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import {
    Pressable,
    FlatList,
    HStack,
    Avatar,
    Input,
    Image,
    Row,
    Text,
    Icon,
    Box,
} from 'native-base';
import { PrivateNavigationProps } from '../../types/AllRoutes';
import { COLORS, FONTS } from '../../styles';

const data = [
    {
        id: '1.0',
        name: 'You',
        img: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
        // onPress: () => setIsShare(true),
    },
    {
        id: '1',
        name: 'Ashis',
        img: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=826&t=st=1685899203~exp=1685899803~hmac=500c1778b3615b8af19a33fc9152e9b17f33796969b788baa68db7c1056f0388',
        // onPress: () => navigate('Story'),
    },
    {
        id: '2',
        name: 'Biswo',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
        // onPress: () => navigate('Story'),
    },
    {
        id: '3',
        name: 'Lipsa ',
        img: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=826&t=st=1685899203~exp=1685899803~hmac=500c1778b3615b8af19a33fc9152e9b17f33796969b788baa68db7c1056f0388',
        // onPress: () => navigate('Story'),
    },
    {
        id: '4',
        name: 'Ritesh',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
        // onPress: () => navigate('Story'),
    },
    {
        id: '5',
        name: 'Rajesh',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
        // onPress: () => navigate('Story'),
    },
    {
        id: '6',
        name: 'Dinesh',
        img: 'https://img.freepik.com/free-photo/young-adult-woman-with-beautiful-face-isolated-white-skin-care-concept_186202-8664.jpg?w=740&t=st=1685898670~exp=1685899270~hmac=d9f2f2361fb0788907793dbbf538d6db40cea7ec736aa04cb81bbd1b8c9ab0c1',
        // onPress: () => navigate('Story'),
    },
    {
        id: '7',
        name: 'Mahesh',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
        // onPress: () => navigate('Story'),
    },
    {
        id: '8',
        name: 'Munesh',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
        // onPress: () => navigate('Story')
    },
    {
        id: '9',
        name: 'Sukesh',
        img: 'https://img.freepik.com/free-photo/young-adult-woman-with-beautiful-face-isolated-white-skin-care-concept_186202-8664.jpg?w=740&t=st=1685898670~exp=1685899270~hmac=d9f2f2361fb0788907793dbbf538d6db40cea7ec736aa04cb81bbd1b8c9ab0c1',
        // onPress: () => navigate('Story'),
    },
    {
        id: '10',
        name: 'Biswajit',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
        // onPress: () => navigate('Story'),
    },
    {
        id: '11',
        name: 'Biswo',
        img: 'https://img.freepik.com/free-photo/young-adult-woman-with-beautiful-face-isolated-white-skin-care-concept_186202-8664.jpg?w=740&t=st=1685898670~exp=1685899270~hmac=d9f2f2361fb0788907793dbbf538d6db40cea7ec736aa04cb81bbd1b8c9ab0c1',
        // onPress: () => navigate('Story'),
    },
    {
        id: '12',
        name: 'Manas',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
        // onPress: () => navigate('Story'),
    },

]
const Message_data = [
    {
        id: '1',
        img: 'https://img.freepik.com/free-photo/beautiful-businesswoman-portrait_144627-28110.jpg?w=996&t=st=1686203902~exp=1686204502~hmac=945b558e2421fa294014895dd5631a682e90f46bd59fed966a8fdd26e0483ed6',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
        count: '5',
        day: 'Yesterday',
    },
    {
        id: '2',
        img: 'https://img.freepik.com/free-photo/cheerful-cute-curly-haired-girl-using-mobile-phone-smiling_176420-20214.jpg?w=996&t=st=1686201863~exp=1686202463~hmac=9a44d441281de27210d3dec6fb79d2b5c99383b16b4bec9ad7fd6a09be0d7588',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
        // count: '5',
        day: 'Yesterday',
    },
    {
        id: '3',
        img: 'https://img.freepik.com/free-photo/cheerful-cute-curly-haired-girl-using-mobile-phone-smiling_176420-20214.jpg?w=996&t=st=1686201863~exp=1686202463~hmac=9a44d441281de27210d3dec6fb79d2b5c99383b16b4bec9ad7fd6a09be0d7588',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
        count: '5',
        day: 'Yesterday',
    },
    {
        id: '4',
        img: 'https://img.freepik.com/free-photo/portrait-blonde-woman-striped-shirt-with-phone_273609-5147.jpg?w=996&t=st=1686202483~exp=1686203083~hmac=814973a8cb13bbfb06efd036e6ec9a4b213dd1d2b5d4039e837a2fb5fee51b7b',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
        count: '5',
        day: 'Yesterday',
    },
    {
        id: '5',
        img: 'https://img.freepik.com/free-photo/business-concept-portrait-business-woman-using-mobile-phone-isolated-white-background_1258-104579.jpg?w=996&t=st=1686202892~exp=1686203492~hmac=797ce8f8b228098217d58f63b6fac8b9805f1f722c626ffc77668499d024498e',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
        // count: '5',
        day: 'Yesterday',
    },
    {
        id: '6',
        img: 'https://img.freepik.com/free-photo/business-concept-portrait-business-woman-using-mobile-phone-isolated-white-background_1258-104579.jpg?w=996&t=st=1686202892~exp=1686203492~hmac=797ce8f8b228098217d58f63b6fac8b9805f1f722c626ffc77668499d024498e',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
        count: '5',
        day: 'Yesterday',
    },
    {
        id: '7',
        img: 'https://img.freepik.com/free-photo/business-concept-portrait-business-woman-using-mobile-phone-isolated-white-background_1258-104579.jpg?w=996&t=st=1686202892~exp=1686203492~hmac=797ce8f8b228098217d58f63b6fac8b9805f1f722c626ffc77668499d024498e',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
        count: '5',
        day: 'Yesterday',
    },
    {
        id: '8',
        img: 'https://img.freepik.com/free-photo/business-concept-portrait-business-woman-using-mobile-phone-isolated-white-background_1258-104579.jpg?w=996&t=st=1686202892~exp=1686203492~hmac=797ce8f8b228098217d58f63b6fac8b9805f1f722c626ffc77668499d024498e',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
        // count: '5',
        day: 'Yesterday',
    },
    {
        id: '9',
        img: 'https://img.freepik.com/free-photo/business-concept-portrait-business-woman-using-mobile-phone-isolated-white-background_1258-104579.jpg?w=996&t=st=1686202892~exp=1686203492~hmac=797ce8f8b228098217d58f63b6fac8b9805f1f722c626ffc77668499d024498e',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
        count: '5',
        day: 'Yesterday',
    },
    {
        id: '10',
        img: 'https://img.freepik.com/free-photo/business-concept-portrait-business-woman-using-mobile-phone-isolated-white-background_1258-104579.jpg?w=996&t=st=1686202892~exp=1686203492~hmac=797ce8f8b228098217d58f63b6fac8b9805f1f722c626ffc77668499d024498e',
        name: 'Biswopaban Nayak',
        message: 'How are you ',
        count: '5',
        day: 'Yesterday',
    },
]
const Inbox = () => {
    const { goBack, navigate } = useNavigation<PrivateNavigationProps>();
    return (
        <Box bgColor={'#fff'} flex={1} >
            {/* <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} /> */}
            <Row
                justifyContent={'space-between'}
                alignItems={'center'}
                mt={5}
                mr={5}
            >
                <HStack
                    alignItems={'center'}
                >
                    <Pressable
                        onPress={goBack}
                        mx={4}
                    >
                        <AntDesign name='arrowleft' size={25} color={COLORS.PRIMARY} />
                    </Pressable>
                    <Text
                        fontSize={18}
                        fontFamily={FONTS[700].normal}
                        bold
                    >
                        Inbox
                    </Text>
                </HStack>
                <Row
                    alignItems={'center'}
                >
                    <TouchableOpacity
                        style={{
                            marginHorizontal: 5
                        }}
                    >
                        <Octicons name='diff-added' size={23} color={'gray'} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            marginHorizontal: 20
                        }}
                    >
                        <Feather name='video' size={23} color={'gray'} />
                    </TouchableOpacity>
                    <Pressable
                        borderWidth={1.5}
                        borderColor={'gray.500'}
                        px={1}
                        borderRadius={'full'}
                    >
                        <AntDesign name='ellipsis1' size={20} color={'gray'} />
                    </Pressable>
                </Row>
            </Row>
            <Box
                mx={4}
                mt={12}
            >
                <Input
                    placeholder="Search"
                    width="100%"
                    focusOutlineColor={COLORS.PRIMARY}
                    borderRadius="12"
                    backgroundColor={'#fafafa'}
                    py="2"
                    px="1"
                    mb={'5'}
                    fontSize="14"
                    InputLeftElement={
                        <Icon
                            m="2"
                            ml="3"
                            size="6"
                            color="gray.400"
                            as={<MaterialIcons name="search" />}
                        />
                    }
                />
            </Box>
            <Text
                m={4}
                fontFamily={FONTS[600].normal}
                fontSize={'sm'}

            >
                Recently
            </Text>
            <Box
                mx={2}
            >
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) => (
                        <Pressable
                            justifyContent={'center'}
                            alignItems={'center'}
                            mt={'2'}
                        >
                            <Box
                                bgColor={COLORS.SECONDARY}
                                borderRadius={'full'}
                                shadow={'4'} ml={4}
                                borderWidth={3}
                                p={1}
                                borderColor={COLORS.PRIMARY}
                            >
                                <Image
                                    source={{
                                        uri:
                                            item?.img
                                    }}
                                    size="12"
                                    alt=""
                                    borderRadius={'full'}
                                />
                            </Box>
                            <Text
                                fontFamily={FONTS[600].normal}
                                fontSize={'sm'}
                                color={'#000'}
                                my={1}
                            >
                                {item?.name}
                            </Text>
                        </Pressable>
                    )}
                />

            </Box>
            <Row
                justifyContent={'space-between'}
                m={4}
            >
                <Text
                    fontFamily={FONTS[600].normal}
                    fontSize={'sm'}
                    color={'#000'}
                >
                    Message
                </Text>
                <TouchableOpacity
                    onPress={() => navigate('RequestMessage')}
                >
                    <Text
                        fontFamily={FONTS[800].normal}
                        fontSize={'sm'}
                        color={'blue.700'}
                    >
                        Requests
                    </Text>
                </TouchableOpacity>
            </Row>

            <FlatList
                data={Message_data}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => navigate('Message', { UserDetails: item?.name, UserImage: item?.img })}
                    >
                        <Row
                            m={4}
                            justifyContent={'space-between'}
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
    )
}

export default Inbox

const styles = StyleSheet.create({})