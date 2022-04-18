import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar'
import {Slidebar} from './components/Slidebar'
import {Info} from './components/Info'
import {News} from './components/News'
import {Footer} from './components/Footer'
function App() {
  const navRef=React.useRef(null)
  React.useEffect(()=>{
    let lastScrollTop=0
    window.addEventListener("scroll",()=>{
      var scrollTop=window.pageYOffset || document.documentElement.scrollTop
      if(scrollTop>lastScrollTop){
        navRef.current.style.top="-130px"
      }
      else{
        navRef.current.style.top="0"
      }
      lastScrollTop=scrollTop
    })
  },[])
  return (
    <div>
      <Navbar myref={navRef} />
      <div className='padding'>
        {/* <Info /> */}
        {/* <Slidebar /> */}
      </div>
    </div>
  );
}

export default App;
