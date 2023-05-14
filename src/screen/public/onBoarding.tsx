import { View, Text, StatusBar, SafeAreaView, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import React, { useRef, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Center, Pressable, ScrollView } from 'native-base';
import LottieView from 'lottie-react-native';
import { COLORS } from '../../styles';
import { PublicNavigationProps } from '../../types/AllRoutes';

const data = [
    {
        _id: '1',
        title: 'The Best Social Media of the Country',
        description: 'Social media apps allow users to create their own profiles, which can include personal information such as their name, age, location, and interests.',
        img: 'https://assets7.lottiefiles.com/packages/lf20_19j4uqeq.json',
    },
    {
        _id: '2',
        title: 'Lets Connect with Everyone in the World',
        description: 'Many social media apps also include messaging features, which allow users to communicate with each other in real-time.',
        img: 'https://assets7.lottiefiles.com/packages/lf20_vdxqg6g7.json',
    },
    {
        _id: '3',
        title: 'Everything Thing you can do in this APP',
        description: ' Social media apps often use analytics to track user behavior and preferences',
        img: 'https://assets7.lottiefiles.com/packages/lf20_diol2nj7.json',
    },
];


const OnBoarding = () => {
    const { navigate } = useNavigation<PublicNavigationProps>();
    const flatlistRef = useRef<any>();
    const [currentPage, setCurrentPage] = useState<any>(0);
    const [viewableItems, setViewableItems] = useState<any>([]);

    const handleViewableItemsChanged = useRef(({ viewableItems }: any) => {
        setViewableItems(viewableItems)
    })
    useEffect(() => {
        if (!viewableItems[0] || currentPage === viewableItems[0].index)
            return;
        setCurrentPage(viewableItems[0].index)

    }, [viewableItems])

    const handleNext = () => {
        if (currentPage == data.length - 1)
            return;

        flatlistRef.current.scrollToIndex({
            animated: true,
            index: currentPage + 1
        })
    }

    const handleBack = () => {
        if (currentPage == 0)
            return;
        flatlistRef.current.scrollToIndex({
            animated: true,
            index: currentPage - 1
        })
    }

    const handleSkipToEnd = () => {
        flatlistRef.current.scrollToIndex({
            animate: true,
            index: data.length - 1
        })
    }

    const renderTopSection = () => {
        return (
            <SafeAreaView>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 30
                }}>
                    {/* Back button */}
                    <TouchableOpacity
                        onPress={handleBack}
                        style={{
                            padding: 20
                        }}>
                        {/* Back icon */}
                        {/* Hide back button on 1st screen */}
                        <AntDesignIcons name="left" style={{
                            fontSize: 25,
                            color: COLORS.PRIMARY,
                            opacity: currentPage == 0 ? 0 : 1
                        }} />
                    </TouchableOpacity>

                    {/* Skip button */}
                    {/* Hide Skip button on last screen */}
                    <TouchableOpacity onPress={handleSkipToEnd}>
                        <Text style={{
                            fontSize: 18,
                            color: COLORS.PRIMARY,
                            opacity: currentPage == data.length - 1 ? 0 : 1
                        }}>Skip</Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView >
        )
    }

    const renderBottomSection = () => {
        return (
            <SafeAreaView>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 50,
                    paddingVertical: 50
                }}>
                    {/* Pagination */}
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {
                            // No. of dots
                            [...Array(data.length)].map((_, index) => (
                                <View
                                    key={index}
                                    style={{
                                        width: 10,
                                        height: 10,
                                        borderRadius: 5,
                                        backgroundColor: index == currentPage
                                            ? COLORS.PRIMARY
                                            : COLORS.PRIMARY + '20',
                                        marginRight: 8
                                    }} />
                            ))
                        }


                    </View>

                    {/* Next or GetStarted button */}
                    {/* Show or Hide Next button & GetStarted button by screen */}
                    {
                        currentPage != data.length - 1 ? (
                            <TouchableOpacity
                                onPress={handleNext}
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: 60,
                                    height: 60,
                                    borderRadius: 30,
                                    backgroundColor: COLORS.PRIMARY
                                }}
                                activeOpacity={0.8}
                            >
                                <AntDesignIcons name="right"
                                    style={{ fontSize: 18, color: COLORS.SECONDARY, opacity: 0.8 }} />
                                <AntDesignIcons
                                    name="right"
                                    style={{ fontSize: 25, color: COLORS.SECONDARY, marginLeft: -15 }}
                                />
                            </TouchableOpacity>
                        ) : (
                            // Get Started Button
                            <TouchableOpacity
                                onPress={() => navigate('Login')}
                                style={{
                                    paddingHorizontal: 20
                                    ,
                                    height: 60,
                                    borderRadius: 30,
                                    backgroundColor: COLORS.PRIMARY,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <Text
                                    style={{
                                        color: COLORS.SECONDARY,
                                        fontSize: 18,
                                        marginLeft: 2
                                    }}>Get Started</Text>
                                <AntDesignIcons name="right"
                                    style={{ fontSize: 18, color: COLORS.SECONDARY, opacity: .8, marginLeft: 20 }} />
                                <AntDesignIcons
                                    name="right"
                                    style={{ fontSize: 25, color: COLORS.SECONDARY, marginLeft: -15 }}
                                />
                            </TouchableOpacity>
                        )
                    }

                </View>
            </SafeAreaView>
        )
    }

    const renderFlatlistItem = ({ item }: any) => {
        return (

            <View style={{
                width: Dimensions.get('window').width,
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {/* <Image alt='' source={IMAGES.LOGO} size={'20'} resizeMode='contain' /> */}

                <View style={{
                    alignItems: 'center',
                    marginVertical: 20
                }}>
                    <Center>
                        <Pressable
                            height={Dimensions.get('window').height / 3}
                            width={Dimensions.get('window').width}
                            bgColor={COLORS.SECONDARY}
                        >
                            <LottieView
                                source={{ uri: item?.img }}
                                autoPlay
                                loop={true}
                            />
                        </Pressable>
                    </Center>
                </View>
                <View style={{ paddingHorizontal: 20, marginVertical: 20 }}>
                    <Text style={{ fontSize: 22, textAlign: 'center', fontWeight: 'bold', color: '#a21caf' }}>
                        {item.title}
                    </Text>
                    <Text style={{
                        fontSize: 16,
                        // opacity: 0.4,
                        textAlign: 'center',
                        marginTop: 15,
                        lineHeight: 28,
                        color: '#000',
                    }}>
                        {item.description}
                    </Text>
                </View>

            </View>
        )
    }

    return (

        <View style={{
            flex: 1,
            backgroundColor: COLORS.SECONDARY,
            justifyContent: 'center'
        }}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.PRIMARY} />

            {/* TOP SECTION - Back & Skip button */}
            {renderTopSection()}

            {/* FLATLIST with pages */}
            <FlatList
                data={data}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item._id}
                renderItem={renderFlatlistItem}
                ref={flatlistRef}
                onViewableItemsChanged={handleViewableItemsChanged.current}
                viewabilityConfig={{ viewAreaCoveragePercentThreshold: 100 }}
                initialNumToRender={1}
                extraData={Dimensions.get('window').width}
            />

            {/* BOTTOM SECTION - pagination & next or GetStarted button */}
            {renderBottomSection()}

        </View>
    )
}

export default OnBoarding
