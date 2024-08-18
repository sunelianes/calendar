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
        <>
            <SafeAreaView style={styles.topbar}>
                <StatusBar/>
            </SafeAreaView>
            <SafeAreaView style={styles.container}>
                <TopBar
                    title="App mf"
                    onSettingsPress={handleSettingsPress}
                    onPlusPress={handlePlusPress}
                />
                <FlatList style={{paddingTop: 20}}
                    data={DATA}
                    renderItem={({ item }) =>
                        <CalendarItem
                            subjectCode={item.subjectCode} start={item.start} end={item.end}
                            location={item.location} eventType={item.eventType}
                        />}
                    keyExtractor={(item, index) => index.toString()} // Assuming no unique id, using index as key
                />
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: '#e8e8e8',
    },
    title: {
        fontSize: 32,
    },
    topbar: {
        flex: 0,
        backgroundColor: '#cb4c4e',
    }
});

export default App;