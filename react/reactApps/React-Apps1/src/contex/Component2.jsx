import Component3 from "./Component3"
import { userContext } from "./Component1"
import { useContext } from "react"
const Component2 = () => {
    // const user = useContext(userContext)
    return(
        <div className="box">
            <h3>Component2</h3>
            {/* <i>{user}</i> */}
            <Component3/>
        </div>
    )
}

export default Component2