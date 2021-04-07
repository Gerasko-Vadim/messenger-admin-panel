import React from "react"
import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./students.module.css"
import SelectCustom from "../select/select";

const Students = () => {
    return (
        <div className={classes.wrapper}>
            <SelectCustom/>
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
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>Jjbj</td>
                        <td>Ожидание</td>
                        <td><button className={classes.btnBlock}>Заблокировать</button></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>Jjbj</td>
                        <td>Ожидание</td>
                        <td><button className={classes.unBlock}>Разблокировать</button></td>
                    </tr>
                </tbody>
            </Table>
        </div>

    )
}
export default Students;