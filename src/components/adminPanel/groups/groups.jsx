import React, { useEffect } from "react"
import classes from "./groups.module.css"
import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { Groups } from "../../../redux/actions/actions";

const Group = () => {
    const dispatch = useDispatch()
    const groups = useSelector((state) => state.Groups.arrayGroups)
    useEffect(() => {
        dispatch(Groups())
    }, [])
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
                        {
                            groups && groups.map((item) => {
                                return (
                                    <tr key={item._id}>
                                        <td>{item._id}</td>
                                        <td>{item.group}</td>
                                        <td><button className={classes.btn} onClick={() => console.log("hi")}>Удалить</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>

            </div>
            <div className={classes.add}>+</div>
        </div>


    )
}
export default Group;