import React,{useEffect,useState} from "react";
import ProjDem1 from './ProjDem1.mov'
import Navbar from "./Navbar";

export default function Home() {
    //fetching for news articles
    const [news,setNews] = useState([]);
    useEffect(() => {
        const url = 'https://newsapi.org/v2/everything?q="New York" AND "rent increase"&sortBy=relevancy&pageSize=4&apiKey=688cd01880f44015b1d1ca5ec4816596';
        const fetchData = async() => {
            try {
                const response = await fetch(url);
                const data = await response.json();
               setNews([])
                console.log(data);
                const theArticles = data.articles
                const formattedNews = theArticles.map(article => ({
                    'author': article.author,
                    'source': article.source.name,
                    'picture': article.urlToImage,
                    'link': article.url,
                    'desc': article.description,
                    'title': article.title
                }));
                  
                    
                setNews((prevArticle) => [...prevArticle,...formattedNews])
                console.log(news)
                
             
            } catch(error) {
                console.log('Try again lil bro')
            }
        }
        fetchData()
    },[])
   
    return (
        <div id='home' >
            <Navbar />
            <div id='land' >
                <div id='intro'>
                <h1>Welcome.</h1>
                <p id='embark'>Embark on a visual journey through the evolution of New York City's rental landscape with <strong>RentShift</strong> . Our platform transforms data into art, illustrating the flow of rent prices over the years using interactive maps. </p>
                </div>
                <div id='butcard'>
                <div id='cards'>
                    <div id="card1">
                        <img src='https://techcommunity.microsoft.com/t5/image/serverpage/image-id/254564iEAA678D46B37C52D/image-size/large?v=v2&px=999' width='500px'></img>
                    </div>
                    <div id='card2'>
                        <img src='https://i.stack.imgur.com/Ubsh8.png' width='500px'></img>
                    </div>
                </div>
                <div id='view'>
                <a href='/Map'><button class='hb'>View Map</button></a>
                <a href='/Map'><button class='hb'>View Rent Data</button></a>
                </div>
                </div>
             
           
            </div>
            <div id='visual' >
                <div id='vis1'>
                <div id='vtext'>
                <h1><span style={{color: '#010c1e'}}>Visualize.</span> Embark on a <span style={{color: '#010c1e'}}>visual</span> journey through data <span style={{color: '#010c1e'}}>visualization</span> on RentShift.<span style={{fontSize: '15px'}}><br />Powered by &copy;StreetEasy and Leaflet</span></h1>
                <p> Our interactive map unveils the nuanced tale of New York City's rent evolution. See beyond numbers, make informed decisions, and gain a comprehensive understanding of rent dynamics. Join us in decoding the language of data for an intuitive exploration of NYC's rental landscape.</p>
                </div>
                <div id='card3'>
                   <img id='street' src='https://wp.zillowstatic.com/streeteasy/2/ddp-Custom-0e6b81.gif' width='650px'></img>
                </div>
                </div>
            </div>
            <div id ='third'>
                <div id='nest'>
            <div id='vid'>
                <h3>Demo.</h3>
                <video id='dem' controls width='900px'>
                    <source src={ProjDem1}  alt='demo'/>
                </video>
                <div id='vides'> <p id='p'>Embark on a swift journey through New York City's rental landscape with RentShift's quick demo. In just 25 seconds, we handpick two years, unveiling the heartbeat of rent shifts across the city. The visualization is rapid, yet the insights are profound. This concise exploration empowers you to make informed decisions about NYC's rental scene. No fuss, just impactful data at your fingertips.

                </p></div>
                    <a href='Map'>< button id='ex' class='hb' >Experience It Yourself → </button></a>
               
            </div>
            </div>
            </div>
            
            <div id='how'>
            <h1 id='br'>How we did it.</h1>
                <div id='howflex'>
                <div id='general'>
                    <h4>In the creation of our interactive map, we undertook a systematic process leveraging the StreetEasy API, Leaflet React library, and mathematical algorithms. This methodological approach ensured precision and reliability in presenting New York City's rental landscape.</h4>
                </div>
                <div id='SE'>
                    <h3 class='grow'>①</h3>
                    <p class='shrink'>We sourced comprehensive real estate data from the StreetEasy API. This platform, recognized for its wealth of information, served as the primary reservoir for our dataset.</p>
                </div>
                <div id='pp'>
                    <h3 class='grow'>②</h3>
                    <p class='shrink'> The acquired data underwent meticulous refinement to rectify inconsistencies and outliers. Our objective was to prepare a clean, reliable dataset as the foundation for the subsequent mapping process.</p>
                </div>
                <div id='leaf'>
                    <h3 class='grow'>③</h3>
                    <p class='shrink'>Leaflet React, a library adept at rendering interactive maps, was employed to visualize our dataset. Its user-friendly features facilitated a seamless map rendering process, providing an intuitive canvas for data representation.</p>
                </div>
                <div id='math'>
                    <h3 class='grow'>④</h3>
                    <p class='shrink'>Employing mathematical calculations and algorithms, we determined the spatial representation of data on the map. This meticulous process ensured an accurate and visually compelling portrayal of rental price dynamics.</p>
                </div>
                </div>
            </div>
            <div id='outernews' style={{background: 'linear-gradient(to top, #001122, #000000)', paddingTop:'50px', paddingBottom: '50px' }}>
            <h1 style={{textAlign: 'center', marginBottom: '80px'}}>Related News Articles</h1>
            <div id='news' style={{display: 'flex',  fontSize: '10px', height: '500px', width: '90%', marginLeft:'7%', gap: '20px', padding: '0', justifyItems: 'center', position: 'relative'}}>
                 { news? (
                    news.map((article) => (
                        <a href={article.link} style={{color: 'white', textDecoration: 'none', flex:1}} target='_blank'><div style={{background: 'linear-gradient(to bottom, white, #f0f0f0)', height:'450px', display: 'flex', flexDirection:'column', width: '270px', paddingLeft: '20px',  boxShadow: '0 4px 8px rgba(255, 255, 255, 0.1), 0 8px 16px rgba(255, 255, 255, 0.1), 0 16px 32px rgba(255, 255, 255, 0.1)'}}  className="nycnews" key={Math.random() * -0.0005}>
                            <img src={article.picture} style={{overflow: 'hidden', marginTop: '20px',   boxShadow: '0 15px 13px rgba(0, 0, 0, 0.2)'}} width='250vh' height='140'></img>
                            <h3 style={{ width:'90%',fontSize:'20px', color: 'black', marginBottom:'5px'}}>{article.title}</h3>
                            <p style={{width: '95%', fontSize: '15px', color: 'black',marginTop: '0'}}>{article.desc}</p>
                            <p style={{color: 'lightgrey', fontSize:'15px', fontWeight:'600'}}>{article.source}</p>
                            
                        </div></a>
                    ))
                ) : (
                    <p>Loading news...</p>
                )}
            </div>
            </div>
            <footer id='foot' style={{backgroundColor: '#001122', textAlign: 'center', wordSpacing: '2px', paddingTop: '50px'}}><h2> Made by Bryan Ramos 2023</h2></footer>
        </div>
    )
}