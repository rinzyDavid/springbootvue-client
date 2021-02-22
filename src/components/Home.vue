<template>
  <div>
    <h3>Welcome to Ola Food Restaurant</h3>



    <div class="container m-2 p-2 row">
    
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by city"
         v-model="city"
          />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
           @click="searchRestaurant"
          >
            Search
          </button>
        </div>
      </div>

</div>
      <div class="col-md-8">

<table class="table">
        <thead>
          <tr>
          <th>id</th>
            <th>Restaurant Name</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="rest in restaurants" v-bind:key="rest.restaurantId">
            <td>{{ rest.restaurantId }}</td>
            <td>{{ rest.name }}</td>
            <td>{{ rest.email }}</td>
            <td>
<router-link :to="{ name: 'menu-list', params: { restaurantid: rest.restaurantId,name:rest.name } }" class="btn btn-primary">Select</router-link>
            </td>
          </tr>
        </tbody>
      </table>


      </div>
    
      
    </div>
   
  
  </div>
</template>

<script>

import OlaRestaurants from "../services/OlaRestaurants";



export default {
  name: 'Home',
   data() {
    return {
      restaurants: []
    }
  },


  methods:{

retrieveRestaurants() {
console.log("calling server")

      OlaRestaurants.fetchAll()
        .then(response => {
          this.restaurants = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    searchRestaurant(){

    OlaRestaurants.searchRestaurant(this.city)
        .then(response => {
          this.restaurants = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });

    },
    navigate(){

    },

    
  },

   created() {
    this.retrieveRestaurants();
  },

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
