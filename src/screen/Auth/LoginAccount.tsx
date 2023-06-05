import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, { useState } from 'react'
import {
    ScrollView,
    Pressable,
    Divider,
    VStack,
    Button,
    Avatar,
    Input,
    Text,
    Box,
    Row,
    Modal,
    Center,
} from 'native-base';
import { PublicNavigationProps } from '../../types/AllRoutes';
import { COLORS, FONTS } from '../../styles'
import CountryPicker from '../../components/CountryPicker';
import { ANIMATION } from '../../assets';

const LoginAccount = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [IsSecureEntry, setIsSecureEntry] = React.useState(false);
    const { navigate, goBack } = useNavigation<PublicNavigationProps>();
    const [selectedCountry, setSelectedCountry] = useState<any>({
        code: 'IN',
        name: 'India',
        phone: '91',
    });
    const [visible, setVisible] = useState(false);
    const [showModal, setShowModal] = useState(false);

    return (
        <Box bgColor={COLORS.SECONDARY} flex={1} >
            <ScrollView showsVerticalScrollIndicator={false} >

                <Pressable
                    mx={4}
                    mt={6}
                    onPress={goBack}
                >
                    <AntDesign name='arrowleft' size={30} color={COLORS.PRIMARY} />
                </Pressable>
                <Box
                    mt={10}
                >
                    <Text
                        fontSize={'45'}
                        m={4}
                        width={'70%'}
                        fontFamily={FONTS[700].normal}
                        color={'violet.900'}
                    >
                        Login your Account
                    </Text>
                </Box>
                <Box px={5} mt={10} >
                    <VStack mt={2}>
                        <Input
                            value={email}
                            onChangeText={txt => setEmail(txt)}
                            placeholder="Email"
                            borderRadius={10}
                            focusOutlineColor="rose.500"
                            placeholderTextColor={'grey'}
                            fontSize={15}
                            p={3}
                            backgroundColor={'#fafafa'}
                            borderWidth={1}
                            borderColor={'#fafafa'}
                            autoCapitalize={'none'}
                            mt={2}
                            InputLeftElement={
                                <MaterialCommunityIcons
                                    name={'email'}
                                    size={20}
                                    style={{ marginLeft: 10 }}
                                />
                            }
                        />

                        <Input
                            p={3}
                            value={password}
                            secureTextEntry={IsSecureEntry}
                            onChangeText={txt => setPassword(txt)}
                            placeholder="Password"
                            placeholderTextColor={'grey'}
                            fontSize={15}
                            focusOutlineColor="rose.500"
                            borderRadius={10}
                            borderColor={'#fafafa'}
                            backgroundColor={'#fafafa'}
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
                    </VStack>

                    <Button
                        // isDisabled={!email || !password}
                        onPress={() => setShowModal(true)}
                        // onPress={() => navigate('CountryName')}
                        mt={16}
                        p={3}
                        colorScheme={'rose'}
                        borderRadius={'20'}
                    >
                        <Text color={'#fff'}
                            fontFamily={FONTS[700].normal}
                        >
                            Next
                        </Text>
                    </Button>
                    <TouchableOpacity onPress={() => navigate('ForgotPassword')}>
                        <Text bold alignSelf={'center'} fontSize={'sm'} color={COLORS.PRIMARY} mt={4}>
                            Forgot Password ?
                        </Text>
                    </TouchableOpacity>

                    <Row
                        justifyContent={'center'}
                        mx={4}
                        mt={10}
                        mb={4}
                    >
                        <Divider my="2" width={'35%'} />
                        <Text
                            mx={4}
                        >or continue with
                        </Text>
                        <Divider my="2" width={'35%'} />
                    </Row>
                    <Row
                        justifyContent={'center'}
                        mt={'8'}
                        alignItems={'center'}
                    >
                        <Box
                            bgColor={'#fff'}
                            borderWidth={1}
                            p={2}
                            borderRadius={'xl'}
                            mx={2}
                            width={'26%'}
                            height={'16'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            borderColor={'gray.300'}
                        >
                            <Avatar
                                size={7}

                                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/733/733547.png?w=740&t=st=1684037892~exp=1684038492~hmac=d2f25438967932acc94a3945a5e321ecc90f742c96fa29eb612a7daa5bbed168' }} />
                        </Box>
                        <Box
                            bgColor={'#fff'}
                            borderWidth={1}
                            p={2}
                            borderRadius={'xl'}
                            mx={2}
                            width={'26%'}
                            height={'16'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            borderColor={'gray.300'}
                        >
                            <Avatar
                                size={7}
                                bgColor={'#fff'}
                                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/270/270799.png?w=740&t=st=1684038381~exp=1684038981~hmac=a7afb22a5feba00652e1d2a1c9e97fb222b117cc80c6ff5ce4b2bce82a8f1ec6' }} />
                        </Box>
                        <Box
                            bgColor={'#fff'}
                            borderWidth={1}
                            p={2}
                            borderRadius={'xl'}
                            mx={2}
                            width={'26%'}
                            height={'16'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            borderColor={'gray.300'}
                        >
                            <Avatar
                                size={7}
                                bgColor={'#fff'}
                                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/152/152752.png?w=740&t=st=1684038547~exp=1684039147~hmac=631127f098fd750e4bffe831c993fbad064641c738cd679864115079ba3634bb' }} />
                        </Box>
                    </Row>

                    <TouchableOpacity
                        style={{
                            marginVertical: '15%'
                        }}
                        onPress={() => navigate('Register')}>
                        <Row space={2} alignSelf={'center'}>
                            <Text
                                fontWeight={'medium'}
                                alignSelf={'flex-end'}
                                color={'#000'}
                                mt={4}>
                                Already have an account?
                            </Text>
                            <Text
                                alignSelf={'flex-end'} color={COLORS.PRIMARY} mt={4}>
                                Sign up
                            </Text>
                        </Row>
                    </TouchableOpacity>
                </Box>
            </ScrollView>
            <CountryPicker
                visible={visible}
                onClose={() => {
                    setVisible(false);
                }}
                onSelect={(country: any) => {
                    setSelectedCountry(country);
                    setVisible(false);
                }}
            />
            <Modal isOpen={showModal} onClose={() => setShowModal(false)} >
                <Modal.Content maxWidth="600px">
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
                            onPress={() => { setVisible(true), setShowModal(false) }}
                        >
                            Continue
                        </Button>
                    </Modal.Body>
                </Modal.Content>
            </Modal>
        </Box >
    )
}

export default LoginAccount

const styles = StyleSheet.create({})