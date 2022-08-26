import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

const currentUser = ref(projectAuth.currentUser);

projectAuth.onAuthStateChanged((user) => {
  currentUser.value = user;
});

const getUser = () => {
  return { currentUser };
};

export default getUser;
