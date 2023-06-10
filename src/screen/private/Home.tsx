import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import Feather from 'react-native-vector-icons/Feather'
import React, { useState } from 'react'
import {
    useDisclose,
    ScrollView,
    Pressable,
    StatusBar,
    FlatList,
    Divider,
    Avatar,
    HStack,
    Image,
    Input,
    Text,
    Icon,
    Row,
    Box,
} from 'native-base'
import { PrivateNavigationProps } from '../../types/AllRoutes'
import ActionSheet from '../../components/Actionsheet'
import { COLORS, FONTS } from '../../styles'
import Header from '../../components/Header'



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
        img: 'https://img.freepik.com/free-photo/man-holds-tender-beautiful-woman-standing-with-her-green-field-with-red-poppies_8353-7578.jpg?w=360&t=st=1686422317~exp=1686422917~hmac=e0bf2f32f4771512981d14ebc3052d945ddd28977790fe87dd2fbecd72440ab5',

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
    },
    {
        id: '6',
        logo: 'https://img.freepik.com/free-photo/man-holds-tender-beautiful-woman-standing-with-her-green-field-with-red-poppies_8353-7578.jpg?w=360&t=st=1686422317~exp=1686422917~hmac=e0bf2f32f4771512981d14ebc3052d945ddd28977790fe87dd2fbecd72440ab5',
        A_Name: 'Sandhya Rani Nayak',
        deg: 'House Wife',
        img: 'https://img.freepik.com/premium-photo/portrait-girl-with-red-cherry_144520-471.jpg?w=996',

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
    },
    {
        id: '7',
        logo: 'https://img.freepik.com/free-photo/brother-with-sister-play-vineyard_627829-5652.jpg?w=996&t=st=1686422485~exp=1686423085~hmac=1d4c2302f03ac8c6e84ae66bc5806bfd506095baf9904b252b18c7a0023eaeb7',
        A_Name: 'Sandhya Rani Nayak',
        deg: 'House Wife',
        img: 'https://img.freepik.com/free-photo/portrait-young-cool-boy-sitting-lawn-park-embracing-girl-while-making-selfie-cute-couple-taking-photos-cellphone-frontal-camera_574295-166.jpg?w=996&t=st=1686422503~exp=1686423103~hmac=fd23025a429942c41b1af5dc2839dbe2f212af0ed0d21209ca9079a4e98bbc46',

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
    },
    {
        id: '8',
        logo: 'https://img.freepik.com/free-photo/brunette-woman-hugging-her-best-friend_23-2148650436.jpg?w=740&t=st=1686422533~exp=1686423133~hmac=526f2a57e7058115a21cb5155380dcec0851802eb2df5b6714398765432d6830',
        A_Name: 'Sandhya Rani Nayak',
        deg: 'House Wife',
        img: 'https://img.freepik.com/free-photo/young-couple-love-outdoor_158595-108.jpg?w=740&t=st=1686422552~exp=1686423152~hmac=feb44214df849e793ac0263f0d84731ad060c27521829594ae461b0efb7ee37d',

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
    },
    {
        id: '9',
        logo: 'https://img.freepik.com/premium-photo/couple-toasting-wine-glasses-restaurant_109710-1464.jpg?w=996',
        A_Name: 'Sandhya Rani Nayak',
        deg: 'House Wife',
        img: 'https://img.freepik.com/free-photo/young-woman-park-with-her-white-dog_1303-11499.jpg?w=996&t=st=1686422611~exp=1686423211~hmac=c4758208cf6aede0ebc8edfd8ae954a95acfe329d9565d2b8a9a4d4b4855a313',

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
    },
    {
        id: '10',
        logo: 'https://img.freepik.com/free-photo/young-woman-park-with-her-white-dog_1303-11499.jpg?w=996&t=st=1686422611~exp=1686423211~hmac=c4758208cf6aede0ebc8edfd8ae954a95acfe329d9565d2b8a9a4d4b4855a313',
        A_Name: 'Sandhya Rani Nayak',
        deg: 'House Wife',
        img: 'https://img.freepik.com/free-photo/beautiful-couple-summer-forest-with-dogs_1157-22785.jpg?w=996&t=st=1686422642~exp=1686423242~hmac=8233fc0e0d14aea994a1ea127ab30a9be8ef16cdb9ca1b919de038adb3506d1a',

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
                img: 'https://img.freepik.com/free-photo/freezing-wedding-couple-is-warming-up-together-winter-mountains-front-frozen-lake_8353-11090.jpg?w=996&t=st=1686422794~exp=1686423394~hmac=8b396a48bad332231c5b36d244739d931446ce6db34e5b996f6805e2e5cdd475'
            },
        ],
        like: '45,325',
        comment: '12,545',
    },
    {
        id: '11',
        logo: 'https://img.freepik.com/free-photo/two-little-girls-table-looking-camera-closeup_1153-9743.jpg?w=996&t=st=1686422739~exp=1686423339~hmac=948f1d7c92fd25f5b259944ae7769392c2875355a3a3657b9bb39e8f10b3ac98',
        A_Name: 'Sandhya Rani Nayak',
        deg: 'House Wife',
        img: 'https://img.freepik.com/free-photo/freezing-wedding-couple-is-warming-up-together-winter-mountains-front-frozen-lake_8353-11090.jpg?w=996&t=st=1686422794~exp=1686423394~hmac=8b396a48bad332231c5b36d244739d931446ce6db34e5b996f6805e2e5cdd475',

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

const data1 = [
    {
        id: '1',
        name: 'Ashis ku. Nayak',
        deg: 'Pricnipal',
        img: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=826&t=st=1685899203~exp=1685899803~hmac=500c1778b3615b8af19a33fc9152e9b17f33796969b788baa68db7c1056f0388',
        status: 'Sent',
    },
    {
        id: '2',
        name: 'Biswopaban Nayak',
        deg: 'Software Engineer',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
        status: 'Sent',
    },
    {
        id: '3',
        name: 'K P Lipsa ',
        deg: 'Lab Technician',
        img: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=826&t=st=1685899203~exp=1685899803~hmac=500c1778b3615b8af19a33fc9152e9b17f33796969b788baa68db7c1056f0388',
        status: 'Sent',
    },
    {
        id: '4',
        name: 'Ritesh Ku Sahoo',
        deg: 'Pricnipal',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
        status: 'Send',
    },
    {
        id: '5',
        name: 'Rajesh ku. Nayak',
        deg: 'Pricnipal',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
        status: 'Sent',
    },
    {
        id: '6',
        name: 'Dinesh ku. Nayak',
        deg: 'Pricnipal',
        img: 'https://img.freepik.com/free-photo/young-adult-woman-with-beautiful-face-isolated-white-skin-care-concept_186202-8664.jpg?w=740&t=st=1685898670~exp=1685899270~hmac=d9f2f2361fb0788907793dbbf538d6db40cea7ec736aa04cb81bbd1b8c9ab0c1',
        status: 'Sent',
    },
    {
        id: '7',
        name: 'Mahesh ku. Nayak',
        deg: 'Pricnipal',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
        status: 'Send',
    },
    {
        id: '8',
        name: 'Munesh ku. Nayak',
        deg: 'Pricnipal',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
        status: 'Send',
    },
    {
        id: '9',
        name: 'Sukesh ku. Nayak',
        deg: 'Pricnipal',
        img: 'https://img.freepik.com/free-photo/young-adult-woman-with-beautiful-face-isolated-white-skin-care-concept_186202-8664.jpg?w=740&t=st=1685898670~exp=1685899270~hmac=d9f2f2361fb0788907793dbbf538d6db40cea7ec736aa04cb81bbd1b8c9ab0c1',
        status: 'Sent',
    },
    {
        id: '10',
        name: 'Biswajit ku. Nayak',
        deg: 'Pricnipal',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
        status: 'Send',
    },
    {
        id: '11',
        name: 'Biswopaban Nayak',
        deg: 'Pricnipal',
        img: 'https://img.freepik.com/free-photo/young-adult-woman-with-beautiful-face-isolated-white-skin-care-concept_186202-8664.jpg?w=740&t=st=1685898670~exp=1685899270~hmac=d9f2f2361fb0788907793dbbf538d6db40cea7ec736aa04cb81bbd1b8c9ab0c1',
        status: 'Sent',
    },
    {
        id: '12',
        name: 'Manas ku. Nayak',
        deg: 'Pricnipal',
        img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
        status: 'Send',
    },

]
const Sheet = [
    {
        id: '1',
        title: 'Add to Favorites',
        icon: <Ionicons name='md-heart-outline' size={23} color={'gray'} />,
    },
    {
        id: '2',
        title: 'Hide',
        icon: <Feather name='eye-off' size={23} color={'gray'} />,
    },
    {
        id: '3',
        title: 'UnFollow',
        icon: <AntDesign name='user' size={23} color={'gray'} />,
        // onPress: () => setIsShare(true)
    },

]
const ShareSheet = [
    {
        id: '1',
        img: 'https://img.freepik.com/free-psd/glowing-whatsapp-logo-realistic-3d-circle_125540-2095.jpg?w=900&t=st=1686141667~exp=1686142267~hmac=02d4a1c9205ec3bf060b036b1e570d4776dbb5f23e68c4f83416fd55679ad633',
        title: 'WhatsApp',
    },
    {
        id: '2',
        img: 'https://img.freepik.com/free-psd/3d-square-with-facebook-logo_125540-1565.jpg?w=900&t=st=1686141536~exp=1686142136~hmac=af6651eb38e2fc5af3384715017a2f1cbf60feaa0a5adfd504852f626238838c',
        title: 'FaceBook',
    },
    {
        id: '3',
        img: 'https://img.freepik.com/free-vector/instagram-vector-social-media-icon-7-june-2021-bangkok-thailand_53876-136728.jpg?w=740&t=st=1686138158~exp=1686138758~hmac=5224fc467d9709f241b481a6ca866296ec6b01d77602a0f691ee8e5f711771fd',
        title: 'Instagram',
    },
    {
        id: '4',
        img: 'https://img.freepik.com/free-psd/glowing-twitter-logo-realistic-3d-circle_125540-2093.jpg?w=900&t=st=1686141428~exp=1686142028~hmac=415f9d083bedf7594fe1f1818a87620669dccb944374315c0f255fe4f4d6badf',
        title: 'Twitter',
    },
    {
        id: '5',
        img: 'https://img.freepik.com/premium-vector/linkedin-icon_488108-5.jpg?w=740',
        title: 'Linkedin',
    },
    {
        id: '6',
        img: 'https://img.freepik.com/free-psd/realistic-shiny-3d-round-button-with-telegram-icon_125540-2951.jpg?w=900&t=st=1686141566~exp=1686142166~hmac=2d17cb6613697748313176bcdbf2a024e32e2db1dd7f4c32d1c9e36d373d44e2',
        title: 'Telegram',
    },
]




const Home = () => {
    const { navigate } = useNavigation<PrivateNavigationProps>();
    const [isShare, setIsShare] = useState(false);
    const [isSharing, setIsSharing] = useState(false);
    const [show, setShow] = useState(false);
    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();


    const data = [
        {
            id: '1.0',
            name: 'You',
            img: 'https://img.freepik.com/premium-photo/cute-pretty-baby-boy-hair-costume-lies-tummy_88135-7054.jpg?w=996',
            onPress: () => setIsShare(true),
        },
        {
            id: '1',
            name: 'Ashis',
            img: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=826&t=st=1685899203~exp=1685899803~hmac=500c1778b3615b8af19a33fc9152e9b17f33796969b788baa68db7c1056f0388',
            onPress: () => navigate('Story'),
        },
        {
            id: '2',
            name: 'Biswo',
            img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
            onPress: () => navigate('Story'),
        },
        {
            id: '3',
            name: 'Lipsa ',
            img: 'https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=826&t=st=1685899203~exp=1685899803~hmac=500c1778b3615b8af19a33fc9152e9b17f33796969b788baa68db7c1056f0388',
            onPress: () => navigate('Story'),
        },
        {
            id: '4',
            name: 'Ritesh',
            img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
            onPress: () => navigate('Story'),
        },
        {
            id: '5',
            name: 'Rajesh',
            img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
            onPress: () => navigate('Story'),
        },
        {
            id: '6',
            name: 'Dinesh',
            img: 'https://img.freepik.com/free-photo/young-adult-woman-with-beautiful-face-isolated-white-skin-care-concept_186202-8664.jpg?w=740&t=st=1685898670~exp=1685899270~hmac=d9f2f2361fb0788907793dbbf538d6db40cea7ec736aa04cb81bbd1b8c9ab0c1',
            onPress: () => navigate('Story'),
        },
        {
            id: '7',
            name: 'Mahesh',
            img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
            onPress: () => navigate('Story'),
        },
        {
            id: '8',
            name: 'Munesh',
            img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
            onPress: () => navigate('Story')
        },
        {
            id: '9',
            name: 'Sukesh',
            img: 'https://img.freepik.com/free-photo/young-adult-woman-with-beautiful-face-isolated-white-skin-care-concept_186202-8664.jpg?w=740&t=st=1685898670~exp=1685899270~hmac=d9f2f2361fb0788907793dbbf538d6db40cea7ec736aa04cb81bbd1b8c9ab0c1',
            onPress: () => navigate('Story'),
        },
        {
            id: '10',
            name: 'Biswajit',
            img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
            onPress: () => navigate('Story'),
        },
        {
            id: '11',
            name: 'Biswo',
            img: 'https://img.freepik.com/free-photo/young-adult-woman-with-beautiful-face-isolated-white-skin-care-concept_186202-8664.jpg?w=740&t=st=1685898670~exp=1685899270~hmac=d9f2f2361fb0788907793dbbf538d6db40cea7ec736aa04cb81bbd1b8c9ab0c1',
            onPress: () => navigate('Story'),
        },
        {
            id: '12',
            name: 'Manas',
            img: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3',
            onPress: () => navigate('Story'),
        },

    ]




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
                            onPress={item?.onPress}
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
                                    <Pressable
                                        // onPress={() => setIsShare(true)}
                                        position={'absolute'} bottom={0} right={'2%'}>
                                        <Box
                                            bgColor={COLORS.PRIMARY}
                                            borderRadius={'4'}
                                            width={'5'}
                                            height={'5'}
                                            alignItems={'center'}
                                            justifyContent={'center'}>
                                            <Ionicons name="add" size={18} color={'#ffff'} />
                                        </Box>
                                    </Pressable>
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
                                onPress={onOpen}
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
                                    <TouchableOpacity
                                        onPress={() => {
                                            setShow(!show);
                                        }}>
                                        <Ionicons
                                            name={show ? 'heart' : 'heart-outline'}
                                            size={30}
                                            color={'red'}
                                        />
                                    </TouchableOpacity>

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
                                <TouchableOpacity
                                    onPress={() => setIsSharing(true)}
                                >
                                    <Feather name='send' size={23} color={'gray'} />
                                </TouchableOpacity>
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

            <ActionSheet isOpen={isShare} onClose={() => {
                setIsShare(false)
            }} >
                <Row
                    alignItems={'center'}
                >
                    <Avatar
                        source={{
                            uri: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3'
                        }}
                        size="16"
                        shadow={2}
                    />
                    <Input
                        placeholder="Write a message"
                        width="70%"
                        shadow={1}
                        focusOutlineColor={COLORS.PRIMARY}
                        borderRadius="12"
                        borderColor={'transparent'}
                        backgroundColor={'#fafafa'}
                        py="2"
                        px="1"
                        fontSize="14"
                        mx={4}
                    />
                </Row>
                <Divider my="2" _light={{
                    bg: "muted.800"
                }} _dark={{
                    bg: "muted.50"
                }}
                    bgColor={'gray.300'}
                />
                <Box
                    mx={'4'}
                    mr={'8'}
                    my={2}
                    p={2}
                >
                    <Input
                        placeholder="Search"
                        width="100%"
                        focusOutlineColor={COLORS.PRIMARY}
                        borderRadius="12"
                        backgroundColor={'#fafafa'}
                        py="2"
                        px="1"
                        mb={'5'}
                        fontSize="14"
                        InputLeftElement={
                            <Icon
                                m="2"
                                ml="3"
                                size="6"
                                color="gray.400"
                                as={<MaterialIcons name="search" />}
                            />
                        }
                    />
                </Box>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <Row
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        m={3}
                    >
                        <HStack
                            width={'80%'}
                        >
                            <Avatar
                                source={{
                                    uri: 'https://img.freepik.com/free-photo/portrait-young-thinking-woman-with-some-problem-isolated_186202-7004.jpg?w=740&t=st=1685899523~exp=1685900123~hmac=6142d5bf8ef9ed5b8cd8891167122e508eb61c61a6e8c93be9ee51027d04e4c3'
                                }}
                                size="12"
                            />
                            <Box
                                mx={5}
                                mt={1}
                            >
                                <Text
                                    fontSize={'sm'}
                                    mt={2}
                                    color={'#000'}
                                    fontFamily={FONTS[600].normal}
                                >
                                    Add post to your story
                                </Text>

                            </Box>
                        </HStack>
                        <AntDesign name='right' size={20} color={COLORS.PRIMARY} />
                    </Row>
                    <Row
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        m={3}
                    >
                        <HStack
                            width={'80%'}
                        >
                            <Box
                                bgColor={COLORS.PRIMARY}
                                borderRadius={'full'}
                                p={4}
                                alignItems={'center'}
                            >
                                <MaterialIcons name='groups' size={22} color={'#fff'} />
                            </Box>
                            <Box
                                mx={5}
                                mt={1}
                            >
                                <Text
                                    fontSize={'sm'}
                                    mt={2}
                                    color={'#000'}
                                    fontFamily={FONTS[600].normal}
                                >
                                    Create group
                                </Text>

                            </Box>
                        </HStack>
                        <AntDesign name='right' size={20} color={COLORS.PRIMARY} />
                    </Row>

                    {
                        data1?.map(item => (
                            <Row
                                justifyContent={'space-between'}
                                alignItems={'center'}
                                m={3}
                                key={item?.id}
                            >
                                <HStack
                                    width={'80%'}
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
                                {
                                    item?.status === 'Send' ?
                                        <Pressable
                                            mr={1}
                                            borderWidth={1.5}
                                            borderColor={COLORS.PRIMARY}
                                            px={4}
                                            bgColor={COLORS.PRIMARY}
                                            py={1}
                                            borderRadius={'full'}
                                        >
                                            <Text
                                                color={'#fff'}
                                                fontFamily={FONTS[600].normal}
                                                fontSize={'xs'}
                                            >
                                                {item?.status}
                                            </Text>
                                        </Pressable> : <Pressable
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
                                }
                            </Row>
                        ))
                    }
                </ScrollView>
            </ActionSheet>
            <ActionSheet isOpen={isOpen} onClose={onClose}  >
                <Row
                    justifyContent={'space-between'}
                >
                    <Pressable
                        width={'30%'}
                        onPress={onClose}
                    >
                        <Box
                            borderRadius={'full'}
                            bgColor={'rose.400'}
                            // p={3}
                            w={16}
                            h={16}
                            alignItems={'center'}
                            justifyContent={'center'}
                        >
                            <Ionicons name='ios-copy' size={23} color={'#fff'} />
                        </Box>
                        <Text
                            fontSize={'sm'}
                            fontFamily={FONTS[700].normal}
                            color={'gray.700'}
                            mx={2}
                            p={2}
                        >
                            Link
                        </Text>
                    </Pressable>
                    <Pressable
                        width={'30%'}
                        onPress={() => { setIsSharing(true), onClose() }}
                    >
                        <Box
                            bgColor={'rose.400'}
                            borderRadius={'full'}
                            // p={3}
                            w={16}
                            h={16}
                            alignItems={'center'}
                            justifyContent={'center'}
                        >
                            <Feather name='send' size={23} color={'#fff'} />
                        </Box>
                        <Text
                            fontSize={'sm'}
                            fontFamily={FONTS[700].normal}
                            color={'gray.700'}
                            mx={2}
                            p={2}
                        >
                            Share
                        </Text>
                    </Pressable>
                    <Pressable
                        width={'30%'}
                        onPress={onClose}
                    >
                        <Box
                            bgColor={'rose.400'}
                            borderRadius={'full'}
                            // p={3}
                            w={16}
                            h={16}
                            alignItems={'center'}
                            justifyContent={'center'}
                        >
                            <AntDesign name='exclamationcircle' size={23} color={'#ffff'} />
                        </Box>
                        <Text
                            fontSize={'sm'}
                            fontFamily={FONTS[700].normal}
                            color={'gray.700'}
                            mx={2}
                            p={2}
                        >
                            Report
                        </Text>
                    </Pressable>
                </Row>
                <Divider my="3" _light={{
                    bg: "muted.800"
                }} _dark={{
                    bg: "muted.50"
                }}
                    bgColor={'gray.400'}
                />

                {
                    Sheet.map(item => (
                        <Pressable onPress={() => {
                            // setSelectItem(item?.title)
                            onClose()
                        }} key={item.id}
                            alignSelf={'flex-start'}
                            ml={5}
                        >
                            <Row
                                alignItems={'center'}
                            >
                                {item?.icon}
                                <Pressable
                                // onPress={item?.onPress}

                                >
                                    <Text
                                        fontSize={'md'}
                                        fontFamily={FONTS[600].normal}
                                        color={'gray.700'}
                                        mx={4}
                                        p={2}
                                    >
                                        {item?.title}
                                    </Text>
                                </Pressable>
                            </Row>
                        </Pressable>
                    ))
                }
            </ActionSheet>
            <ActionSheet isOpen={isSharing} onClose={() => {
                setIsSharing(false)
            }} >
                <Pressable
                    flexDirection={'row'}
                    flexWrap={'wrap'}
                    width={'100%'}
                    onPress={() => setIsSharing(false)}
                >
                    {
                        ShareSheet?.map(item => (
                            <Row
                                alignItems={'center'}
                                bgColor={'rose.400'}
                                m={2}
                                p={4}
                                width={'45%'}
                                borderRadius={'15'}
                                key={item?.id}
                            >
                                <Image
                                    alt={item?.img}
                                    source={{ uri: item?.img }}
                                    w={16}
                                    h={16}
                                    borderRadius={'full'}
                                />
                                <Text
                                    fontSize={'sm'}
                                    color={'#fff'}
                                    fontFamily={FONTS[700].normal}
                                    px={3}
                                >
                                    {item?.title}
                                </Text>
                            </Row>

                        ))
                    }
                </Pressable>
            </ActionSheet>
        </Box>
    )
}

export default Home

const styles = StyleSheet.create({})