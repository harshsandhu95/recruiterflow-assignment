import { Link } from "react-router-dom";
import Post from "./Post";

export default function Header() {
  return (
    <header className="container h-16 flex items-center">
      <div className="px-4 w-full grid grid-cols-2 gap-4">
        <Link to="/" className="flex items-center gap-4">
          <img
            src="/images/recruiterflow.png"
            alt="recruiterflow logo"
            className="h-6"
          />
          <p className="text-xl font-bold">News</p>
        </Link>

        <div className="place-self-end flex items-center gap-4">
          <Post />
        </div>
      </div>
    </header>
  );
}
