import React, { useEffect } from "react";
import { Form, useActionData, useNavigate } from "react-router-dom";

function AccountFrom() {
  const errors = useActionData();
  const navigate = useNavigate();

  useEffect(() => {
    if (errors != undefined && errors === "ok") {
      navigate("/account/success");
    }
  }, [errors]);

  return (
    <div>
      <h3>User From List</h3>
      <Form action="/account/from" method="POST">
        <div>
          <input type="text" name="uname" placeholder="your name" /> <br />
          {errors && errors.uname ? <p>{errors.uname}</p> : ""}
        </div>
        <div>
          <input type="email" name="email" placeholder="your email" /> <br />
          {errors && errors.email ? <p>{errors.email}</p> : ""}
        </div>
        <div>
          <input type="password" name="password" placeholder="your password" />
          {errors && errors.password ? <p>{errors.password}</p> : ""}

          <br />
        </div>
        <br />

        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}

export default AccountFrom;
