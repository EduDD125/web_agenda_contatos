import { apiClient } from "../../axios/apiClient";

export default function useDeleteContact() {
    async function deleteContact(index) {

        const data = {
            index: index
        }

        console.log(data);
        try {
            const response = await apiClient.delete("/friend", {data});
            console.log("Deleting contact sucessed:", response);
            return response;
        } catch(error) {
            console.log("error deleting:", error);
        }
        
    }

    return deleteContact;
}