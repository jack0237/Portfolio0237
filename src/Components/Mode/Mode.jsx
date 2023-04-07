import React, { useContext } from 'react'
import './Mode.css'
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { themeContext } from '../../Context'


const Mode = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  const handleClick = () => {

    theme.dispatch({type:'mode'})
    // if (darkMode) {
    //   document.documentElement.setAttribute('data-theme', 'light');
    //   document.documentElement.classList.remove('dark');
    //   document.documentElement.classList.add('light');
    //   localStorage.setItem('theme', 'light');
    // } else {
    //   document.documentElement.setAttribute('data-theme', 'dark');
    //   document.documentElement.classList.remove('light');
    //   document.documentElement.classList.add('dark');
    //   localStorage.setItem('theme', 'dark');
    
  };
  return (
    <div className="mode" onClick={handleClick}>
        <Moon/>
        <Sun/>
        <div className="m-button" 
          style = { darkMode? {left: '2px'} : {right: '2px'} }
        > 
        
        </div>

    </div>
  )
}

export default Mode