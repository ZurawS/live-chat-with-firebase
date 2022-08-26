<template>
  <div class="container">
    <Navbar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import ChatWindow from "../components/ChatWindow.vue";
import NewChatForm from "../components/NewChatForm.vue";
import getUser from "@/composables/getUser";
import Navbar from "../components/Navbar.vue";
import { watch } from "@vue/runtime-core";
import { useRouter } from "vue-router";
export default {
  components: { Navbar, NewChatForm, ChatWindow },
  setup() {
    const { currentUser: user } = getUser();
    const router = useRouter();

    watch(user, () => {
      if (!user.value) router.push({ name: "Welcome" });
    });
  },
};
</script>

<style></style>
