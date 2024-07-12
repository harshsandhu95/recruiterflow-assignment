import React from "react";
import { useGetBusinessNewsQuery } from "@/services/newsApi";
import Article from "./_components/Article";
import Preloader from "@/components/ui/Preloader";

export default function WorldBusiness() {
  const { data, isLoading } = useGetBusinessNewsQuery();
  const articles = React.useMemo(() => (data ? data.results : []), [data]);

  if (isLoading) return <Preloader />;
  return (
    <section>
      <fieldset className="px-4 pb-12 space-y-4 border rounded-lg">
        <legend>
          <h2 className="px-2 text-sm font-bold">World Business News</h2>
        </legend>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Article key={article.slug_name} article={article} />
          ))}
        </div>
      </fieldset>
    </section>
  );
}
