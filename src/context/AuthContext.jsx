import React, { createContext, useContext, useReducer, useState } from 'react'

const Auth = createContext()

const initialState = { isAuth: false, user: null }

const reducer = (state, action) => {

    switch (type) {
        case "SET_LOGIN":
            return dispatch({ isAuth: true, payload: user });
        case "SET_LOGOUT":
            return dispatch({ isAuth: false, user: null })
        default:
            return initialState;
    }

}

const AuthContext = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [isAppLoading,setIsAppLoading] = useState(false)

    return (
        <Auth.Provider value={{}}>
            {children}
        </Auth.Provider>
    )
}

export default AuthContext

export const useAuthContext = ()=> useContext(Auth)