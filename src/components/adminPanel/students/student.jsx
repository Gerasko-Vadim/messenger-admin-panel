import React, { useEffect } from "react"
import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./students.module.css"
import SelectCustom from "../select/select";
import { useDispatch, useSelector } from "react-redux";
import { allStudents, ChangeUsers, Groups } from "../../../redux/actions/actions";

const Students = () => {
    const dispatch = useDispatch();
    const students = useSelector((state) => state.Students.arrayStudents)
    const groups = useSelector((state) => state.Groups.arrayGroups)

    useEffect(() => {
        dispatch(allStudents());
        dispatch(Groups())
    }, [])
    const changeStudents = (event) => {
        dispatch(ChangeUsers({
            id: event.target.id,
            isActive: event.target.value
        }))
    }
    return (
        <div className={classes.wrapper}>
            <SelectCustom groups={groups && groups} />
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Отчество</th>
                        <th>Группа</th>
                        <th>Статус</th>
                        <th>Действие</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students && students.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.surname}</td>
                                    <td>{item.patronymic}</td>
                                    <td>{item.group}</td>
                                    <td>{item.isActive}</td>
                                    <td>
                                        {item.isActive === "active" ? <button value="blocked"
                                            id={item.id}
                                            className={classes.btnBlock}
                                            onClick={(e) => changeStudents(e)}>
                                            Заблокировать
                                             </button> : null}
                                        {item.isActive === "blocked" ? <button value="active"
                                            id={item.id}
                                            className={classes.btnBlockGreen}
                                            onClick={(e) => changeStudents(e)}>
                                            Разблокировать
                                            </button> : null}
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>

    )
}
export default Students;