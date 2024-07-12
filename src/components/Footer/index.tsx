import { Link } from "react-router-dom";
import { Icons } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";

export default function Footer() {
  return (
    <footer className="py-12 bg-muted">
      <div className="container space-y-4">
        <img
          src="/images/recruiterflow.png"
          alt="recruiterflow logo"
          className="h-8"
        />
        <p className="max-w-prose">
          An assignment for recruiterflow using New York Times API. To view the
          source code on Github.
        </p>
        <Button asChild variant="ghost" size="icon">
          <Link
            to="https://github.com/nyxfor13days/recruiterflow-assignment"
            target="_blank"
          >
            <Icons.gitHub className="size-6" />
          </Link>
        </Button>
      </div>
    </footer>
  );
}
