import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Dimensions, FlatList, StyleSheet } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import React, { useState } from 'react'
import {
    useDisclose,
    ScrollView,
    Pressable,
    Divider,
    HStack,
    Button,
    Center,
    Image,
    Text,
    Flex,
    Box,
    Row,
} from 'native-base'
import { PublicNavigationProps } from '../../types/AllRoutes'
import ActionSheet from '../../components/Actionsheet'
import { COLORS, FONTS } from '../../styles'
import Shorts from '../../components/Shorts'
import Feeds from '../../components/Feeds'
import Tag from '../../components/Tag'

const data = [
    {
        id: '1.0',
        name: 'Hangout',
        img: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
        // onPress: () => setIsShare(true),
    },
    {
        id: '1',
        name: 'New Year',
        img: 'https://img.freepik.com/free-vector/happy-new-year-background_23-2148022232.jpg?w=740&t=st=1686415379~exp=1686415979~hmac=2f3017660c7cbc86eca55e20cfb9ff8d3fd47ffcc349e361f70e07f3c8f78536',
        // onPress: () => navigate('Story'),
    },
    {
        id: '2',
        name: 'Friends',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
        // onPress: () => navigate('Story'),
    },
    {
        id: '3',
        name: 'Beach ',
        img: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=826&t=st=1685899203~exp=1685899803~hmac=500c1778b3615b8af19a33fc9152e9b17f33796969b788baa68db7c1056f0388',
        // onPress: () => navigate('Story'),
    },
    {
        id: '4',
        name: 'Wood',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
        // onPress: () => navigate('Story'),
    },
    {
        id: '5',
        name: 'Home',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
        // onPress: () => navigate('Story'),
    },
    {
        id: '6',
        name: 'Bhadrak',
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

]

const Sheet = [
    {
        id: '1',
        title: 'Report',
        icon: <AntDesign name='exclamationcircle' size={20} color={COLORS.PRIMARY} />,
    },
    {
        id: '2',
        title: 'Block',
        icon: <MaterialCommunityIcons name='block-helper' size={20} color={COLORS.PRIMARY} />,
    },
    {
        id: '3',
        title: 'About this Account',
        icon: <AntDesign name='user' size={20} color={COLORS.PRIMARY} />,
    },
    {
        id: '4',
        title: 'Restrict',
        icon: <Entypo name='circle-with-cross' size={20} color={COLORS.PRIMARY} />,
    },
    {
        id: '5',
        title: 'Hide Your Story',
        icon: <Feather name='eye-off' size={20} color={COLORS.PRIMARY} />,
    },
    {
        id: '6',
        title: 'Copy Profile URL',
        icon: <MaterialIcons name='file-copy' size={20} color={COLORS.PRIMARY} />,
    },
    {
        id: '7',
        title: 'Share this Profile',
        icon: <Feather name='send' size={20} color={COLORS.PRIMARY} />,
    },

]

const Profile = () => {
    const { goBack } = useNavigation<PublicNavigationProps>();
    const [selectItem, setSelectItem] = useState('');
    const [select, setSelect] = useState('1')
    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();

    return (
        <Box bgColor={'#fff'} flex={1} >
            <Row
                justifyContent={'space-between'}
                alignItems={'center'}
                my={5}
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
                    >
                        Profile
                    </Text>
                </HStack>

                <Pressable
                    mr={1}
                    borderWidth={1.5}
                    borderColor={'gray.500'}
                    borderRadius={'full'}
                    px={1}
                    onPress={onOpen}
                >
                    <AntDesign name='ellipsis1' size={20} color={'gray'} />
                </Pressable>
            </Row>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: '20%'
                }}
            >
                <Center
                    mt={10}
                >
                    <Box
                        bgColor={COLORS.SECONDARY}
                        borderRadius={'full'}
                        shadow={'4'}
                    >
                        <Image
                            source={{
                                uri:
                                    'https://img.freepik.com/free-photo/smiling-girl-with-ponytail-colourful-pullover-snowy-day_1140-584.jpg?w=740&t=st=1686403803~exp=1686404403~hmac=0638a286939dbf8c000c3934790d2f54d095f6267cfc809592dbf99e0974c36b'
                            }}
                            size="32"
                            alt=""
                            borderRadius={'full'}
                        />
                        <Pressable
                            position={'absolute'} bottom={0} right={'2%'}>
                            <Box
                                bgColor={COLORS.PRIMARY}
                                borderRadius={'8'}
                                width={'7'}
                                height={'7'}
                                alignItems={'center'}
                                justifyContent={'center'}>
                                <FontAwesome5 name="pen" size={15} color={'#ffff'} />
                            </Box>
                        </Pressable>
                    </Box>
                    <Box
                        m={4}
                    >
                        <Text
                            fontSize={'xl'}
                            fontFamily={FONTS[700].normal}
                            color={'#272762'}
                            textAlign={'center'}
                        >
                            Biswopaban Nayak
                        </Text>
                        <Text
                            fontSize={'sm'}
                            fontFamily={FONTS[600].normal}
                            color={'gray.500'}
                            my={2}
                            textAlign={'center'}
                        >
                            Software Engineer
                        </Text>
                        <Text
                            fontSize={'sm'}
                            fontFamily={FONTS[600].normal}
                            color={'gray.500'}
                            textAlign={'center'}
                        >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatum deserunt maxime nihil quisquam quo.
                        </Text>
                        <Text
                            fontSize={'sm'}
                            fontFamily={FONTS[600].normal}
                            color={'blue.600'}
                            my={2}
                            textAlign={'center'}
                        >
                            www.biswopabannayak.com
                        </Text>
                    </Box>
                </Center>
                <Row
                    justifyContent={'space-around'}
                    mx={8}
                >
                    <Box
                    >
                        <Text
                            fontSize={'xl'}
                            fontFamily={FONTS[600].normal}
                            color={'gray.700'}
                        >
                            267
                        </Text>
                        <Text
                            fontSize={'sm'}
                            fontFamily={FONTS[600].normal}
                            color={'gray.400'}
                        >
                            Posts
                        </Text>
                    </Box>
                    <Divider
                        orientation="vertical" mx="3" _light={{
                            bg: "muted.800"
                        }} _dark={{
                            bg: "muted.50"
                        }}
                    />
                    <Box
                    >
                        <Text
                            fontSize={'xl'}
                            fontFamily={FONTS[600].normal}
                            color={'gray.700'}
                        >
                            24,278
                        </Text>
                        <Text
                            fontSize={'sm'}
                            fontFamily={FONTS[600].normal}
                            color={'gray.400'}
                        >
                            Followers
                        </Text>
                    </Box>
                    <Divider
                        orientation="vertical" mx="3" _light={{
                            bg: "muted.800"
                        }} _dark={{
                            bg: "muted.50"
                        }}
                    />
                    <Box
                    >
                        <Text
                            fontSize={'xl'}
                            fontFamily={FONTS[600].normal}
                            color={'gray.700'}
                        >
                            237
                        </Text>
                        <Text
                            fontSize={'sm'}
                            fontFamily={FONTS[600].normal}
                            color={'gray.400'}
                        >
                            Following
                        </Text>
                    </Box>
                </Row>
                <Row
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    m={5}
                >
                    <Button
                        my={4}
                        width={Dimensions.get('window').width / 2.4}
                        colorScheme={'rose'}
                        borderRadius={'20'}
                        py={2}
                    >
                        <Row
                            alignItems={'center'}
                            justifyContent={'center'}
                            px={5}
                        >
                            <Ionicons name='ios-person-add' size={17} color={COLORS.SECONDARY} />
                            <Text
                                fontSize={'sm'}
                                p={1}
                                bold
                                color={COLORS.SECONDARY}
                            >
                                Follow
                            </Text>
                        </Row>
                    </Button>
                    <Button
                        my={4}
                        // mx={5}
                        py={2}
                        width={Dimensions.get('window').width / 2.4}
                        borderRadius={'20'}
                        bgColor={'#fff'}
                        borderWidth={2}
                        borderColor={COLORS.PRIMARY}
                    >
                        <Row
                            alignItems={'center'}
                            justifyContent={'center'}
                            px={5}
                        >
                            <Entypo name='message' size={20} color={COLORS.PRIMARY} />
                            <Text
                                fontSize={'sm'}
                                fontFamily={FONTS[600].normal}
                                pl={3}
                                color={COLORS.PRIMARY}
                            >
                                Message
                            </Text>
                        </Row>
                    </Button>
                </Row>
                <Divider
                    orientation="horizontal" _light={{
                        bg: "muted.800"
                    }} _dark={{
                        bg: "muted.50"
                    }}
                    width={Dimensions.get('window').width / 1.08}
                    mx={4}
                // mt={-2}
                />
                <Box
                    mr={4}
                    ml={2}
                    my={4}
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
                                        size="16"
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
                <Flex
                    direction={'row'}
                    justifyContent={'space-around'}
                    borderBottomWidth={1}
                    borderColor={'gray.200'}
                    width={Dimensions.get('window').width / 1.08}
                    mx={2}
                    borderRadius={'6'}
                >
                    <Pressable
                        onPress={() => setSelect('1')}
                        borderBottomWidth={select === '1' ? '3' : 0}
                        borderRadius={2}
                        p={3}
                        borderColor={select === '1' ? COLORS.PRIMARY : '#fff'}
                    >
                        <Row
                            alignItems={'center'}
                        >
                            <MaterialIcons name='dashboard' size={20}
                                color={select === '1' ? COLORS.PRIMARY : 'gray'}
                            />
                            <Text
                                mx={3}
                                fontFamily={FONTS[600].normal}
                                fontSize={'md'}
                                color={select === '1' ? COLORS.PRIMARY : 'gray.600'}
                            >
                                Feeds
                            </Text>
                        </Row>
                    </Pressable>
                    <Pressable
                        onPress={() => setSelect('2')}
                        borderBottomWidth={select === '2' ? '3' : 0}
                        borderRadius={2}
                        p={3}
                        borderColor={select === '2' ? COLORS.PRIMARY : '#fff'}
                    >
                        <Row
                            alignItems={'center'}
                        >
                            <FontAwesome
                                name='video-camera'
                                size={20}
                                color={select === '2' ? COLORS.PRIMARY : 'gray'}
                            />
                            <Text
                                mx={3}
                                fontFamily={FONTS[600].normal}
                                fontSize={'md'}
                                color={select === '2' ? COLORS.PRIMARY : 'gray.600'}
                            >
                                Shorts
                            </Text>
                        </Row>
                    </Pressable>
                    <Pressable
                        onPress={() => setSelect('3')}
                        borderBottomWidth={select === '3' ? '3' : 0}
                        borderRadius={2}
                        p={3}
                        borderColor={select === '3' ? COLORS.PRIMARY : '#fff'}
                    >
                        <Row
                            alignItems={'center'}
                        >
                            <FontAwesome5 name='user-friends' size={20}
                                color={select === '3' ? COLORS.PRIMARY : 'gray'} />
                            <Text
                                mx={3}
                                fontFamily={FONTS[600].normal}
                                fontSize={'md'}
                                color={select === '3' ? COLORS.PRIMARY : 'gray.600'}
                            >
                                Tag
                            </Text>
                        </Row>
                    </Pressable>
                </Flex>
                <>
                    {select === '1' && <Feeds />}
                    {select === '2' && <Shorts />}
                    {select === '3' && <Tag />}
                </>
            </ScrollView>
            <ActionSheet isOpen={isOpen} onClose={onClose}  >
                {
                    Sheet.map(item => (
                        <Pressable onPress={() => {
                            setSelectItem(item?.id)
                            onClose()
                        }} key={item.id}
                            alignSelf={'flex-start'}
                            ml={5}
                        >
                            <Row
                                alignItems={'center'}
                            >
                                {item?.icon}
                                <Pressable
                                    onPress={() => { setSelectItem(item?.id), onClose() }}
                                >
                                    <Text
                                        fontSize={'md'}
                                        fontFamily={FONTS[600].normal}
                                        color={selectItem === (item?.id) ? COLORS.PRIMARY : 'gray.700'}
                                        mx={4}
                                        p={2}
                                    >
                                        {item?.title}
                                    </Text>
                                </Pressable>
                            </Row>
                        </Pressable>
                    ))
                }
            </ActionSheet >
        </Box >
    )
}

export default Profile

const styles = StyleSheet.create({})