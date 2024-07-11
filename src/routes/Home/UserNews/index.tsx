import React from "react";
import { LayoutGroup, Reorder } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { News, setNews } from "@/features/news/newsSlice";
import Article from "./_components/Article";

export default function UserNews() {
  const news = useAppSelector((state) => state.news);
  const dispatch = useAppDispatch();
  const articles = React.useMemo(() => news, [news]);

  function handleReorder(newOrder: News[]) {
    dispatch(setNews(newOrder));
  }

  return (
    <section>
      <fieldset className="px-4 pb-4 space-y-4 border rounded-lg">
        <legend>
          <h2 className="px-2 text-sm font-bold">User News</h2>
        </legend>

        {articles.length === 0 && (
          <div className="flex items-center justify-center">
            <p className="text-muted-foreground">No User News Found</p>
          </div>
        )}

        <Reorder.Group axis="x" values={articles} onReorder={handleReorder}>
          <LayoutGroup id="userNews">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Reorder.Item key={article.id} value={article}>
                  <Article article={article} />
                </Reorder.Item>
              ))}
            </div>
          </LayoutGroup>
        </Reorder.Group>
      </fieldset>
    </section>
  );
}
