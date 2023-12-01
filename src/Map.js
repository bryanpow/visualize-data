import React, {useEffect, useState} from "react";
import { MapContainer, TileLayer, Marker, ZoomControl } from 'react-leaflet';
import { Icon } from "leaflet";
import L from 'leaflet'
import { CircleMarker } from "react-leaflet";
// import color from './Math.js'
import Data from './data.json'
import Navbar from "./Navbar";




export default   function Map() {
    //use states
    const[expand,setExpand] = useState(true)
    const [val1, setVal1] = useState();
    const [val2, setVal2] = useState();
    const [pair, setPair] = useState(null)
    const [didSubmit, setDidSubmit] = useState(false);
    const [dropMenu, setDropMenu] = useState(false)
    //Holding the value for the first year selected
        const handleVal1 = ({target}) => {
            setVal1(target.value);
            console.log(target.value)
        }
        //holding the value for the second year selected
        const handleVal2 = ({target}) => {
            setVal2(target.value);
            console.log(target.value)
        }

        const click = () => {
         
            if (dropMenu == false) {
                setExpand(false);
                setDidSubmit(true)
            } 
    }

    const  reverseClick = () => {
        setExpand(true);
        setDropMenu(true);
        setTimeout(() => {
            setDropMenu(false)
        },100)
        
    };
    //this is for the menu to select the years. 
    useEffect(() => {
        if (dropMenu === true) {
            setExpand(true)
        }
        if (val1 !== undefined && val2 !== undefined) {
          if (!pair) {
            setPair([val1, val2]);
            setDidSubmit(true);
            setExpand(true)
          } else if (val1 !== pair[0] && val2 !== pair[1]) {
            setPair([val1, val2]);
            setDidSubmit(true);
            setExpand(true)
          }
     
}
})

     const butstyle = expand? {display: 'none'} : {}

        //some styling for the  year selection ui. 
        const drop2 = expand? {height:'0.1'} : { margin: '0', display:'flex',padding: '0'}
        const drop3 = expand? {height: '0.1', opacity: '0', transform: 'translateY(-30%)'}: {opacity:'1', transform: 'translateY(-70%)' }
        const drop4 = expand? {height: '10px', paddingTop:'40px'} : {paddingTop: '40px', paddingBottom: '40px'}
        const styleStart = expand? 'start' : 'start2'
        const y1 = val1? val1 : 'Year 1'
        const y2 = val2? val2 : 'Year 2'
        // Options for years I have data for
        const years = [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023];

    return (
        <div id='main-app' >
            <Navbar style={{position: 'absolute', background: 'transparent', zIndex: '10002', width:'90%' }} />
         
            <div id={styleStart} onClick={click} >
                <div>
                </div>
                <div id='years'style={drop4}>
                    <div id='label'>
                        <h2>{y1} → {y2}</h2>
                    </div>
                    
                    <div id='select' style={drop2}>
                    <div id='1'>
                    
                    <select class='select' onChange={handleVal1} style={drop3} required>
                    <option value="">Pick a year</option>
                        {years.map((year) => {
                            return <option>{year}</option>
                        })}
                    </select>
                </div>
                <div id='2'>
                    <select class='select' onChange={handleVal2} style={drop3} required>
                    <option value="">Pick a year</option>
                    {years.map((year) => {
                            return <option>{year}</option>
                        })}
                    </select>
                </div>
                    </div>
              <button style={butstyle} id='done' onClick={reverseClick}>↓</button>
                </div>
                
            </div>
            <MapContainer id='map' center={[40.65, -73.95]} zoom={10} minZoom={10} zoomControl={false} style={{background:'#010c17', transition: ' all 2s'}} >
                <TileLayer 
                 attribution='&copy; <a href="\"https://www.jawg.io?utm_medium=map&utm_source=attribution\" ">JawgMaps</a>' 
                 url='https://tile.jawg.io/b2b117b5-11fc-459b-a4e1-eaf8bc1d91d5/{z}/{x}/{y}{r}.png?access-token=vpxmqZfPKNmXReJ7ArrixBS7jkAMkfhAHIWKG9DZfHAvZzE0M3aIUr3AwXzrMWz9'
                 />
            {/* Getting data for each neighborhood in data.json */}
            {Data.map((hood) => {
                //turning lat and long values to floats instead of strings
                const latitude = parseFloat(hood['Latitude']);
                const longitude = parseFloat(hood['Longitude']);
                const year1 = hood[`${val1}`]
                const year2 = hood[`${val2}`]
                const rentIncreasePercentage = ((year2 - year1) / year1) * 100

                //  calculating percent increase between rent in the two selected years and assignimg 
                // each area a color based on it.
                const getColor = () => {
                    if (rentIncreasePercentage < 5) {
                        return ' #1aff09'
                    } else if (rentIncreasePercentage< 10) {
                        return '#6eef00'
                    } else if (rentIncreasePercentage < 15) {
                        return '#94df00'
                    } else if (rentIncreasePercentage < 20) {
                        return '#b0cd00'
                    } else if (rentIncreasePercentage < 25) {
                        return '#c7ba00'
                    } else if (rentIncreasePercentage< 30) {
                        return ' #d9a600'
                    } else if (rentIncreasePercentage < 35) {
                        return '#e79100'
                    } else if (rentIncreasePercentage < 40) {
                        return ' #f27a00'
                    } else if (rentIncreasePercentage < 45) {
                        return '#fa6000'
                    } else if (rentIncreasePercentage < 50) {
                        return '#fe4100'
                    } else if (rentIncreasePercentage < 55) {
                        return '#ff0c0c'
                    } else {
                        return '#cc0a0a'
                    }
                }
                const color = getColor()

                //setting a few conditions
                if (!isNaN(latitude) && !isNaN(longitude) && didSubmit && (rentIncreasePercentage)) {
                    // returning a circle marker for each area with the color given based
                    // on rent increase percentage
                    return (
                        <CircleMarker
                        key={Math.floor(Math.random() * 1000000)}
                        center={[latitude, longitude]}
                        radius={50} 
                        color='auto' 
                        fillColor={color}
                        fillOpacity={0.07} 
                        weight={1}
                    />
                    );
                } 
            })}
                            <ZoomControl position="bottomleft" />
                        </MapContainer>

                    </div>
                )
}