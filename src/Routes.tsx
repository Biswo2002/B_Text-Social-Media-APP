import { StyleSheet } from 'react-native'
import React from 'react'
import PublicRoutes from './routes/public/PublicRoutes'
import { PrivateRoutes } from './routes/private'
import { useAppContext } from './contexts'

const Routes = () => {

    const { isLoggedIn } = useAppContext();

    return (
        isLoggedIn ? <PrivateRoutes /> : <PublicRoutes />
    )
}

export default Routes

const styles = StyleSheet.create({})