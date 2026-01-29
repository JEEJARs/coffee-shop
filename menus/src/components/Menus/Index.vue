<template>
  <div>
    <h1>Get All Users</h1>
    <div v-if="coffee.length">
      <div>รายการเมนูในร้าน {{ menus.length }}</div>
      <div v-for="coffee in menus" v-bind:key="user.id">
        <p>id: {{ coffee.id }}</p>
        <p>ชื่อเมนู: {{ coffee.name }}</p>
        <p>:ราคา: {{ coffee.price }}</p>
        <p>
          <button v-on:click="navigateTo('/menu/' + user.id)">ดูข้อมูลของเมนู</button>
          <button v-on:click="navigateTo('/menu/edit/' + user.id)">แก้ไขข้อมูลเมนู</button>
          <button v-on:click="deleteUser(coffee)">ลบเมนู</button>
        </p>
        <hr>
      </div>
    </div>

    <p><button @click="navigateTo('/menu/create')">เพิ่มเมนู</button></p>
  </div>
</template>

<script>
import CoffeesService from '../../services/CoffeesService';
import UsersService from '../../services/CoffeesService'

export default {
  data() {
    return {
      users: []
    };
  },
  async created() {
    try {
      this.coffee = (await CoffeesService.index()).data
      console.log(this.coffee)
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route)
    },
    async deletemenu(coffee) {
      let result = confirm("Want to delete?")
      if (result) {
        try {
          await CoffeesService.delete(coffee)
          this.refreshData()
        } catch (err) {
          console.log(err)
        }
      }
    },
    async refreshData() {
      this.coffee = (await CoffeesService.index()).data
    }   
  },

}


</script>

<style scoped>
/* CSS เฉพาะหน้านี้ */
</style>