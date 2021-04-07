import React from "react"
import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./teachers.module.css"


const Teachers = () => {
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
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>Jjbj</td>
                        <td>Ожидание</td>
                        <td><button className={classes.confirm}>Подтвердить</button></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>Jjbj</td>
                        <td>Ожидание</td>
                        <td><button className={classes.confirm}>Подтвердить</button></td>
                    </tr>
                    <tr>
                        <td>14654654765765</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>Jjbj</td>
                        <td>Ожидание</td>
                        <td><button className={classes.confirm}>Подтвердить</button></td>
                    </tr>
                </tbody>
            </Table>
        </div>

    )
}
export default Teachers;