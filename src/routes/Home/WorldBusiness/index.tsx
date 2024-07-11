import React from "react";
import { useGetBusinessNewsQuery } from "@/services/newsApi";
import { Skeleton } from "@/components/ui/Skeleton";
import Article from "./_components/Article";

export default function WorldBusiness() {
  const { data, isLoading } = useGetBusinessNewsQuery();
  const articles = React.useMemo(() => (data ? data.results : []), [data]);

  const skeletonArray = Array.from({ length: 20 }, (_, index) => (
    <Skeleton key={index} className="flex-1 w-full" />
  ));

  return (
    <section>
      <fieldset className="px-4 pb-12 space-y-4 border rounded-lg">
        <legend>
          <h1 className="px-2 text-sm font-bold">World Business News</h1>
        </legend>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading && skeletonArray}
          {articles.map((article) => (
            <Article key={article.slug_name} article={article} />
          ))}
        </div>
      </fieldset>
    </section>
  );
}
