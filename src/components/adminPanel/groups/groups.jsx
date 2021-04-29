import React, { useEffect,useState } from "react"
import classes from "./groups.module.css"
import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { Groups, UpdateGroup } from "../../../redux/actions/actions";
import ModalAddGroup from "../modal/modal";

const Group = () => {
    const dispatch = useDispatch()
    const groups = useSelector((state) => state.Groups.arrayGroups)
    const [openModal,setOpenModal] = useState(false)
    useEffect(() => {
        dispatch(Groups())
    }, [])

    const changeModal = ()=> {
        setOpenModal(!openModal)
    }

    const updateGroup = (event) => {
        console.log(event.target.value)
        dispatch(UpdateGroup({
            id: event.target.id,
            status: event.target.value
        }))
    }
    return (
        <>
            <div className={classes.groups}>
                <div className={classes.wrapper}>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Группа</th>
                                <th>Действие</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                groups && groups.map((item) => {
                                    return (
                                        <tr key={item._id}>
                                            <td>{item.group}</td>
                                            <td>
                                                {
                                                    item.status === "active" ? (
                                                        <button value="block" id={item._id} className={classes.btn} onClick={(e) => updateGroup(e)}>Закрыть</button>
                                                    ) : (
                                                        <button value="active" id={item._id} className={classes.btnGreen} onClick={(e) => updateGroup(e)}>Активировать</button>
                                                    )
                                                }

                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>

                </div>
                <div className={classes.add} onClick={()=>changeModal()}>+</div>
            </div>
            <ModalAddGroup changeModal={()=>changeModal()} openModal={openModal} />
        </>

    )
}
export default Group;