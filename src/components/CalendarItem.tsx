import {Text, View} from "react-native";

type CalendarItemProps = {
    subjectCode: string,
    start: Date,
    end: Date,
    location: string,
    eventType: CalenderEvent,
}

export const CalendarItem = (props: CalendarItemProps) => {
    const { subjectCode, start, end, location, eventType } = props
    return (
        <View>
            <Text>{subjectCode}</Text>
            <Text>{eventType.toString()}</Text>
            <Text>{start.getTime()} - {end.getTime()}</Text>
            <Text>{location}</Text>
        </View>
    )
}