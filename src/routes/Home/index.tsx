import UserNews from "./UserNews";
import WorldBusiness from "./WorldBusiness";

export default function Home() {
  return (
    <main className="container p-2 md:p-6 space-y-12">
      <UserNews />
      <WorldBusiness />
    </main>
  );
}
