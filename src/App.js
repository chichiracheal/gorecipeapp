import {Nav} from "./recipes/Nav";
import {Main} from "./recipes/Main";
import {Footer} from "./recipes/Footer";
import Search from "./recipes/Search";



const App = () => {

  return(
    <div>
        <Nav/>
        <Main/>
        <Search/>
        <Footer/>
    </div>
  )
}

export default App;