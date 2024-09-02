import { apiClient } from "../../axios/apiClient";

export default function useSendNewContact() {

    async function registerNewContact({name}) {
        try {
            const response = await apiClient.post("/friend", {
                name: name
            })
            console.log("User data sended sucessfully: ", response);
        } catch (error) {
            console.log("Error sending data: ", error);
        }   
    }

    return registerNewContact;
}