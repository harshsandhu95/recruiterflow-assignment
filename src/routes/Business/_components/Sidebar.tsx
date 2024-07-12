import { Link } from "react-router-dom";
import { useGetBusinessNewsQuery } from "@/services/newsApi";

export default function Sidebar() {
  const { data } = useGetBusinessNewsQuery();
  const latestNews = data ? data?.results.slice(0, 10) : [];

  return (
    <aside className="p-4 md:w-96 space-y-2 bg-muted border rounded-lg overflow-clip">
      <h2 className="text-lg font-bold">Recent News</h2>
      <ul className="space-y-4">
        {latestNews.map((news) => {
          const thumbnail = news.multimedia.find(
            (m) => m.format === "Standard Thumbnail",
          );

          return (
            <li key={news.slug_name}>
              <Link
                to={`/business/${news.slug_name}`}
                className="flex items-start gap-4 group"
              >
                {thumbnail ? (
                  <img
                    src={thumbnail?.url}
                    alt={thumbnail?.copyright}
                    className="rounded-lg size-12"
                  />
                ) : (
                  <div className="bg-background rounded-lg size-12" />
                )}
                <p className="flex-1 line-clamp-2 group-hover:text-primary">
                  {news.title}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
