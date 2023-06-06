import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar, Box, Divider, HStack, Input, Pressable, Row, ScrollView, StatusBar, Text } from 'native-base'
import ScreenHeader from '../../components/ScreenHeader'
import { COLORS, FONTS } from '../../styles'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'


const data = [
    {
        id: '1',
        name: 'Sahara India',
        deg: 'Indian Company',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
        message: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis ex repellat aspernatur saepe repudiandae deleniti iste voluptates ',
        like: '556',
        time: '5 hours ago',
    },
    {
        id: '1.1',
        name: 'Sahara India',
        deg: 'Indian Company',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
        message: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis ex repellat aspernatur saepe repudiandae deleniti iste voluptates ',
        like: '556',
        time: '5 hours ago',
    },
    {
        id: '2',
        name: 'Sahara India',
        deg: 'Indian Company',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
        message: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis ex repellat aspernatur saepe repudiandae deleniti iste voluptates ',
        like: '556',
        time: '5 hours ago',
    },
    {
        id: '3',
        name: 'Sahara India',
        deg: 'Indian Company',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
        message: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis ex repellat aspernatur saepe repudiandae deleniti iste voluptates ',
        like: '556',
        time: '5 hours ago',
    },
    {
        id: '4',
        name: 'Sahara India',
        deg: 'Indian Company',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
        message: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis ex repellat aspernatur saepe repudiandae deleniti iste voluptates ',
        like: '556',
        time: '5 hours ago',
    },
]
const Comments = () => {
    return (
        <Box
            bgColor={'#fff'}
            flex={1}
        >
            <ScreenHeader title={'Commentss'} isShare />
            <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />

            <ScrollView
                showsVerticalScrollIndicator={false}

            >
                <Box>
                    <Row
                        justifyContent={'space-around'}
                        alignItems={'center'}
                        ml={4}
                        pt={4}
                        mt={4}
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
                            mr={5}
                            ml={'28%'}
                            borderWidth={1.5}
                            borderColor={'rose.400'}
                            px={1}
                            borderRadius={'full'}
                        // onPress={onOpen}
                        >
                            <AntDesign name='ellipsis1' size={23} color={COLORS.PRIMARY} />
                        </Pressable>
                    </Row>
                    <Divider my="2" _light={{
                        bg: "muted.800"
                    }} _dark={{
                        bg: "muted.50"
                    }}
                        bgColor={'gray.300'}
                    />

                    <Box
                        m={4}
                    >
                        <Text
                            fontSize={'sm'}
                            fontFamily={FONTS[600].normal}
                            color={'gray.500'}
                            textAlign={'left'}
                        >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis ex repellat aspernatur saepe repudiandae deleniti iste voluptates perferendis ipsam. Obcaecati, rem ullam eveniet natus inventore similique at mollitia. Veritatis, id.
                        </Text>
                    </Box>
                    <Box
                        mx={4}
                        my={2}
                    >
                        <Text
                            fontSize={'sm'}
                            fontFamily={FONTS[600].normal}
                            color={'blue.500'}
                            textAlign={'left'}
                        >
                            #girl #girls  #girl #girls  #girl #girls  #girl #girls
                            #girl #girls  #girl #girls  #girl #girls  #girl #girls
                            #girl #girls  #girl #girls  #girlFriend #girls  #girl #girls
                            #girl #girls  #girl #girls  #girl #girls  #girl #girls
                        </Text>
                    </Box>
                    <Text
                        fontSize={'xs'}
                        fontFamily={FONTS[600].normal}
                        color={'gray.500'}
                        textAlign={'left'}
                        mx={4}
                        my={2}
                    >
                        6 hours ago
                    </Text>
                    <Row
                        alignItems={'center'}
                        mx={4}
                    >
                        <Row
                            alignItems={'center'}
                            mr={3}
                        >
                            <Ionicons name='heart' size={30} color={'red'} />
                            <Text
                                fontSize={'sm'}
                                color={'#000'}
                                fontFamily={FONTS[600].normal}
                                px={3}
                            >
                                45,525
                            </Text>
                        </Row>
                        <Row
                            alignItems={'center'}
                            mx={4}
                        >
                            <Pressable
                            >
                                <AntDesign name='message1' size={23} color={'gray'} />
                            </Pressable>
                            <Text
                                fontSize={'sm'}
                                color={'#000'}
                                fontFamily={FONTS[600].normal}
                                px={3}
                            >

                                22,55
                            </Text>
                        </Row>
                        <Feather name='send' size={23} color={'gray'} />
                    </Row>
                </Box>
                <Divider my="2" _light={{
                    bg: "muted.800"
                }} _dark={{
                    bg: "muted.50"
                }}
                    bgColor={'gray.300'}
                />
                {
                    data?.map(item => (
                        <Box
                            key={item?.id}
                        >
                            <Row
                                justifyContent={'space-around'}
                                alignItems={'center'}
                                ml={4}
                                pt={4}
                                mt={4}
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
                                <Pressable
                                    mr={5}
                                    ml={'28%'}
                                    borderWidth={1.5}
                                    borderColor={'rose.400'}
                                    px={1}
                                    borderRadius={'full'}
                                // onPress={onOpen}
                                >
                                    <AntDesign name='ellipsis1' size={23} color={COLORS.PRIMARY} />
                                </Pressable>
                            </Row>
                            <Box
                                m={4}
                            >
                                <Text
                                    fontSize={'sm'}
                                    fontFamily={FONTS[600].normal}
                                    color={'gray.500'}
                                    textAlign={'left'}
                                >
                                    {item?.message}
                                </Text>
                            </Box>
                            <Row
                                alignItems={'center'}
                                mx={4}
                            >
                                <Row
                                    alignItems={'center'}
                                    mr={3}
                                >
                                    <Ionicons name='md-heart-outline' size={25} color={'gray'} />
                                    <Text
                                        fontSize={'sm'}
                                        color={'#000'}
                                        fontFamily={FONTS[600].normal}
                                        px={3}
                                    >
                                        {item?.like}
                                    </Text>
                                </Row>
                                <Text
                                    fontSize={'sm'}
                                    color={'#000'}
                                    fontFamily={FONTS[600].normal}
                                    px={3}
                                >
                                    Replay
                                </Text>
                                <Text
                                    fontSize={'sm'}
                                    color={'gray.500'}
                                    fontFamily={FONTS[600].normal}
                                    px={3}
                                >
                                    {item?.time}
                                </Text>

                            </Row>
                        </Box>
                    ))
                }
            </ScrollView>
            <Row
                mx={3}
                my={5}
                justifyContent={'space-between'}
            >
                <Avatar
                    shadow={1}
                    source={{
                        uri: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3'
                    }}
                    size="12"
                />
                <Input
                    placeholder="Search Message "
                    width="70%"
                    focusOutlineColor={COLORS.PRIMARY}
                    borderRadius="12"
                    borderColor={'transparent'}
                    backgroundColor={'#fafafa'}
                    shadow={1}
                    py="2"
                    px="1"
                    mb={'5'}
                    fontSize="14"
                />
                <TouchableOpacity
                    style={{
                        marginTop: 10
                    }}
                >
                    <Text
                        fontSize={'sm'}
                        color={COLORS.PRIMARY}
                        fontFamily={FONTS[600].normal}
                        px={3}
                    >
                        Post
                    </Text>
                </TouchableOpacity>
            </Row>
        </Box>
    )
}

export default Comments

const styles = StyleSheet.create({})