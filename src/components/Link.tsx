
type LinkProps = {
  text: string;
  href: string;
};

export default function Link(props: LinkProps) {
  return (
    <div>
      <a className="flex flex-row items-center justify-evenly gap-1 hover:cursor-pointer p-3 hover:text-alaz-blue hover:underline hover:decoration-alaz-red hover:transition-colors duration-1000 delay-150" href={props.href} target="_blank" rel="noopener noreferrer">
        <span className="font-semibold">
          {props.text}
        </span>
      </a>
    </div>
  );
}
