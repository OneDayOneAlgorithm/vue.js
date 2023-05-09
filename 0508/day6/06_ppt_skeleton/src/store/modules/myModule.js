const myModule = {
    state: {
        level: 20,
    },
    mutations: {
        INCREMENT_Level(state){
            state.level += 1
        }
    },
    actions: {
        incrementAge(context){
            context.commit(INCREMENT_AGE)
        }
    }
}
export default myModule