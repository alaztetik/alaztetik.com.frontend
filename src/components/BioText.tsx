import { useState } from "react";

export default function BioText() {

  const initialText = "Hello! My name is Alaz. I have been working as a chemical engineer since 2013 and being a amateur software developer since 2016. I have worked on some small and medium size projects with JavaScript, TypeScript, React.js and HTML + CSS.";

  const [bioText, setBioText] = useState<string>(initialText);

  return <p className="p-4 mx-4 text-justify">{bioText}</p>
}
