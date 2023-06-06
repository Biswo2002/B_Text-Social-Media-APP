import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pressable, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { Box, Image, Text } from 'native-base';
import React from 'react';
import Icon, { Icons } from '../../components/core/Icons';
import Profile from '../../screen/private/Profile';
import { Home } from '../../screen/private';
import { COLORS } from '../../styles';
import Shorts from '../../screen/private/Shorts';
import Search from '../../screen/private/Search';
import Add from '../../screen/private/Add';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }: any) => (
    <Pressable
        onPress={onPress}
        style={{
            top: -5,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
        <Box borderRadius={35} bg={'gray.400'} shadow={'5'}>
            <Box w={50} h={50} borderRadius={35} bg={COLORS.PRIMARY}>
                {children}
            </Box>
        </Box>
    </Pressable>
);

export default function BottomTab() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: styles.tabBar,
                tabBarShowLabel: false,
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Box alignItems={'center'} justifyContent={'center'}>
                            <Icon
                                type={Icons.Ionicons}
                                name="home"
                                color={focused ? COLORS.PRIMARY : '#748C94'}
                            />
                            <Text
                                color={focused ? COLORS.PRIMARY : '#748C94'}
                                fontSize={8}
                                bold>
                                Home
                            </Text>
                        </Box>
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Box alignItems={'center'} justifyContent={'center'}>
                            <Icon
                                type={Icons.AntDesign}
                                name="search1"
                                color={focused ? COLORS.PRIMARY : '#748C94'}
                            />
                            <Text
                                color={focused ? COLORS.PRIMARY : '#748C94'}
                                fontSize={8}
                                bold>
                                Search
                            </Text>
                        </Box>
                    ),
                }}
            />
            <Tab.Screen
                name="Add"
                component={Add}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Box alignItems={'center'} justifyContent={'center'}>
                            <Icon
                                type={Icons.Ionicons}
                                name="add"
                                color={focused ? COLORS.PRIMARY : '#fff'}
                                size={25}
                            />
                        </Box>
                    ),
                    tabBarButton: props => <CustomTabBarButton {...props} />,
                }}
            />
            <Tab.Screen
                name="Shorts"
                component={Shorts}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Box alignItems={'center'} justifyContent={'center'}>
                            <Icon
                                type={Icons.MaterialIcons}
                                name="video-collection"
                                color={focused ? COLORS.PRIMARY : '#748C94'}
                            />
                            <Text
                                color={focused ? COLORS.PRIMARY : '#748C94'}
                                fontSize={8}
                                bold>
                                Shorts
                            </Text>
                        </Box>
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <>
                            <Box alignItems={'center'} justifyContent={'center'}>
                                <Icon
                                    type={Icons.FontAwesome}
                                    name="user-o"
                                    color={focused ? COLORS.PRIMARY : '#748C94'}
                                />
                                <Text
                                    color={focused ? COLORS.PRIMARY : '#748C94'}
                                    fontSize={8}
                                    bold>
                                    Profile
                                </Text>
                            </Box>
                        </>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tabBar: {
        height: 70,
        position: 'absolute',
        bottom: 16,
        right: 16,
        left: 16,
        borderRadius: 16,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

    },
    btn: {
        width: 42,
        height: 42,
        borderRadius: 25,
        borderWidth: 3,
        borderColor: COLORS.SECONDARY,
        backgroundColor: COLORS.SECONDARY,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.PRIMARY,
        borderRadius: 25,
    },
    text: {
        fontSize: 10,
        textAlign: 'center',
        color: COLORS.PRIMARY,
        fontFamily: 'Helvetica-Bold',
    },
});