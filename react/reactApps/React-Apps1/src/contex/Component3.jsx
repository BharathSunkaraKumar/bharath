import { useContext } from "react"
import { userContext } from "./Component1"
const Component3 = () => {
    // console.log(props)
    const user = useContext(userContext)
    console.log(user)
    const {name, age, city} = user
    return(
        <div className="box">
            <h3>Component3</h3>
            <p>{name}</p>
            <p>{age}</p>
            <p>{city}</p>
        </div>
    )
}

export default Component3