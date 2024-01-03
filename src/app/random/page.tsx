type Props = {};

const page = (props: Props) => {
  console.log(process.env.MONGODB_URI);
  console.log(process.env.JWT_ACCES);


  return (
    <div>
      {process.env.MONGODB_URI ? (
        <h1>DB Successfully Connected</h1>
      ) : (
        <h1>404 DB not found</h1>
      )}
    </div>
  );
};

export default page;
