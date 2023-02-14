import Link from "./Link";

export default function LinkWrapper() {
  return (
    <div className="basis-1/3 flex flex-row justify-evenly lg:justify-start items-center grow flex-wrap min-w-[300px] p-2 gap-1">
      <Link text="LinkedIn" href="https://linkedin.com/in/alaztetik" />
      <Link text="Twitter" href="https://twitter.com/alaztetik" />
      <Link text="GitHub" href="https://github.com/alaztetik" />
      <Link text="Resume" href="https://registry.jsonresume.org/alaztetik" />
      <Link text="Mail me" href="mailto:me@alaztetik.com" />
    </div>
  );
}
