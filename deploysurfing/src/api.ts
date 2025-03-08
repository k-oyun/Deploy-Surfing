import axios from "axios";

export const BASE_URL = "https://smul.store";

interface LoginData {
  email: string;
  password: string;
}
interface SignupData {
  name: string;
  email: string;
  password: string;
}

export const loginPost = async ({ email, password }: LoginData) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/user/login`,
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    localStorage.setItem("accessToken", res.data.accessToken);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const signupPost = async ({ name, email, password }: SignupData) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/user/signup?name=${name}&email=${email}&password=${password}`,

      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
