<template>
  <div class="chat-window">
    <div class="error" v-if="error">{{ error }}</div>
    <div v-if="formattedDocuments" class="messages" ref="messages">
      <div :key="doc" class="single" v-for="doc in formattedDocuments">
        <span class="created-at"> {{ doc.createdAt }} </span>
        <span class="name"> {{ doc.name }} </span>
        <span class="message"> {{ doc.message }} </span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "../composables/getCollection";
import { formatDistanceToNow } from "date-fns";
import { computed, onUpdated, ref } from "@vue/runtime-core";

export default {
  setup() {
    const { error, documents } = getCollection("messages");

    const formattedDocuments = computed(() => {
      if (!documents.value) return;
      return documents.value.map((doc) => {
        let time = formatDistanceToNow(doc.createdAt.toDate());
        return { ...doc, createdAt: time };
      });
    });

    //auto-scroll to bottom of messages
    const messages = ref(null);
    onUpdated(() => {
      messages.value.scrollTop = messages.value.scrollHeight;
    });

    return { error, formattedDocuments, messages };
  },
};
</script>

<style>
.chat-window {
  background: #fafafa;
  padding: 30px 20px;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin: 0 12px 6px 0;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>
