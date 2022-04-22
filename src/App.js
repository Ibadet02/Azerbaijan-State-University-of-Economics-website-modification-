import React from 'react';
import './App.css';
import {Navbar} from './parent-components/Navbar'
import {Slidebar} from './parent-components/Slidebar'
import {Info} from './parent-components/Info'
import {News} from './parent-components/News'
// import {Footer} from './parent-components/Footer'
function App() {
  const navRef=React.useRef(null)
  const navContentRef=React.useRef(null)
  var x=null
  // React.useEffect(()=>{
  //   window.addEventListener("resize",()=>{
  //     if(window.innerWidth>960){
  //       x=-130
  //       navRef.current.style.top=x+"px"
  //     }
  //   })
  // })
  React.useEffect(()=>{
    let lastScrollTop=0
    window.addEventListener("scroll",()=>{
      var scrollTop=window.pageYOffset || document.documentElement.scrollTop
      if(scrollTop>lastScrollTop){
          x=navContentRef.current.offsetHeight
          navRef.current.style.top=`-${x}px`
      }
      else{
        navRef.current.style.top="0"
      }
      lastScrollTop=scrollTop
    })
  },[])
  return (
    <div className='wrapper'>
      <Navbar myref1={navRef} myref2={navContentRef} />
      <div className='margin'>
        <Slidebar />
        <Info />
        <News />
      </div>
    </div>
  );
}

export default App;
