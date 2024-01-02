import Card from "@/components/card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <div>Notifications Default</div>
      <Link href="/complex/archived">Archived</Link>
    </Card>
  );
}
