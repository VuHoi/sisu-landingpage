// import customStaticProps from '@utils/staticProps';
import { Button } from "@components";
import ContentEditable from "@components/contenteditable";
import { DefaultLayout } from "@features/layout/components/DefaultLayout";
import React, { useEffect, useRef, useState } from "react";
export default function Home() {
  const ref = useRef();
  const [html, sethtml] = useState("");
  const handleChange = (evt: any) => {
    sethtml(evt.target.value);
  };
  useEffect(() => {
    if (ref.current) (ref.current as any).focus();
  }, []);
  return (
    // <DefaultLayout>
    <div className="flex flex-col gap-10 px-[20px]">
      <div className="flex justify-center font-bold mt-10">My Editor</div>
      <div className="flex justify-center">
        <div className="flex gap-3">
          <Button variant="outlined">Bold</Button>
        </div>
      </div>
      <ContentEditable
        innerRef={ref as any}
        html={html} // innerHTML of the editable div
        disabled={false} // use true to disable editing
        onChange={handleChange} // handle innerHTML change
        tagName="article" // Use a custom HTML tag (uses a div by default)
      />
    </div>
    // </DefaultLayout>
  );
}

// export const getStaticProps = customStaticProps(null, null);
