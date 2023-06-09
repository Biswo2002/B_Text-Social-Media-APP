import { Box, Image, Pressable, Row, ScrollView, Text } from 'native-base'
import { useNavigation, useRoute } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { PrivateNavigationProps, PrivateRootRouteProps } from '../../types/AllRoutes';
import { COLORS, FONTS } from '../../styles';

const CallScreen = () => {
    const { goBack, navigate } = useNavigation<PrivateNavigationProps>();
    const route = useRoute<PrivateRootRouteProps<'CallScreen'>>();
    return (
        <Box bgColor={'#fff'} flex={1} >
            <Pressable
                onPress={goBack}
                m={8}
            >
                <AntDesign name='arrowleft' size={25} color={COLORS.PRIMARY} />
            </Pressable>
            <ScrollView showsVerticalScrollIndicator={false} >
                <Box
                    justifyContent={'center'}
                    alignItems={'center'}
                    mt={16}
                >
                    <Image
                        alt={''}
                        borderRadius={'full'}
                        source={{
                            uri: route?.params?.image
                        }}
                        width={Dimensions.get('window').width / 1.4}
                        height={Dimensions.get('window').height / 3}
                    />
                    <Text
                        fontSize={'xl'}
                        my={10}
                        fontFamily={FONTS[700].normal}
                    >
                        {route?.params?.Name}
                    </Text>
                    <Text
                        fontSize={'sm'}
                        color={'gray.500'}
                        fontFamily={FONTS[700].normal}
                    >
                        04:26 minutes
                    </Text>
                </Box>
            </ScrollView>
            <Row
                justifyContent={'space-evenly'}
                m={10}
            >
                <Pressable
                    onPress={goBack}
                >
                    <Box
                        bgColor={'rose.400'}
                        borderRadius={'full'}
                        // p={3}
                        w={20}
                        h={20}
                        alignItems={'center'}
                        justifyContent={'center'}
                    >
                        <Entypo name='squared-cross' size={30} color={'#fff'} />
                    </Box>
                </Pressable>
                <Pressable
                    onPress={() => navigate('VideoCall', { Image: route?.params?.image })}
                >
                    <Box
                        borderRadius={'full'}
                        bgColor={'yellow.400'}
                        // p={3}
                        w={20}
                        h={20}
                        alignItems={'center'}
                        justifyContent={'center'}
                    >
                        <FontAwesome name='video-camera' size={30} color={'#fff'} />
                    </Box>

                </Pressable>
                <Pressable
                >
                    <Box
                        bgColor={'blue.500'}
                        borderRadius={'full'}
                        // p={3}
                        w={20}
                        h={20}
                        alignItems={'center'}
                        justifyContent={'center'}
                    >
                        <AntDesign name='sound' size={30} color={'#ffff'} />
                    </Box>
                </Pressable>
            </Row>
        </Box>
    )
}

export default CallScreen

const styles = StyleSheet.create({})