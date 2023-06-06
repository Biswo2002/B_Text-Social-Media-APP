import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto'
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import React from 'react';
export const Icons = {
    MaterialCommunityIcons,
    SimpleLineIcons,
    MaterialIcons,
    FontAwesome5,
    FontAwesome,
    Foundation,
    AntDesign,
    EvilIcons,
    Fontisto,
    Ionicons,
    Octicons,
    Feather,
    Entypo,
};
type IconType = {
    color?: string;
    name?: string;
    size?: number;
    style?: any;
    type?: any;
};

const Icon = ({ type, name, color, size = 24, style }: IconType) => {
    const fontSize = 24;
    const Tag = type;
    return (
        <>
            {type && name && (
                <Tag name={name} size={size || fontSize} color={color} style={style} />
            )}
        </>
    );
};

export default Icon;
