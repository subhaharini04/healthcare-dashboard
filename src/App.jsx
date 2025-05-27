import './App.css'
import { Sidebar } from './layout/Sidebar'
import { Header } from './layout/Header'
import { DashboardMainContent } from './layout/DashboardMainContent'
import { AnatomySection } from './componenets/AnatomySection'
import { CalendarView } from './componenets/CalendarView'


function App() {

  return (
    <>
    {/* <DashboardMainContent /> */}
    <CalendarView/>
    </>
  )
}

export default App
