import React from 'react'
import { useGetAllCountreisQuery } from '../../services/countries'
import { Link, Outlet } from 'react-router'

function Countries() {
   const {isLoading, data} = useGetAllCountreisQuery()
   console.log(data)
  return (
    <div className='box'>
        {isLoading ? <h3>loading...</h3> : (
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                <div style={{width: '30%'}}>
                <ul >
                    {
                       data && data.map((e, i) => {
                            return <li key={i}>
                                        <Link to = {`countries/countryDetails/${e.name.common}`}>{e.name.common}</Link>
                                    </li>
                            
                        })
                    }
                </ul>
                </div>
                <div style={{width: '70%'}}>
                    <Outlet/>
                </div>
            </div>
        )}
    </div>
  )
}

export default Countries