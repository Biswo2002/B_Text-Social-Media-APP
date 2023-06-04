import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Button, Heading, HStack, Icon, Input, VStack } from 'native-base';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { COUNTRIES } from '../constants';
import { COLORS } from '../styles';
import { useNavigation } from '@react-navigation/native';
import { PublicNavigationProps } from '../types/AllRoutes';

type Props = {
  visible: boolean;
  onSelect: (country: any) => void;
  onClose: () => void;
  selectedCountry?: any;
};

export default ({ onClose, onSelect, visible }: Props) => {
  const [select, setSelect] = useState('')
  const [searchTxt, setSearchTxt] = useState('');
  const [searchRes, setSearchRes] = useState(() => COUNTRIES);
  const { navigate } = useNavigation<PublicNavigationProps>()
  useEffect(() => {
    if (searchTxt) {
      const resArr = COUNTRIES?.filter(item =>
        item?.name?.toLowerCase().includes(searchTxt.toLowerCase()),
      );
      setSearchRes(resArr);
    } else {
      setSearchRes(COUNTRIES);
    }
  }, [searchTxt]);
  return (
    <>
      <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={() => onClose()}>
        <TouchableWithoutFeedback onPress={() => onClose()}>
          <SafeAreaView style={styles.container}>
            <VStack w="100%" space={5} alignSelf="center">
              <HStack mt={2} space={8}>
                <Pressable onPress={() => onClose()}>
                  <MaterialIcons name="arrow-back" size={25} color="#000" />
                </Pressable>
                <Heading alignSelf={'center'} fontSize="lg">
                  Select Your Country
                </Heading>
              </HStack>

              <Input
                placeholder="Search by country name"
                width="100%"
                borderRadius="4"
                backgroundColor={'#fff'}
                py="3"
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
                value={searchTxt}
                onChangeText={setSearchTxt}
              />
            </VStack>

            <FlatList
              keyboardShouldPersistTaps="always"
              data={searchRes}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{
                    padding: 20,
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderWidth: select === (item?.name) ? 1.5 : .6,
                    borderColor: select === (item?.name) ? COLORS.PRIMARY : '#9ca3af',
                    marginVertical: 10,
                    borderRadius: 15,
                  }}
                  onPress={() => { setSelect(item?.name) }}>
                  {/* //onSelect(item), */}
                  <Image
                    source={{
                      uri: `https://flagcdn.com/w20/${item.code.toLowerCase()}.png`,
                    }}
                    style={styles.flag}
                  />
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      color: 'gray',
                    }}
                  >{item.name}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.code}
              showsVerticalScrollIndicator={false}
            />
          </SafeAreaView>
        </TouchableWithoutFeedback>

        <Button
          colorScheme={'rose'}
          borderRadius={'full'}
          m={4}
          p={3}
          onPress={() => navigate('SetProfile')}
          isDisabled={!select}
        >
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              color: '#fff',
            }}
          >
            Continue
          </Text>
        </Button>
      </Modal >
    </>
  );
};

const styles = StyleSheet.create({
  flag: {
    width: 30,
    height: 25,
    marginRight: 10,
    resizeMode: 'contain',
    borderRadius: 4,

  },
  flagWrapper: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: .6,
    borderColor: '#9ca3af',
    marginVertical: 10,
    borderRadius: 15,
  },
  container: {
    flex: 1,
    padding: 10,
  },
});
