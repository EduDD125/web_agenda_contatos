import { useEffect, useState } from "react";

export default function Agenda(){
    const [contactList, setContactList] = useState([]);

    useEffect(() => {
        setContactList(fetchAllContats());
    }, [])
    function fetchAllContats() {
        const contactList = [
            {
                id: 1,
                name: "João"
            },
            {
                id: 2,
                name: "Cleber"
            },
            {
                id: 3,
                name: "Tulio"
            },
        ]
        return contactList
    }



    function searchContacts(event) {
        const name = event.target.value;

        if(name === "") {
            setContactList(fetchAllContats());
            return;
        }
        let newContactList = contactList.filter(person => person.name.toLowerCase().includes(name));
        setContactList(newContactList);

    }

    return(
        <div className="agendaContaine">
            <div className="inputContainer">
                <h2>Pesquise por um contato</h2>
                <input type="text" onChange={event => searchContacts(event)}/>
            </div>
            <div className="listaContatos">
                {contactList.map((person, index) =>
                    <ul>
                        <li id={index}>{person.name}</li>
                    </ul>
                )}
            </div>
        </div>
    );
}