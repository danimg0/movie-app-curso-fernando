import { View, Text } from 'react-native'
import '../global.css'
import React from 'react'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Stack } from 'expo-router'

const RootLayout = () => {

  // Create a client
  //Es un objeto que va a estar almacenando aqui todos los resultados de las peticiones
  // Es un gestor de estado que se va a encargar de las tarea asinctronras
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{
          headerShown: false
        }} />
    </QueryClientProvider>
  )
}

export default RootLayout