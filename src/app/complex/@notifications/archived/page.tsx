import Card from "@/components/card";
import Link from "next/link";

export default function Archived() {
  return (
    <Card>
      <div>Notifications Archived</div>
      <Link href="/complex">Default</Link>
    </Card>
  );
}
