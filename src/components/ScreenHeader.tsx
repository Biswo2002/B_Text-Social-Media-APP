import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { HStack, Pressable, Text } from 'native-base';
import { StyleSheet } from 'react-native'
import { PublicNavigationProps } from '../types/AllRoutes';
import { COLORS, FONTS } from '../styles';

const ScreenHeader = ({ title }: any) => {
    const { goBack } = useNavigation<PublicNavigationProps>();
    return (
        <HStack
            alignItems={'center'}
            mt={5}
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
    )
}

export default ScreenHeader

const styles = StyleSheet.create({})