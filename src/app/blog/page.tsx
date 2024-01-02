import { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: {
    absolute:"Blog"
  },
};

export default function Blog() {
  return <>
  <Link href="/">Home</Link>
  <h1>Blog page</h1>
  </>;
}
