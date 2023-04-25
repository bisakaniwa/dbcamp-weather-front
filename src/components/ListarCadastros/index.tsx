import { useState } from 'react'
import { Meteorologia } from '../../interfaces/MeteorologiaInterface'
import { useAxios } from '../../hooks/useAxios'

export const ListarCadastros = () => {
    const [cadastros, setCadastros] = useState<Meteorologia[]>();
    const { getAll } = useAxios();

    const getCadastros = () => {
        // getAll()
    }

    return (
        <></>
    )
}