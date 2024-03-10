import axios from "axios";

import { defineStore } from "pinia";
import {ref} from 'vue';

export const useGuitarraStore = defineStore("GuitarraStore", () => {
    const listaGuitarra = ref([]);

    const obtenerGuitarras = async () =>{
        let r =  await axios.get(`https://quickpay.com.bo:9080/api/prueba-guitarra/obtener-todos`);
        listaGuitarra.value = r.data.result;
    };
    const eliminarGuitarra = async(guitarraId) =>{
        await axios.delete(`https://quickpay.com.bo:9080/api/prueba-guitarra/eliminar/${guitarraId}`);
    };
    const editarGuitarra = async(objGuitarra) =>{
        await axios.put(`https://quickpay.com.bo:9080/api/prueba-guitarra/modificar`,objGuitarra);
    }
    const registrarGuitarra = async(objGuitarra) =>{
        
    }
    return {
        obtenerGuitarras,listaGuitarra,eliminarGuitarra,editarGuitarra
      }

});