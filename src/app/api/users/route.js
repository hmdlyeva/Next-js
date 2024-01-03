// import { NextResponse } from "next/server";

// import { NextResponse } from "next/server";

// import { users } from "@/app/util/db";

// export function GET() {
//   const data = users;
//   return NextResponse.json({ data });
// }

// export async function POST(req, res) {
//   let { name, email, age } = await req.json();
//   console.log(email, password);

//   if (!name || !email || !age) {
//     return NextResponse.json(
//       { error: "required filed not found", ok: false },
//       { status: 400 }
//     );
//   }

//   return NextResponse.json(
//     {
//       res: "data send successfully",
//       ok: true,
//     },
//     { status: 201 }
//   );
// }

import { users } from "@/app/util/db";
import { NextResponse } from "next/server";
import fs from "fs";

//1 . get all user

export function GET() {
  const data = users;
  return NextResponse.json({ data }, { status: 200 });
}

// 4. post user

export async function POST(req, res) {
  let { id, name, email, password } = await req.json();

  if (!id || !name || !email || !password) {
    return NextResponse.json(
      { result: "required filed not found" },
      { status: 400 }
    );
  } else {
    users.push({ id, name, email, password });

    const updateduserArr = users;
    const updateData = JSON.stringify(updateduserArr, null, 2);

    fs.writeFileSync(
      "./src/app/util/db.js",
      `export const users = ${updateData}`,
      "utf-8"
    );

    return NextResponse.json({ succes: "user successfully aded" });
  }
}

//5. update user

export async function PUT(req, res) {
  let { id, name, email, password } = await req.json();

  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex === -1) {
    return NextResponse.json({ result: "user not found" }, { status: 404 });
  }

  if (name) {
    users[userIndex].name = name;
  }
  if (email) {
    users[userIndex].email = email;
  }
  if (password) {
    users[userIndex].password = password;
  }

  const updateduserArr = users;
  const updateData = JSON.stringify(updateduserArr, null, 2);

  fs.writeFileSync(
    "./src/app/util/db.js",
    `export const users = ${updateData}`,
    "utf-8"
  );

  return NextResponse.json({ succes: "user successfully updated" });
}

//6. delete user

export async function DELETE(req, res) {
  const { id } = await req.json();


  const userIndex = users.findIndex((user) => user.id === id);


  if (userIndex === -1) {
    return NextResponse.json({ result: "user not found" }, { status: 404 });
  }

  users.splice(userIndex, 1);

  const updateduserArr = users;
  const updateData = JSON.stringify(updateduserArr, null, 2);

  fs.writeFileSync(
    "./src/app/util/db.js",
    `export const users = ${updateData}`,
    "utf-8"
  );

  return NextResponse.json({ succes: "user successfully deleted" });
}
