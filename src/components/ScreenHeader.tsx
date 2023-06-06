import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { HStack, Pressable, Row, Text } from 'native-base';
import { StyleSheet } from 'react-native'
import { PublicNavigationProps } from '../types/AllRoutes';
import { COLORS, FONTS } from '../styles';
import Feather from 'react-native-vector-icons/Feather';

const ScreenHeader = ({ title, isShare }: any) => {
    const { goBack } = useNavigation<PublicNavigationProps>();
    return (
        <Row
            justifyContent={'space-between'}
            alignItems={'center'}
            mt={5}
            mr={5}
        >
            <HStack
                alignItems={'center'}

            >
                <Pressable
                    onPress={goBack}
                    mx={4}
                >
                    <AntDesign name='arrowleft' size={25} color={COLORS.PRIMARY} />
                </Pressable>
                <Text
                    fontSize={18}
                    fontFamily={FONTS[700].normal}
                    bold
                >
                    {title}
                </Text>
            </HStack>
            {
                isShare &&
                <Feather name='send' size={23} color={'gray'} />
            }
        </Row>
    )
}

export default ScreenHeader

const styles = StyleSheet.create({})