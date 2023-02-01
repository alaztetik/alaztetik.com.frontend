

type BioWrapperProps = {
  children?: React.ReactNode;
};

export default function BioWrapper(props: BioWrapperProps) {

  return (
    <div className="basis-1/3 flex flex-row justify-around items-center grow flex-wrap min-w-[300px] p-2">
      {props.children}
    </div>
  );
}