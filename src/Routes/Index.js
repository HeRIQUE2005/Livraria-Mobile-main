import { useContext } from 'react'

import { AutContexts } from '../Context/Contexts'

import NoAuthRotas from '../Routes/NoAuth'
import AuthRotas from '../Routes/Auth'

export default function RotasIndex() {
    const { autenticado } = useContext(AutContexts)
    

    return(
        autenticado === false ? <NoAuthRotas /> : <AuthRotas />
    )
}

