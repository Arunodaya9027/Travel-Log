import Navbar from "../Navbar";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./News.css";
import { useEffect, useState } from "react";

const News = () => {

    const [mynews, setMyNews] = useState([]);

    const fetchData = async () => {
        let response = await fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=094be2912d1e4b8f86ae84c3b3420ded');
        let data = await response.json();
        setMyNews(data.articles);
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <>
            <div className="Upper">
                <Navbar />
                <div className="hr-line"></div>
                {
                    mynews.map((ele) => {
                        return (
                            <>
                                <div className="card-container">
                                    <Card style={{ width: '18rem', height:'25rem' }}>
                                        <Card.Img variant="top" src={ele.urlToImage==null ? "https://media.cnn.com/api/v1/images/stellar/prod/2024-04-20t193811z-1537477061-rc2ia7a42oug-rtrmadp-3-israel-palestinians-usa-protest-copy.jpg?c=16x9&q=w_800,c_fill":ele.urlToImage} />
                                        <Card.Body>
                                            <Card.Title>{ele.author}</Card.Title>
                                            <Card.Text>
                                                {ele.title}
                                            </Card.Text>
                                            <Button className="btn-link" variant="primary"><a href={ele.url} target="_blank">Read More</a></Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="card-container">
                                    <Card style={{ width: '18rem', height:'25rem' }}>
                                        <Card.Img variant="top" src={ele.urlToImage==null ? "https://media.cnn.com/api/v1/images/stellar/prod/2024-04-20t193811z-1537477061-rc2ia7a42oug-rtrmadp-3-israel-palestinians-usa-protest-copy.jpg?c=16x9&q=w_800,c_fill":ele.urlToImage} />
                                        <Card.Body>
                                            <Card.Title>{ele.author}</Card.Title>
                                            <Card.Text>
                                                {ele.title}
                                            </Card.Text>
                                            <Button className="btn-link" variant="primary"><a href={ele.url} target="_blank">Read More</a></Button>
                                        </Card.Body>
                                    </Card>
                                </div>

                            </>
                        )
                    })
                }
            </div>
        </>

    )
}

export default News;