<template>
<div class="container">
    <h5 class="mt-3 mb-3">{{message}}</h5>
    <div>
        <div v-if="error" class="alert alert-warning alert-disabled fade show mt-5" role="alert">
            <strong>{{ error }}</strong>   
        </div>
        
        <form class="form-horizontal" role="form" enctype="multipart/form-data" method="POST" v-on:submit.prevent="addPost">
        
          
            <div class="form-group" style="padding:14px;">
                <input 
                v-model="title" 
                type="text" 
                class="form-control" 
                placeholder="Please enter your post title"> 
                <br>

                <textarea  
                v-model="body"
                rows="8"  
                class="form-control" 
                placeholder="Please enter your post body">
                </textarea>
                <br>

                <button type="submit" class="btn btn-primary">Create post</button>
            </div>

        </form>

    </div>
</div>
</template>




<script>


export default {
                            // export this page you are inside to output                                                //name of file you are inside it now
        name: "PostCreateCompo", // name of file you are inside that will export to output
   
 
        data () {
                return  {
                    message :"Add a new post",
                        title : null,
                        body : null,
                        error : null,
                }
        },

        

        methods:{
                
        },



        created() {                                          
        },
}
</script>