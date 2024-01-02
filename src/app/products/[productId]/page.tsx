import { Metadata } from "next";

interface Props {
  params: {
    productId: string;
  };
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Phone ${params.productId}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

export default function ProdDetail({ params }: Props) {
  return <h1>Product Detail for {params.productId}</h1>;
}
