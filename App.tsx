import React from 'react';
import {
    SafeAreaView,
    FlatList,
    StyleSheet,
    StatusBar,
} from 'react-native';
import {TestData} from "./src/utils/TestData";
import {CalendarItem} from "./src/components/CalendarItem";
import TopBar from "./src/components/TopBar";

const DATA = TestData

const App = () => {
    const handleSettingsPress = () => {
        console.log('Settings button pressed');
    };

    const handlePlusPress = () => {
        console.log('Plus button pressed');
    };
    return (
        <SafeAreaView style={styles.container}>
            <TopBar
                title="App mf"
                onSettingsPress={handleSettingsPress}
                onPlusPress={handlePlusPress}
            />
            <FlatList
                data={DATA}
                renderItem={({ item }) =>
                    <CalendarItem
                        subjectCode={item.subjectCode} start={item.start} end={item.end}
                        location={item.location} eventType={item.eventType}
                    />}
                keyExtractor={(item, index) => index.toString()} // Assuming no unique id, using index as key
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: '#f8f8f8',
    },
    title: {
        fontSize: 32,
    },
});

export default App;