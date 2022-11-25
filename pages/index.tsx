// // import customStaticProps from '@utils/staticProps';
// import { HomePage } from "@features/home/pages/home.page";
// import React from "react";

// export default function Home() {
//   return <HomePage />;
// }

// // export const getStaticProps = customStaticProps(null, null);

// import customStaticProps from '@utils/staticProps';
function replaceRange(
  s: any,
  start: any,
  end: any,
  tagStart: any,
  tagEnd: any
) {
  const substitute = s.substring(start, end);
  return (
    s.substring(0, start) +
    `<${tagStart}>${substitute}</${tagEnd}>` +
    s.substring(end)
  );
}
import { Button } from "@components";
import ContentEditable from "@components/contenteditable";
import React, { useEffect, useRef, useState } from "react";
export default function Home() {
  const ref = useRef();
  const [html, sethtml] = useState("");
  const [state, setState] = useState("");
  const handleChange = (evt: any) => {
    if (state) {
      sethtml((e) => {
        setState("");
        console.log(evt.target.value, e);
        return e + `<b>${evt.target.value.replace(e, "") || ""}</b>`;
      });
    } else sethtml(evt.target.value);
  };
  useEffect(() => {
    if (ref.current) (ref.current as any).focus();
  }, []);

  const handle = (start: string, end: string) => {
    const {
      baseOffset,
      focusOffset,
      baseNode: { wholeText },
    } = (window as any).getSelection();

    if (baseOffset !== focusOffset) {
      sethtml((e) => {
        (ref.current as any).focus();
        return e.replace(
          wholeText,
          replaceRange(wholeText, baseOffset, focusOffset, start, end)
        );
      });
    } else
      sethtml((e) => {
        (ref.current as any).focus();
        return e + ``;
      });
  };
  return (
    <div className="flex flex-col gap-10 px-[20px]">
      <div className="flex justify-center font-bold mt-10">My Editor</div>
      <div className="flex justify-center">
        <div className="flex gap-3">
          <Button
            onClick={() =>
              handle('h1 style="font-size:20px; font-weight:500"', "h1")
            }
            variant="outlined"
          >
            H1
          </Button>
          <Button
            onClick={() =>
              handle('h2 style="font-size:18px; font-weight:500"', "h2")
            }
            variant="outlined"
          >
            H2
          </Button>
          <Button
            onClick={() =>
              handle('h3 style="font-size:16px; font-weight:500"', "h3")
            }
            variant="outlined"
          >
            H3
          </Button>
          <Button
            onClick={() => {
              handle("b", "b");
              setState("bold");
            }}
            variant="outlined"
          >
            Bold
          </Button>

          <Button
            onClick={() => {
              handle("i", "i");
            }}
            variant="outlined"
            className="  italic"
          >
            Italic
          </Button>
        </div>
      </div>
      <ContentEditable
        innerRef={ref as any}
        html={html}
        disabled={false}
        onChange={handleChange}
        tagName="article"
      />
    </div>
  );
}

// export const getStaticProps = customStaticProps(null, null);
