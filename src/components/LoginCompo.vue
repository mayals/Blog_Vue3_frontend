<template>
<div class="container">

    <h5 class="mt-3 mb-3">{{message}}</h5>
    <div>
        <div v-if="error" class="alert alert-warning alert-disabled fade show mt-5" role="alert">
            <strong>{{ error }}</strong>   
        </div>
        
        <form class="form-horizontal" role="form" enctype="multipart/form-data" method="POST" v-on:submit.prevent="addPost">
        
          
            <div class="form-group" style="padding:14px;">
                <div>
                    <label>Username</label>
                    <input
                        name="username"
                        type="text" 
                        v-model="username" 
                        class="form-control" 
                        placeholder="Please enter your username"> 
                </div>

                <br>

                <div>
                    <label>Password</label>
                    <input
                        name="password"
                        type="password" 
                        v-model="password" 
                        class="form-control" 
                        placeholder="Please enter your password"> 
                </div>

                <br>

                <button type="submit" class="btn btn-primary">Login</button>
            </div>

        </form>
    </div>


</div>
</template>



<script>
export default {
            name: "LoginCompo", //name of file you are inside it now
        
            data: function(){
                            return{
                                message :"i am Log in component",    
                            }

            },



};
</script>