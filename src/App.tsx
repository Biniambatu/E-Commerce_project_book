import { Header,Footer } from "./assets/components"
import { AllRoutes } from "./assets/routes/AllRoutes"
import './index.css';


function App() {
  
  return (
    <div className="dark:bg-slate-800">
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  )
}

export default App
