import { useEffect, useState } from "react";
import useFetchAllContacts from "../hooks/fetchData/useFetchAllContacts";

export default function Agenda(){
    const fetchAllContacts = useFetchAllContacts();
    const [contactList, setContactList] = useState([]);
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        async function loadContacts() {
            const response = await fetchAllContacts();
            console.log(response);
            setContactList(response);
            setSearchResult(contactList)
        }

        loadContacts();
    }, [])
    



    function searchContacts(event) {
        const name = event.target.value;

        if(name === "") {
            setSearchResult(contactList);
            return;
        }
        let newContactList = contactList.filter(person => person.name.toLowerCase().includes(name.toLowerCase()));
        setSearchResult(newContactList);

    }

    return(
        <div className="agendaContaine">
            <div className="inputContainer">
                <h2>Pesquise por um contato</h2>
                <input type="text" onChange={event => searchContacts(event)}/>
            </div>
            <div className="listaContatos">
                {searchResult.map((person, index) =>
                    <ul>
                        <li id={index}>{person.name}</li>
                    </ul>
                )}
            </div>
        </div>
    );
}