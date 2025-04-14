import Image from "next/image";
import React from "react";

type ArticleData = {
  image: string;
  date: string;
  author: string;
  title: string;
};

type ArticleCardProps = {
  data: ArticleData;
};

const ArticleCard: React.FC<ArticleCardProps> = ({ data }) => {
  return (
    <article className="h-72 md:h-96 lg:h-[450px] rounded-xl overflow-hidden shadow-lg bg-white relative">
      <Image
        width={200}
        height={400}
        className="w-full h-full object-cover"
        src={data.image}
        alt={`Cover for ${data.title}`}
      />
      <div className="absolute inset-0 w-full p-10 text-white bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end">
        <p className="text-sm opacity-80">
          {data.date} • <span className="font-medium">{data.author}</span>
        </p>
        <h3 className="text-lg font-semibold">{data.title}</h3>
      </div>
    </article>
  );
};

export default ArticleCard;
