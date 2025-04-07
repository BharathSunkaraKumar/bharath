import { createContext, useState } from "react"
import Component2 from "./Component2"

export const userContext = createContext()
const Component1 = () => {
    const [user, setUSer] = useState('bharath')
    const [data, setData] = useState({
        name: 'bharath',
        age: 25,
        city: 'tirupati'
    })
    
    return(
        <div className="box">
            <h3>Component1</h3>
            <userContext.Provider value={data}>
                <Component2 />
            </userContext.Provider>
        </div>
    )
}

export default Component1