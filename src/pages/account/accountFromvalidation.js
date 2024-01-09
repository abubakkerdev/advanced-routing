export default async function userFromValidation({ request }) {
  const formInput = await request.formData();

  let uname = formInput.get("uname");
  let email = formInput.get("email");
  let password = formInput.get("password");
  let err = {};

  if (uname == "") {
    err.uname = "Give your name please";
  }

  if (email == "") {
    err.email = "Give your email please";
  }

  if (password == "") {
    err.password = "Give your password please";
  }

  if (Object.keys(err).length == 0) {
    return "ok";
  }

  return err;
}
