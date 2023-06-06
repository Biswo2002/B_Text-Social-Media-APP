import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ActionSheet from '../../../components/Actionsheet'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import { Dimensions, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import {
    useDisclose,
    ScrollView,
    Pressable,
    FlatList,
    Divider,
    Avatar,
    HStack,
    Image,
    Input,
    Text,
    Icon,
    Row,
    Box,
} from 'native-base'
import { COLORS, FONTS } from '../../../styles'

const data = [
    {
        id: '0',
        img: 'https://img.freepik.com/free-photo/woman-hiking-mountains-drinking-water_1303-11181.jpg?w=996&t=st=1686059359~exp=1686059959~hmac=2dac56c43cd78ea452ada6f63b0502c8242438600627c47a7d846a50cf1060eb'
    },
    {
        id: '01',
        img: 'https://img.freepik.com/free-photo/young-female-hiker-sitting-top-rock-with-her-backpack-eye-shielding_23-2148139696.jpg?w=740&t=st=1686060481~exp=1686061081~hmac=61b8c61de4e554c04c3e0b58dd6347a86a217b8bcee7e924a6dbd13114dc042c'
    },
    {
        id: '1',
        img: 'https://img.freepik.com/free-photo/elegant-couple-winter-park_1157-17675.jpg?w=996&t=st=1686059590~exp=1686060190~hmac=358d5cbcbc24627c534eb4fef6eaf0f1e409304b08a64227e6596178f9fd1fb0'
    },
    {
        id: '2',
        img: 'https://img.freepik.com/free-photo/elegant-couple-winter-park_1157-17675.jpg?w=996&t=st=1686059590~exp=1686060190~hmac=358d5cbcbc24627c534eb4fef6eaf0f1e409304b08a64227e6596178f9fd1fb0'
    },
    {
        id: '3',
        img: 'https://img.freepik.com/free-photo/man-with-camera-map_23-2147654192.jpg?w=996&t=st=1686059640~exp=1686060240~hmac=76ce460dfff1e29aaabf47b358d7cb2b0b46581970be8279e16a77ceff2583d5'
    },
    {
        id: '4',
        img: 'https://img.freepik.com/free-photo/female-travellers-with-binoculars_23-2147654132.jpg?w=996&t=st=1686059669~exp=1686060269~hmac=b3ff21c6e58bec9cd80c0dfa36ce0dd27f00474d8869d746127e8af60a1cc865'
    },

]

const data1 = [
    {
        id: '1',
        name: 'Ashis ku. Nayak',
        deg: 'Pricnipal',
        img: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=826&t=st=1685899203~exp=1685899803~hmac=500c1778b3615b8af19a33fc9152e9b17f33796969b788baa68db7c1056f0388',
        status: 'Sent',
    },
    {
        id: '2',
        name: 'Biswopaban Nayak',
        deg: 'Software Engineer',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
        status: 'Sent',
    },
    {
        id: '3',
        name: 'K P Lipsa ',
        deg: 'Lab Technician',
        img: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=826&t=st=1685899203~exp=1685899803~hmac=500c1778b3615b8af19a33fc9152e9b17f33796969b788baa68db7c1056f0388',
        status: 'Sent',
    },
    {
        id: '4',
        name: 'Ritesh Ku Sahoo',
        deg: 'Pricnipal',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
        status: 'Send',
    },
    {
        id: '5',
        name: 'Rajesh ku. Nayak',
        deg: 'Pricnipal',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
        status: 'Sent',
    },
    {
        id: '6',
        name: 'Dinesh ku. Nayak',
        deg: 'Pricnipal',
        img: 'https://img.freepik.com/free-photo/young-adult-woman-with-beautiful-face-isolated-white-skin-care-concept_186202-8664.jpg?w=740&t=st=1685898670~exp=1685899270~hmac=d9f2f2361fb0788907793dbbf538d6db40cea7ec736aa04cb81bbd1b8c9ab0c1',
        status: 'Sent',
    },
    {
        id: '7',
        name: 'Mahesh ku. Nayak',
        deg: 'Pricnipal',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
        status: 'Send',
    },
    {
        id: '8',
        name: 'Munesh ku. Nayak',
        deg: 'Pricnipal',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
        status: 'Send',
    },
    {
        id: '9',
        name: 'Sukesh ku. Nayak',
        deg: 'Pricnipal',
        img: 'https://img.freepik.com/free-photo/young-adult-woman-with-beautiful-face-isolated-white-skin-care-concept_186202-8664.jpg?w=740&t=st=1685898670~exp=1685899270~hmac=d9f2f2361fb0788907793dbbf538d6db40cea7ec736aa04cb81bbd1b8c9ab0c1',
        status: 'Sent',
    },
    {
        id: '10',
        name: 'Biswajit ku. Nayak',
        deg: 'Pricnipal',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
        status: 'Send',
    },
    {
        id: '11',
        name: 'Biswopaban Nayak',
        deg: 'Pricnipal',
        img: 'https://img.freepik.com/free-photo/young-adult-woman-with-beautiful-face-isolated-white-skin-care-concept_186202-8664.jpg?w=740&t=st=1685898670~exp=1685899270~hmac=d9f2f2361fb0788907793dbbf538d6db40cea7ec736aa04cb81bbd1b8c9ab0c1',
        status: 'Sent',
    },
    {
        id: '12',
        name: 'Manas ku. Nayak',
        deg: 'Pricnipal',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
        status: 'Send',
    },

]

const Story = () => {

    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();
    const [SelectItem, setSelectItem] = useState('');
    const [isShare, setIsShare] = useState(false)

    const Sheet = [
        {
            id: '1',
            title: 'Report',
            icon: <AntDesign name='exclamationcircle' size={23} color={COLORS.PRIMARY} />,
        },
        {
            id: '2',
            title: 'Copy Link',
            icon: <Ionicons name='ios-copy' size={23} color={COLORS.PRIMARY} />,
        },
        {
            id: '3',
            title: 'Share to',
            icon: <Feather name='send' size={23} color={COLORS.PRIMARY} />,
            onPress: () => setIsShare(true)
        },
        {
            id: '4',
            title: 'Mute',
            icon: <Entypo name='sound-mute' color={COLORS.PRIMARY} size={23} />,
        },
    ]

    return (
        <Box
            bgColor={'gray.700'}
            flex={1}
        >
            <FlatList
                data={data}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Image
                        source={{
                            uri: item?.img
                        }}
                        alt={''}
                        width={Dimensions.get('window').width}
                        height={Dimensions.get('window').height / 1.1}
                    />
                )
                }
            />
            <Box
                position={'absolute'}
            >
                {/* <Row
                    m={4}
                    alignItems={'center'}
                >
                    <Box
                        width={'20'}
                        bgColor={COLORS.PRIMARY}
                        p={.5}
                        m={2}
                    >
                    </Box>
                    <Box
                        width={'20'}
                        bgColor={COLORS.SECONDARY}
                        p={.5}
                        m={2}
                    >
                    </Box>
                    <Box
                        width={'20'}
                        bgColor={COLORS.PRIMARY}
                        p={.5}
                        m={2}
                    >
                    </Box>
                    <Box
                        width={'20'}
                        bgColor={COLORS.SECONDARY}
                        p={.5}
                        m={2}
                    >
                    </Box>
                </Row> */}
                <Row
                    justifyContent={'space-around'}
                    alignItems={'center'}
                    ml={4}
                    pt={4}
                >
                    <HStack
                    >
                        <Avatar
                            source={{
                                uri: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3'
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
                                Biswopaban Nayak
                            </Text>
                            <Text
                                fontSize={'xs'}
                                color={'gray.600'}
                                fontFamily={FONTS[500].normal}
                            >
                                1 hour ago
                            </Text>
                        </Box>
                    </HStack>
                    <Pressable
                        // mr={1}
                        ml={'28%'}
                        borderWidth={1.5}
                        borderColor={'rose.400'}
                        px={1}
                        borderRadius={'full'}
                        onPress={onOpen}
                    >
                        <AntDesign name='ellipsis1' size={23} color={COLORS.PRIMARY} />
                    </Pressable>
                </Row>
            </Box>
            <Row
                m={4}
                justifyContent={'space-around'}
            // alignItems={'center'}
            >
                <Input
                    placeholder="Search Message "
                    width="70%"
                    focusOutlineColor={COLORS.PRIMARY}
                    borderRadius="12"
                    borderColor={'transparent'}
                    backgroundColor={'gray.600'}
                    py="2"
                    px="1"
                    mb={'5'}
                    fontSize="14"
                />
                <Ionicons name='ios-heart-outline' size={30} color={'white'} />
                <Feather name='send' size={23} color={'white'} />

            </Row>

            <ActionSheet isOpen={isOpen} onClose={onClose}  >
                {
                    Sheet.map(item => (
                        <Pressable onPress={() => {
                            setSelectItem(item?.title)
                            onClose()
                        }} key={item.id}
                            alignSelf={'flex-start'}
                            ml={1}
                        >
                            <Row
                                alignItems={'center'}
                            >
                                {item?.icon}
                                <Pressable
                                    onPress={item?.onPress}
                                >
                                    <Text
                                        fontSize={'md'}
                                        fontFamily={FONTS[600].normal}
                                        color={SelectItem === (item?.id) ? COLORS.PRIMARY : 'gray.700'}
                                        mx={2}
                                        p={2}
                                    >
                                        {item?.title}
                                    </Text>
                                </Pressable>
                            </Row>
                        </Pressable>
                    ))
                }
            </ActionSheet>
            <ActionSheet isOpen={isShare} onClose={() => {
                setIsShare(false)
            }} >
                <Row
                    alignItems={'center'}
                >
                    <Avatar
                        source={{
                            uri: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3'
                        }}
                        size="16"
                        shadow={2}
                    />
                    <Input
                        placeholder="Write a message"
                        width="70%"
                        shadow={1}
                        focusOutlineColor={COLORS.PRIMARY}
                        borderRadius="12"
                        borderColor={'transparent'}
                        backgroundColor={'#fafafa'}
                        py="2"
                        px="1"
                        fontSize="14"
                        mx={4}
                    />
                </Row>
                <Divider my="2" _light={{
                    bg: "muted.800"
                }} _dark={{
                    bg: "muted.50"
                }}
                    bgColor={'gray.300'}
                />
                <Box
                    mx={'4'}
                    mr={'8'}
                    my={2}
                    p={2}
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
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    {
                        data1?.map(item => (
                            <Row
                                justifyContent={'space-between'}
                                alignItems={'center'}
                                m={3}
                                key={item?.id}
                            >
                                <HStack
                                    width={'80%'}
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
                                            {item?.name}
                                        </Text>
                                        <Text
                                            fontSize={'xs'}
                                            color={'gray.600'}
                                            fontFamily={FONTS[500].normal}
                                        >
                                            {item?.deg}
                                        </Text>
                                    </Box>
                                </HStack>
                                {
                                    item?.status === 'Send' ?
                                        <Pressable
                                            mr={1}
                                            borderWidth={1.5}
                                            borderColor={COLORS.PRIMARY}
                                            px={4}
                                            bgColor={COLORS.PRIMARY}
                                            py={1}
                                            borderRadius={'full'}
                                        >
                                            <Text
                                                color={'#fff'}
                                                fontFamily={FONTS[600].normal}
                                                fontSize={'xs'}
                                            >
                                                {item?.status}
                                            </Text>
                                        </Pressable> : <Pressable
                                            mr={1}
                                            borderWidth={1.5}
                                            borderColor={COLORS.PRIMARY}
                                            px={4}
                                            py={1}
                                            borderRadius={'full'}
                                        >
                                            <Text
                                                color={COLORS.PRIMARY}
                                                fontFamily={FONTS[600].normal}
                                                fontSize={'xs'}
                                            >
                                                {item?.status}
                                            </Text>
                                        </Pressable>
                                }
                            </Row>
                        ))
                    }
                </ScrollView>
            </ActionSheet>
        </Box >
    )
}

export default Story

const styles = StyleSheet.create({})