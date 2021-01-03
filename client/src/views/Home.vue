<template>
<div class="about ml-5 mr-5">
  <button @click="register" class="btn-register">Register new customer</button>
  <table class="table table-hover ">
    <thead>
      <tr>
        <th scope="col">No.</th>
        <th scope="col">Identity Number</th>
        <th scope="col">Full Name</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <TableCustomer
      v-for="(customer, index) in customers"
      :key="customer.id"
      :customer="customer"
      :index="index"
    ></TableCustomer>
  </table>
  </div>
</template>

<script>
// @ is an alias to /src
import TableCustomer from '../components/TableCustomer'

export default {
  name: 'Home',
  components: {
    TableCustomer
  },
  methods: {
    fetchCustomer () {
      this.$store.dispatch('fetchCustomer')
    },
    register () {
      this.$router.push({ path: '/register' })
    }
  },
  computed: {
    customers () {
      return this.$store.state.customers
    }
  },
  created () {
    this.fetchCustomer()
  }
}
</script>

<style>
  .btn-register {
    background-color: rgb(0, 0, 0);
    color: white;
    border-radius: 4px;
    margin-bottom: 10px;
  }
  .btn-register:hover {
    background-color: white;
    color: black;
    transition: 0.5s;
  }
</style>
