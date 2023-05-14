import { Dimensions, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Box, Button, HStack, Input, Pressable, Row, ScrollView, Text } from 'native-base'
import { COLORS, FONTS } from '../../styles';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PublicNavigationProps } from '../../types/AllRoutes';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LottieView from 'lottie-react-native';

const ForgotPasswordVerification = () => {
    const { navigate, goBack } = useNavigation<PublicNavigationProps>();
    const [otp, SetOtp] = useState('');
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
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 50
                }}
            >
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
                <Box p={5}>
                    <Text
                        textAlign={'center'}
                        fontSize={'md'}
                        fontFamily={FONTS[700].normal}
                        color={COLORS.PRIMARY}
                    >
                        OTP Verification
                    </Text>
                    <Input
                        shadow={2}
                        value={otp}
                        borderRadius={'20'}
                        onChangeText={txt => SetOtp(txt)}
                        maxLength={6}
                        // width={'55%'}
                        variant={'underlined'}
                        mt={2}
                        fontSize={'lg'}
                        keyboardType={'number-pad'}
                        fontFamily={FONTS[600].normal}
                        focusOutlineColor={COLORS.PRIMARY}
                        textAlign={'center'}
                        backgroundColor={'#fff'}
                    />
                </Box>
                <Row
                    justifyContent={'center'}
                    ml={5}
                >
                    <Text
                        fontSize={'sm'}
                        fontWeight={'600'}
                        color={'gray.500'}
                        fontFamily={FONTS[600].normal}>
                        Dont receive the OTP ?
                    </Text>
                    <TouchableOpacity>
                        <Text
                            color={COLORS.PRIMARY}
                            fontSize={'sm'}
                            ml={2}
                            fontFamily={FONTS[700].normal}>
                            RESEND OTP
                        </Text>
                    </TouchableOpacity>
                </Row>
            </ScrollView>
            <Button
                // isDisabled={!selectState}
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

export default ForgotPasswordVerification

const styles = StyleSheet.create({})