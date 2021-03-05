import React, {
    createContext,
    useReducer
} from 'react'
import {
    v4 as uuid
} from 'uuid'

export const NotificationContext = createContext()

export const NotificationContextProvider = (props) => {

    const notifications = [{
        id: uuid(),
        //success, info, warning, danger
        type: 'Success',
        title: 'Successfully did the thing!',
        message: 'Successfully did the thing messageeeeee'
    }]

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "ADD":
                return state
            case 'DELETE':
                return state
            default:
                return state
        }
    }, notifications)


    // dispatch({type: 'ADD', payload: {id, type, title, message}})

    // dispatch({type:'DELETE', payload: id})

    return ( <
        NotificationContext.Provider value = {
            {
                state,
                dispatch
            }
        } > {
            props.children
        } <
        /NotificationContext.Provider>
    )
}