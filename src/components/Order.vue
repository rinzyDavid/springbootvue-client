<template>
  <div class="hello">
    <h3>Order Form  </h3>

<br/>

<div class="row m-2 p-3">

<div class="col-md-8">

<form>

 <div class="form-group">
    <label for="exampleInputPassword1">Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Name" v-model="name">
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
 
 
  <paystack
        :amount="500"
        :email="email"
        :paystackkey="paystackkey"
        :reference="reference"
        :callback="callback"
        :close="close"
        :embed="false"
    >
       <i class="fas fa-money-bill-alt"></i>
       Make Payment
    </paystack>
</form>

</div>

<div class="col-md-8">

 <p>Selected Meal</p>
      <table class="table">

        <thead>
          <tr>
            <th> Name</th>
           
            <th>Price</th>
           
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ this.$route.params.mealname }}</td>
           
          <td>N{{this.$route.params.price}}</td>
            <td>

            </td>
          </tr>
        </tbody>
      </table>


</div>


</div>


   
   
   
  
  </div>
</template>

<script>
import paystack from 'vue-paystack';

export default {
  name: 'Order',
   components: {
        paystack
    },
  
  data(){
        return{
          paystackkey: "pk_test_555e6968c80814f06b44767903a3e732c75f5692", //paystack public key
          email: this.email, // Customer email
          amount: this.$route.params.price // in kobo
        }
    },
    computed: {
      reference(){
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( let i=0; i < 10; i++ )
          text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
      }
    },
    methods: {
      callback: function(response){
        console.log(response)
      },
      close: function(){
          console.log("Payment closed")
      }
    }
  
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
