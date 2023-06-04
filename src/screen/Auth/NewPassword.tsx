import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Box, Button, Center, FormControl, HStack, Input, Modal, Pressable, ScrollView, Text, VStack } from 'native-base'
import { COLORS, FONTS } from '../../styles'
import { useNavigation } from '@react-navigation/native'
import { PublicNavigationProps } from '../../types/AllRoutes'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LottieView from 'lottie-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { ANIMATION } from '../../assets'


const NewPassword = () => {
    const { navigate, goBack } = useNavigation<PublicNavigationProps>();
    const [showModal, setShowModal] = useState(false);
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [IsSecureEntry, setIsSecureEntry] = React.useState(false);
    const [selectIsSecureEntry, setSelectIsSecureEntry] = React.useState(false);
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
                    Create New Password
                </Text>
            </HStack>
            <ScrollView showsVerticalScrollIndicator={false} >
                <Pressable
                    height={Dimensions.get('window').height / 3}
                    width={Dimensions.get('window').width}
                    bgColor={COLORS.SECONDARY}
                >
                    <LottieView
                        source={{ uri: 'https://assets10.lottiefiles.com/packages/lf20_qj1esxnx.json' }}
                        autoPlay
                        loop={false}
                    />
                </Pressable>
                <Box
                    m={4}
                >
                    <Text
                        fontSize={'md'}
                        fontFamily={FONTS[600].normal}
                        color={COLORS.PRIMARY}
                        mb={5}
                    >

                        Create your new Password
                    </Text>
                    <VStack mt={2}>
                        <Input
                            p={3}
                            mb={5}
                            value={password}
                            secureTextEntry={IsSecureEntry}
                            onChangeText={txt => setPassword(txt)}
                            placeholder="New Password"
                            placeholderTextColor={'grey'}
                            fontSize={15}
                            focusOutlineColor="rose.500"
                            borderRadius={10}
                            borderColor={'#fafafa'}
                            backgroundColor={'rose.50'}
                            borderWidth={1}
                            mt={2}
                            InputRightElement={
                                <TouchableOpacity
                                    onPress={() => {
                                        setIsSecureEntry(prev => !prev);
                                    }}>
                                    <Ionicons
                                        name={IsSecureEntry ? 'eye-off-outline' : 'eye-outline'}
                                        size={26}
                                        style={{ marginRight: 15 }}
                                    />
                                </TouchableOpacity>
                            }
                            InputLeftElement={
                                <Fontisto
                                    name={'locked'}
                                    size={20}
                                    style={{ marginLeft: 10 }}
                                />
                            }
                        />
                        <Input
                            p={3}
                            value={confirmPassword}
                            secureTextEntry={selectIsSecureEntry}
                            onChangeText={txt => setConfirmPassword(txt)}
                            placeholder="Confirm Password"
                            placeholderTextColor={'grey'}
                            fontSize={15}
                            focusOutlineColor="rose.500"
                            borderRadius={10}
                            borderColor={'#fafafa'}
                            backgroundColor={'rose.50'}
                            borderWidth={1}
                            mt={2}
                            InputRightElement={
                                <TouchableOpacity
                                    onPress={() => {
                                        setSelectIsSecureEntry(prev => !prev);
                                    }}>
                                    <Ionicons
                                        name={selectIsSecureEntry ? 'eye-off-outline' : 'eye-outline'}
                                        size={26}
                                        style={{ marginRight: 15 }}
                                    />
                                </TouchableOpacity>
                            }
                            InputLeftElement={
                                <Fontisto
                                    name={'locked'}
                                    size={20}
                                    style={{ marginLeft: 10 }}

                                />
                            }
                        />
                    </VStack>
                </Box>
                <Button
                    onPress={() => setShowModal(true)}
                    mt={20}
                    mx={4}
                    colorScheme={'rose'}
                    borderRadius={'full'}
                >
                    <Text
                        fontSize={'sm'}
                        p={1}
                        bold
                        color={COLORS.SECONDARY}
                    >
                        Submit
                    </Text>
                </Button>
            </ScrollView>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content maxWidth="500px">
                    <Modal.Body
                        bgColor={COLORS.SECONDARY}
                    >
                        <Center
                            height={Dimensions.get('window').height / 6}
                            width={Dimensions.get('window').width / 1.5}
                            bgColor={COLORS.SECONDARY}
                            justifyContent={'center'}
                        >
                            <LottieView
                                source={ANIMATION.SUCCESS}
                                autoPlay
                                loop={true}
                            />
                        </Center>
                        <Center>
                            <Text
                                fontSize={'lg'}
                                color={'pink.700'}
                                fontFamily={FONTS[700].normal}
                                bold
                                py={4}
                            >
                                Congratulations!
                            </Text>
                            <Text
                                fontSize={'sm'}
                                color={'gray.700'}
                                fontFamily={FONTS[700].normal}
                                bold
                                py={4}
                            >
                                Your account is ready to use
                            </Text>
                        </Center>
                        <Button
                            colorScheme={'rose'}
                            borderRadius={'full'}
                            onPress={() => navigate('LoginAccount')}>
                            Go to Homepage
                        </Button>
                    </Modal.Body>
                </Modal.Content>
            </Modal>
        </Box >
    )
}

export default NewPassword

const styles = StyleSheet.create({})