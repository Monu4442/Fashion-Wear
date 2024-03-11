import React from 'react'
import LightBtn from '../../assets/website/light-mode-button.png'
import DarkBtn from '../../assets/website/dark-mode-button.png'

function DarkMode() {
const [theme, setTheme] = React.useState(
    localStorage.getItem("theme")?localStorage.getItem("theme") : "light"
);

const element = document.documentElement; // html element 

React.useEffect(()=>{
    if(theme === "dark"){
        element.classList.add("dark"); // dark 
        localStorage.setItem("theme", "dark");
    }
    else{
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
},[theme])

console.log(element)
  return (
    <div className='relative'>

        <img src={LightBtn} alt="Light-mode" onClick={()=>setTheme(theme === "light" ? "dark" : "light")}
        className={`w-12 cursor-pointer drop-shadowborder border-solid border-black border-opacity-10 transition-all duration-300 absolute right-0 z-10 ${theme=== "dark"? "opacity-0" : "opacity-100"}`} />
        <img src={DarkBtn} alt="Light-mode" onClick={()=>setTheme(theme === "light" ? "dark" : "light")}
        className='w-12 cursor-pointer drop-shadowborder border-solid border-black border-opacity-10 transition-all duration-300' />

    </div>
  )
}

export default DarkMode