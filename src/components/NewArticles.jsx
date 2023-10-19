const NewArticle = ({ title, summary }) => {
  return (
    <article>
      <h3 className="text-lg font-bold text-off-white">{title}</h3>
      <p className="text-grayish-blue text-[14px]">{summary}</p>
    </article>
  );
};

const NewArticles = () => {
  return (
    <section className="flex flex-col gap-6 px-5 py-6 bg-very-dark-blue">
      <h2 className="text-3xl text-soft-orange">New</h2>
      <NewArticle
        title="Hydrogen VS Electric Cars"
        summary="Will hydrogen-fueled cars ever catch up to EVs?"
      />
      <hr className="text-dark-grayish-blue" />
      <NewArticle
        title="The Downsides of AI Artistry"
        summary="What are the possible adverse effects of on-demand AI image
        generation?"
      />
      <hr className="text-dark-grayish-blue" />
      <NewArticle
        title="Is VC Funding Drying Up?"
        summary="Private funding by VC firms is down 50% YOY. We take a look at what
        that means."
      />
    </section>
  );
};

export default NewArticles;
