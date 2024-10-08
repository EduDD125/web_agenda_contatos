import { useState } from "react";
import AddContactModal from "./AddContactModalModal";

export default function AddContact({onSucess, isOpen, setIsOpen}) {

    function handleClick() {
        setIsOpen(true);
        console.log(isOpen);
    }
    
    return (
        <div>
            <button onClick={() => handleClick()}>Adicionar contato</button>
            {isOpen &&
                <AddContactModal setIsOpen={setIsOpen} onSucess={onSucess}/>
                
            }
        </div>
    );
}