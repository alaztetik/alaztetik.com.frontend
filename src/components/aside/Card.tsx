type CardProps = {
  title: string;
  body: string;
  link?: string;
};

const Card: React.FC<CardProps> = ({ title, body, link }) => {
  return (
    <div className="shadow-sm border-r-2 p-4 m-1 mr-2 hover:border-r-4 hover:shadow-lg">
      <h2 className="text-l  font-bold">{title}</h2>
      <p className="text-gray-600">{body}</p>
      {link && (
        <a
          href={link}
          className="text-blue-500 hover:text-blue-600 hover:underline"
        >
          Read more
        </a>
      )}
    </div>
  );
};

export default Card;