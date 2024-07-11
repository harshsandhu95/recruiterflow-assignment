import React from "react";
import Article from "./_components/Article";
import { useGetBusinessNewsQuery } from "@/services/newsApi";

export default function WorldBusiness() {
  const { data } = useGetBusinessNewsQuery();
  const articles = React.useMemo(() => (data ? data.results : []), [data]);

  return (
    <section className="space-y-4">
      <h1 className="text-xl font-bold">World Business News</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Article key={article.slug_name} article={article} />
        ))}
      </div>
    </section>
  );
}
