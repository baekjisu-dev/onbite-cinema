"use client";

// common
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// styles
import style from "./searchbar.module.css";

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
    setSearch(q ?? "");
  }, [q]);

  return (
    <div className={style.container}>
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
