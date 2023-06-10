import { Box, Center, Image, Pressable, Row } from 'native-base'
import Octicons from 'react-native-vector-icons/Octicons'
import { Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../styles'

const data = [
    {
        id: '1',
        img: 'https://img.freepik.com/free-photo/girl-red-dress-reaches-out-hand-with-cookie-her-father_8353-952.jpg?t=st=1686378257~exp=1686378857~hmac=058ac91e86482be01f3d71b51507b69071be3924a1bd433d4a67b283a55a6a19',
    },
    {
        id: '2',
        img: 'https://img.freepik.com/free-photo/small-boy-with-car-sitting-bed_8353-382.jpg?w=360&t=st=1686412839~exp=1686413439~hmac=993dc19a283dd47fc355743386d7f3ea292b7e3967bb7f17274aa05d11c89464',
    },
    {
        id: '3',
        img: 'https://img.freepik.com/free-photo/smiling-romantic-asian-girl-contemplating-nature-around_1262-19410.jpg?t=st=1686412483~exp=1686413083~hmac=35c8f367e05de1ca035785c9974da6454d20a09b192baeb613c4613d17fb445f',
    },
    {
        id: '4',
        img: 'https://img.freepik.com/free-photo/close-up-brunette-woman-with-colorful-jersey_1140-286.jpg?t=st=1686378257~exp=1686378857~hmac=352e66f7478ea86c20e21b1a2a865af5fb5b94d983b8f0f7a9cd0a99b283995f',
    },
    {
        id: '5',
        img: 'https://img.freepik.com/free-photo/attractive-young-woman-with-ceremonial-make-up_23-2148187417.jpg?t=st=1686412483~exp=1686413083~hmac=cf67a22175e0a16daebba82b1b6422c4e266daee6c51677efeefd176a91a2cd5',
    },
    {
        id: '6',
        img: 'https://img.freepik.com/free-photo/portrait-beautiful-young-woman-with-hands-hip-front-colonnade_23-2148187353.jpg',
    },
    {
        id: '7',
        img: 'https://img.freepik.com/free-photo/attractive-young-woman-with-ceremonial-make-up_23-2148187417.jpg?t=st=1686412483~exp=1686413083~hmac=cf67a22175e0a16daebba82b1b6422c4e266daee6c51677efeefd176a91a2cd5',
    },
    {
        id: '8',
        img: 'https://img.freepik.com/free-photo/portrait-attractive-caucasian-couple-red-smiling-camera-blurred-xmas-wreath-background_132075-6461.jpg?t=st=1686378257~exp=1686378857~hmac=109f689e6edd23ae4ceb74a06510739eaccfc77db63aa65aa12360ce0f719fc6',
    },
    {
        id: '9',
        img: 'https://img.freepik.com/free-photo/small-boy-with-car-sitting-bed_8353-382.jpg?w=360&t=st=1686412839~exp=1686413439~hmac=993dc19a283dd47fc355743386d7f3ea292b7e3967bb7f17274aa05d11c89464',
    },
    {
        id: '10',
        img: 'https://img.freepik.com/free-photo/day-two-green-cold-happiness_1157-2530.jpg?t=st=1686412599~exp=1686413199~hmac=5a76b43d62eff2d64462e072c53a6726d4db74016b09e281988fbafeb3874308',
    },
    {
        id: '11',
        img: 'https://img.freepik.com/free-photo/pretty-girl-with-long-dark-hair-laughing-winter-outdoor-shot-romantic-caucasian-woman-chilling-cold-day_197531-14102.jpg?t=st=1686412661~exp=1686413261~hmac=c93bac34c5f40a483af2ac902ee7e1ccd2e99e481530aa27eeb67f4b30be6608',
    },
    {
        id: '12',
        img: 'https://img.freepik.com/free-photo/girl-red-dress-reaches-out-hand-with-cookie-her-father_8353-952.jpg?t=st=1686378257~exp=1686378857~hmac=058ac91e86482be01f3d71b51507b69071be3924a1bd433d4a67b283a55a6a19',
    },
    {
        id: '13',
        img: 'https://img.freepik.com/free-photo/day-two-green-cold-happiness_1157-2530.jpg?t=st=1686412599~exp=1686413199~hmac=5a76b43d62eff2d64462e072c53a6726d4db74016b09e281988fbafeb3874308',
    },
    {
        id: '14',
        img: 'https://img.freepik.com/free-photo/smiling-romantic-asian-girl-contemplating-nature-around_1262-19410.jpg?t=st=1686412483~exp=1686413083~hmac=35c8f367e05de1ca035785c9974da6454d20a09b192baeb613c4613d17fb445f',
    },
    {
        id: '15',
        img: 'https://img.freepik.com/free-photo/girl-red-dress-reaches-out-hand-with-cookie-her-father_8353-952.jpg?t=st=1686378257~exp=1686378857~hmac=058ac91e86482be01f3d71b51507b69071be3924a1bd433d4a67b283a55a6a19',
    },
    {
        id: '16',
        img: 'https://img.freepik.com/free-photo/smiling-romantic-asian-girl-contemplating-nature-around_1262-19410.jpg?t=st=1686412483~exp=1686413083~hmac=35c8f367e05de1ca035785c9974da6454d20a09b192baeb613c4613d17fb445f',
    },
    {
        id: '17',
        img: 'https://img.freepik.com/free-photo/positive-red-haired-woman-laughing-blur-nature-refined-ginger-girl-smiling-during-winter-photoshoot_197531-14103.jpg?t=st=1686412741~exp=1686413341~hmac=1bce95b98d7407b2f86c2e332b1d43ff40ef8fd26516cf6ed286894b942b37ca',
    },
    {
        id: '18',
        img: 'https://img.freepik.com/free-photo/girl-red-dress-reaches-out-hand-with-cookie-her-father_8353-952.jpg?t=st=1686378257~exp=1686378857~hmac=058ac91e86482be01f3d71b51507b69071be3924a1bd433d4a67b283a55a6a19',
    },
    {
        id: '19',
        img: 'https://img.freepik.com/free-photo/smiling-romantic-asian-girl-contemplating-nature-around_1262-19410.jpg?t=st=1686412483~exp=1686413083~hmac=35c8f367e05de1ca035785c9974da6454d20a09b192baeb613c4613d17fb445f',
    },
    {
        id: '20',
        img: 'https://img.freepik.com/free-photo/amazing-red-haired-woman-with-phone-standing-street-cute-ginger-lady-coat-hat-holding-smartphone_197531-14148.jpg?t=st=1686412697~exp=1686413297~hmac=4937ea3184893af7882540b4510b8cb40101c735afb0262e304d03e930a349f7',
    },
    {
        id: '21',
        img: 'https://img.freepik.com/free-photo/girl-red-dress-reaches-out-hand-with-cookie-her-father_8353-952.jpg?t=st=1686378257~exp=1686378857~hmac=058ac91e86482be01f3d71b51507b69071be3924a1bd433d4a67b283a55a6a19',
    },
    {
        id: '22',
        img: 'https://img.freepik.com/free-photo/pretty-girl-with-long-dark-hair-laughing-winter-outdoor-shot-romantic-caucasian-woman-chilling-cold-day_197531-14102.jpg?t=st=1686412661~exp=1686413261~hmac=c93bac34c5f40a483af2ac902ee7e1ccd2e99e481530aa27eeb67f4b30be6608',
    },
    {
        id: '23',
        img: 'https://img.freepik.com/free-photo/girl-red-dress-reaches-out-hand-with-cookie-her-father_8353-952.jpg?t=st=1686378257~exp=1686378857~hmac=058ac91e86482be01f3d71b51507b69071be3924a1bd433d4a67b283a55a6a19',
    },
    {
        id: '24',
        img: 'https://img.freepik.com/free-photo/pretty-girl-with-long-dark-hair-laughing-winter-outdoor-shot-romantic-caucasian-woman-chilling-cold-day_197531-14102.jpg?t=st=1686412661~exp=1686413261~hmac=c93bac34c5f40a483af2ac902ee7e1ccd2e99e481530aa27eeb67f4b30be6608',
    },
]

const Shorts = () => {
    return (
        <Box bgColor={'#fff'} flex={1} >
            <Row
                flexWrap={'wrap'}
                m={3}
            >
                {
                    data?.map(item => (
                        <Box key={item?.id}>
                            <Image
                                alt={item?.img}
                                m={1}
                                source={{ uri: item?.img }}
                                width={Dimensions.get('window').width / 3.4}
                                height={Dimensions.get('window').height / 3.5}
                                borderRadius={'10'}
                            />
                            <Center
                                m={-4}
                            >
                                <Pressable
                                    // position={'absolute'}
                                    // right={'16'}
                                    bottom={32}
                                    bgColor={'#fff'}
                                    w={'8'}
                                    h={8}
                                    borderRadius={'full'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                >
                                    <Octicons name='video' size={20} color={COLORS.PRIMARY} />
                                </Pressable>
                            </Center>
                        </Box>
                    ))
                }
            </Row>
        </Box>
    )
}

export default Shorts

const styles = StyleSheet.create({})