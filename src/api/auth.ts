import { pb } from "./pb";

export async function logIn(email: string, password: string) {
  return await pb
    .collection("users")
    .authWithPassword(email, password)
    .then(() => {
      console.log("ログインに成功しました。");
      return true;
    })
    .catch((er: Error) => {
      console.error(er);
      return false;
    });
}

export async function logOut() {
  pb.authStore.clear();
  console.log("ログアウトに成功しました。");
}

export async function signUp(
  usrname: string,
  email: string,
  password: string,
  passwordConfirm: string,
  name: string
) {
  const data = {
    username: usrname,
    email: email,
    emailVisibility: true,
    password: password,
    passwordConfirm: passwordConfirm,
    name: name,
  };
  return await pb
    .collection("usrs")
    .create(data)
    .then(() => {
      console.log("登録に成功しました。");
      return true;
    })
    .catch((err) => {
      console.error(err);
      return false;
    });
}
