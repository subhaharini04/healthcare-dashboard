import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { AnatomySection } from '../componenets/AnatomySection'

export const DashboardMainContent = () => {
  return (
   <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <div className='w-1/2 '>
          <AnatomySection/>
        </div>
        
      </div>
    </div>
  )
}
