import { useEffect, useState } from "react";
import useFetchAllContacts from "../hooks/fetchData/useFetchAllContacts";
import AddContact from "./addContactComponent/addContact";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

export default function Agenda(){
    const fetchAllContacts = useFetchAllContacts();
    const [contactList, setContactList] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [refreshAgenda, setRefreshAgenda] = useState(true)
    const [isMouseOn, setIsMouseOn] = useState(-1);

    useEffect(() => {
        async function loadContacts() {
            const response = await fetchAllContacts();
            setContactList(response);
            setSearchResult(response);
        }

        console.log("refreshAgenda ", refreshAgenda);
        if (refreshAgenda) {
            loadContacts(searchResult);
            setRefreshAgenda(false);
        }
    }, [refreshAgenda])
    


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
                <AddContact onSucess={() => setRefreshAgenda(true)}/>
            </div>
            <div className="listaContatos">
            <MdCheckBoxOutlineBlank/> 
                {searchResult.map((person, index) =>
                    <ul>
                        <li id={index} 
                        onMouseEnter={() => setIsMouseOn(index)}
                        onMouseLeave={() => setIsMouseOn(-1)}> {isMouseOn==index &&
                             <>
                                <FaPencilAlt />
                                <FaTrash />
                             </>
                             } {person.name} </li>
                    </ul>
                )}
            </div>
        </div>
    );
}