import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const AppLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-grow overflow-auto bg-neutral-50 dark:bg-slate-800">
        <Navbar />
        <Outlet />
      </div>
    </div>
  )
}
export default AppLayout
