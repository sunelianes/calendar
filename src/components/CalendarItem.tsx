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
            <Text style={styles.header}>{formatHeader(start)}.</Text>
            <View style={styles.content}>
                <Text>{subjectCode} {eventType.toString()}</Text>
                <Text>
                    {formatTimeFromDate(start)} - {formatTimeFromDate(end)}
                </Text>
                <Text>{location}</Text>
            </View>
        </View>
    )
}

function formatTimeFromDate(time: Date): string {
    return addZeroBefore(time.getHours()) + ':' + addZeroBefore(time.getMinutes());
}

function addZeroBefore(num: number): string {
    return num < 10 ? '0' + num.toString() : num.toString();
}

function formatHeader(date: Date): string {
    return date.toDateString().slice(0, -5)
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f0f0f0',
        marginVertical: 10,
        marginHorizontal: 16,
        borderRadius: 20,
        overflow: 'hidden',  // Ensure the rounded corners are respected
    },
    header: {
        fontSize: 20,
        textAlign: "center",
        color: '#f8f8f8',
        backgroundColor: 'gray',
        padding: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    content: {
        padding: 10,
    },
});