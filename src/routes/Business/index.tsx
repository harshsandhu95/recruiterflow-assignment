import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleBusinessNewsQuery } from "@/services/newsApi";
import Preloader from "@/components/ui/Preloader";
import Sidebar from "./_components/Sidebar";
import Content from "./_components/Content";

export default function Business() {
  const { slug } = useParams();
  const { data, isLoading } = useGetSingleBusinessNewsQuery(slug ?? "");

  const article = React.useMemo(() => data, [data]);

  if (!article) return;
  if (isLoading) return <Preloader />;
  return (
    <div className="container py-12 flex flex-col md:flex-row gap-8">
      <Content article={article} />
      <Sidebar />
    </div>
  );
}
