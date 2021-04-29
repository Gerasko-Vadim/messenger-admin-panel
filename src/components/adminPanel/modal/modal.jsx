import React, { useState } from "react"
import Modal from 'react-modal';
import { useDispatch } from "react-redux";
import { addGroup } from "../../../redux/actions/actions";
import classes from "./modal.module.css"

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#modal')

function ModalAddGroup({ changeModal, openModal }) {
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch()

    function closeModal() {
        changeModal()
    }

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const createGroup = () => {
        dispatch(addGroup({
            group: inputValue
        }))
        setTimeout(() => {
            changeModal()
        }, 2000)
    }
    return (
        <div>
            <Modal
                isOpen={openModal}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className={classes.wrapper}>
                    <input type="text" placeholder="Группа" value={inputValue} onChange={(e) => handleChange(e)} />
                    <button onClick={() => createGroup()}>Создать</button>
                </div>

            </Modal>
        </div>
    );
}
export default ModalAddGroup;