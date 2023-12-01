import Hero from "./component/Hero"
import NavBar from "./component/NavBar"
import Skills from "./component/Skills"
import About from "./component/About"


const App = () => {
  return (
    <div>
      {/* <h1 className="text-3xl text-red-500">victor</h1> */}
      <NavBar />
      <Hero />
      <Skills />
      <About/>
    </div>
  )
}
export default App