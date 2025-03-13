import axios from "axios";
import api from "./api";

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
interface UserUpdateData {
  newName: string;
  awsRoleArn: string;
  awsAccessKey: string;
  awsSecretKey: string;
  dockerHubToken: string;
  dockerHubName: string;
  gitHubToken: string;
}
interface addAppData {
  name: string;
  type: string;
  gitHubUrl: string;
  yml: string;
  version: string;
  port: string;
}

let accessToken: string | null = null;

export const loginPost = async ({ email, password }: LoginData) => {
  try {
    const res = await api.post("/user/login", { email, password });
    localStorage.setItem("accessToken", res.data.accessToken);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const signupPost = async ({ name, email, password }: SignupData) => {
  try {
    const res = await api.post(
      `/user/signup?name=${name}&email=${email}&password=${password}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const userGet = async (accessToken: string) => {
  try {
    const res = await api.get("/user");
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const userUpdatePost = async ({
  newName,
  awsRoleArn,
  awsAccessKey,
  awsSecretKey,
  dockerHubToken,
  dockerHubName,
  gitHubToken,
}: UserUpdateData) => {
  try {
    const res = await axios.post(
      `/user/update?name=${newName}&awsRoleArn=${awsRoleArn}&awsAccessKey=${awsAccessKey}&awsSecretKey=${awsSecretKey}&dockerToken=${dockerHubToken}&dockerHubName=${dockerHubName}&gitHubToken=${gitHubToken}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const userDelete = async (accessToken: string) => {
  try {
    const res = await api.delete("/user/withdraw");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addAppPost = async ({
  name,
  type,
  gitHubUrl,
  yml,
  version,
  port,
}: addAppData) => {
  try {
    const res = await api.post("/app/create", {
      name,
      type,
      gitHubUrl,
      yml,
      version,
      port,
    });
    return res;
  } catch (error) {
    console.log(name, type, gitHubUrl, yml, version, port);
    console.log(error);
  }
};

export const appListGet = async () => {
  try {
    const res = await api.get("/app/list");
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const appGet = async (id: string) => {
  try {
    const res = await api.get(`/app?appId=${id}`);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const appDelete = async (id: string) => {
  try {
    const res = await api.delete(`/app?appId=${id}`);
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
