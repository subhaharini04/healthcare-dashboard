import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTachometerAlt,  // Dashboard
  faHistory,        // History
  faCalendar,       // Calendar
  BiCalendarPlus,  // Appointments
  faChartBar,       // Statistics
  faTools,          // Tools
  faComments,       // Chat
  faHeadset,        // Support
} from "react-icons/bi";

export const general = [
  { name: "Dashboard", path: "#" ,icon: faTachometerAlt },
  { name: "History", path: "#",  icon: faHistory },
  { name: "Calendar", path: "#",icon: faCalendar },
  { name: "Appointments", path: "#",  icon: BiCalendarPlus },
  { name: "Statistics", path: "#",  icon: faChartBar  },
];

export const tools = [
  { name: "Chat", path: "#",  icon: faComments },
  { name: "Support", path: "#" , icon: faHeadset  },
];

export const setting = {
     name: "Setting", path: "#", icon: faTools 
     };