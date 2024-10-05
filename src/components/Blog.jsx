import { useEffect, useState } from 'react';
import axios from 'axios';

function Blog({padding= '100px 0px'}) {


    const [visibleCards, setVisibleCards] = useState(3);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);


    const [articles, setArticles] = useState([]);
// curl -H "api-key: API_KEY" https://dev.to/api/articles/me/published
// https://dev.to/api/articles?username=kyawmintun96&page=1&per_page=30

    useEffect(() => {
      const fetchArticles = async () => {
        try {
            const response = await axios.get(`https://dev.to/api/articles?username=kyawmintun96&page=1&per_page=30`);
            setArticles(response.data);
        } catch (error) {
          console.error('Error fetching the articles', error);
        }
      };

      fetchArticles();

    }, []);


    useEffect(() => {

        window.addEventListener('resize', () => setScreenWidth(window.innerWidth));
        return () => {
            window.removeEventListener('resize', () => setScreenWidth(window.innerWidth));
        }
    }, []);


    useEffect(() => {

        if(screenWidth > 1024) {
            setVisibleCards(3);
        }else if(screenWidth > 768) {
            setVisibleCards(4);
        }else {
            setVisibleCards(4);
        }

    }, [screenWidth]);


    const handleShowMore = () => {
        if (screenWidth > 1024) {
            setVisibleCards(prev => prev + 3);
        } else {
            setVisibleCards(prev => prev + 2);
        }
    };

    const renderBlogs = () => {

        let aniCountPrj = 0;
        let directionPrj = 1;

        return articles.slice(0, visibleCards).map((article, i) => {

            if(i === 4) {
                directionPrj = -1;
            }

            if(aniCountPrj === 0) {
                directionPrj = 1;
            }


            if((aniCountPrj === 4 || aniCountPrj === 3 || aniCountPrj === 1 || aniCountPrj===2 || aniCountPrj === 0) && (directionPrj === -1)) {
                aniCountPrj -= 2;
            }


            if ((aniCountPrj === 3 || aniCountPrj === 1 || aniCountPrj === 2 || aniCountPrj === 0) && directionPrj === 1) {
                aniCountPrj++;
            }

            return(

                article.user.username === 'kyawmintun96'? 

                <div className="card" key={article.id}>
                    <div className="card-body">
                    <p className="title" style={{height: '50px'}}>{article.title}</p>

                    <div className="card_image">
                        <img src={article.cover_image} alt={article.title} rel='noreferrer'/>
                    </div>
                
                    <div className="description">
                        <p>{article.description}</p>
                    </div>

                    <div id="read_more">
                        <a href={article.url} target='_blank' rel='noreferrer'>Details</a>
                    </div>
                    </div>
                </div>
                :

                ''
            );

        });
        
    }



    return(
        <>
            <div className="blg" style={{ padding}}>
                {renderBlogs()}
            </div>
            <button type="button" onClick={handleShowMore} className="load-btn">Show More</button>	
        </>
    )
}

export default Blog;