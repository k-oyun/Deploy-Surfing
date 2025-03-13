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
interface UserUpdateData {
  newName: string;
  awsRoleArn: string;
  awsAccessKey: string;
  awsSecretKey: string;
  dockerHubToken: string;
  dockerHubName: string;
  gitHubToken: string;
  accessToken: string;
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

const getAccessToken = async () => {
  if (accessToken) return accessToken;
  try {
    const token = await localStorage.getItem("accessToken");
    if (token) {
      accessToken = `Bearer ${token}`;
    }
    return accessToken;
  } catch (error) {
    console.error("Token 에러!:", error);
    throw error;
  }
};

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
    // console.log(res.data.accessToken);
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

export const userGet = async (accessToken: string) => {
  try {
    const res = await axios.get(`${BASE_URL}/user`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    // console.log(res);
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
  accessToken,
}: UserUpdateData) => {
  try {
    const res = await axios.post(
      `${BASE_URL}/user/update?name=${newName}&awsRoleArn=${awsRoleArn}&awsAccessKey=${awsAccessKey}&awsSecretKey=${awsSecretKey}&dockerToken=${dockerHubToken}&dockerHubName=${dockerHubName}&gitHubToken=${gitHubToken}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const userDelete = async (accessToken: string) => {
  try {
    const res = await axios.delete(
      `${BASE_URL}/user/withdraw`,

      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res.data);
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
  const accessToken = await getAccessToken();
  try {
    const res = await axios.post(
      `${BASE_URL}/app/create`,
      { name, type, gitHubUrl, yml, version, port },
      {
        headers: {
          Authorization: accessToken,
          "Content-Type": "application/json",
        },
      }
    );
    // console.log(name, type, gitHubUrl, yml, version, port);
    console.log(res);
    return res;
  } catch (error) {
    console.log(name, type, gitHubUrl, yml, version, port);
    console.log(error);
  }
};

export const appListGet = async () => {
  const accessToken = await getAccessToken();

  try {
    const res = await axios.get(`${BASE_URL}/app/list`, {
      headers: {
        Authorization: accessToken,
        "Content-Type": "application/json",
      },
    });

    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const appGet = async (id: string) => {
  const accessToken = await getAccessToken();

  try {
    const res = await axios.get(
      `${BASE_URL}/app?appId=${id}`,

      {
        headers: {
          Authorization: accessToken,
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

export const appDelete = async (id: string) => {
  const accessToken = await getAccessToken();
  try {
    const res = await axios.delete(
      `${BASE_URL}/app?appId=${id}`,

      {
        headers: {
          Authorization: accessToken,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res);
    return res;
  } catch (error) {
    console.log(error);
  }
};
