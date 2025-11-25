import type { LoaderFunctionArgs } from "react-router-dom";

const jobLoader = async ({ params }: LoaderFunctionArgs) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export default jobLoader;

