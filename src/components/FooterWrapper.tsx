type FooterWrapperProps = {
  children?: React.ReactNode;
}

export default function FooterWrapper(props: FooterWrapperProps) {
  return (
    <div className="max-w-[1024px] min-w-[350px] basis-1/12 w-full flex flex-row justify-center items-center bg-gray-200 rounded-t-md md:rounded-md">
      <p className="sm:font-semibold text-alaz-violet">Alaz Tetik <span className="text-alaz-blue">&#174;</span> <span>2023</span> </p>
    </div>
  );
}