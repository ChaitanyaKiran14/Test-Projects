import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const BlogItemDetails = () => {
    const { id } = useParams();
    //you can get it by const {match} = this.props  , const {params} = this.match ,  const {id} = params


    const [apiData , setApiData] = useState([])

    const options = {
        method : "GET"
    }
    const url = `https://apis.ccbp.in/blogs/${id}`

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(url, options);
            const data = await response.json();
            console.log(data)

            const modifiedData = {
              id: data.id,
              title: data.title,
              author: data.author,
              content: data.content,
              topic: data.topic,
            };
            
            setApiData([modifiedData]);
          

            
          } catch (error) {
            console.log('Error:', error);
          }
        };
      
        fetchData();
      }, []);
      return (
        <div>
            <h1>working</h1>
            {apiData.map(each => (
                <div key={each.id}>
                <p>{each.title}</p>
                <p>{each.author} </p>
                </div>
            ))}
        </div>
   )  
}

export default BlogItemDetails