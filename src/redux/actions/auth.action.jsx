import { auth } from "../../firebase-config";

export const login = () => async (dispatch) => {
  try {
    const provider = new auth.GoogleAuthProvider();
    const res = await auth.signInWithPopup(provider);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
