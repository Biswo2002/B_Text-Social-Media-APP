import { Box, Image, Pressable, Row, ScrollView } from 'native-base'
import { useNavigation, useRoute } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { PrivateNavigationProps, PrivateRootRouteProps } from '../../types/AllRoutes';
import { COLORS } from '../../styles';

const VideoCall = () => {
    const { goBack, navigate } = useNavigation<PrivateNavigationProps>();
    const route = useRoute<PrivateRootRouteProps<'VideoCall'>>();
    return (
        <Box bgColor={'#fff'} flex={1}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Image
                    alt=''
                    source={{ uri: route?.params?.Image }}
                    width={Dimensions.get('window').width}
                    height={Dimensions.get('window').height}
                // resizeMode='contain'
                // borderRadius={1}
                />
                <Pressable
                    onPress={goBack}
                    m={5}
                    position={'absolute'}
                >
                    <AntDesign name='arrowleft' size={25} color={COLORS.PRIMARY} />
                </Pressable>
                <Image
                    alt=''
                    source={{ uri: 'https://img.freepik.com/free-photo/successful-attractive-girl-with-good-style-walking-down-street-portrait-european-model-fashionable-scarlet-satin-dress_197531-11971.jpg?w=996&t=st=1686347943~exp=1686348543~hmac=63b8c66a7b52c1fd0fbbe2f2f3c8af08a5a1b483ff602a3546f9d0b59f9e6343' }}
                    width={Dimensions.get('window').width / 3}
                    height={Dimensions.get('window').height / 5}
                    position={'absolute'}
                    top={'60%'}
                    borderRadius={'16'}
                    left={'60%'}
                />

                <Row
                    justifyContent={'space-evenly'}
                    m={10}
                    position={'absolute'}
                    top={'80%'}
                >
                    <Pressable
                        onPress={goBack}
                    >
                        <Box
                            bgColor={'rose.400'}
                            borderRadius={'full'}
                            mx={5}
                            w={20}
                            h={20}
                            alignItems={'center'}
                            justifyContent={'center'}
                        >
                            <Entypo name='squared-cross' size={30} color={'#fff'} />
                        </Box>
                    </Pressable>
                    <Pressable
                    >
                        <Box
                            borderRadius={'full'}
                            bgColor={'yellow.400'}
                            mx={5}
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
                            bgColor={'blue.400'}
                            borderRadius={'full'}
                            mx={5}
                            w={20}
                            h={20}
                            alignItems={'center'}
                            justifyContent={'center'}
                        >
                            <AntDesign name='sound' size={30} color={'#ffff'} />
                        </Box>
                    </Pressable>
                </Row>
            </ScrollView>
        </Box>
    )
}

export default VideoCall

const styles = StyleSheet.create({})