import { useEffect, useState } from "react";
import { serverUrl } from "../const/server";
import Contact from "../types/Contact";

export default function useFetchFromLastPosition(refetchDependencies: any[]) {
  const [contactsFromLast, setContactsFromLast] = useState<Contact[]>([]);
  const [startPos, setStartPos] = useState<null | number>(null);

  useEffect(() => {
    fetch(serverUrl + "/contacts")
      .then((response) => response.json())
      .then((data) => setStartPos(data.length));
  }, []);

  useEffect(() => {
    if (startPos !== null) {
      fetch(`${serverUrl}/contacts?_start=${startPos}&_end=1000000`).then(
        (response) => response.json().then((data) => setContactsFromLast(data))
      );
    }
  }, [...refetchDependencies, startPos]);

  return contactsFromLast;
}
