<script setup>
import { reactive } from 'vue'
const formData = reactive({
  user_name: "",
  email: "",
  password: ""
});

const signUp = async () => {

}
</script>

<template>
  <div class="flex items-center justify-center">
    <div class="px-3 my-2 border-l-4 border-l-indigo-600">
      <h3 class="text-3xl font-bold pb-3">Register a new User</h3>
      <form @submit.prevent="signUp">
        <div class="my-5">
          <label for="name" class="input-label">UserName</label>
          <input type="text" v-model="formData.name" name="name" class="text-input" placeholder="User Name">
        </div>
        <!-- email -->
        <div class="my-5">
          <label for="email" class="input-label">Email Address</label>
          <input type="email" v-model="formData.email" name="email" class="text-input" placeholder="Email Address">
        </div>
        <!-- password -->
        <div class="my-5">
          <label for="password" class="input-label">Password</label>
          <input type="password" v-model="formData.password" name="password" class="text-input" placeholder="Password">
        </div>
        <!-- password confirmation -->
        <div class="my-5">
          <label for="password_confirmation" class="input-label">Password Confirmation</label>
          <input type="password" name="password_confirmation" class="text-input" placeholder="Password">
        </div>
        <div class="flex items-center justify-end space-x-2">
          <RouterLink to="/login" class="text-sm text-zinc-400">already have an account</RouterLink>
          <button type="submit" class="p-2 bg-indigo-500 border border-indigo-700 rounded-md  text-sm font-semibold ">
            Register</button>
        </div>
      </form>
    </div>
  </div>

</template>
