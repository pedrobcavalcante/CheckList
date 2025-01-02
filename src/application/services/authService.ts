import { login, register } from "../../core/firebase/firebaseAuth";

export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await login(email, password);
    return userCredential.user;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Erro ao fazer login: " + error.message);
    }
    throw new Error("Erro ao fazer login: Erro desconhecido");
  }
};

export const registerUser = async (email: string, password: string) => {
  try {
    const userCredential = await register(email, password);
    return userCredential.user;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Erro ao registrar usuário: " + error.message);
    }
    throw new Error("Erro ao registrar usuário: Erro desconhecido");
  }
};
