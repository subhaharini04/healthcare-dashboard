import {
  BiCategory,  // Dashboard
  BiSolidCalendar,       // Calendar
  BiCalendarPlus,  // Appointments
  BiChart,       // Statistics         
  BiMessageRoundedDots,       // Chat
  BiPhone,        // Support
} from "react-icons/bi";

import { IoSettings } from "react-icons/io5";
import { MdHistory } from "react-icons/md";


export const general = [
  { name: "Dashboard", path: "#" ,icon: BiCategory },
  { name: "History", path: "#",  icon: MdHistory },
  { name: "Calendar", path: "#", icon: BiSolidCalendar },
  { name: "Appointments", path: "#", icon: BiCalendarPlus },
  { name: "Statistics", path: "#", icon: BiChart },
];

export const tools = [
  { name: "Chat", path: "#",  icon: BiMessageRoundedDots },
  { name: "Support", path: "#" , icon: BiPhone },
];

export const setting = {
     name: "Setting", path: "#", icon: IoSettings 
     };