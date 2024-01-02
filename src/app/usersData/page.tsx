"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Users {
  id: string;
  name: string;
  profileimg: string;
  _id:string
}

export default function UsersData() {
  const [Data, setData] = useState<Users[]>([]);
  useEffect(() => {
    fetch("https://userapideployda.onrender.com/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "'center",
        }}
      >
        {Data
          ? Data.map(
              (user: { name: string; profileimg: string; id: string, _id:string }) => {
                return (
                  <Link href={`/usersData/${user._id}`}>
                    <Image
                      key={user.id}
                      alt={user.name}
                      src={user.profileimg}
                      width={230}
                      height={230}
                      
                    />
                  </Link>
                );
              }
            )
          : null}
      </div>
    </div>
  );
}
