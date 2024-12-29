import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      user: null,
      errors: {},
    };
  },
  actions: {
    async register(formData) {
      const res = await fetch("/api/auth/register", {
        method: "post",
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      this.user = data;
      console.log(this.user);
      this.router.push("/login");
    },
    async login(formData) {
      const res = await fetch("/api/auth/login", {
        method: "post",
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      this.user = data.user;
      localStorage.setItem("token", data.token);
      this.router.push({ name: "home" });
    },
  },
});
