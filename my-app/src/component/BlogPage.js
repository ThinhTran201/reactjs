import React from "react";
import { useSearchParams } from "react-router-dom";
const BlogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams(); // detructuring từ useSearchParams
  console.log(searchParams.get);
  return <div>BlogPage</div>;
};

export default BlogPage;
