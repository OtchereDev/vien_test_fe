import NavBar from '../components/NavBar'
import MainContent from '../components/MainContent'

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <NavBar/>
      <MainContent/>
    </div>
  )
}
