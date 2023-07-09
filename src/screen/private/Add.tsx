import { Avatar, Box, FlatList, HStack, Pressable, Row, ScrollView, Text } from 'native-base'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../styles'

const Message = [
    {
        id: '1',
        img: 'https://media.istockphoto.com/id/923852236/photo/cute-little-baby-boy-relaxing-in-bed-after-bath-smiling-happily.jpg?s=612x612&w=0&k=20&c=v--Yhh1A4G12nW-Kud6JG16aGNAScVSdovPH8YxOczg=',
        time: '9 hrs ago',
        title: 'Lorem, ipsum dolor sit amet consectetur sll adipisicing elit. Rem, dolor.',
    },
    {
        id: '2',
        img: 'https://media.istockphoto.com/id/923852236/photo/cute-little-baby-boy-relaxing-in-bed-after-bath-smiling-happily.jpg?s=612x612&w=0&k=20&c=v--Yhh1A4G12nW-Kud6JG16aGNAScVSdovPH8YxOczg=',
        time: '9 hrs ago',
        title: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, dolor.',
    },
    {
        id: '3',
        img: 'https://media.istockphoto.com/id/923852236/photo/cute-little-baby-boy-relaxing-in-bed-after-bath-smiling-happily.jpg?s=612x612&w=0&k=20&c=v--Yhh1A4G12nW-Kud6JG16aGNAScVSdovPH8YxOczg=',
        time: '9 hrs ago',
        title: 'Lorem, ipsum dolor sit amet consectetur adipi sicing elit. Rem, dolor.',
    },
    {
        id: '4',
        img: 'https://media.istockphoto.com/id/923852236/photo/cute-little-baby-boy-relaxing-in-bed-after-bath-smiling-happily.jpg?s=612x612&w=0&k=20&c=v--Yhh1A4G12nW-Kud6JG16aGNAScVSdovPH8YxOczg=',
        time: '9 hrs ago',
        title: 'Lorem, ipsum dolor sit amet consectetur adipi sicing elit. Rem, dolor.',
    },
    {
        id: '5',
        img: 'https://media.istockphoto.com/id/923852236/photo/cute-little-baby-boy-relaxing-in-bed-after-bath-smiling-happily.jpg?s=612x612&w=0&k=20&c=v--Yhh1A4G12nW-Kud6JG16aGNAScVSdovPH8YxOczg=',
        time: '9 hrs ago',
        title: 'Lorem, ipsum dolor sit amet consectetur adipi sicing elit. Rem, dolor.',
    },
    {
        id: '6',
        img: 'https://media.istockphoto.com/id/923852236/photo/cute-little-baby-boy-relaxing-in-bed-after-bath-smiling-happily.jpg?s=612x612&w=0&k=20&c=v--Yhh1A4G12nW-Kud6JG16aGNAScVSdovPH8YxOczg=',
        time: '9 hrs ago',
        title: 'Lorem, ipsum dolor sit amet consectetur adipi sicing elit. Rem, dolor.',
    },
    {
        id: '7',
        img: 'https://media.istockphoto.com/id/923852236/photo/cute-little-baby-boy-relaxing-in-bed-after-bath-smiling-happily.jpg?s=612x612&w=0&k=20&c=v--Yhh1A4G12nW-Kud6JG16aGNAScVSdovPH8YxOczg=',
        time: '9 hrs ago',
        title: 'Lorem, ipsum dolor sit amet consectetur adipi sicing elit. Rem, dolor.',
    },
    {
        id: '8',
        img: 'https://media.istockphoto.com/id/923852236/photo/cute-little-baby-boy-relaxing-in-bed-after-bath-smiling-happily.jpg?s=612x612&w=0&k=20&c=v--Yhh1A4G12nW-Kud6JG16aGNAScVSdovPH8YxOczg=',
        time: '9 hrs ago',
        title: 'Lorem, ipsum dolor sit amet consectetur adipi sicing elit. Rem, dolor.',
    },
]
const Add = () => {
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [tab, setTab] = useState('')
    const handleSelectItem = (itemId: string) => {
        if (selectedItems.includes(itemId)) {
            setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== itemId));
        } else {
            setSelectedItems([...selectedItems, itemId]);
        }
    };

    return (
        <Box safeArea bgColor={'#fff'} flex={1} >
            <Box
                p={4}
            >
                <AntDesign name='arrowleft' size={25} color={'#000'} />
            </Box>
            <Row
                alignItems={'center'}
            >
                <Box
                    left={0}
                    w={20}
                    h={24}
                    borderTopRightRadius={'100'}
                    bgColor={COLORS.PRIMARY}
                >
                </Box>
                <Box
                    position={'absolute'}
                    bgColor={'#fff'}
                    width={'100%'}
                    shadow={5}
                    borderBottomWidth={1}
                    borderBottomLeftRadius={'90'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    py={3}
                    borderColor={'gray.200'}
                >
                    <Text
                        fontSize={'2xl'}
                        bold
                        color={'#000'}
                        textAlign={'center'}
                        py={5}
                    >
                        Notifications
                    </Text>
                </Box>
            </Row>
            <FlatList
                data={Message}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: '20%'
                }}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => handleSelectItem(item?.id)}
                        flex={1}
                        bgColor={!selectedItems.includes(item?.id) ? COLORS.PRIMARY : COLORS.SECONDARY
                        }
                    >
                        <Pressable
                            bgColor={selectedItems.includes(item?.id) ? COLORS.PRIMARY : COLORS.SECONDARY
                            }
                            onPress={() => handleSelectItem(item?.id)}

                        >
                            <HStack
                                borderBottomLeftRadius={'90'}
                                p={4}
                                borderColor={selectedItems.includes(item?.id) ? 'gray.300' : 'gray'}
                                bgColor={selectedItems.includes(item?.id) ? COLORS.SECONDARY : COLORS.PRIMARY}
                            >
                                <Avatar source={{ uri: item?.img }}
                                    size={'md'}
                                />
                                <Box
                                    px={4}
                                >
                                    <Text
                                        color={selectedItems.includes(item?.id) ? '#000' : '#fff'}
                                        bold
                                        textAlign={'left'}
                                        mr={5}
                                        fontSize={'md'}
                                    >
                                        {item?.title}
                                    </Text>
                                    <Text
                                        mt={'4'}
                                        fontSize={'sm'}
                                        color={selectedItems.includes(item?.id) ? 'muted.400' : 'gray.200'}
                                        bold
                                    >
                                        9 hrs ago
                                    </Text>
                                </Box>
                            </HStack>
                        </Pressable>
                    </Pressable>
                )
                }
            />
        </Box >
    )
}

export default Add

const styles = StyleSheet.create({})