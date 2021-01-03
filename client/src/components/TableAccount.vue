<template>
    <tbody>
    <tr>
        <td>{{ account.accountNumber }}</td>
        <td>{{ account.type }}</td>
        <td>{{ account.balance }}</td>
        <td><button class="btn-transfer">Transfer</button></td>
    </tr>
    </tbody>
</template>

<script>
export default {
  props: ['account']
}
</script>

<style>
  .btn-transfer {
    background-color: rgb(0, 0, 0);
    color: white;
    border-radius: 4px;
    margin-left: 10px;
  }
  .btn-transfer:hover {
    background-color: white;
    color: black;
    transition: 0.5s;
  }
</style>
