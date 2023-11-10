import {useState, useEffect} from 'react'

const DataFetch = () => {

  const [stateData, setStateData] = useState([])

  const options = {
    method : "GET",
    "Content-Type" : "application/json",
 
  }

  const url = "https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc"
  const getApiData = async () => {

    const response = await fetch(url, options)
    const data2 = await response.json()
    const data3 = data2.items
    console.log(data3)

    const modifiedData = data3.map(each => ({
      id : each.id,
      publishedDate : each.pushed_at,
      description : each.description,
    }))

    setStateData(modifiedData)

   

  }

  useEffect(()=> {
    getApiData()
  } , [])


  return (

    <div>
      <p>ok abba</p>
      <div>
        {stateData.map( item =>  (

          <div key = {item.key}>
          <p> {item.description} </p>
         <br/>
         <p>{item.ublishedDate}</p>
            
            
          </div>

          
          


        ) )}
      </div>



    </div>
  )
}


export default DataFetch