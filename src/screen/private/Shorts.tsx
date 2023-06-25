import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import React, { useState } from 'react'
import Video from 'react-native-video';
import {
    Dimensions, StyleSheet,
} from 'react-native'
import {
    useDisclose,
    Pressable,
    FlatList,
    Divider,
    Center,
    VStack,
    Avatar,
    HStack,
    Image,
    Text,
    Row,
    Box,
} from 'native-base'
import { StackAndTabType } from '../../types/AllRoutes';
import ActionSheet from '../../components/Actionsheet';
import { COLORS, FONTS } from '../../styles';
import { VIDEOS } from '../../assets';

const Shorts = () => {
    const [isPlaying, setIsPlaying] = React.useState(true);
    const [isMuted, setIsMuted] = React.useState(false);

    const togglePlaying = () => { };
    const { goBack, navigate } = useNavigation<StackAndTabType>();

    const [isShare, setIsShare] = useState(false);
    const [isSharing, setIsSharing] = useState(false);
    const [show, setShow] = useState(false);
    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();
    const ShareSheet = [
        {
            id: '1',
            img: 'https://img.freepik.com/free-psd/glowing-whatsapp-logo-realistic-3d-circle_125540-2095.jpg?w=900&t=st=1686141667~exp=1686142267~hmac=02d4a1c9205ec3bf060b036b1e570d4776dbb5f23e68c4f83416fd55679ad633',
            title: 'WhatsApp',
        },
        {
            id: '2',
            img: 'https://img.freepik.com/free-psd/3d-square-with-facebook-logo_125540-1565.jpg?w=900&t=st=1686141536~exp=1686142136~hmac=af6651eb38e2fc5af3384715017a2f1cbf60feaa0a5adfd504852f626238838c',
            title: 'FaceBook',
        },
        {
            id: '3',
            img: 'https://img.freepik.com/free-vector/instagram-vector-social-media-icon-7-june-2021-bangkok-thailand_53876-136728.jpg?w=740&t=st=1686138158~exp=1686138758~hmac=5224fc467d9709f241b481a6ca866296ec6b01d77602a0f691ee8e5f711771fd',
            title: 'Instagram',
        },
        {
            id: '4',
            img: 'https://img.freepik.com/free-psd/glowing-twitter-logo-realistic-3d-circle_125540-2093.jpg?w=900&t=st=1686141428~exp=1686142028~hmac=415f9d083bedf7594fe1f1818a87620669dccb944374315c0f255fe4f4d6badf',
            title: 'Twitter',
        },
        {
            id: '5',
            img: 'https://img.freepik.com/premium-vector/linkedin-icon_488108-5.jpg?w=740',
            title: 'Linkedin',
        },
        {
            id: '6',
            img: 'https://img.freepik.com/free-psd/realistic-shiny-3d-round-button-with-telegram-icon_125540-2951.jpg?w=900&t=st=1686141566~exp=1686142166~hmac=2d17cb6613697748313176bcdbf2a024e32e2db1dd7f4c32d1c9e36d373d44e2',
            title: 'Telegram',
        },
    ]
    const Sheet = [
        {
            id: '1',
            title: 'Add to Favorites',
            icon: <Ionicons name='md-heart-outline' size={23} color={'gray'} />,
        },
        {
            id: '2',
            title: 'Hide',
            icon: <Feather name='eye-off' size={23} color={'gray'} />,
        },
        {
            id: '3',
            title: 'UnFollow',
            icon: <AntDesign name='user' size={23} color={'gray'} />,
            // onPress: () => setIsShare(true)
        },

    ]

    const data = [
        {
            id: '1',
            video: VIDEOS.SIX,
            img: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
            name: 'Biswopaban Nayak',
            deg: 'Software Engineer',
            follow: 'Follow',
            like: '25M',
            comment: '256k',
            other: 'Hey Im This is the Song',
            img2: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
        },
        {
            id: '2',
            video: VIDEOS.TWO,
            img: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
            name: 'ASHIS Nayak',
            deg: 'Software Engineer',
            follow: 'Follow',
            like: '2M',
            comment: '26k',
            other: 'Hey Im This is the Song',
            img2: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
        },
        {
            id: '3',
            video: VIDEOS.THREE,
            img: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
            name: 'Biswopaban Nayak',
            deg: 'Software Engineer',
            follow: 'Follow',
            like: '25M',
            comment: '256k',
            other: 'Hey Im This is the Song',
            img2: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
        },
        {
            id: '4',
            video: VIDEOS.SIX,
            img: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
            name: 'Biswopaban Nayak',
            deg: 'Software Engineer',
            follow: 'Follow',
            like: '25M',
            comment: '256k',
            other: 'Hey Im This is the Song',
            img2: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
        },
        {
            id: '5',
            video: VIDEOS.FOUR,
            img: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
            name: 'Biswopaban Nayak',
            deg: 'Software Engineer',
            follow: 'Follow',
            like: '25M',
            comment: '256k',
            other: 'Hey Im This is the Song',
            img2: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
        },
        {
            id: '6',
            video: VIDEOS.SIX,
            img: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
            name: 'Biswopaban Nayak',
            deg: 'Software Engineer',
            follow: 'Follow',
            like: '25M',
            comment: '256k',
            other: 'Hey Im This is the Song',
            img2: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
        },
        {
            id: '7',
            video: VIDEOS.SEVEN,
            img: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
            name: 'Biswopaban Nayak',
            deg: 'Software Engineer',
            follow: 'Follow',
            like: '25M',
            comment: '256k',
            other: 'Hey Im This is the Song',
            img2: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
        },
        {
            id: '8',
            video: VIDEOS.EIGHT,
            img: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
            name: 'Biswopaban Nayak',
            deg: 'Software Engineer',
            follow: 'Follow',
            like: '25M',
            comment: '256k',
            other: 'Hey Im This is the Song',
            img2: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
        },
        {
            id: '9',
            video: VIDEOS.TWO,
            img: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
            name: 'Biswopaban Nayak',
            deg: 'Software Engineer',
            follow: 'Follow',
            like: '25M',
            comment: '256k',
            other: 'Hey Im This is the Song',
            img2: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
        },
        {
            id: '10',
            video: VIDEOS.FOUR,
            img: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
            name: 'Biswopaban Nayak',
            deg: 'Software Engineer',
            follow: 'Follow',
            like: '25M',
            comment: '256k',
            other: 'Hey Im This is the Song',
            img2: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
        },
        {
            id: '11',
            video: VIDEOS.TWO,
            img: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
            name: 'Biswopaban Nayak',
            deg: 'Software Engineer',
            follow: 'Follow',
            like: '25M',
            comment: '256k',
            other: 'Hey Im This is the Song',
            img2: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
        },
        {
            id: '12',
            video: VIDEOS.SEVEN,
            img: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
            name: 'Biswopaban Nayak',
            deg: 'Software Engineer',
            follow: 'Follow',
            like: '25M',
            comment: '256k',
            other: 'Hey Im This is the Song',
            img2: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
        },
        {
            id: '13',
            video: VIDEOS.EIGHT,
            img: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
            name: 'Biswopaban Nayak',
            deg: 'Software Engineer',
            follow: 'Follow',
            like: '25M',
            comment: '256k',
            other: 'Hey Im This is the Song',
            img2: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
        },
        {
            id: '14',
            video: VIDEOS.SIX,
            img: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
            name: 'Biswopaban Nayak',
            deg: 'Software Engineer',
            follow: 'Follow',
            like: '25M',
            comment: '256k',
            other: 'Hey Im This is the Song',
            img2: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
        },
        {
            id: '15',
            video: VIDEOS.THREE,
            img: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
            name: 'Biswopaban Nayak',
            deg: 'Software Engineer',
            follow: 'Follow',
            like: '25M',
            comment: '256k',
            other: 'Hey Im This is the Song',
            img2: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
        },
        {
            id: '16',
            video: VIDEOS.TWO,
            img: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
            name: 'Biswopaban Nayak',
            deg: 'Software Engineer',
            follow: 'Follow',
            like: '25M',
            comment: '256k',
            other: 'Hey Im This is the Song',
            img2: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
        },
        {
            id: '17',
            video: VIDEOS.EIGHT,
            img: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
            name: 'Biswopaban Nayak',
            deg: 'Software Engineer',
            follow: 'Follow',
            like: '25M',
            comment: '256k',
            other: 'Hey Im This is the Song',
            img2: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
        },
        {
            id: '18',
            video: VIDEOS.THREE,
            img: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
            name: 'Biswopaban Nayak',
            deg: 'Software Engineer',
            follow: 'Follow',
            like: '25M',
            comment: '256k',
            other: 'Hey Im This is the Song',
            img2: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
        },
        {
            id: '19',
            video: VIDEOS.FOUR,
            img: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
            name: 'Biswopaban Nayak',
            deg: 'Software Engineer',
            follow: 'Follow',
            like: '25M',
            comment: '256k',
            other: 'Hey Im This is the Song',
            img2: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
        },
        {
            id: '20',
            video: VIDEOS.TWO,
            img: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
            name: 'Biswopaban Nayak',
            deg: 'Software Engineer',
            follow: 'Follow',
            like: '25M',
            comment: '256k',
            other: 'Hey Im This is the Song',
            img2: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
        },
    ]
    return (
        <Box bgColor={'#fff'} flex={1}  >
            <Center>
                <Video
                    source={VIDEOS.TWO}
                    paused={!isPlaying}
                    controls={true}
                    style={{
                        width: Dimensions.get('window').width,
                        height: Dimensions.get('window').height,
                    }}
                    muted={isMuted}
                />
            </Center>
            <Row
                position={'absolute'}
                justifyContent={'space-between'}
                alignItems={'center'}
                mt={5}
                mr={5}
            >
                <Text
                    fontSize={16}
                    color={COLORS.SECONDARY}
                    fontFamily={FONTS[700].normal}
                    mx={4}
                >
                    Shorts
                </Text>
                <Pressable
                    mx={2}
                    pl={'68%'}
                >
                    <Feather name='camera'
                        size={23} color={COLORS.SECONDARY} />
                </Pressable>
            </Row>
            <Pressable
                onPress={() => setIsPlaying(p => !p)}
                _pressed={{
                    opacity: 0.2
                }}
                position={'absolute'}
                top={'50%'}
                mx={'45%'}
            >
                {
                    isPlaying ?
                        <AntDesign name={'pausecircle'}
                            size={40}
                            color={'#fff'}
                        />
                        :
                        <AntDesign name={'play'}
                            size={40}
                            color={'#fff'}
                        />
                }
            </Pressable>

            {/* <FlatList
            data={data}
            // showsVerticalScrollIndicator={false}
            horizontal={true}
            renderItem={({ item }) => (
                <> */}
            <HStack
                position={'absolute'}
                top={'60%'}
                width={'100%'}
            >
                <Row
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    m={4}
                    pt={16}
                    // key={item?.id}
                    width={'65%'}
                >
                    <HStack
                        width={'65%'}
                    >
                        <Avatar
                            source={{
                                uri: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996'
                            }}
                            size="12"
                        />
                        <Box
                            mx={2}
                            mt={1}
                        >
                            <Text
                                fontSize={'sm'}
                                // mt={4}
                                color={'#fff'}
                                fontFamily={FONTS[600].normal}
                            >
                                Biswopaban Nayak
                            </Text>
                            <Text
                                fontSize={'xs'}
                                color={'gray.200'}
                                fontFamily={FONTS[500].normal}
                            >
                                Software Engineer
                            </Text>
                        </Box>
                    </HStack>
                    <Pressable
                        onPress={onOpen}
                        bgColor={COLORS.PRIMARY}
                        px={3}
                        py={1}
                        borderRadius={'full'}
                    >
                        <Text
                            color={COLORS.SECONDARY}
                        >
                            Follow
                        </Text>
                    </Pressable>
                </Row>

                <VStack
                    alignItems={'center'}
                    mx={10}
                >
                    <VStack
                        alignItems={'center'}
                        my={2}
                    >
                        <Pressable
                            onPress={() => {
                                setShow(!show);
                            }}
                            _pressed={{
                                opacity: 0.2
                            }}
                            py={1}
                        >
                            <Ionicons
                                name={show ? 'heart' : 'heart-outline'}
                                size={30}
                                color={show ? 'red' : '#fff'}
                            />
                        </Pressable>

                        <Text
                            fontSize={'sm'}
                            color={'#fff'}
                            fontFamily={FONTS[600].normal}
                            px={3}
                        >
                            25M
                        </Text>
                    </VStack>
                    <VStack
                        my={1}
                        alignItems={'center'}
                    >
                        <Pressable
                            onPress={() => navigate('Comments')}
                        >
                            <AntDesign name='message1' size={23} color={'#fff'} />
                        </Pressable>
                        <Text
                            fontSize={'sm'}
                            color={'#fff'}
                            fontFamily={FONTS[600].normal}
                            py={1}
                        >

                            245
                        </Text>
                    </VStack>
                    <Pressable
                        onPress={() => setIsSharing(true)}
                        _pressed={{
                            opacity: 0.1
                        }}
                        my={1}
                    >
                        <Feather name='send' size={23} color={'#fff'} />
                    </Pressable>
                    <Pressable
                        onPress={() => setIsMuted(m => !m)}
                        _pressed={{
                            opacity: 0.2
                        }}
                        my={2}
                    >
                        {
                            isMuted ?
                                <Octicons name={'unmute'}
                                    size={25}
                                    color={'#fff'}
                                />
                                :
                                <Ionicons
                                    name={'volume-mute'}
                                    size={25}
                                    color={'#fff'}
                                />
                        }
                    </Pressable>
                    <Pressable
                        mr={1}
                        onPress={onOpen}
                        borderWidth={1.5}
                        borderColor={'gray.100'}
                        px={1}
                        borderRadius={'full'}
                        mt={5}
                        _pressed={{
                            opacity: 0.1
                        }}
                    >
                        <AntDesign name='ellipsis1' size={23} color={'#fff'} />
                    </Pressable>
                </VStack>
            </HStack>
            <HStack
                m={5}
                position={'absolute'}
                top={'81%'}
                width={'70%'}
            >
                <Avatar
                    source={{
                        uri: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996'
                    }}
                    size="7"
                />
                <Box
                    mx={2}
                    mt={1}
                >
                    <Text
                        fontSize={'sm'}
                        // mt={4}
                        color={'#fff'}
                        fontFamily={FONTS[600].normal}
                    >
                        Biswopaban Nayak
                    </Text>
                </Box>
            </HStack>
            {/* </>
            )}
        /> */}

            <ActionSheet isOpen={isSharing} onClose={() => {
                setIsSharing(false)
            }} >
                <Pressable
                    flexDirection={'row'}
                    flexWrap={'wrap'}
                    width={'100%'}
                    onPress={() => setIsSharing(false)}
                >
                    {
                        ShareSheet?.map(item => (
                            <Row
                                alignItems={'center'}
                                bgColor={'rose.400'}
                                m={2}
                                p={4}
                                width={'45%'}
                                borderRadius={'15'}
                                key={item?.id}
                            >
                                <Image
                                    alt={item?.img}
                                    source={{ uri: item?.img }}
                                    w={16}
                                    h={16}
                                    borderRadius={'full'}
                                />
                                <Text
                                    fontSize={'sm'}
                                    color={'#fff'}
                                    fontFamily={FONTS[700].normal}
                                    px={3}
                                >
                                    {item?.title}
                                </Text>
                            </Row>

                        ))
                    }
                </Pressable>
            </ActionSheet>

            <ActionSheet isOpen={isOpen} onClose={onClose}  >
                <Row
                    justifyContent={'space-between'}
                >
                    <Pressable
                        width={'30%'}
                        onPress={onClose}
                    >
                        <Box
                            borderRadius={'full'}
                            bgColor={'rose.400'}
                            // p={3}
                            w={16}
                            h={16}
                            alignItems={'center'}
                            justifyContent={'center'}
                        >
                            <Ionicons name='ios-copy' size={23} color={'#fff'} />
                        </Box>
                        <Text
                            fontSize={'sm'}
                            fontFamily={FONTS[700].normal}
                            color={'gray.700'}
                            mx={2}
                            p={2}
                        >
                            Link
                        </Text>
                    </Pressable>
                    <Pressable
                        width={'30%'}
                        onPress={() => { setIsSharing(true), onClose() }}
                    >
                        <Box
                            bgColor={'rose.400'}
                            borderRadius={'full'}
                            // p={3}
                            w={16}
                            h={16}
                            alignItems={'center'}
                            justifyContent={'center'}
                        >
                            <Feather name='send' size={23} color={'#fff'} />
                        </Box>
                        <Text
                            fontSize={'sm'}
                            fontFamily={FONTS[700].normal}
                            color={'gray.700'}
                            mx={2}
                            p={2}
                        >
                            Share
                        </Text>
                    </Pressable>
                    <Pressable
                        width={'30%'}
                        onPress={onClose}
                    >
                        <Box
                            bgColor={'rose.400'}
                            borderRadius={'full'}
                            // p={3}
                            w={16}
                            h={16}
                            alignItems={'center'}
                            justifyContent={'center'}
                        >
                            <AntDesign name='exclamationcircle' size={23} color={'#ffff'} />
                        </Box>
                        <Text
                            fontSize={'sm'}
                            fontFamily={FONTS[700].normal}
                            color={'gray.700'}
                            mx={2}
                            p={2}
                        >
                            Report
                        </Text>
                    </Pressable>
                </Row>
                <Divider my="3" _light={{
                    bg: "muted.800"
                }} _dark={{
                    bg: "muted.50"
                }}
                    bgColor={'gray.400'}
                />

                {
                    Sheet.map(item => (
                        <Pressable onPress={() => {
                            // setSelectItem(item?.title)
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
                                // onPress={item?.onPress}

                                >
                                    <Text
                                        fontSize={'md'}
                                        fontFamily={FONTS[600].normal}
                                        color={'gray.700'}
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
            </ActionSheet>
        </Box>
    )
}

export default Shorts

const styles = StyleSheet.create({})