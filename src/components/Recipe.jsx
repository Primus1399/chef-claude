import ReactMarkdown from "react-markdown";

export const Recipe = ({ recipe, ref }) => {
  return (
    <section
      ref={ref}
      className="suggested-recipe-container"
      aria-live="polite"
    >
      <h2>Chef Claude Recommends:</h2>
      <ReactMarkdown>{recipe}</ReactMarkdown>
    </section>
  );
};
