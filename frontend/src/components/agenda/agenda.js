import { useEffect, useState } from "react";
import useFetchAllContacts from "../../hooks/fetchData/useFetchAllContacts";
import useDeleteContact from "../../hooks/deleteData/useDeleteContact";
import AddContact from "./addContactComponent/addContact";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import "./agendaStyle.css"

export default function Agenda(){
    const fetchAllContacts = useFetchAllContacts();
    const deleteContact = useDeleteContact();
    const [contactList, setContactList] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [refreshAgenda, setRefreshAgenda] = useState(true)
    const [isMouseOn, setIsMouseOn] = useState(-1);
    const [checkBoxClicked, setCheckBoxClicked] = useState(false)

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

    function handleEdition(index) {
        console.log("editing ", index);
        setIsOpen(true);
    }

    function handleDeletion(index) {
        console.log("deleting ", index);
        deleteContact(index).then( () =>{
            setRefreshAgenda(true);
        });
    }


    return(
        <div className="agendaContaine">
            <div className="inputContainer">
                <h2>Pesquise por um contato</h2>
                <input type="text" onChange={event => searchContacts(event)}/>
                <AddContact onSucess={() => setRefreshAgenda(true)} isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>
            <div className="listaContatos">
                
                {!checkBoxClicked ?
                    <MdCheckBoxOutlineBlank onClick ={() => setCheckBoxClicked(true)}/>
                    :
                    <MdCheckBox onClick ={() => setCheckBoxClicked(false)}/>
                }
                {searchResult.map((person, index) =>
                    <ul>
                        <li id={index} 
                        onMouseEnter={() => setIsMouseOn(index)}
                        onMouseLeave={() => setIsMouseOn(-1)}> {isMouseOn==index &&
                                <>
                                <FaPencilAlt onClick={() => handleEdition(index)}/>
                                <FaTrash onClick={() => handleDeletion(index)}/>
                                </>
                                } {person.name} </li>
                    </ul>
                )}
            </div>
        </div>
    );
}