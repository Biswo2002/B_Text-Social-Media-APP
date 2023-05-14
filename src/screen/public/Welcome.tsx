import { Box, Center, Image } from 'native-base';
import React from 'react';
import { IMAGES } from '../../assets';
import { Dimensions } from 'react-native';

export default function Splash() {
    return (
        <>
            <Box bg="white" flex={1}>
                <Center
                    width={Dimensions.get('window').width}
                    height={Dimensions.get('window').height}
                >
                    <Image
                        source={IMAGES.LOGO}
                        w="48"
                        h="48"
                        resizeMode="contain"
                        alt="LOGO"
                    />
                </Center>
            </Box>
        </>
    );
}
