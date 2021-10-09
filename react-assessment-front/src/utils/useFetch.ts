import { Dispatch, SetStateAction, useEffect } from "react";

export default function useFetch(
  url: string,
  setState: Dispatch<SetStateAction<any>>,
  dependencies = [] as any[]
) {
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(
        (data) => setState(data),
        (error) => console.log(error)
      );
  }, dependencies);
}
