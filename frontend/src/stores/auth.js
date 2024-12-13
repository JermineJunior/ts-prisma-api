import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth' , {
  state: () => {
    return {
      user: null,
      errors: {}
    }
  },
  actions: {
    async signUp(formData){

        const res = await fetch('/api/auth/register' , {
          method: 'post',
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        this.user = data;
    }
  }
})