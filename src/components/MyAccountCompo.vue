<template>
  <div>
    <h1>Iam MyAccountCompo -- {{title}}-- {{description}}</h1>
          <!-- try bootstrap5 -->
          <section class='container'>
              <div class="alert alert-success" role="alert">
                  my try of bootstrap it is work :)
              </div>
          </section>
  </div>
</template>



<script>
export default {
                name: "MyAccountCompo", //name of file you are inside it now
                data: function () {
                                // dynamic data variable that used inside this component you are in now
                                return {
                                        title: "MyAccountCompo",
                                        description: "description of MyAccountCompo",
                                };
                },
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
            h1 {
              color: rgb(4, 248, 85);
            }
</style>
