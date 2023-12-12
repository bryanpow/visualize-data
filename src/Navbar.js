import React,{useEffect,useState} from "react";



export default function Navbar({style}) {
   
       const pages = [
        {text: 'Home', src: '/' }, {text: 'Map', src: '/Map'}, {text: 'Sources', src: '/#how'}, {text: 'Contact', src:'/#contacts'}
     ]

    
   
    return (
        <div id='nav' style={style}>
            <a id='anav' href='/'>
            <div id='logo'>
            <img id='pic1d' src='https://www.nicepng.com/png/full/52-527751_pics-for-chart-icon-black-and-white-png.png' width='37px' height='40px'></img>
            <h3>RentShift</h3>
            </div>
            </a>
            <div id='dropmenu' style={{fontSize: '40px', display:'none'}}>&#x2193;</div>
            <div id='pages'>
                <ul id='choosePage' >
                    {pages.map((page, index) => {
                        return <a className={page.text} style={{color: 'white', textDecoration: 'none'}} href={page.src}><li key={index}>{page.text}</li></a>
                    })}

                </ul>
            </div>
        </div>
    )
}