<template>
  <div>
     <h1>Create User</h1>
        <form v-on:submit.prevent = "createUser">
            <p>name: <input type="text" v-model="coffee.name"></p>
            <p>price: <input type="text" v-model="coffee.price"></p>
            <p>type: <input type="text" v-model="coffee.type"></p>
            <p><button type="submit">create munu</button></p>
        </form>

  </div>
</template>

<script>
import CoffeesService from '../../services/CoffeesService';
import UsersService from '../../services/CoffeesService'
export default {
    data () {
        return {
            coffee: {
                name: '',
                price: '',
                type: '',
                status: 'active'
            }
        }
    },
    methods: {
        async createMenu () {
            try {
                await CoffeesService.post(this.coffee)
                this.$router.push({
                    name: 'menus'
                })
            } catch (err) {
                console.log(err)
            }
        }
    }
}

</script>

<style scoped>
/* CSS เฉพาะหน้านี้ */
</style>