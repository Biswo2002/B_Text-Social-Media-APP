import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import { Box, Button, HStack, Pressable, ScrollView, Text } from 'native-base'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React from 'react'
import { PublicNavigationProps } from '../../types/AllRoutes';
import { COLORS, FONTS } from '../../styles'
const ForgotPassword = () => {
    const { navigate, goBack } = useNavigation<PublicNavigationProps>();
    const [selectState, setSelectState] = React.useState('');

    const VerifyType = [
        {
            id: '1',
            icon: <AntDesign
                name='message1'
                size={32}
                color={'#f43f5e'}
            />,
            title: 'Via SMS',
            link: '+91 98616***72',
        },
        {
            id: '2',
            icon: <MaterialCommunityIcons
                name={'email'}
                size={32}
                color={'#f43f5e'}
            />,
            title: 'Via Email',
            link: 'b_text.verify@gmail.com',
        },
    ]
    return (
        <Box bgColor={COLORS.SECONDARY} flex={1} >
            <HStack
                alignItems={'center'}
                mb={2}
                bgColor={'#fff'}
            >
                <TouchableOpacity
                    style={{
                        margin: '4%'
                    }}
                    onPress={goBack}
                >
                    <AntDesign name='arrowleft' size={25} color={COLORS.PRIMARY} />
                </TouchableOpacity>
                <Text
                    fontFamily={FONTS[600].normal}
                    fontSize={'md'}
                    bold
                >
                    Forgot Password
                </Text>
            </HStack>
            <ScrollView showsVerticalScrollIndicator={false} >
                <Pressable
                    height={Dimensions.get('window').height / 3}
                    width={Dimensions.get('window').width}
                    bgColor={COLORS.SECONDARY}
                >
                    <LottieView
                        source={{ uri: 'https://assets4.lottiefiles.com/packages/lf20_b0lj6sfx.json' }}
                        autoPlay
                        loop={false}
                    />
                </Pressable>
                <Box
                    m={4}
                >
                    <Text
                        fontSize={'sm'}
                        // bold
                        textAlign={'center'}
                        fontFamily={FONTS[600].normal}
                    >
                        Select which contact details should we use to reset your password
                    </Text>
                </Box>
                {
                    VerifyType.map(item => (
                        <Pressable
                            onPress={() => setSelectState(item?.id)}
                            key={item?.id}
                        >
                            <HStack
                                bgColor={COLORS.SECONDARY}
                                py={5}
                                px={2}
                                borderWidth={selectState === (item?.id) ? '1.5' : .5}
                                borderColor={selectState === (item?.id) ? COLORS.PRIMARY : COLORS.SECONDARY}
                                m={4}
                                shadow={5}
                                alignItems={'center'}
                                borderRadius={'xl'}
                            >
                                <Box
                                    bgColor={'#fff1f2'}
                                    p={2}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    ml={2}
                                    w={24}
                                    h={24}
                                    borderRadius={'full'}
                                >
                                    {item?.icon}
                                </Box>
                                <Box
                                    mx={5}
                                >
                                    <Text
                                        fontSize={'sm'}
                                        p={1}
                                        bold
                                        color={COLORS.PRIMARY}
                                    >
                                        {item?.title}
                                    </Text>
                                    <Text
                                        fontSize={'sm'}
                                        p={1}
                                        bold
                                        color={'#000'}
                                    >
                                        {item?.link}
                                    </Text>
                                </Box>
                            </HStack>
                        </Pressable>
                    ))
                }
            </ScrollView>
            <Button
                isDisabled={!selectState}
                onPress={() => navigate('ForgotPasswordVerification')}
                my={4}
                mx={4}
                colorScheme={'rose'}
                borderRadius={'20'}
            ><Text
                fontSize={'sm'}
                p={1}
                bold
                color={COLORS.SECONDARY}
            >
                    Continue
                </Text>
            </Button>
        </Box>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({})