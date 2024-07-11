import React from "react";
import { Trash2Icon } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { cn, formatDateTime } from "@/lib/utils";
import { removeNews, type News } from "@/features/news/newsSlice";
import { useAppDispatch } from "@/hooks/useRedux";

interface Props {
  article: News;
}

export default function Article({ article }: Props) {
  const [remove, setRemove] = React.useState(false);
  const dispatch = useAppDispatch();

  const { date, day } = formatDateTime(article.dateTime ?? "");
  const variants = {
    show: { opacity: 1 },
    hide: { opacity: 0, y: -20 },
  };

  function handleDelete() {
    setRemove(true);
    setTimeout(() => {
      dispatch(removeNews(article.id));
    }, 1000);
  }

  return (
    <motion.article
      variants={variants}
      initial="show"
      animate={remove ? "hide" : "show"}
      transition={{
        ease: "linear",
        duration: 0.3,
      }}
      className="p-6 flex flex-col items-start justify-between space-y-4 bg-card text-card-foreground shadow-md rounded-lg"
    >
      <div className="w-full flex items-center justify-between gap-4 text-xs">
        <p>{day}</p>
        <p>{date}</p>
      </div>

      <div className="flex-1 space-y-4">
        <h3
          className={cn(["text-xl font-bold", article.body && "line-clamp-1"])}
        >
          {article.title}
        </h3>
        {article.body && <p className="line-clamp-3">{article.body}</p>}
      </div>

      <div className="flex items-center justify-center gap-4">
        <Button size="icon" variant="destructive" onClick={handleDelete}>
          <Trash2Icon size={14} />
        </Button>
      </div>
    </motion.article>
  );
}
