export const crearTarea = async (context) => {
    try {
      
    
    context.commit('newTareas', context.state.tareas);
   
    console.log(context.state.tareas.nombre);     
   
    } catch (error) {
      console.error("Error: " + error);
    }
}

export const getTareas = async (context) => {
  try {
    const data = [
      {
        title: "task1",
        done: true,
      },
      {
        title: "task2",
        done: false,
      },
      {
        title: "task3",
        done: true,
      },
      {
        title: "task4",
        done: false,
      },
    ];
   
    context.commit('setTareas', data);
    
    console.log(data);
  } catch (error) {
    console.error("Error: " + error);
  }
}

export const deleteTarea = async (context, task) => {
  try {
    context.commit('deleteT', task);
    console.log(task);
  } catch (error) {
    console.error("Error: " + error);
  }
}