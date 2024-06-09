import { Header,Footer } from "./assets/components"
import { ScrollToTop } from "./assets/components/Other/ScrollToTop";
import { AllRoutes } from "./assets/routes/AllRoutes"
import './index.css';


function App() {
  
  return (
    <div className="dark:bg-slate-800">
      <Header/>
      <ScrollToTop/>
      <AllRoutes/>
      <Footer/>
    </div>
  )
}

export default App
