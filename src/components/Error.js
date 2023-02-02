import { useRouteError } from "react-router";

const Error = () => {
  const { status, statusText } = useRouteError();
  return (
    <>
      <h1>error page</h1>
      <h2>{status + ":" + statusText}</h2>
    </>
  );
};

export default Error;
