export const getUsuario = async (context) => {
    try {
      const data = await fetch("https://randomuser.me/api/");
      const { results } = await data.json();
      context.commit('setUsers', results);
      //context.commit('setCount', count);
    } catch (error) {
      console.error("Error: " + error);
    }
}