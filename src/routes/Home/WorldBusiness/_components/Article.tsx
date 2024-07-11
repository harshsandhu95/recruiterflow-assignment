import { Button } from "@/components/ui/Button";
import { formatDateTime } from "@/lib/utils";
import type { BusinessNews } from "@/types/BusinessNews";
import { Link } from "react-router-dom";

interface Props {
  article: BusinessNews;
}

export default function Article({ article }: Props) {
  const coverImg = article.multimedia.find(
    ({ format }) => format === "mediumThreeByTwo440",
  );
  const { date, time, day } = formatDateTime(article.published_date);

  return (
    <article className="p-6 space-y-4 bg-card text-card-foreground shadow rounded-lg">
      <div className="flex items-center justify-between gap-4 text-xs">
        <p>
          {day}, {date}
        </p>

        <p>{time}</p>
      </div>

      <img
        src={coverImg?.url}
        alt={coverImg?.copyright}
        className="w-full object-cover rounded-lg"
      />

      <h3 className="text-xl font-bold line-clamp-1">{article.title}</h3>
      <p className="line-clamp-3">{article.abstract}</p>

      <Button asChild>
        <Link to="/">Read More...</Link>
      </Button>
    </article>
  );
}
