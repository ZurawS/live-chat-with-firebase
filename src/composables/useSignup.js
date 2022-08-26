import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

const error = ref();

const signup = async (email, password, displayName) => {
  error.value = null;

  try {
    const response = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!response) throw Error("Could not complete the signup");

    await response.user.updateProfile({
      displayName,
    });
    error.value = null;
    return response;
  } catch (err) {
    console.error(err.message);
    error.value = err.message;
  }
};

const useSignup = () => {
  return { error, signup };
};

export default useSignup;
