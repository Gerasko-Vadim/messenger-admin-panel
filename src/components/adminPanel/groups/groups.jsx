import React from "react"
import classes from "./groups.module.css"
import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Group = () => {
    return (
        <div className={classes.groups}>
            <div className={classes.wrapper}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Группа</th>
                            <th>Действие</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td><button className={classes.btn} onClick={() => console.log("hi")}>Удалить</button></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td><button className={classes.btn}>Удалить</button></td>
                        </tr>
                    </tbody>
                </Table>

            </div>
            <div className={classes.add}>+</div>
        </div>


    )
}
export default Group;