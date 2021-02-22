<template>
  <div class="hello">
    <h3>Menu for {{this.$route.params.name}}</h3>



   
      <table class="table">
        <thead>
          <tr>
            <th> Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="menu in menus" v-bind:key="menu.menuId">
            <td>{{ menu.title }}</td>
            <td>{{ menu.description }}</td>
            <td>
<router-link :to="{ name: 'meal', params: { menuid: menu.menuId } }" class="btn btn-primary">Select</router-link>
            </td>
          </tr>
        </tbody>
      </table>
   
   
  
  </div>
</template>

<script>

import OlaRestaurants from "../services/OlaRestaurants";
export default {
  name: 'Menu',
  data() {
    return {
      menus: []
    }
  },

   methods:{

retrieveMenu() {
console.log("calling server")



      OlaRestaurants.listmenu(this.$route.params.restaurantid)
        .then(response => {
          this.menus = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

   
    
  },

  mounted() {
    this.retrieveMenu();
  },


  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
