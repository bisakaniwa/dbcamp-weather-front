import axios from "axios";
import { baseURL } from "../../axios/config";
import { ModelDoBack } from "../../interfaces/ModelDoBack";
import { useState } from "react";
import { Meteorologia } from "../../interfaces/MeteorologiaInterface";

export const useAxios = () => ({

    getAll: async () => {
        const [cadastros, setCadastros] = useState<Meteorologia[]>([]);
        try {
            const response = await axios.get(baseURL);
            const data = response.data;
            setCadastros(data);
            return cadastros;
        } catch (error) {
            console.log(error)
        }
    },

    getByCity: async (cidade: string) => {
        try {
            const response = await axios.get(`baseURL/${cidade}`);
            return response.data;
        } catch (error) {
            console.log(error)
        }
    },

    post: async (dadosDoCadastro: ModelDoBack) => {
        try {
            const response = await axios.post(baseURL, dadosDoCadastro);
            return response.data;
        } catch (error) {
            console.log(error)
        }
    }
}) 