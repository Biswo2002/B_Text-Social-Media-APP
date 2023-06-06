import { Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { Avatar, Box, FlatList, HStack, Image, Pressable, Row, StatusBar, Text } from 'native-base'
import { COLORS, FONTS } from '../../styles'
import Header from '../../components/Header'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'




const data = [
    {
        id: '1.0',
        name: 'You',
        img: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
    },
    {
        id: '1',
        name: 'Ashis',
        img: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=826&t=st=1685899203~exp=1685899803~hmac=500c1778b3615b8af19a33fc9152e9b17f33796969b788baa68db7c1056f0388',
    },
    {
        id: '2',
        name: 'Biswo',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
    },
    {
        id: '3',
        name: 'Lipsa ',
        img: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=826&t=st=1685899203~exp=1685899803~hmac=500c1778b3615b8af19a33fc9152e9b17f33796969b788baa68db7c1056f0388',
    },
    {
        id: '4',
        name: 'Ritesh',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
    },
    {
        id: '5',
        name: 'Rajesh',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
    },
    {
        id: '6',
        name: 'Dinesh',
        img: 'https://img.freepik.com/free-photo/young-adult-woman-with-beautiful-face-isolated-white-skin-care-concept_186202-8664.jpg?w=740&t=st=1685898670~exp=1685899270~hmac=d9f2f2361fb0788907793dbbf538d6db40cea7ec736aa04cb81bbd1b8c9ab0c1',
    },
    {
        id: '7',
        name: 'Mahesh',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
    },
    {
        id: '8',
        name: 'Munesh',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
    },
    {
        id: '9',
        name: 'Sukesh',
        img: 'https://img.freepik.com/free-photo/young-adult-woman-with-beautiful-face-isolated-white-skin-care-concept_186202-8664.jpg?w=740&t=st=1685898670~exp=1685899270~hmac=d9f2f2361fb0788907793dbbf538d6db40cea7ec736aa04cb81bbd1b8c9ab0c1',
    },
    {
        id: '10',
        name: 'Biswajit',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
    },
    {
        id: '11',
        name: 'Biswo',
        img: 'https://img.freepik.com/free-photo/young-adult-woman-with-beautiful-face-isolated-white-skin-care-concept_186202-8664.jpg?w=740&t=st=1685898670~exp=1685899270~hmac=d9f2f2361fb0788907793dbbf538d6db40cea7ec736aa04cb81bbd1b8c9ab0c1',
    },
    {
        id: '12',
        name: 'Manas',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
    },

]

const Home = () => {
    return (
        <Box bgColor={'#ffff'} flex={'1'} >
            <StatusBar backgroundColor={COLORS.PRIMARY} />
            <Header />
            <Box>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) => (
                        <Pressable
                            justifyContent={'center'}
                            alignItems={'center'}
                            mt={'2'}
                        >
                            <Box
                                bgColor={COLORS.SECONDARY}
                                borderRadius={'full'}
                                shadow={'4'} ml={4}
                                borderWidth={3}
                                p={2}
                                borderColor={COLORS.PRIMARY}
                            >
                                <Image
                                    source={{
                                        uri:
                                            item?.img
                                    }}
                                    size="16"
                                    alt=""
                                    borderRadius={'full'}
                                />
                                {
                                    item?.name === 'You' &&
                                    <Box position={'absolute'} bottom={0} right={'2%'}>
                                        <Box
                                            bgColor={COLORS.PRIMARY}
                                            borderRadius={'4'}
                                            width={'5'}
                                            height={'5'}
                                            alignItems={'center'}
                                            justifyContent={'center'}>
                                            <Ionicons name="add" size={18} color={'#ffff'} />
                                        </Box>
                                    </Box>
                                }
                            </Box>
                            <Text
                                fontFamily={FONTS[600].normal}
                                fontSize={'sm'}
                                color={'#000'}
                                my={1}
                            >
                                {item?.name}
                            </Text>
                        </Pressable>
                    )}
                />

            </Box>

            <Row
                justifyContent={'space-between'}
                alignItems={'center'}
                m={4}
            // key={item?.id}
            >
                <HStack
                >
                    <Avatar
                        source={{
                            uri: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996'
                        }}
                        size="12"
                    />
                    <Box
                        mx={5}
                        mt={1}
                    >
                        <Text
                            fontSize={'sm'}
                            // mt={4}
                            color={'#000'}
                            fontFamily={FONTS[600].normal}
                        >
                            Binaya kumar
                        </Text>
                        <Text
                            fontSize={'xs'}
                            color={'gray.600'}
                            fontFamily={FONTS[500].normal}
                        >
                            marketing coordinator
                        </Text>
                    </Box>
                </HStack>
                <Pressable
                    mr={1}
                    // borderWidth={1.5}
                    borderColor={COLORS.PRIMARY}
                    px={4}
                    py={1}
                // borderRadius={'full'}
                >
                    <AntDesign name='message1' size={23} color={'gray'} />
                </Pressable>
            </Row>
            <Box
                m={4}
            >
                <Image
                    source={{
                        uri:
                            'https://img.freepik.com/free-photo/toddler-girl-lying-hammock_1304-4247.jpg?w=996&t=st=1685951931~exp=1685952531~hmac=d9d41fac4f8b191c1f3304591f08e350f7834dbacc3945e7099523ad27b15f04'
                    }}
                    alt=""
                    borderRadius={'30'}
                    width={Dimensions.get('window').width / 1.1}
                    height={Dimensions.get('window').height / 2.8}
                // resizeMode='contain'
                />
            </Box>
        </Box>
    )
}

export default Home

const styles = StyleSheet.create({})