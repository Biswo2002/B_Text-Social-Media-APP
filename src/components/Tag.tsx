import { Dimensions, StyleSheet } from 'react-native'
import { Box, Image, Row } from 'native-base'
import React from 'react'

const data = [
    {
        id: '1',
        img: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1686414817~exp=1686415417~hmac=6275b127d5d0f778a1f443ec6b62191e318c5f679d497248c7c7382c9ce2d121',
    },
    {
        id: '2',
        img: 'https://img.freepik.com/free-photo/intensed-serious-unshaven-male-student-has-headache-because-long-work-busy-preparing-math-exam-makes-project-has-deadline-carries-papers-with-written-sums_273609-45095.jpg?w=996&t=st=1686414901~exp=1686415501~hmac=273aa317c8d1abb378f5ac3e8e4ae76d9c3555fa092d3581b125963fc20d18f9',
    },
    {
        id: '3',
        img: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=996&t=st=1686414817~exp=1686415417~hmac=6275b127d5d0f778a1f443ec6b62191e318c5f679d497248c7c7382c9ce2d121',
    },
    {
        id: '4',
        img: 'https://img.freepik.com/free-photo/close-up-brunette-woman-with-colorful-jersey_1140-286.jpg?t=st=1686378257~exp=1686378857~hmac=352e66f7478ea86c20e21b1a2a865af5fb5b94d983b8f0f7a9cd0a99b283995f',
    },
    {
        id: '5',
        img: 'https://img.freepik.com/premium-photo/little-girl-red-hat-holding-heart-generative-ai_791316-21213.jpg?w=360',
    },
    {
        id: '6',
        img: 'https://img.freepik.com/free-photo/portrait-beautiful-young-woman-with-hands-hip-front-colonnade_23-2148187353.jpg',
    },
    {
        id: '7',
        img: 'https://img.freepik.com/free-photo/young-woman-wearing-striped-shirt-eyeglasses_273609-13227.jpg?w=996&t=st=1686414879~exp=1686415479~hmac=da2b784f5940991c8e2c04b740a694b30a84eb04847ccd65155731ea45556821',
    },
    {
        id: '8',
        img: 'https://img.freepik.com/free-photo/portrait-attractive-caucasian-couple-red-smiling-camera-blurred-xmas-wreath-background_132075-6461.jpg?t=st=1686378257~exp=1686378857~hmac=109f689e6edd23ae4ceb74a06510739eaccfc77db63aa65aa12360ce0f719fc6',
    },
    {
        id: '9',
        img: 'https://img.freepik.com/free-photo/intensed-serious-unshaven-male-student-has-headache-because-long-work-busy-preparing-math-exam-makes-project-has-deadline-carries-papers-with-written-sums_273609-45095.jpg?w=996&t=st=1686414901~exp=1686415501~hmac=273aa317c8d1abb378f5ac3e8e4ae76d9c3555fa092d3581b125963fc20d18f9',
    },
    {
        id: '10',
        img: 'https://img.freepik.com/premium-vector/woman-flowers_1450-89.jpg?w=740',
    },
    {
        id: '11',
        img: 'https://img.freepik.com/free-photo/young-woman-wearing-striped-shirt-eyeglasses_273609-13227.jpg?w=996&t=st=1686414879~exp=1686415479~hmac=da2b784f5940991c8e2c04b740a694b30a84eb04847ccd65155731ea45556821',
    },
    {
        id: '12',
        img: 'https://img.freepik.com/free-photo/girl-red-dress-reaches-out-hand-with-cookie-her-father_8353-952.jpg?t=st=1686378257~exp=1686378857~hmac=058ac91e86482be01f3d71b51507b69071be3924a1bd433d4a67b283a55a6a19',
    },
    {
        id: '13',
        img: 'https://img.freepik.com/premium-vector/woman-flowers_1450-89.jpg?w=740',
    },
    {
        id: '14',
        img: 'https://img.freepik.com/free-photo/smiling-romantic-asian-girl-contemplating-nature-around_1262-19410.jpg?t=st=1686412483~exp=1686413083~hmac=35c8f367e05de1ca035785c9974da6454d20a09b192baeb613c4613d17fb445f',
    },
    {
        id: '15',
        img: 'https://img.freepik.com/premium-photo/little-girl-red-hat-holding-heart-generative-ai_791316-21213.jpg?w=360',
    },
    {
        id: '16',
        img: 'https://img.freepik.com/free-photo/smiling-romantic-asian-girl-contemplating-nature-around_1262-19410.jpg?t=st=1686412483~exp=1686413083~hmac=35c8f367e05de1ca035785c9974da6454d20a09b192baeb613c4613d17fb445f',
    },
    {
        id: '17',
        img: 'https://img.freepik.com/premium-vector/snowman_1450-97.jpg?w=740',
    },
    {
        id: '18',
        img: 'https://img.freepik.com/free-vector/cartoon-kids-playing-with-hand-puppets_52683-59656.jpg?w=996&t=st=1686415121~exp=1686415721~hmac=d03aa348e82ca1ff42cfc6fa77b862e5af7931ae0586dc7d84e2fa8aa2abf9f2',
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
        img: 'https://img.freepik.com/premium-vector/snowman_1450-97.jpg?w=740',
    },
    {
        id: '24',
        img: 'https://img.freepik.com/free-photo/pretty-girl-with-long-dark-hair-laughing-winter-outdoor-shot-romantic-caucasian-woman-chilling-cold-day_197531-14102.jpg?t=st=1686412661~exp=1686413261~hmac=c93bac34c5f40a483af2ac902ee7e1ccd2e99e481530aa27eeb67f4b30be6608',
    },
]

const Tag = () => {
    return (
        <Box bgColor={'#fff'} flex={1} >
            <Row
                flexWrap={'wrap'}
                m={3}
            >
                {
                    data?.map(item => (
                        <Image
                            key={item?.id}
                            alt={item?.img}
                            m={1}
                            source={{ uri: item?.img }}
                            width={Dimensions.get('window').width / 3.4}
                            height={Dimensions.get('window').height / 6}
                            // resizeMode='contain'
                            borderRadius={'10'}
                        />
                    ))
                }
            </Row>
        </Box>
    )
}

export default Tag

const styles = StyleSheet.create({})