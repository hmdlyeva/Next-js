"use client";

import { useState } from "react";

type Props = {};

const page = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const AddUser = async () => {
    // console.log(name, age, email);

    let response = await fetch("api/users", {
      method: "POST",
      body: JSON.stringify({ name, age, email }),
    });
    response = await response.json();

    if (response.ok) {
      alert("user added");
    } else {
      alert("error");
    }
  };

  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <br />
      <br />
      <input
        type="number"
        name=""
        id=""
        placeholder="Age"
        onChange={(e) => setAge(e.target.value)}
        value={age}
      />
      <br />
      <br />
      <input
        type="text"
        name=""
        id=""
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <br />
      <br />
      <button onClick={AddUser}>Add User</button>
    </div>
  );
};

export default page;
