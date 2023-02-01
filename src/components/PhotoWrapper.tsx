import Photo from "./Photo";

type PhotoWrapperProps = {
  children?: React.ReactNode;
}

export default function PhotoWrapper({children}: PhotoWrapperProps) {
  return (
    <div className="basis-1/3 flex flex-col justify-center items-center grow max-w-[90%] min-w-[300px] p-4">
      <Photo />
    </div>
  );
}