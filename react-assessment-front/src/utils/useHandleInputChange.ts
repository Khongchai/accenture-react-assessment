import React from "react";
import { serverUrl } from "../const/server";

let timeoutHandler: any;
export default function handleSearchInputChange(
  search: string,
  setUrl: React.Dispatch<React.SetStateAction<string>>
) {
  clearTimeout(timeoutHandler);
  timeoutHandler = setTimeout(() => {
    const url = `${serverUrl}/contacts?q=${search}`;
    setUrl(url);
  }, 300);
}
