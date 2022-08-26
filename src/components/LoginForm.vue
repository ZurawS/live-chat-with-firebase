<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="email">Email:</label>
      <input
        type="email"
        id="email"
        required
        placeholder="email"
        v-model="email"
      />
    </div>

    <div>
      <label for="password">Password:</label>
      <input
        type="password"
        id="password"
        required
        placeholder="password"
        v-model="password"
      />
    </div>

    <div class="error" v-if="error">{{ error }}</div>
    <button>Log in</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useLogin from "../composables/useLogin";

export default {
  setup(props, context) {
    //refs
    const email = ref();
    const password = ref();
    const { error, login } = useLogin();

    const handleSubmit = async () => {
      await login(email.value, password.value);

      if (!error.value) context.emit("login");
    };

    return {
      email,
      password,
      handleSubmit,
      error,
    };
  },
};
</script>

<style></style>
