import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { AnatomySection } from '../componenets/AnatomySection'
import { CalendarView } from '../componenets/CalendarView'
import { ActivityFeed } from '../componenets/ActivityFeed'
import { UpcomingSchedule } from '../componenets/UpcomingSchedule'

export const DashboardMainContent = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <Sidebar />
      <div className="lg:pl-64 flex flex-col w-full">
        <Header />
        <div className="flex flex-col lg:flex-row gap-6 px-6 mt-6">
<div className="w-full lg:w-1/2 flex flex-col gap-6">
  <AnatomySection />
  <ActivityFeed />
</div>
          <div className="w-full lg:w-1/2 bg-gray-100 p-6 rounded-2xl shadow">
            <CalendarView />
            <UpcomingSchedule />
          </div>
        </div>
      </div>
    </div>
  );
};
