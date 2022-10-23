// import customStaticProps from '@utils/staticProps';
import { DefaultLayout } from "@features/layout/components/DefaultLayout";
import Button from "@mui/material/Button";
import React from "react";

export default function Home() {
  return (
    <DefaultLayout>
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </DefaultLayout>
  );
}

// export const getStaticProps = customStaticProps(null, null);
