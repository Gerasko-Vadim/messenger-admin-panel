import React, { useEffect } from "react"
import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./teachers.module.css"
import { useDispatch, useSelector } from "react-redux";
import { allteachers } from "../../../redux/actions/actions";


const Teachers = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.Teachers.arrayTeachers)
    useEffect(() => {
        dispatch(allteachers())
    }, [])
    return (
        <div className={classes.wrapper}>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Имя</th>
                        <th>Фамилия</th>
                        <th>Отчество</th>
                        <th>Статус</th>
                        <th>Действие</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.surname}</td>
                                    <td>{item.patronymic}</td>
                                    <td>{item.isActive}</td>
                                    <td><button className={classes.confirm}>Подтвердить</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>

    )
}
export default Teachers;