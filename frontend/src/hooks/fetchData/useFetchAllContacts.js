import { apiClient } from "../../axios/apiClient";

export default function useFetchAllContacts() {
    async function fetchAllContacts() {
        try {
            const response = await apiClient.get('/friend');
            console.log(response.data);
            return response.data;
        }
        catch(error) { 
            console.log("Erro na busca dos contatos:", error)
            return [];
        }
    }


    return fetchAllContacts;
}