import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/TextForm';
import Alert from './components/Alert';

// import About from './components/About';


function App() {
  const [mode, setmode] = useState ('light') //whether dark mode is enable or not
  const [alert , setalert] = useState ('hi')

  const showalert = (massage , type) =>{
    setalert ({
      msg : massage,
      type : type
    })
    setTimeout(() =>{
      setalert(null)
    },3500)


  }


  const togglemode = () =>{
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor = '#042743'
      showalert ('dark mode has been enabled' , 'success')
      document.title = "TextUtils - Dark mode"
      // setInterval(()=>{
      // document.title = "TextUtils - Dark mode"
      // },3000)
    }
    else{
      setmode('light')
        document.body.style.backgroundColor = 'white'
        showalert ('light mode has been enabled' , 'success')
        document.title = "TextUtils - light mode"
        // setInterval(()=>{
        // document.title = "TextUtils - light mode"
        // },2000)

    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />   
      <div className='container my-3'>
        <Textform showalert={showalert} heading="Enter the text to analyse blew" mode={mode} />
        {/* <About/> */}
      </div>



    </>
  );
}

export default App;
