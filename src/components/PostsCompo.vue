<template>
<div>
 

    <div :class="'container'">

        <div>
            <router-link  type="button" class="btn btn-sm btn-success mt-5" aria-current="page" :to="{ name:'PostCreateCompo' }">
                Add Post
            </router-link>  
        </div>

        <h4 class="display" >posts</h4>
       
        <div :class="'row row-cols-1 row-cols-lg-3'">
            <div v-for="post in APIData" :key="post.id">
                 
                <div :class="'card  mb-4'"> 
                    <div :class="'card-body'">
                        <h5 :class="'card-title'">
                            <router-link  :to="{name:'PostDetailCompo', params:{ id:post.id } }" :class="'card-link my-a'">
                                {{post.title}}   
                            </router-link>
                        </h5>

                        <div class="badge bg-secondary text-light"><small>by: {{}}</small></div>    
                        
                        <p class="card-text text-truncate mt-4">
                                {{}} 
                        </p>
                        <p class="card-text"><small class="text-muted">{{}}</small></p>
                        
                        <router-link  :to="{   name:'PostDetailCompo', params:{ id:post.id } }" :class="'btn btn-primary'" >
                                Go Details
                        </router-link>   
                    </div>     
                </div>
                    
            </div>
        </div>                         
    </div>

</div>
</template>


<script>


export default {                            // export this page you are inside to output                                                //name of file you are inside it now 
                name: "PostsCompo",         // name of file you are inside that will export to output
                                  

                data () {
                        return  {
                            
                        }
                },


                methods:{
                                
                }
}
</script>





<style scoped>
  .mymargin{
      margin-right: 30px;
  }


.my-a {
    color: #305285;
    font-weight: bold;
    text-decoration: none !important;
}

</style>