import useSendNewContact from '../../../hooks/sendData/useSendNewContact';
import './addContactStyle.css'

export default function AddContactModal({setIsOpen, onSucess}) {
    const registerNewContact = useSendNewContact();

    function handleRegistration(event) {
        event.preventDefault();
        const name = event.target.name.value;
        registerNewContact({name}).then(() => {
            onSucess();
            setIsOpen(false);
        });
    }

    return (
        <div className="modal-background" onClick={() => setIsOpen(false)}>
                <div className="modal-container" onClick={(event) => event.stopPropagation()}>

                    <h2>Contact Registration</h2>
                    <form onSubmit={(event) => handleRegistration(event)}>
                        <label >Name:
                        <input type="text" name="name" placeholder="Write contacts name..." required/>
                        </label>
                        <div className="form-buttons-area">
                            <button onClick={() => setIsOpen(false)}>Cancel</button>
                            <button type='submit'>Add contact</button>
                        </div>
                    </form>
            </div>
        </div>
    );
}