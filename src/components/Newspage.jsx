import NewsCard from './newscard';
import { useState, useEffect } from 'react';
import '../css/NewsPage.css'

const NewsPage = () => {
 
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getdata() {
            const response = await fetch("https://newsapi-eosin.vercel.app/api/news")
            const data = await response.json();
            console.log(data.articles[1]);
            setData(data.articles.slice(0,21));
        }
        getdata();
    }, []);


  return (
    <div className='news-container'>
       {
        data&&
        data.map((news, index)=> {
            return (
                <div key={index}>
                    <NewsCard news={news}/>
                </div>
            )
        })
       }
    </div>
  )
}

export default NewsPage

// import React, { useEffect } from 'react'
// import Newscard from './Newscard';
// import { useState} from 'react';
// import '../css/NewsPage.css'

// const Newspage = () => {

//     const [data, setData]= useState([]);

//     useEffect(() => {
//         async function getdata() {
//             const response =await fetch("https://newsapi-eosin.vercel.app/api/news")
//             const data = await response.json();
//             console.log(data.article[1]);
//             setData(data.articles.slice(0,21));
//         }
//     getdata();

// }, []  );

//   return (
//     <div className='news-container' id='news'>
//         {
//             data&&
//             data.map((news, index)=> {
//                 return (
//                     <div key={index}>
//                         <Newscard news={news}/>
//                     </div>
//                 );
//             })
//         }
//       </div>
//   )
// }

// export default Newspage
