import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import React from 'react'
import {
    Pressable,
    StatusBar,
    FlatList,
    HStack,
    Avatar,
    Center,
    Image,
    Input,
    Icon,
    Text,
    Box,
    Row,
} from 'native-base';
import { PrivateNavigationProps, PrivateRootRouteProps } from '../../types/AllRoutes';
import { COLORS, FONTS } from '../../styles';

const Charting = [
    {
        id: '1',
        send_img: 'https://img.freepik.com/free-photo/young-cute-woman-cap-glasses-posing-outside-showing-thumbs-up-high-quality-photo_114579-91847.jpg?w=360&t=st=1686341108~exp=1686341708~hmac=3882854a56b38516488825df648f8befdb82ac31106d724bc16ad1c736b05901',
        send_Message: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, deserunt!',
        day: 'Today',
        replay: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, deserunt! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi rem expedita distinctio sit dignissimos quasiF',
        send_Time: '10.00',
        Reply_img: 'https://img.freepik.com/free-photo/summer-sunny-lifestyle-fashion-portrait-young-stylish-hipster-women-walking-street_231208-12295.jpg?w=996&t=st=1686343324~exp=1686343924~hmac=8f5e9043ca0d2b789c92186900083b65ebf9c544ec597d7a9246246ef77c095e',
        replay_Time: '10:01 '
    },
    {
        id: '2',
        send_img: 'https://img.freepik.com/free-photo/charming-black-haired-woman-with-happy-face-expression-posing-with-peace-sign-street_197531-6356.jpg?w=996&t=st=1686340496~exp=1686341096~hmac=a5c031c5905a7254efec63ab303ba6b6c123e01685fe8803229921770c8e0e72',
        send_Message: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, deserunt!',
        day: 'Yesterday',
        replay: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, deserunt! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi rem expedita distinctio sit dignissimos quasiF',
        send_Time: '10.00',
        replay_Time: '10:01 '
    },
    {
        id: '3',
        Reply_img: 'https://img.freepik.com/free-photo/young-cute-woman-cap-glasses-posing-outside-showing-thumbs-up-high-quality-photo_114579-91847.jpg?w=360&t=st=1686341108~exp=1686341708~hmac=3882854a56b38516488825df648f8befdb82ac31106d724bc16ad1c736b05901',
        send_Message: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, deserunt!',
        day: 'Tomorrow',
        replay: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, deserunt! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi rem expedita distinctio sit dignissimos quasiF',
        send_Time: '10.00',
        replay_Time: '10:01 '
    },
    {
        id: '4',
        send_img: 'https://img.freepik.com/free-photo/summer-sunny-lifestyle-fashion-portrait-young-stylish-hipster-women-walking-street_231208-12295.jpg?w=996&t=st=1686343324~exp=1686343924~hmac=8f5e9043ca0d2b789c92186900083b65ebf9c544ec597d7a9246246ef77c095e',
        Reply_img: 'https://img.freepik.com/free-photo/summer-sunny-lifestyle-fashion-portrait-young-stylish-hipster-women-walking-street_231208-12295.jpg?w=996&t=st=1686343324~exp=1686343924~hmac=8f5e9043ca0d2b789c92186900083b65ebf9c544ec597d7a9246246ef77c095e',
        send_Message: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, deserunt!',
        day: 'Today',
        replay: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, deserunt! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi rem expedita distinctio sit dignissimos quasiF',
        send_Time: '10.00',
        replay_Time: '10:01 '
    },

]
const Message = () => {
    const { goBack, navigate } = useNavigation<PrivateNavigationProps>();
    const route = useRoute<PrivateRootRouteProps<'Message'>>();

    return (
        <Box
            bgColor={'#fff'}
            flex={1}
        >
            <StatusBar backgroundColor={'#FFFF'} barStyle={'dark-content'} />
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
                        bold

                    >
                        {route?.params?.UserDetails}
                    </Text>
                </HStack>
                <Row
                    alignItems={'center'}
                >
                    <TouchableOpacity
                        style={{
                            marginHorizontal: 5
                        }}
                        onPress={() => navigate('CallScreen', { Name: route?.params?.UserDetails, image: route?.params?.UserImage })}
                    >
                        <Ionicons name='call-outline' size={23} color={'gray'} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            marginHorizontal: 20
                        }}
                        onPress={() => navigate('CallScreen', { Name: route?.params?.UserDetails, image: route?.params?.UserImage })}
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
            <FlatList
                data={Charting}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <>
                        <Center
                            mt={8}
                            mb={2}
                        >
                            <Box
                                bgColor={'gray.200'}
                                px={4}
                                borderRadius={6}
                                py={1}
                            >
                                <Text
                                    fontSize={'sm'}
                                    color={'#000'}
                                    fontFamily={FONTS[600].normal}
                                >
                                    {item?.day}
                                </Text>
                            </Box>

                        </Center>
                        <Box
                            m={4}
                        >
                            {
                                item?.send_img &&
                                <Box
                                    bgColor={'gray.200'}
                                    borderRadius={'20'}
                                    width={Dimensions.get('window').width / 1.5}
                                    p={4}
                                    alignItems={'center'}
                                >
                                    <HStack >
                                        <Avatar
                                            source={{
                                                uri: route?.params?.UserImage
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
                                                fontFamily={FONTS[700].normal}
                                            >
                                                {route?.params?.UserDetails}
                                            </Text>
                                            <Text
                                                fontSize={'xs'}
                                                color={'gray.600'}
                                                fontFamily={FONTS[500].normal}
                                            >
                                                Marketing Coordinator
                                            </Text>
                                        </Box>
                                    </HStack>

                                    <Image alt=''
                                        source={{
                                            uri: item?.send_img
                                        }}
                                        width={Dimensions.get('window').width / 1.8}
                                        height={Dimensions.get('window').height / 4}
                                        // resizeMode='contain'
                                        borderRadius={'15'}
                                        mt={4}
                                    />
                                </Box>
                            }
                            <Box
                                mt={6}
                                bgColor={'gray.200'}
                                // borderRadius={'30'}
                                borderBottomLeftRadius={20}
                                borderRightRadius={20}
                                width={Dimensions.get('window').width / 1.5}
                                p={2}
                                alignItems={'center'}
                            >
                                <Text
                                    fontSize={'sm'}
                                    color={'gray.600'}
                                    fontFamily={FONTS[500].normal}
                                >
                                    {item?.send_Message}
                                </Text>
                                <Text
                                    fontSize={'xs'}
                                    alignSelf={'flex-end'}
                                    mx={4}
                                    mt={-4}
                                    color={'gray.400'}
                                    fontFamily={FONTS[500].normal}
                                >
                                    {item?.send_Time}
                                </Text>
                            </Box>
                            <Box
                                mt={6}
                                bgColor={'rose.400'}
                                borderBottomRightRadius={20}
                                borderLeftRadius={20}
                                width={Dimensions.get('window').width / 1.2}
                                p={2}
                                alignItems={'center'}
                                alignSelf={'flex-end'}
                                justifyContent={'center'}
                            >
                                <Text
                                    fontSize={'sm'}
                                    color={'#fff'}
                                    fontFamily={FONTS[500].normal}
                                >
                                    {item?.replay}
                                </Text>
                                <Text
                                    fontSize={'xs'}
                                    alignSelf={'flex-end'}
                                    mx={4}
                                    mt={-4}
                                    color={'#fff'}
                                    fontFamily={FONTS[500].normal}
                                >
                                    {item?.replay_Time}
                                </Text>
                            </Box>
                            {
                                item?.Reply_img &&
                                <Box
                                    bgColor={'gray.200'}
                                    borderRadius={'20'}
                                    width={Dimensions.get('window').width / 1.5}
                                    p={4}
                                    alignItems={'center'}
                                    mt={4}
                                    alignSelf={'flex-end'}
                                >
                                    <Image alt=''
                                        source={{
                                            uri: item?.Reply_img
                                        }}
                                        width={Dimensions.get('window').width / 1.8}
                                        height={Dimensions.get('window').height / 4}
                                        borderRadius={'15'}
                                    />
                                </Box>
                            }
                        </Box>
                    </>
                )}
            />
            <Row
                justifyContent={'space-between'}
                m={4}
            >
                <Input
                    placeholder="Type Message"
                    width="80%"
                    focusOutlineColor={COLORS.PRIMARY}
                    borderRadius="12"
                    borderColor={'#fff'}
                    backgroundColor={'#fafafa'}
                    py="2"
                    px="1"
                    mb={'5'}
                    fontSize="14"
                    InputRightElement={
                        <Icon
                            m="2"
                            ml="3"
                            size="6"
                            color="gray.400"
                            as={<Feather name="camera" />}
                        />
                    }
                />
                <Pressable
                    width={'20%'}
                    mx={4}
                // onPress={() => { setIsSharing(true), onClose() }}
                >
                    <Pressable
                        bgColor={'rose.400'}
                        borderRadius={'full'}
                        px={3}
                        w={12}
                        h={12}
                        alignItems={'center'}
                        justifyContent={'center'}
                    >
                        <Feather name='send' size={23} color={'#fff'} />
                    </Pressable>
                </Pressable>
            </Row>
        </Box >
    )
}

export default Message

const styles = StyleSheet.create({})