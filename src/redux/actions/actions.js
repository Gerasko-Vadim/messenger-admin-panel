import API from '../API';


export function seccessAllTeachers(data) {
    return {
        type: "ALL_TEACHERS",
        payload: data,
    }
}

export function seccessAllStudents(data) {
    return {
        type: "ALL_STUDENTS",
        payload: data,
    }
}

export function seccessGroups(data) {
    return {
        type: "ALL_GROUPS",
        payload: data,
    }
}

export function allteachers() {
    return async (dispatch) => {
        await API.allTeachers()
            .then(res => {
                dispatch(seccessAllTeachers(res.data))
            });
    }
}

export function allStudents() {
    return async (dispatch) => {
        await API.allStudents()
            .then(res => {
                dispatch(seccessAllStudents(res.data))
            });
    }
}

export function Groups() {
    return async (dispatch) => {
        await API.allGroups()
            .then(res => {
                dispatch(seccessGroups(res.data))
            });
    }
}