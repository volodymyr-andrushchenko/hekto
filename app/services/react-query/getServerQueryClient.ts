import { QueryClient } from '@tanstack/react-query'
import { cache } from 'react'

// This is QueryClient for server side fetching
// I dont use this now but maybe I will later

// !!! DO NOT USE THIS IN CLIENT COMPONENTS !!!
const getServerQueryClient = cache(() => new QueryClient())
