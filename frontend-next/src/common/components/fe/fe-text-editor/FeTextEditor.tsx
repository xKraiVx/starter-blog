"use client";

import { JSX } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import { Color } from "@tiptap/extension-color";
import Paragraph from "@tiptap/extension-paragraph";
import TextStyle from "@tiptap/extension-text-style";
import Document from "@tiptap/extension-document";
import Text from "@tiptap/extension-text";
import StarterKit from "@tiptap/starter-kit";
import { Box, Button, ButtonGroup } from "@mui/material";
import TextEditorToolbar from "@/common/components/fe/fe-text-editor/TextEditorToolbal";

function FeTextEditor(): JSX.Element | null {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      TextStyle,
      Color,
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
    ],
    content: "<p>Hello World!</p>",
    editable: true,
  });

  if (!editor) {
    return null;
  }

  return (
    <Box>
      <TextEditorToolbar editor={editor} />
      <EditorContent editor={editor} />
    </Box>
  );
}

export default FeTextEditor;
