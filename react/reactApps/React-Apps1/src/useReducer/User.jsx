import { useEffect, useReducer } from "react";
import EditUSer from "./EditUser";

const reducer = (state, action) => {
    
    if(action.type == 'UPDATE_USERS_DATE') {
        return {
            ...state,
            usersData: action.payload
        }
    }
    if(action.type == 'LOADING') {
        return{
            ...state,
            isLoading: action.payload
        }
    }

    if(action.type =='ERROR') {
        return{
            ...state,
            isError: action.payload
        }
    }

    if(action.type == 'DELETE_USER') {
        let updateUser = state.usersData.filter((eachUser) => {
            return eachUser.id != action.payload
        })
        return{
            ...state,
            usersData: updateUser
        }
    }

    if(action.type == 'EDIT_USER') {
        return{
            ...state,
            isEditing: action.payload
        }
    }
    
    if(action.type == 'UPDATE_USER') {
        let newUser = state.usersData.map((eachUSer) => {
            if(eachUSer.id === action.payload.id) {
                return{
                    id: action.payload.id,
                    name: action.payload.name,
                    email: action.payload.email
                }
            }else{
                return eachUSer
            }
        })

        return{
            ...state,
            usersData: newUser
        }
    }

    
    return state
}

const User = () => {
    
    let initialState = {
        usersData: [],
        isLoading: false,
        isError: {status: false, msg: ''},
        isEditing: {status: false, id: '', name:'', email:''}
    }

    const fetchUsers = async(url) => {
        dispatch({type: 'LOADING', payload: true})
        dispatch({type: 'ERROR', payload: {status: false, msg: ''}})
        try{
            let response = await fetch(url)
            let data = await response.json()
            dispatch({
                type: 'UPDATE_USERS_DATE',
                payload: data
            })
            dispatch({type: 'LOADING', payload: false})
            dispatch({type: 'ERROR', payload: {status: false, msg: ''}})
        }catch(error) {
            console.log(error)
            dispatch({type: 'LOADING', payload: false})
            dispatch({type: 'ERROR', payload: {status: true, msg: error.message}})
        }
    }
    useEffect(()=>{
        fetchUsers('https://jsonplaceholder.typicode.com/users')
    },[])

    let [state, dispatch] = useReducer(reducer, initialState)

    const handleDelet = (id) => {
        dispatch({type:"DELETE_USER", payload: id})
    }

    const handleEdit = (id, name, email) => {
        dispatch({type: 'EDIT_USER', payload:{status:true, id: id, name, email}})
    }

    const updateUser = (id, name, email) => {
        dispatch({
            type:'UPDATE_USER',
            payload:{
                id, name, email
            }
        })
        dispatch({type: 'EDIT_USER', payload:{status:false, id: "", name: '', email: ''}})
    }
   
    return(
        <div style={{textAlign: 'center'}}>
            
            {state.isLoading && <h3 style={{color: 'dodgerblue'}}>Loading...</h3>}
            {state.isError?.status && <h3 style={{color: 'tomato'}}>{state.isError.msg}</h3>}
            {!state.isLoading && !state.isError?.state && (
                <div>
                {state.isEditing?.status && <EditUSer id={state.isEditing.id} updateTitle={state.isEditing.name} updateEmail={state.isEditing.email} upDateData={updateUser}/>}
                {
                    state.usersData.map((eachUser) => {
                        const {name, id, username, email} = eachUser
                    return   <div key={id}>
                                    <h3>{name}</h3>
                                    <p>{email}</p>
                                    <button onClick={()=>{handleDelet(id)}}>Delete</button>
                                    <button onClick={()=>{handleEdit(id, name, email)}}>Edit</button>
                                </div>
                    })
            }
            </div>
            )}
        </div>
    )
}

export default User;