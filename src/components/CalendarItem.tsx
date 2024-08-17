import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {CalenderEvent} from "../utils/CalenderEvent";

type CalendarItemProps = {
    subjectCode: string,
    start: Date,
    end: Date,
    location: string,
    eventType: CalenderEvent,
}

export const CalendarItem: React.FC<CalendarItemProps> = (props: CalendarItemProps) => {
    const { subjectCode, start, end, location, eventType } = props
    return (
        <View style={styles.item}>
            <Text style={styles.header}>{start.toDateString()}.</Text>
            <Text>{subjectCode} {eventType.toString()}</Text>
            <Text>
                {start.getHours() < 10 ? 0 : ''}{start.getHours()}:{start.getMinutes() < 10 ? 0 : ''}{start.getMinutes()}
                -
                {end.getHours() < 10 ? 0 : ''}{start.getHours()}:{end.getMinutes() < 10 ? 0 : ''}{end.getMinutes()}
            </Text>
            <Text>{location}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 20,
    },
    header: {
        fontSize: 20,
        alignSelf: "center",
        width: "100%",
    }
})