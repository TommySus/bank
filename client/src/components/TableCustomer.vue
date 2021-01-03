<template>
    <tbody>
        <tr>
          <th scope="row">{{ index+1 }}</th>
          <td>{{ customer.fullName }}</td>
          <td>{{ customer.identityNumber }}</td>
          <td><button @click="viewAccount" class="btn-viewAccount">&#128269; View Account</button><button class="btn-editProfile">&#128393; Edit Profile</button></td>
        </tr>
      </tbody>
</template>

<script>
export default {
  props: ['customer', 'index'],
  methods: {
    viewAccount () {
      const payload = {
        idCustomer: this.customer.id
      }
      this.$store.dispatch('fetchCustomerAccount', payload)
    }
  }
}
</script>

<style>
  .btn-viewAccount {
    background-color: rgb(0, 0, 0);
    color: white;
    border-radius: 4px;
  }
  .btn-editProfile {
    background-color: rgb(0, 0, 0);
    color: white;
    border-radius: 4px;
    margin-left: 10px;
  }
  .btn-viewAccount:hover {
    background-color: white;
    color: black;
    transition: 0.5s;
  }
  .btn-editProfile:hover {
    background-color: white;
    color: black;
    transition: 0.5s;
  }
</style>
