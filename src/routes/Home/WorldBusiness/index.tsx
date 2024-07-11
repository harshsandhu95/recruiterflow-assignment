import React from "react";
import Article from "./_components/Article";
import { useGetBusinessNewsQuery } from "@/services/newsApi";
import { Skeleton } from "@/components/ui/Skeleton";

export default function WorldBusiness() {
  const { data, isLoading } = useGetBusinessNewsQuery();
  const articles = React.useMemo(() => (data ? data.results : []), [data]);

  const skeletonArray = Array.from({ length: 20 }, (_, index) => (
    <Skeleton key={index} className="flex-1 w-full" />
  ));

  return (
    <section className="space-y-4">
      <h1 className="text-xl font-bold">World Business News</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoading && skeletonArray}
        {articles.map((article) => (
          <Article key={article.slug_name} article={article} />
        ))}
      </div>
    </section>
  );
}
