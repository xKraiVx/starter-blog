import { Box } from "@mui/material";
import { JSX } from "react";
import UiSectionContainer from "@/common/components/ui/ui-section-container/UiSectionContainer";
import UiSectionTitle from "@/common/components/ui/ui-section-title/UiSectionTitle";
import AnimatedSection from "@/common/components/animated/animated-section/AnimatedSection";
import { TextEditorWidgetFragment } from "@/ssr-features/graphql/fragments/textEditorWidget.generated";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";

interface ITextEditorWidgetProps {
  data: TextEditorWidgetFragment;
}

export default function TextEditorWidget({
  data,
}: ITextEditorWidgetProps): JSX.Element {
  const { title, editor } = data;

  return (
    <AnimatedSection>
      <UiSectionContainer component="section">
        <Box
          sx={{
            flex: 1,
          }}
        >
          <UiSectionTitle>{title}</UiSectionTitle>
          <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeHighlight]}>
            {editor}
          </ReactMarkdown>
        </Box>
      </UiSectionContainer>
    </AnimatedSection>
  );
}
