<template>
  <div>


      <HeaderCompo/>     <!--the component that  imported to used inside this page -->     
      
      <section>  
            <router-view/>     <!--to told project that we have router_view -->
      </section>
  
  
  
  </div>
</template>




<script>

import axios from 'axios'
// @ is an alias to /src
import HeaderCompo from '@/components/HeaderCompo.vue'   //import componets to use them in this page 



// Note : your "root component"  is App
export default {
                name:'App',                    //name of file you are inside it now 
                components: {
                        HeaderCompo          //dictionary of names of all components in this page             
                },
                beforeCreate() {
                                    this.$store.commit('initializeStore')
                                    console.log(this.$store.commit('initializeStore'))
                                    
                                    if (this.$store.state.token){
                                                axios.defaults.headers.common['Authorization'] = "token" + this.$store.state.token
                                    }else{
                                                axios.defaults.headers.common['Authorization'] = ""
                                  }
                }
};
</script>






<style>
@import '../node_modules/bulma';
</style>
