import { IPageProps } from "@/common/types/general-props.type";
import ContactUs from "@/ssr-features/pages/contact-us/ContactUs";
import { getContactUsPage } from "@/ssr-features/pages/contact-us/fetchers/getContactUsPage";

export default async function Page({ params }: IPageProps) {
  const { locale } = await params;

  const { data } = await getContactUsPage(locale);

  return <ContactUs data={data} />;
}
