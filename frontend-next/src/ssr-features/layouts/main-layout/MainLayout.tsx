import Footer from "@/ssr-features/layouts/main-layout/components/footer/Footer";
import Header from "@/ssr-features/layouts/main-layout/components/header/Header";
import { GetMainLayoutDataQuery } from "@/ssr-features/layouts/main-layout/graphql/queries/getMainLayout.generated";
import { Box } from "@mui/material";
import { JSX, PropsWithChildren } from "react";

interface IMainLayoutProps extends PropsWithChildren {
  data: GetMainLayoutDataQuery | null;
}

export default function MainLayout({
  children,
  data,
}: IMainLayoutProps): JSX.Element {
  return (
    <Box>
      <Header />
      {children}
      {!!data?.footer && <Footer data={data.footer} />}
    </Box>
  );
}
