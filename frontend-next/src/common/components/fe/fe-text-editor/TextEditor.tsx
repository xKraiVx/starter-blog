"use client";

import { JSX } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Box } from "@mui/material";
import TextEditorToolbar from "@/common/components/fe/fe-text-editor/TextEditorToolbal";

interface ITextEditorProps {
  id?: string;
  value?: string;
  onChange?: (content: string) => void;
}

export default function TextEditor({
  id,
  value,
  onChange,
}: ITextEditorProps): JSX.Element | null {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    editable: true,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange?.(html);
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <Box id={id}>
      <TextEditorToolbar editor={editor} />
      <Box
        sx={{
          " .tiptap": {
            border: "1px solid",
            borderColor: "primary.main",
            borderRadius: 1,
            padding: 1,
            minHeight: 200,
          },
        }}
      >
        <EditorContent editor={editor} />
      </Box>
    </Box>
  );
}
