import { StyleSheet } from 'react-native'
import { Box, HStack, Icon, Input, Pressable, ScrollView, StatusBar } from 'native-base'
import React, { useState } from 'react'
import { COLORS } from '../../styles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import SearchAll from '../../components/SearchAll'
import Search5 from '../../components/Search5'
import Search2 from '../../components/Search2'
import Search3 from '../../components/Search3'
import Search4 from '../../components/Search4'

const SearchNext = () => {
    const [select, setSelect] = useState('1');
    return (
        <Box bgColor={'#fff'} flex={1} >
            <StatusBar backgroundColor={COLORS.PRIMARY} />
            <Box
                m={4}
                mt={6}
            >
                <Input
                    placeholder="Search Message "
                    width="100%"
                    focusOutlineColor={COLORS.PRIMARY}
                    borderRadius="12"
                    borderColor={'transparent'}
                    backgroundColor={'gray.100'}
                    shadow={1}
                    py="2"
                    px="1"
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
            <HStack
                m={4}
                justifyContent={'space-evenly'}
                alignItems={'center'}
                borderBottomWidth={.5}
                borderColor={'gray.400'}
            >
                <Pressable
                    borderBottomWidth={select === '1' ? 4 : 0}
                    borderBottomColor={COLORS.PRIMARY}
                    borderBottomRadius={5}
                    onPress={() => setSelect('1')}
                    pb={4}
                    top={1}
                    width={'20%'}
                    alignItems={'center'}
                >
                    <Ionicons name='ios-grid'
                        color={select === '1' ? COLORS.PRIMARY : 'gray'}
                        size={20} />
                </Pressable>
                <Pressable
                    borderBottomWidth={select === '2' ? 4 : 0}
                    borderBottomColor={COLORS.PRIMARY}
                    borderBottomRadius={5}
                    onPress={() => setSelect('2')}
                    pb={4}
                    top={1}
                    width={'20%'}
                    alignItems={'center'}
                >
                    <FontAwesome5 name='user-alt'
                        color={select === '2' ? COLORS.PRIMARY : 'gray'}
                        size={20} />
                </Pressable>
                <Pressable
                    borderBottomWidth={select === '3' ? 4 : 0}
                    borderBottomColor={COLORS.PRIMARY}
                    borderBottomRadius={5}
                    onPress={() => setSelect('3')}
                    pb={4}
                    top={1}
                    width={'20%'}
                    alignItems={'center'}
                >
                    <FontAwesome5 name='microphone'
                        color={select === '3' ? COLORS.PRIMARY : 'gray'}
                        size={20} />
                </Pressable>
                <Pressable
                    borderBottomWidth={select === '4' ? 4 : 0}
                    borderBottomColor={COLORS.PRIMARY}
                    borderBottomRadius={5}
                    onPress={() => setSelect('4')}
                    pb={4}
                    top={1}
                    width={'20%'}
                    alignItems={'center'}
                >
                    <FontAwesome5 name='hashtag'
                        color={select === '4' ? COLORS.PRIMARY : 'gray'}
                        size={20} />
                </Pressable>
                <Pressable
                    borderBottomWidth={select === '5' ? 4 : 0}
                    borderBottomColor={COLORS.PRIMARY}
                    borderBottomRadius={5}
                    onPress={() => setSelect('5')}
                    pb={4}
                    top={1}
                    // mr={-3}
                    width={'20%'}
                    alignItems={'center'}
                >
                    <Ionicons name='location'
                        color={select === '5' ? COLORS.PRIMARY : 'gray'}
                        size={20} />
                </Pressable>
            </HStack>
            <>
                {select === '1' && <SearchAll />}
                {select === '2' && <Search2 />}
                {select === '3' && <Search3 />}
                {select === '4' && <Search4 />}
                {select === '5' && <Search5 />}
            </>
        </Box>
    )
}

export default SearchNext

const styles = StyleSheet.create({})
