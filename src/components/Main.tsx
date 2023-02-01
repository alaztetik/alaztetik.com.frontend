type MainProps = {
  children: React.ReactNode;
};

const Main: React.FC<MainProps> = (props) => {
  return (
    <main className="max-w-[1024px] min-w-[350px] basis-3/12 flex flex-row flex-wrap justify-center bg-gray-200 rounded-b-md md:rounded-md">
      {props.children}
    </main>
  );
};

export default Main;
