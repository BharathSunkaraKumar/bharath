import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function CountryDetails() {
    const x = useParams()
    console.log(x)
    const [details, setDetails] = useState(null)
    useEffect(() => {

        const fetchNewApi = async (rl) => {
            const resp = await fetch(`https://restcountries.com/v3.1/name/${x.cname}`)
            const data = await resp.json()
            setDetails(data[0])
        }
        fetchNewApi()

    },[x])
  return (
    <>
    {
        details && <div style={{padding: '10px'}}>   
        <h1 style={{textAlign: 'center'}}>{details.name.common} CountryDetails</h1>
             <div className='box' style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h1>{details.name.common}</h1>
                <div style={{width: '280px'}}>
                    <img src={details.flags.png} alt={details.name.common}/>
                </div>
                <h2>Population: {details.population}</h2>
                <p>Capital: {details.capital}</p>
            </div>
        </div>
    }
    </>
  )
}

export default CountryDetails