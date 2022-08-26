<template>
  <form @submit.prevent="handleSubmit">
    <label for="displayName">Name:</label>
    <input
      type="text"
      id="displayName"
      required
      placeholder="displayName"
      v-model="displayName"
    />

    <label for="email">Email:</label>
    <input
      type="email"
      id="email"
      required
      placeholder="email"
      v-model="email"
    />

    <label for="password">Password:</label>
    <input
      type="password"
      id="password"
      required
      placeholder="password"
      v-model="password"
    />

    <div class="error" v-if="error">{{ error }}</div>
    <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import useSignup from "../composables/useSignup";

export default {
  setup(props, context) {
    //refs
    const displayName = ref();
    const email = ref();
    const password = ref();
    const { error, signup } = useSignup();

    const handleSubmit = async () => {
      await signup(email.value, password.value, displayName.value);
      if (!error.value) context.emit("signup");
    };
    return {
      displayName,
      email,
      password,
      handleSubmit,
      error,
    };
  },
};
</script>

<style></style>
