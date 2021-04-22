import Axios from "axios";
const token = localStorage.getItem('token')

const http = Axios.create({
    baseURL: "https://messengerivt.herokuapp.com",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
    },
});


export default {
    signIn: (data) => http.post(`/admin/signIn`, {
        ...data
    }),
    allTeachers: () => http.get(`/admin/teachers`),
    allStudents: () => http.get(`/admin/students`),
    allGroups: ()=>http.get("admin/groups")
}