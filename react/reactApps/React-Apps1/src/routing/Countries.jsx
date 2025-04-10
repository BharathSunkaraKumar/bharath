import React, { useEffect, useReducer } from 'react'
import './Countries.css'
import { Link, Outlet } from 'react-router'
const reducer = (state, action) => {
    if(action.type == 'UPDATE_COUNTRIES') {
        return{
            ...state,
            countries : action.payload
        }
    }
    if(action.type == 'SHOW_DETAILS') {
        return{
            ...state,
            showDetails: action.payload
        }
    }
    if(action.type == 'DONT_SHOW_DETAILS') {
        return{
            ...state,
            showDetails: action.payload
        }
    }
    return state
}

function Countries() {
    let url = 'https://restcountries.com/v3.1/all'

    const initialState = {
        countries: [],
        showDetails: {
            status: false
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    const fetchApi = async (apiUrl) => {
        try {
            let response = await fetch(apiUrl)
            let data = await response.json()
            dispatch({
                type: 'UPDATE_COUNTRIES',
                payload: data
            })
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        fetchApi(url)
    },[])

    const handleShow = () => {
        dispatch({
            type: 'SHOW_DETAILS',
            payload: {status: true}
        })
    }
    const handleClose = () => {
        dispatch({
            type: 'DONT_SHOW_DETAILS',
            payload: {status: false}
        })
        console.log(state.showDetails)
    }
  return (
    <div className='box'>
        <h1 style={{color: 'dodgerblue'}}>Countries</h1>
        <div >
            <div style={{width: "100%"}}>
            <ul className='container'>
            {
                state.countries.length > 0 && state.countries.map((country, i) => {
                    // console.log(country)
                    return  <li key={i}>
                                <img src={country.flags.png} alt={country.name.common}/>
                                <h3>{country.name.common}</h3>
                                <p>{country.capital}</p>
                                <Link onClick={handleShow} to={'countries/countryDetails/'+country.name.common}>countryDetails</Link>
                            </li>
                })
            }
        </ul>
            </div>
            {
                state.showDetails?.status && (
                    <div className={state.showDetails?.status ? 'popup active' : 'popup'} style={{width:'50%'}}>
                        <div>
                            <button onClick={handleClose}>X</button>
                        </div>
                        <div className='model'>
                            <Outlet/>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
    
  )
}

export default Countries