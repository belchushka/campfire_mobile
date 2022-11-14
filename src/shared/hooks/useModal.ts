import {useState} from "react";

export const useModal = ()=>{
    const [showModal, setShowModal] = useState(false)

    const toggleModal = ()=>setShowModal(state=>!state)

    return {
        visible: showModal,
        toggle: toggleModal
    }
}