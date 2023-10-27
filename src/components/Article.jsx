const Article = ({ index, title, summary, imgSrc }) => {
  return (
    <article className="grid grid-cols-[100px,1fr] gap-6">
      <img src={imgSrc} alt={title} className="block" />
      <div className="flex flex-col gap-1">
        <p className="text-3xl font-bold text-grayish-blue">{index}</p>
        <h3 className="text-lg font-extrabold">{title}</h3>
        <p className="text-sm text-dark-grayish-blue">{summary}</p>
      </div>
    </article>
  );
};

export default Article;
