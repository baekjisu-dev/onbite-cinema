import { Suspense } from "react";
import Searchbar from "../../components/searchbar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Searchbar />
      </Suspense>
      {children}
    </div>
  );
}
