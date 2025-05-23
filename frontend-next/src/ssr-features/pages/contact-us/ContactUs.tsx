import { JSX } from "react";
import UiPageContainer from "@/common/components/ui/ui-section-container/UiSectionContainer";
import { GetContactUsPageQuery } from "@/ssr-features/pages/contact-us/queries/getContactUsPage.generated";
import CallToActionWidget from "@/features/page-builder/components/call-to-action-widget/CallToActionWidget";

interface IContactUsProps {
  data: GetContactUsPageQuery;
}

export default function ContactUs({ data }: IContactUsProps): JSX.Element {
  return (
    <UiPageContainer fullWidth={true}>
      {data.contactUs?.contactUsSection && (
        <CallToActionWidget
          data={data.contactUs.contactUsSection}
          sx={{
            display: "flex",
            alignItems: "center",
            minHeight: "calc(100vh - 104px)",
          }}
        />
      )}
    </UiPageContainer>
  );
}
