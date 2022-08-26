import { projectAuth } from "@/firebase/config";
import { ref } from "vue";

const error = ref();

const login = async (email, password) => {
  error.value = null;

  try {
    const response = await projectAuth.signInWithEmailAndPassword(
      email,
      password
    );
    error.value = null;
    return response;
  } catch (err) {
    console.error(err.value);
    error.value = "Incorrect login credentials";
  }
};

const useLogin = () => {
  return { login, error };
};

export default useLogin;
