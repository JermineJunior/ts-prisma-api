<script setup>
import { useAuthStore } from '@/stores/auth';
import { reactive } from 'vue'
import { RouterLink } from 'vue-router';



const formData = reactive({
  email: '',
  password: ''
})

const { login } = useAuthStore()
const signIn = async () => {
  await login(formData)
}
</script>

<template>
  <div class="flex items-center justify-center">
    <div class="px-3 my-2 border-l-4 border-l-indigo-600">
      <h3 class="text-3xl font-bold pb-3">Login to your account</h3>
      <form @submit.prevent="signIn">
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
        <div class="flex items-center justify-end space-x-2">
          <RouterLink to="/register" class="text-sm text-zinc-400">Dont have an account</RouterLink>
          <button type="submit" class="p-2 bg-indigo-500 border border-indigo-700 rounded-md  text-sm font-semibold ">
            Sign In</button>
        </div>
      </form>
    </div>
  </div>
</template>
