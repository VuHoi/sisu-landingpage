// import customStaticProps from '@utils/staticProps';
import ContentEditable from "@components/contenteditable";
import { DefaultLayout } from "@features/layout/components/DefaultLayout";
import React, { useRef, useState } from "react";
export default function Home() {
  const ref = useRef();
  const [html, sethtml] = useState("<b>Hello <i>World</i></b>");
  const handleChange = (evt: any) => {
    sethtml(evt.target.value + "<h1>aaa</h1>");
  };
  return (
    <DefaultLayout>
      <ContentEditable
        innerRef={ref as any}
        html={html} // innerHTML of the editable div
        disabled={false} // use true to disable editing
        onChange={handleChange} // handle innerHTML change
        tagName="article" // Use a custom HTML tag (uses a div by default)
      />
    </DefaultLayout>
  );
}

// export const getStaticProps = customStaticProps(null, null);
