import React, { useEffect } from "react"
import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./students.module.css"
import SelectCustom from "../select/select";
import { useDispatch, useSelector } from "react-redux";
import { allStudents, Groups } from "../../../redux/actions/actions";

const Students = () => {
    const dispatch = useDispatch();
    const students = useSelector((state) => state.Students.arrayStudents)
    const groups = useSelector((state) => state.Groups.arrayGroups)

    useEffect(() => {
        dispatch(allStudents());
        dispatch(Groups())
    }, [])
    return (
        <div className={classes.wrapper}>
            <SelectCustom groups={groups && groups} />
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Отчество</th>
                        <th>Группа</th>
                        <th>Действие</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students && students.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.surname}</td>
                                    <td>{item.patronymic}</td>
                                    <td>{item.isActive}</td>
                                    <td><button className={classes.btnBlock}>Заблокировать</button></td>
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