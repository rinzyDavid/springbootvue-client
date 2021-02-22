<template>
  <div class="hello">
    <h3>Meal  </h3>

<br/>

   
      <table class="table">
        <thead>
          <tr>
          <th>Image</th>
            <th> Name</th>
            <th>Description</th>
            <th>Time to Perpare</th>
            <th>Price</th>
            <th>Buy</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="meal in meals" v-bind:key="meal.mealId">
          <td> <img :src="`${meal.pictureUrl}`" style="width:50px;height:50px"/></td>
            <td>{{ meal.name }}</td>
            <td>{{ meal.description }}</td>
            <td>{{meal.timeToPepare}}</td>
          <td>N{{meal.price}}</td>
            <td>
<router-link :to="{ name: 'order', params: { mealid: meal.mealId,mealname:meal.name,price:meal.price } }" class="btn btn-primary">Buy</router-link>
            </td>
          </tr>
        </tbody>
      </table>
   
   
  
  </div>
</template>

<script>

import OlaRestaurants from "../services/OlaRestaurants";
export default {
  name: 'Meal',
   data() {
    return {
      meals: []
    }
  },

   methods:{

retrieveMeals() {
console.log("calling server")



      OlaRestaurants.listmeal(this.$route.params.menuid)
        .then(response => {
          this.meals = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

   
    
  },
  created() {
    this.retrieveMeals();
  },

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
