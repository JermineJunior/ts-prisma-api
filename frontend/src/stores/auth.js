import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth' , {
  state: () => {
    return {
      user: null,
      errors: {}
    }
  },
  actions: {
    async register(formData){
        const res = await fetch('"http://localhost:8080/api/auth/register' , {
          method: 'post',
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        this.user = data;
        console.log(this.user)
        this.router.push('/login')
    },
    async signIn(formData){
        const res = await fetch('"http://localhost:8080/api/auth/login' , {
          method: 'post',
          body: JSON.stringify(formData),
        })
        const token = await res.json()
        localStorage.setItem('token' , token);
        this.router.push('/home')
    }
  }
})