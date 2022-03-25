<template>
  <div class="container">
    <!-- <h1>{{ name }}</h1> -->
        <div>

          <h5 class="mt-5 mb-3"></h5>
          
        
        </div>
  </div>
</template>




<script>

export default {
                                    // export this page you are inside to output                                                //name of file you are inside it now
          name: "PostDetailCompo", // name of file you are inside that will export to output
   
    
          data() {
            return {
              APIData:"",
              id: this.$route.params.id,
              name: "PostDetailCompo",
            };
          },



          


};
</script>
