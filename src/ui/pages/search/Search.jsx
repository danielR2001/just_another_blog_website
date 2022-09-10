import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams({ s: "" });
  const searchValue = searchParams.get("s");
  return <div>{searchValue}</div>;
}
