import Searchbar from "./searchbar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Searchbar />
      {children}
    </div>
  );
}
