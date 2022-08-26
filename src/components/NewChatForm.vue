<template>
  <form>
    <textarea
      placeholder="Type a message and hit enter to send"
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    >
  a
  </textarea
    >
    <div class="error" v-if="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import getUser from "@/composables/getUser";
import useCollection from "@/composables/useCollection";
import { timeStamp } from "../firebase/config";

export default {
  setup() {
    const { currentUser: user } = getUser();
    const { addDoc, error } = useCollection("messages");
    const message = ref("");

    const handleSubmit = async () => {
      const chatMessage = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timeStamp(),
      };
      await addDoc(chatMessage);

      if (!error.value) message.value = "";
    };

    return { message, handleSubmit, error };
  },
};
</script>

<style>
form {
  margin: 10px;
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  outline: none;
}
</style>
