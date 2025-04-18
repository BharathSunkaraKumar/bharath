import React from 'react'
import { useParams } from 'react-router'
import { useGetCountryDetailsByNameQuery } from '../../services/countries'

function CountryDetails() {
    const {cname} = useParams()
   const {data, isLoading} =  useGetCountryDetailsByNameQuery(cname)
  return (
    <div className='box'>
        <h1>CountryDetails {cname}</h1>
        {
            // console.log(data[0].flags.png)
            isLoading ? <h3>loading...</h3> : (
                <img src={data[0].flags.png} alt='img'/>
            )
        }
    </div>
  )
}

export default CountryDetails