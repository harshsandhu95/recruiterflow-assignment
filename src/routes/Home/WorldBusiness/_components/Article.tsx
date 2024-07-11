import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cn, formatDateTime } from "@/lib/utils";
import type { BusinessNews } from "@/types/BusinessNews";

interface Props {
  article: BusinessNews;
}

export default function Article({ article }: Props) {
  const coverImg = article.multimedia.find(
    ({ format }) => format === "mediumThreeByTwo440",
  );
  const { date, day } = formatDateTime(article.published_date);

  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, margin: "-96px" }}
      className="p-6 flex flex-col items-start justify-between space-y-4 bg-card text-card-foreground shadow-md rounded-lg"
    >
      <div className="w-full flex items-center justify-between gap-4 text-xs">
        <p>{day}</p>
        <p>{date}</p>
      </div>

      {coverImg ? (
        <img
          src={coverImg?.url}
          alt={coverImg?.copyright}
          className="flex-1 w-full object-cover rounded-lg aspect-[16/9]"
        />
      ) : (
        <div className="flex items-center justify-center w-full bg-muted text-muted-foreground rounded-lg aspect-[16/9]">
          <p className="text-xs">No image found!</p>
        </div>
      )}

      <div className="flex-1 space-y-4">
        <h3
          className={cn([
            "text-xl font-bold",
            article.abstract && "line-clamp-1",
          ])}
        >
          {article.title}
        </h3>
        {article.abstract && <p className="line-clamp-3">{article.abstract}</p>}
      </div>

      <Button asChild variant="link" size="link">
        <Link to={`/business/${article.slug_name}`}>Read More</Link>
      </Button>
    </motion.article>
  );
}
