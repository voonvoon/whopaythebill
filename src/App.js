//to use Mycontext we need use hook:
import React,{ useContext } from "react";
import { MyContext } from "./context";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
//we can do it here or index.html:
import './style/app.css'

import Stage1 from "./components/stage_1";
import Stage2 from "./components/stage_2";

const App = () => {

  //to access whatever we hv in context:
  const context = useContext(MyContext)

  console.log(context)
  return(
    <div className="wrapper">
      <div className="center-wrapper">
        <h1>Who pays the bill ?</h1>
        { context.state.stage ===1 ?
          <Stage1/>
          :
          <Stage2/>
        }

      </div>
    </div>
  )
}

export default App;