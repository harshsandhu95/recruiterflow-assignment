import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { formatDateTime } from "@/lib/utils";
import { BusinessNews } from "@/types/BusinessNews";
import { Badge } from "@/components/ui/Badge";
import { useNavigate } from "react-router-dom";

interface Props {
  article: BusinessNews;
}

export default function Content({ article }: Props) {
  const navigate = useNavigate();

  const { date, day } = formatDateTime(article.published_date);
  const coverImg = article.multimedia.find(
    (media) => media.format === "mediumThreeByTwo440",
  );

  return (
    <main className="flex-1 space-y-6">
      <Button variant="secondary" onClick={() => navigate("/")}>
        <ArrowLeftIcon size={14} />
        Go Back
      </Button>

      {coverImg && (
        <img
          src={coverImg.url}
          alt={coverImg.copyright}
          className="rounded-lg shadow"
        />
      )}

      <div className="space-y-2">
        <span className="text-muted-foreground">
          {day}, {date}
        </span>
        <h1 className="text-3xl font-bold">{article.title}</h1>
        <span className="text-xs">{article.byline}</span>
      </div>

      <p className="max-w-prose">{article.abstract}</p>

      <div className="flex flex-wrap gap-4">
        {article.des_facet.map((facet) => (
          <Badge key={facet} variant="secondary">
            {facet}
          </Badge>
        ))}
      </div>
    </main>
  );
}
