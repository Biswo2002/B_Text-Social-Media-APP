import { Avatar, Box, Center, Divider, HStack, Pressable, Row, Text } from 'native-base'
import { Dimensions, StyleSheet, TouchableOpacity, } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React from 'react'
import { PublicNavigationProps } from '../../types/AllRoutes';
import { COLORS, FONTS } from '../../styles'

const Login = () => {
    const { navigate } = useNavigation<PublicNavigationProps>();
    const LoginType = [
        {
            id: '1',
            name: 'Continue with Facebook',
            logo: 'https://cdn-icons-png.flaticon.com/512/733/733547.png?w=740&t=st=1684037892~exp=1684038492~hmac=d2f25438967932acc94a3945a5e321ecc90f742c96fa29eb612a7daa5bbed168'
        },
        {
            id: '2',
            name: 'Continue with Google',
            logo: 'https://cdn-icons-png.flaticon.com/512/270/270799.png?w=740&t=st=1684038381~exp=1684038981~hmac=a7afb22a5feba00652e1d2a1c9e97fb222b117cc80c6ff5ce4b2bce82a8f1ec6'
        },
        {
            id: '3',
            name: 'Continue with Apple',
            logo: 'https://cdn-icons-png.flaticon.com/512/152/152752.png?w=740&t=st=1684038547~exp=1684039147~hmac=631127f098fd750e4bffe831c993fbad064641c738cd679864115079ba3634bb'
        },
    ]
    return (
        <Box bgColor={COLORS.SECONDARY} flex={1} >
            <Center
                mb={5}
            >
                <Pressable
                    height={Dimensions.get('window').height / 3}
                    width={Dimensions.get('window').width}
                    bgColor={COLORS.SECONDARY}
                >
                    <LottieView
                        source={{ uri: 'https://assets10.lottiefiles.com/packages/lf20_cUG5w8.json' }}
                        autoPlay
                        loop={true}
                    />
                </Pressable>
                <Text
                    fontSize={'2xl'}
                    fontFamily={FONTS[800].normal}
                    bold
                >
                    Let's you in
                </Text>
            </Center>
            {
                LoginType.map(item => (
                    <Row
                        key={item?.id}
                        borderTopWidth={2}
                        borderColor={'rose.600'}
                        borderBottomRadius={'100'}
                        shadow={'2'}
                        bgColor={COLORS.SECONDARY}
                        p={3}
                        m={4}
                        borderRadius={'15'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Box
                            width={'13%'}
                        >
                            <Avatar source={{ uri: item?.logo }}
                                h={7}
                                w={7}
                                bgColor={'#ffff'}
                            />
                        </Box>
                        <Text
                            fontSize={'md'}
                            width={'60%'}
                            fontFamily={FONTS[600].italic}
                        >
                            {item?.name}
                        </Text>
                    </Row>
                ))
            }
            <Row
                justifyContent={'center'}
                m={4}
            >
                <Divider my="2" width={'45%'} />
                <Text
                    mx={4}
                >or</Text>
                <Divider my="2" width={'45%'} />
            </Row>
            <TouchableOpacity
                style={{
                    backgroundColor: COLORS.PRIMARY,
                    borderRadius: 30,
                    paddingVertical: 7,
                    width: '90%',
                    margin: '4%',
                    alignItems: 'center',
                    marginTop: 17,

                }}
                onPress={() => navigate('LoginAccount')}
            >
                <Text
                    fontSize={'sm'}
                    p={2}
                    bold
                    color={COLORS.SECONDARY}
                >
                    Sign in with password
                </Text>
            </TouchableOpacity>
            <HStack
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Text
                    bold
                    fontSize={'sm'}
                >
                    Don't have an account ?
                </Text>
                <TouchableOpacity
                    onPress={() => navigate('Register')}
                >
                    <Text
                        mx={2}
                        color={'rose.600'}
                        // fontSize={'md'}
                        fontFamily={'Montserrat-Bold'}
                    >
                        Sign up
                    </Text>
                </TouchableOpacity>
            </HStack>
        </Box >
    )
}

export default Login

const styles = StyleSheet.create({})