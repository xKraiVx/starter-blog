"use client";

import { JSX } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

function FeTextEditor(): JSX.Element {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World!</p>",
  });

  return <EditorContent editor={editor} />;
}

export default FeTextEditor;
