import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Header from "../Components/Header";
import RightAside from "../Components/HomeLayout/RightAside";
import NewsDetailsCard from "../Components/NewsDetailsCard";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id);
    setNews(newsDetails);
  }, [data, id]);
  return (
    <div className="container mx-auto">
      <header>
        <Header />
      </header>
      <main className="grid grid-cols-12">
        <section className="col-span-9 p-11">
          <NewsDetailsCard news={news}/>
        </section>
        <aside className="col-span-3">
          <RightAside />
        </aside>
      </main>
      news details
    </div>
  );
};

export default NewsDetails;
