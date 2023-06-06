import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import { Actionsheet } from 'native-base';

interface IActionSheet {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
const ActionSheet = ({ isOpen, onClose, children }: IActionSheet) => {
    return (
        <SafeAreaView>
            <Actionsheet isOpen={isOpen} onClose={onClose}>
                <Actionsheet.Content style={{ backgroundColor: '#fff' }}>

                    {children}

                </Actionsheet.Content>
            </Actionsheet>
        </SafeAreaView>
    );
};

export default ActionSheet;

const styles = StyleSheet.create({});
