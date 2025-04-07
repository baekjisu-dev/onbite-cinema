"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Searchbar() {
  const router = useRouter();
  const q = useSearchParams().get("q");
  const [search, setSearch] = useState("");

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const goPage = () => {
    router.push(`/search?q=${search}`);
  };

  const onKeydown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") goPage();
  };

  useEffect(() => {
    if (q) setSearch(q as string);
  }, [q]);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={onChangeSearch}
        onKeyDown={onKeydown}
      />
      <button onClick={goPage}>검색</button>
    </div>
  );
}
