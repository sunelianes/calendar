
import {CalenderEvent} from "./CalenderEvent";



export const TestData = [
    {
         subjectCode: "INF102",
         start: new Date(2024, 7, 19, 12, 15),
         end: new Date(2024, 7, 19, 14, 0),
         location: "RFB",
         eventType: CalenderEvent.Lecture,
    },
    {
         subjectCode: "INF113",
         start: new Date(2024, 7, 19, 14, 15),
         end: new Date(2024, 7, 19, 16, 0),
         location: "Hoytek",
         eventType: CalenderEvent.Lecture,
    },
    {
         subjectCode: "INF122",
         start: new Date(2024, 7, 20, 8, 15),
         end: new Date(2024, 7, 20, 10, 0),
         location: "A66",
         eventType: CalenderEvent.Lecture,
    },
    {
         subjectCode: "INF122",
         start: new Date(),
         end: new Date(),
         location: "A66",
         eventType: CalenderEvent.Group,
    },
    {
         subjectCode: "INF122",
         start: new Date(),
         end: new Date(),
         location: "A66",
         eventType: CalenderEvent.Walkthrough,
    },
]