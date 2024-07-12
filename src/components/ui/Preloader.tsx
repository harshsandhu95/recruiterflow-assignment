import { LoaderCircleIcon } from "lucide-react";

export default function Preloader() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-background">
      <LoaderCircleIcon className="animate-spin" />
    </div>
  );
}
