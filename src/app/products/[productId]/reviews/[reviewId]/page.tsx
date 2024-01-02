"use client"

import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function RewDetail({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error Loading reviews");
  }

  if (parseInt(params.reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Product Detail for {params.productId} and Review Detail for{" "}
      {params.reviewId}
    </h1>
  );
}
