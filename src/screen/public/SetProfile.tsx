import { Box, Button, Image, Input, Pressable, ScrollView, Text } from 'native-base'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useNavigation } from '@react-navigation/native'
import Feather from 'react-native-vector-icons/Feather'
import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { PublicNavigationProps } from '../../types/AllRoutes'
import ScreenHeader from '../../components/ScreenHeader'
import { COLORS, FONTS } from '../../styles'

const SetProfile = () => {
    const [selectedCountry, setSelectedCountry] = useState<any>({
        code: 'IN',
        name: 'India',
        phone: '91',
    });
    const [Profile, setProfile] = useState('');
    const [show, setShow] = useState(false);
    const [visible, setVisible] = useState(false);
    const [firstName, setFirstName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [Birth, setBirth] = React.useState('');
    const [UserName, setUserName] = React.useState('');
    const [occupation, setOccupation] = useState('')
    const [contactNumber, setContactNumber] = React.useState('');
    const { navigate } = useNavigation<PublicNavigationProps>();
    const handleDismiss = () => {
        setShow(false);
    };

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: any) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    return (
        <Box bgColor={'#fff'} flex={'1'} >
            <ScreenHeader title={'Fill Your Profile'} />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Box
                    borderRadius={'2xl'}
                    mt={'5'}
                    ml={'3'}
                    mr={'3'}
                    py={4}
                    mb={4}
                    px={4}
                    bgColor={COLORS.SECONDARY}

                >
                    <Pressable
                        justifyContent={'center'}
                        alignItems={'center'}
                        mt={'5'}
                        onPress={() => setShow(true)}>
                        <Box bgColor={COLORS.SECONDARY} borderRadius={'full'} shadow={'4'}>
                            <Image
                                source={{
                                    uri:
                                        Profile ||
                                        'https://cdn-icons-png.flaticon.com/512/2347/2347299.png',
                                }}
                                size="32"
                                alt=""
                                borderRadius={'full'}
                            />
                            <Box position={'absolute'} bottom={0} right={'2%'}>
                                <Box
                                    bgColor={COLORS.PRIMARY}
                                    borderRadius={'full'}
                                    width={'8'}
                                    height={'8'}
                                    alignItems={'center'}
                                    justifyContent={'center'}>
                                    <Feather name="camera" size={17} color={'#ffff'} />
                                </Box>
                            </Box>
                        </Box>
                    </Pressable>
                    <Box py={2}>
                        <Input
                            value={firstName}
                            my={4}
                            onChangeText={txt => setFirstName(txt)}
                            placeholder="Full Name "
                            fontSize={'xs'}
                            color={'#000'}
                            borderRadius={'15'}
                            fontFamily={FONTS[600].normal}
                            placeholderTextColor={'gray.500'}
                            backgroundColor={'#fafafa'}
                            borderColor={'transparent'}
                            focusOutlineColor={COLORS.PRIMARY}
                        />
                    </Box>
                    <Box py={2}>
                        <Input
                            // isDisabled
                            value={UserName}
                            onChangeText={txt => setUserName(txt)}
                            placeholder="Username"
                            fontSize={'xs'}
                            color={'#000'}
                            borderRadius={'15'}
                            fontFamily={FONTS[600].normal}
                            placeholderTextColor={'gray.500'}
                            backgroundColor={'#fafafa'}
                            borderColor={'transparent'}
                            focusOutlineColor={COLORS.PRIMARY}
                        />
                    </Box>
                    <Box py={2}>
                        <Input
                            value={Birth}
                            my={4}
                            onChangeText={txt => setBirth(txt)}
                            placeholder="Date of Birth"
                            fontSize={'xs'}
                            color={'#000'}
                            borderRadius={'15'}
                            fontFamily={FONTS[600].normal}
                            placeholderTextColor={'gray.500'}
                            backgroundColor={'#fafafa'}
                            borderColor={'transparent'}
                            focusOutlineColor={COLORS.PRIMARY}
                            InputRightElement={
                                <Pressable
                                    p="1"
                                    onPress={showDatePicker}
                                    flexDirection={'row'}>
                                    <Image
                                        source={{
                                            uri: `https://cdn-icons-png.flaticon.com/512/42/42446.png?w=740&t=st=1685890080~exp=1685890680~hmac=b2bf348c037d6f24e448194f375e4562a2de176bee4d2296a093092581e0e067`,
                                        }}
                                        alt="India"
                                        w={'5'}
                                        h={'5'}
                                        mr={2}
                                        borderRadius="sm"
                                        key="1"
                                        resizeMode='contain'
                                    />
                                </Pressable>
                            }
                        />
                    </Box>
                    <Box py={2}>
                        <Input
                            // isDisabled
                            value={email}
                            onChangeText={txt => setEmail(txt)}
                            placeholder="Email"
                            fontSize={'xs'}
                            color={'#000'}
                            borderRadius={'15'}
                            fontFamily={FONTS[600].normal}
                            placeholderTextColor={'gray.500'}
                            backgroundColor={'#fafafa'}
                            borderColor={'transparent'}
                            focusOutlineColor={COLORS.PRIMARY}
                            InputRightElement={
                                <Pressable
                                    // onPress={() => setVisible(true)}
                                    p="1"
                                    flexDirection={'row'}>
                                    <Image
                                        source={{
                                            uri: `https://cdn-icons-png.flaticon.com/512/589/589678.png?w=740&t=st=1685890232~exp=1685890832~hmac=e661e0de784dd2ac373037d6b64233a5f4951f49b8a7a9a605e5a1da79c98db7`,
                                        }}
                                        alt="India"
                                        w={'5'}
                                        h={'5'}
                                        mr={2}
                                        borderRadius="sm"
                                        key="1"
                                        resizeMode='contain'
                                    />
                                </Pressable>
                            }
                        />
                    </Box>
                    <Box py={1} >
                        <Input
                            value={contactNumber}
                            onChangeText={txt => setContactNumber(txt)}
                            fontSize={'xs'}
                            fontWeight={'600'}
                            borderBottomWidth={1}
                            backgroundColor="#fafafa"
                            focusOutlineColor={COLORS.PRIMARY}
                            borderColor={'transparent'}
                            maxLength={10}
                            InputLeftElement={
                                <Pressable
                                    onPress={() => setVisible(true)}
                                    p="1"
                                    flexDirection={'row'}>
                                    <Image
                                        source={{
                                            uri: `https://flagcdn.com/w40/${selectedCountry.code.toLocaleLowerCase()}.png`,
                                        }}
                                        alt="India"
                                        w={'8'}
                                        h={'6'}
                                        borderRadius="sm"
                                        key="1"
                                    />
                                    <Text key="2">+{selectedCountry.phone}</Text>
                                </Pressable>
                            }
                            placeholder="phone number"
                            placeholderTextColor={'grey'}
                            keyboardType="phone-pad"
                            size={16}
                            borderRadius={'15'}
                            mt={4}
                        />
                    </Box>
                    <Box py={2}>
                        <Input
                            value={occupation}
                            my={4}
                            onChangeText={txt => setOccupation(txt)}
                            placeholder="Occupation"
                            fontSize={'xs'}
                            color={'#000'}
                            borderRadius={'15'}
                            fontFamily={FONTS[600].normal}
                            placeholderTextColor={'gray.500'}
                            backgroundColor={'#fafafa'}
                            focusOutlineColor={COLORS.PRIMARY}
                            borderColor={'transparent'}
                        />
                    </Box>
                    <Button
                        // isDisabled={!firstName || !UserName || !Birth || !email || !contactNumber || !occupation}
                        onPress={() => navigate('FollowScreen')}
                        my={10}
                        colorScheme={'rose'}
                        borderRadius={'20'}
                    >
                        <Text
                            fontSize={'sm'}
                            p={1}
                            bold
                            color={COLORS.SECONDARY}
                        >
                            Continue
                        </Text>
                    </Button>
                </Box>
            </ScrollView>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </Box>
    )
}

export default SetProfile

const styles = StyleSheet.create({})