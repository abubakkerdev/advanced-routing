import React from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

function SchoolUser() {
  let users = useLoaderData();

  console.log("Users it run 2");

  return (
    <section>
      <h3>This is Users Page</h3>
      {/* {users?.map((el, index) => (
        <h3 key={index}>{el.username}</h3>  It is bad practice.
      ))} */}
      {users.map((el, index) => (
        <h4 key={index}>{el.username}</h4>
      ))}
    </section>
  );
}

export default SchoolUser;

export async function user() {
  let { data } = await axios.get("https://jsonplaceholder.typicode.com/users");

  console.log("data it run 1", data);
  return data;
}
