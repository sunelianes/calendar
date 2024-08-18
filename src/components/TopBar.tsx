import {Text, StyleSheet, TouchableOpacity, View} from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';

type TopBarProps = {
    title: string,
    onSettingsPress: () => void,
    onPlusPress: () => void,
}

const TopBar: React.FC<TopBarProps> = ({ title, onSettingsPress, onPlusPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onSettingsPress} style={styles.button}>
                <Icon name="settings-outline" size={25} color="#f0f0f0" />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={onPlusPress} style={styles.button}>
                <Icon name="add-outline" size={25} color="#f0f0f0" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        height: 60,
        backgroundColor: '#cb4c4e',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        width: '100%',
    },
    button: {
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#f0f0f0',
    },
});

export default TopBar;