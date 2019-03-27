import React, {useState, useEffect} from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import axios from "axios"
import Card from '../components/Card';
import CardPage from '../components/CardPage'
import '../components/global.css'

import Layout from "../components/layout"

const IndexPage = () =>  {
  const [data, setData] = useState({ });
  const [loaded, setLoaded] = useState(false);
  const [cardPicked, setCard] = useState(false);
  const [cardType, setCardType] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.cadams.io/v1/startup',
        );
        
        setData(result.data);
        
        if (result.data) {
          setLoaded(true);
        }
      } 
      fetchData()
    }, [loaded]);
    
    const OnclickItem = (val) => {
      setCard(true);
      setCardType(val);
    }

    const returnClickFunction = () =>{
      setCard(false);
      setCardType(null);
    }

    const renderCards = () => {
      return (<React.Fragment>
        <div className="index-card-container">
        {data.startups.map(item => {
          return <Card title={item.name} description={item.description} OnclickItem={OnclickItem} name={item.name} /> 
        })}
        </div>
    </React.Fragment>
      );
    };
  
    const renderCardPage = () => {

    const result = data.startups.find(item => {
      return item.name === cardType
    });

      return (<React.Fragment>
        <div className="index-cardpage-container">
          <CardPage data={result} returnClick={returnClickFunction}/> 
        </div>
    </React.Fragment>
      );
    };
    
    console.log(data);

      return (
        <Layout>
        {loaded && !cardPicked ? 
         renderCards()
        : null
      }
      {loaded && cardPicked ? 
      renderCardPage() 
      : null 
      }
      </Layout>
    )
}

export default IndexPage
