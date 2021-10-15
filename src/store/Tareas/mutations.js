export const setTareas = (state, value) => {
    state.tasks = value;
}
export const newTareas = (state, value) => {
    state.tasks.push({
        title: value.nombre,
        done: value.estado,
    });
    state.tareas.nombre=""
}

export const deleteT = (state, value) => {
    state.tasks.splice(state.tasks.indexOf(value), 1);
}