"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Users {
  _id: string;
  name: string;
  profileimg: string;
}

export default function DetailUSers({
  params,
}: {
  params: {
    userId: string;
  };
}) {
  const [Data, setData] = useState<Users[]>([]);
  const [findUserByID, setFindUserByID] = useState<string[]>([]);
  useEffect(() => {
    fetch("https://userapideployda.onrender.com/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        const user = data.find(
          (user: { _id: string }) => user._id === params.userId
        );
        setFindUserByID(user);
      });
  }, [params.userId]);

  console.log(params.userId);
  console.log(findUserByID);

  if (!findUserByID) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Image
        key={params.userId}
        alt={findUserByID.name}
        src={findUserByID.profileimg}
        width={230}
        height={230}
      />
    </div>
  );
}
