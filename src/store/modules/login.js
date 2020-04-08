const login =  {
    namespaced:true,
    state:{
        logginPage: true
    },
    mutations:{
        LOGGINPAGE(state,be){
            state.logginPage = be;
        }
    },
    actions:{

    },
    getters:{
        getLogginPage(state){
            return state.logginPage
        }
    }


}

export default login;