// import { createApp } from 'vue'
import { createStore } from 'vuex'
// import App from './App.vue'


// Create a new store instance and export it .
export default createStore({

  
                            state: {
                                  isLoading : false,
                                  isAuthenticated : false,
                                  token : ""
                            },



                            mutations: {
                                      initializeStore(state){
                                                    if (localStorage.getItem('token')) {
                                                      state.token = localStorage.getItem('token')
                                                      state.isAuthenticated = true
                                                    } else {
                                                      state.token = ''
                                                      state.isAuthenticated = false
                                                    }           
                                      },
                                    
                                      setIsLoading(state,status){
                                                      state.isLoading = status
                                      },
                                    
                                      setToken(state,token){
                                                      state.token = token
                                                      state.isAuthenticated = true
                                      },

                                      removeToken(state){
                                                      state.token = ''
                                                      state.isAuthenticated = false
                                      }
                            },
   




                            actions: {
                              
                            },


                            
                            modules: {
                              
                            },

})



// const app = createApp({App})

// // Install the store instance as a plugin
// app.use(store)



// const app = createApp({ /* your root component */ })

// // Install the store instance as a plugin
// app.use(store)