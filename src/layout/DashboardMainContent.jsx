import { Sidebar } from './Sidebar'
import { Header } from './Header'

export const DashboardMainContent = () => {
  return (
   <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
      </div>
    </div>
  )
}
