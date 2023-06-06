import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import Feather from 'react-native-vector-icons/Feather'
import { Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import {
    StatusBar,
    Pressable,
    FlatList,
    Avatar,
    HStack,
    Image,
    Box,
    Row,
    Text
} from 'native-base'
import { PrivateNavigationProps } from '../../types/AllRoutes'
import { COLORS, FONTS } from '../../styles'
import Header from '../../components/Header'

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

const Home_Data = [
    {
        id: '1',
        logo: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
        A_Name: 'Biswopaban Nayak',
        deg: 'Software Engineer',
        img: 'https://img.freepik.com/free-photo/toddler-girl-lying-hammock_1304-4247.jpg?w=996&t=st=1685951931~exp=1685952531~hmac=d9d41fac4f8b191c1f3304591f08e350f7834dbacc3945e7099523ad27b15f04',
        PIC: [
            {
                id: '1',
                img: 'https://img.freepik.com/free-photo/toddler-girl-lying-hammock_1304-4247.jpg?w=996&t=st=1685951931~exp=1685952531~hmac=d9d41fac4f8b191c1f3304591f08e350f7834dbacc3945e7099523ad27b15f04',
            },
            {
                id: '2',
                img: 'https://img.freepik.com/free-photo/toddler-girl-lying-hammock_1304-4247.jpg?w=996&t=st=1685951931~exp=1685952531~hmac=d9d41fac4f8b191c1f3304591f08e350f7834dbacc3945e7099523ad27b15f04',
            },
            {
                id: '3',
                img: 'https://img.freepik.com/free-photo/toddler-girl-lying-hammock_1304-4247.jpg?w=996&t=st=1685951931~exp=1685952531~hmac=d9d41fac4f8b191c1f3304591f08e350f7834dbacc3945e7099523ad27b15f04',
            },
            {
                id: '4',
                img: 'https://img.freepik.com/free-photo/toddler-girl-lying-hammock_1304-4247.jpg?w=996&t=st=1685951931~exp=1685952531~hmac=d9d41fac4f8b191c1f3304591f08e350f7834dbacc3945e7099523ad27b15f04',
            },
            {
                id: '5',
                img: 'https://img.freepik.com/free-photo/toddler-girl-lying-hammock_1304-4247.jpg?w=996&t=st=1685951931~exp=1685952531~hmac=d9d41fac4f8b191c1f3304591f08e350f7834dbacc3945e7099523ad27b15f04',
            },
        ],
        like: '45,325',
        comment: '12,545',
    },
    {
        id: '2',
        logo: 'https://img.freepik.com/free-photo/toddler-girl-lying-hammock_1304-4247.jpg?w=996&t=st=1685951931~exp=1685952531~hmac=d9d41fac4f8b191c1f3304591f08e350f7834dbacc3945e7099523ad27b15f04',
        A_Name: 'Gyana Gourav  Roul',
        deg: 'Doctor M.D Medicines',
        img: 'https://img.freepik.com/free-photo/gorgeous-white-girl-with-long-wavy-hair-chilling-autumn-day-outdoor-portrait-interested-ginger-female-model-with-cup-coffee_197531-11735.jpg?w=996&t=st=1686033947~exp=1686034547~hmac=2c952ac53243b633fbb02523bff6333f720fec1dc20fce597666298e737c3d76',
        PIC: [
            {
                id: '1',
                img: 'https://img.freepik.com/free-photo/gorgeous-white-girl-with-long-wavy-hair-chilling-autumn-day-outdoor-portrait-interested-ginger-female-model-with-cup-coffee_197531-11735.jpg?w=996&t=st=1686033947~exp=1686034547~hmac=2c952ac53243b633fbb02523bff6333f720fec1dc20fce597666298e737c3d76',
            },
            {
                id: '2',
                img: 'https://img.freepik.com/free-photo/gorgeous-white-girl-with-long-wavy-hair-chilling-autumn-day-outdoor-portrait-interested-ginger-female-model-with-cup-coffee_197531-11735.jpg?w=996&t=st=1686033947~exp=1686034547~hmac=2c952ac53243b633fbb02523bff6333f720fec1dc20fce597666298e737c3d76',
            },
            {
                id: '3',
                img: 'https://img.freepik.com/free-photo/gorgeous-white-girl-with-long-wavy-hair-chilling-autumn-day-outdoor-portrait-interested-ginger-female-model-with-cup-coffee_197531-11735.jpg?w=996&t=st=1686033947~exp=1686034547~hmac=2c952ac53243b633fbb02523bff6333f720fec1dc20fce597666298e737c3d76',
            },
            {
                id: '4',
                img: 'https://img.freepik.com/free-photo/gorgeous-white-girl-with-long-wavy-hair-chilling-autumn-day-outdoor-portrait-interested-ginger-female-model-with-cup-coffee_197531-11735.jpg?w=996&t=st=1686033947~exp=1686034547~hmac=2c952ac53243b633fbb02523bff6333f720fec1dc20fce597666298e737c3d76',
            },
            {
                id: '5',
                img: 'https://img.freepik.com/free-photo/gorgeous-white-girl-with-long-wavy-hair-chilling-autumn-day-outdoor-portrait-interested-ginger-female-model-with-cup-coffee_197531-11735.jpg?w=996&t=st=1686033947~exp=1686034547~hmac=2c952ac53243b633fbb02523bff6333f720fec1dc20fce597666298e737c3d76',
            },
        ],
        like: '12,325',
        comment: '15,545',
    },
    {
        id: '3',
        logo: 'https://img.freepik.com/free-photo/shot-cute-baby-girl-looking-camera_329181-19580.jpg?w=996&t=st=1686033567~exp=1686034167~hmac=2862e3d5bd36c2da56d434c401b7fd95067840989ed567a30e147c6a2832690e',
        A_Name: 'Ashis kumar Nanak',
        deg: 'Digital Thinker',
        img: 'https://img.freepik.com/free-photo/toddler-girl-sitting-grass-park_1303-10853.jpg?w=996&t=st=1686034109~exp=1686034709~hmac=096342425d9af92a0eb19c627b8a6fc48b81e57e4a9baff3696323d11f4233d4',

        PIC: [
            {
                id: '1',
                img: 'https://img.freepik.com/free-photo/toddler-girl-sitting-grass-park_1303-10853.jpg?w=996&t=st=1686034109~exp=1686034709~hmac=096342425d9af92a0eb19c627b8a6fc48b81e57e4a9baff3696323d11f4233d4',
            },
            {
                id: '2',
                img: 'https://img.freepik.com/free-photo/toddler-girl-sitting-grass-park_1303-10853.jpg?w=996&t=st=1686034109~exp=1686034709~hmac=096342425d9af92a0eb19c627b8a6fc48b81e57e4a9baff3696323d11f4233d4',
            },
            {
                id: '3',
                img: 'https://img.freepik.com/free-photo/toddler-girl-sitting-grass-park_1303-10853.jpg?w=996&t=st=1686034109~exp=1686034709~hmac=096342425d9af92a0eb19c627b8a6fc48b81e57e4a9baff3696323d11f4233d4',
            },
            {
                id: '4',
                img: 'https://img.freepik.com/free-photo/toddler-girl-sitting-grass-park_1303-10853.jpg?w=996&t=st=1686034109~exp=1686034709~hmac=096342425d9af92a0eb19c627b8a6fc48b81e57e4a9baff3696323d11f4233d4',
            },
            {
                id: '5',
                img: 'https://img.freepik.com/free-photo/toddler-girl-sitting-grass-park_1303-10853.jpg?w=996&t=st=1686034109~exp=1686034709~hmac=096342425d9af92a0eb19c627b8a6fc48b81e57e4a9baff3696323d11f4233d4',
            },
        ],
        like: '55,325',
        comment: '24,545',
    },
    {
        id: '4',
        logo: 'https://img.freepik.com/free-photo/girl-with-cat_1157-7215.jpg?w=996&t=st=1686033627~exp=1686034227~hmac=df5598afa818d5fe5bc2f6746b8f744280f271fbfba842ca3c18cb21b103972d',
        A_Name: 'Kp Lipsa',
        deg: 'Technician with Dietician',
        img: 'https://img.freepik.com/free-photo/brother-sister-playing-grass_23-2148597759.jpg?w=740&t=st=1686034147~exp=1686034747~hmac=bd9a8c07844ab22edc5aa39db20ab9680e9ddd071aec8e5ccb6571d1d36c1725',

        PIC: [
            {
                id: '1',
                img: 'https://img.freepik.com/free-photo/brother-sister-playing-grass_23-2148597759.jpg?w=740&t=st=1686034147~exp=1686034747~hmac=bd9a8c07844ab22edc5aa39db20ab9680e9ddd071aec8e5ccb6571d1d36c1725',
            },
            {
                id: '2',
                img: 'https://img.freepik.com/free-photo/brother-sister-playing-grass_23-2148597759.jpg?w=740&t=st=1686034147~exp=1686034747~hmac=bd9a8c07844ab22edc5aa39db20ab9680e9ddd071aec8e5ccb6571d1d36c1725',
            },
            {
                id: '3',
                img: 'https://img.freepik.com/free-photo/brother-sister-playing-grass_23-2148597759.jpg?w=740&t=st=1686034147~exp=1686034747~hmac=bd9a8c07844ab22edc5aa39db20ab9680e9ddd071aec8e5ccb6571d1d36c1725',
            },
            {
                id: '4',
                img: 'https://img.freepik.com/free-photo/brother-sister-playing-grass_23-2148597759.jpg?w=740&t=st=1686034147~exp=1686034747~hmac=bd9a8c07844ab22edc5aa39db20ab9680e9ddd071aec8e5ccb6571d1d36c1725',
            },
            {
                id: '5',
                img: 'https://img.freepik.com/free-photo/brother-sister-playing-grass_23-2148597759.jpg?w=740&t=st=1686034147~exp=1686034747~hmac=bd9a8c07844ab22edc5aa39db20ab9680e9ddd071aec8e5ccb6571d1d36c1725',
            },
        ],
        like: '10,325',
        comment: '14,545',
    },
    {
        id: '5',
        logo: 'https://img.freepik.com/free-photo/little-cute-girl-dress-with-angel-cruces-sits-large-round-scenery-spruce-branches_132075-10627.jpg?w=996&t=st=1686033784~exp=1686034384~hmac=739a7cc31815e4bee93dc30b1b6d314a60faa2d1dfbc238b84f8d7558031da7d',
        A_Name: 'Sandhya Rani Nayak',
        deg: 'House Wife',
        img: 'https://img.freepik.com/free-photo/smiling-couple-walking-beach-with-bouquet-roses-sunset_23-2147595922.jpg?w=996&t=st=1686034349~exp=1686034949~hmac=151641dd287fe1bfbba9462a2f884a91f60e90f337007b4881610f829cd081ba',

        PIC: [
            {
                id: '1',
                img: 'https://img.freepik.com/free-photo/smiling-couple-walking-beach-with-bouquet-roses-sunset_23-2147595922.jpg?w=996&t=st=1686034349~exp=1686034949~hmac=151641dd287fe1bfbba9462a2f884a91f60e90f337007b4881610f829cd081ba',
            },
            {
                id: '2',
                img: 'https://img.freepik.com/free-photo/smiling-couple-walking-beach-with-bouquet-roses-sunset_23-2147595922.jpg?w=996&t=st=1686034349~exp=1686034949~hmac=151641dd287fe1bfbba9462a2f884a91f60e90f337007b4881610f829cd081ba',
            },
            {
                id: '3',
                img: 'https://img.freepik.com/free-photo/smiling-couple-walking-beach-with-bouquet-roses-sunset_23-2147595922.jpg?w=996&t=st=1686034349~exp=1686034949~hmac=151641dd287fe1bfbba9462a2f884a91f60e90f337007b4881610f829cd081ba',
            },
            {
                id: '4',
                img: 'https://img.freepik.com/free-photo/smiling-couple-walking-beach-with-bouquet-roses-sunset_23-2147595922.jpg?w=996&t=st=1686034349~exp=1686034949~hmac=151641dd287fe1bfbba9462a2f884a91f60e90f337007b4881610f829cd081ba',
            },
            {
                id: '5',
                img: 'https://img.freepik.com/free-photo/smiling-couple-walking-beach-with-bouquet-roses-sunset_23-2147595922.jpg?w=996&t=st=1686034349~exp=1686034949~hmac=151641dd287fe1bfbba9462a2f884a91f60e90f337007b4881610f829cd081ba',
            },
        ],
        like: '45,325',
        comment: '12,545',
    }
]

const Home = () => {
    const { navigate } = useNavigation<PrivateNavigationProps>();
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
                            onPress={() => navigate('Story')}
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

            <FlatList
                data={Home_Data}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: '25%'
                }}
                renderItem={({ item }) => (
                    <Box>
                        <Row
                            justifyContent={'space-between'}
                            alignItems={'center'}
                            m={4}
                            pt={4}
                        // key={item?.id}
                        >
                            <HStack
                            >
                                <Avatar
                                    source={{
                                        uri: item?.logo
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
                                        {item?.A_Name}
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
                                borderColor={'gray.500'}
                                px={1}
                                // py={1}
                                borderRadius={'full'}
                            >
                                <AntDesign name='ellipsis1' size={23} color={'gray'} />
                            </Pressable>
                        </Row>
                        {/* <FlatList
                            data={Home_Data}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => ( */}
                        <Box
                            m={4}
                        >
                            <Image
                                source={{
                                    uri:
                                        item?.img
                                }}
                                alt=""
                                borderRadius={'30'}
                                width={Dimensions.get('window').width / 1.1}
                                mt={-4}
                                height={Dimensions.get('window').height / 2.5}
                            // resizeMode='contain'
                            />
                        </Box>
                        {/* //     )}
                        // /> */}
                        <HStack
                            justifyContent={'space-between'}
                            mx={6}
                            alignItems={'center'}
                        >
                            <Row
                                alignItems={'center'}
                            >
                                <Row
                                    alignItems={'center'}
                                    mr={3}
                                >
                                    <Ionicons name='heart' size={30} color={'red'} />
                                    <Text
                                        fontSize={'sm'}
                                        color={'#000'}
                                        fontFamily={FONTS[600].normal}
                                        px={3}
                                    >
                                        {item?.like}
                                    </Text>
                                </Row>
                                <Row
                                    alignItems={'center'}
                                    mx={4}
                                >
                                    <Pressable
                                        onPress={() => navigate('Comments')}
                                    >
                                        <AntDesign name='message1' size={23} color={'gray'} />
                                    </Pressable>
                                    <Text
                                        fontSize={'sm'}
                                        color={'#000'}
                                        fontFamily={FONTS[600].normal}
                                        px={3}
                                    >

                                        {item?.comment}
                                    </Text>
                                </Row>
                                <Feather name='send' size={23} color={'gray'} />
                            </Row>
                            <Octicons name='bookmark' size={23} color={'gray'}
                                style={{
                                    marginRight: 10
                                }}
                            />
                        </HStack>
                    </Box>
                )}
            />
        </Box>
    )
}

export default Home

const styles = StyleSheet.create({})