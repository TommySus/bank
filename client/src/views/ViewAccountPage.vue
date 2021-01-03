<template>
  <div class="about ml-5 mr-5">
    <button @click="home" class="btn-Home">Home</button>
    <button @click="addAccount" class="btn-addAccount">Add Account</button>
  <table class="table table-hover ">
    <thead>
      <tr>
        <th scope="col">Account Number</th>
        <th scope="col">Type</th>
        <th scope="col">Balance</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <TableAccount
      v-for="(account) in accounts"
      :key="account.id"
      :account="account"
    ></TableAccount>
  </table>
  </div>
</template>

<script>
import TableAccount from '../components/TableAccount.vue'

export default {
  components: {
    TableAccount
  },
  methods: {
    home () {
      this.$router.push({ path: '/' })
    },
    addAccount () {
      const idCustomer = this.$store.state.idCustomer
      this.$router.push({ path: '/accounts/' + idCustomer })
    }
  },
  computed: {
    accounts () {
      return this.$store.state.customerAccounts
    }
  }
}
</script>

<style>
  .btn-Home {
    background-color: rgb(0, 0, 0);
    color: white;
    border-radius: 4px;
    margin-left: 10px;
    margin-bottom: 20px;
  }
  .btn-Home:hover {
    background-color: white;
    color: black;
    transition: 0.5s;
  }
  .btn-addAccount {
    background-color: rgb(0, 0, 0);
    color: white;
    border-radius: 4px;
    margin-left: 10px;
    margin-bottom: 20px;
  }
  .btn-addAccount:hover {
    background-color: white;
    color: black;
    transition: 0.5s;
  }
</style>
