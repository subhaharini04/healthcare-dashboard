import teeth from "../assets/tooth.png";
import hand from "../assets/muscle.png";

export const calendarData = {
  month: "May 2025",
  week: [
    { day: "Mon", date: 25, times: ["10:00", "11:00", "12:00"] },
    { day: "Tues", date: 26, times: ["08:00", "09:00", "10:00"], highlight: "09:00" , isToday: true},
    { day: "Wed", date: 27, times: ["12:00", "13:00","-"] },
    { day: "Thurs", date: 28, times: ["-", "11:00", "13:00"], highlight: "11:00" },
    { day: "Fri", date: 29, times: ["14:00", "16:00","-"] },
    { day: "Sat", date: 30, times: ["12:00", "14:00", "15:00"] },
    { day: "Sun", date: 31, times: ["09:00", "10:00", "11:00"], highlight: "09:00" }
  ],
  appointments: [
    {
      title: "Dentist",
      time: "09:00–11:00",
      doctor: "Dr. Cameron Williamson",
      icon: teeth,
      isToday: true
    },
    {
      title: "Physiotherapy Appointment",
      time: "11:00–12:00",
      doctor: "Dr. Kevin Djones",
      icon: hand
    }
  ]
};
