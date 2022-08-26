import { projectFirestore } from "@/firebase/config";
import { ref } from "vue";

const useCollection = (collectionName) => {
  const error = ref(null);

  const addDoc = async (document) => {
    error.value = null;
    try {
      await projectFirestore.collection(collectionName).add(document);
    } catch (err) {
      console.error(err.message);
      error.value = "Could not send a message";
    }
  };

  return { error, addDoc };
};

export default useCollection;
