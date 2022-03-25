<template>
  <div>
    <h1>Iam DashBoardCompo -- {{title}}-- {{description}}</h1>
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
                name: "DashBoardCompo", //name of file you are inside it now
                data: function () {
                                // dynamic data variable that used inside this component you are in now
                                return {
                                        title: "DashBoardCompo",
                                        description: "description of DashBoardCompo",
                                };
                },
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
            h1 {
              color: rgb(248, 4, 106);
            }
</style>
