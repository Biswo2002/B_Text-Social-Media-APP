import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PrivateRoutes } from './routes/private'
import PublicRoutes from './routes/public/PublicRoutes'

const Routes = () => {
    return (
        // <PrivateRoutes />
        <PublicRoutes />
    )
}

export default Routes

const styles = StyleSheet.create({})