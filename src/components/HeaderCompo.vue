<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container-fluid">

                    <a class="navbar-brand" href="#">Navbar</a>
                        
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    

                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <router-link class="nav-link active" aria-current="page" to="/" exact>Home</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/posts">Blog</router-link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About US</a>
                            </li>  
                        </ul>

                        <ul class="navbar-nav ms-auto">
                            <li class="dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Account
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><router-link class="dropdown-item" to="/login">Login</router-link></li>
                                        <li><router-link class="dropdown-item" to="/signup">Sign Up</router-link></li>
                                        
                                        <li><router-link class="dropdown-item" to="/myaccount">My Account</router-link></li>
                                        <li><router-link class="dropdown-item" to="/dashboard">Dashboard</router-link></li>
                                        <li><router-link class="dropdown-item" to="/logout">Logout</router-link></li>
                                    </ul>
                            </li>
                        </ul>
                   </div>
                   
                </div>
        </nav>
    
    </div>
  
</template>



<script>
export default { 
            name:'HeaderCompo',                      //name of file you are inside it now 
            data :function(){                       // dynamic data variable that used inside this component you are in now
                            return{
                                    // title: "HeaderComponent",
                                    // description: "description of HeaderComponent",
                                    // username:"Mayals"
                            }
            },                                             
}
</script>



<style scoped>

</style>


