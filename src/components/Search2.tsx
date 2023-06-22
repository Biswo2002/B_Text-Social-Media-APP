import { StyleSheet } from 'react-native'
import React from 'react'
import { Avatar, Box, FlatList, HStack, Pressable, Row, Text } from 'native-base'
import { COLORS, FONTS } from '../styles'

const data = [
    {
        id: '1',
        name: 'Ashis ku. Nayak',
        deg: 'Pricnipal',
        img: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=826&t=st=1685899203~exp=1685899803~hmac=500c1778b3615b8af19a33fc9152e9b17f33796969b788baa68db7c1056f0388',
        status: 'Following',
    },
    {
        id: '2',
        name: 'Biswopaban Nayak',
        deg: 'Software Engineer',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
        status: 'Following',
    },
    {
        id: '3',
        name: 'K P Lipsa ',
        deg: 'Lab Technician',
        img: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=826&t=st=1685899203~exp=1685899803~hmac=500c1778b3615b8af19a33fc9152e9b17f33796969b788baa68db7c1056f0388',
        status: 'Following',
    },
    {
        id: '4',
        name: 'Ritesh Ku Sahoo',
        deg: 'Pricnipal',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
        status: 'Follow',
    },
    {
        id: '5',
        name: 'Rajesh ku. Nayak',
        deg: 'Pricnipal',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
        status: 'Following',
    },
    {
        id: '6',
        name: 'Dinesh ku. Nayak',
        deg: 'Pricnipal',
        img: 'https://img.freepik.com/free-photo/young-adult-woman-with-beautiful-face-isolated-white-skin-care-concept_186202-8664.jpg?w=740&t=st=1685898670~exp=1685899270~hmac=d9f2f2361fb0788907793dbbf538d6db40cea7ec736aa04cb81bbd1b8c9ab0c1',
        status: 'Following',
    },
    {
        id: '7',
        name: 'Mahesh ku. Nayak',
        deg: 'Pricnipal',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
        status: 'Follow',
    },
    {
        id: '8',
        name: 'Munesh ku. Nayak',
        deg: 'Pricnipal',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
        status: 'Follow',
    },
    {
        id: '9',
        name: 'Sukesh ku. Nayak',
        deg: 'Pricnipal',
        img: 'https://img.freepik.com/free-photo/young-adult-woman-with-beautiful-face-isolated-white-skin-care-concept_186202-8664.jpg?w=740&t=st=1685898670~exp=1685899270~hmac=d9f2f2361fb0788907793dbbf538d6db40cea7ec736aa04cb81bbd1b8c9ab0c1',
        status: 'Following',
    },
    {
        id: '10',
        name: 'Biswajit ku. Nayak',
        deg: 'Pricnipal',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
        status: 'Follow',
    },
    {
        id: '11',
        name: 'Biswopaban Nayak',
        deg: 'Pricnipal',
        img: 'https://img.freepik.com/free-photo/young-adult-woman-with-beautiful-face-isolated-white-skin-care-concept_186202-8664.jpg?w=740&t=st=1685898670~exp=1685899270~hmac=d9f2f2361fb0788907793dbbf538d6db40cea7ec736aa04cb81bbd1b8c9ab0c1',
        status: 'Following',
    },
    {
        id: '12',
        name: 'Manas ku. Nayak',
        deg: 'Pricnipal',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
        status: 'Follow',
    },

]
const Search2 = () => {
    return (
        <Box>
            <FlatList
                data={data}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Row
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        m={4}
                        key={item?.id}
                    >
                        <HStack
                        >
                            <Avatar
                                source={{
                                    uri: item?.img
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
                                    {item?.name}
                                </Text>
                                <Text
                                    fontSize={'xs'}
                                    color={'gray.600'}
                                    fontFamily={FONTS[500].normal}
                                >
                                    {item?.deg}
                                </Text>
                            </Box>
                        </HStack>
                        <Pressable
                            mr={1}
                            borderWidth={1.5}
                            borderColor={COLORS.PRIMARY}
                            px={4}
                            py={1}
                            borderRadius={'full'}
                        >
                            <Text
                                color={COLORS.PRIMARY}
                                fontFamily={FONTS[600].normal}
                                fontSize={'xs'}
                            >
                                {item?.status}
                            </Text>
                        </Pressable>
                    </Row>
                )}
            />
        </Box>
    )
}

export default Search2

const styles = StyleSheet.create({})