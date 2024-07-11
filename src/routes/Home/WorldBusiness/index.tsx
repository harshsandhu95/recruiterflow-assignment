import React from "react";
import { data } from "@/lib/constants";
import Article from "./_components/Article";

export default function WorldBusiness() {
  const articles = React.useMemo(() => data, [data]);

  return (
    <section className="space-y-4">
      <h1 className="text-xl font-bold">World Business News</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {articles.map((article) => (
          <Article key={article.slug_name} article={article} />
        ))}
      </div>
    </section>
  );
}
