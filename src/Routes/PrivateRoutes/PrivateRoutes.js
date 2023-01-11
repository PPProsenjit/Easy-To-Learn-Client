import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UsersContext';

const PrivateRoutes = ({children}) => {
    const {user} = useContext(AuthContext)
    if(!user){
        return <Navigate to ='/enrolllogin'></Navigate>
    }
    return children;
};

export default PrivateRoutes;