import { users } from "@/app/util/db";
import { NextResponse } from "next/server";

//2. get user by id

export async function GET(req, res) {
  const { id } = await res.params;

  const user = users.find((user) => user.id === id);
  return NextResponse.json({ user });
}

//3. login

export async function POST(req, res) {
  let { name, password, email } = await req.json();
  const { id } = await res.params;

  const {
    name: uName,
    password: uPassword,
    email: uEmail,
  } = users.find((user) => user.id === id);

  if (uName === name && uEmail === email && uPassword === password) {
    return NextResponse.json({ result: "user successfully logged in" });
  } else if (!name || !email || !password) {
    return NextResponse.json({ result: "Plase fill" });
  } else {
    return NextResponse.json({ result: "invalid credentials" });
  }
}
