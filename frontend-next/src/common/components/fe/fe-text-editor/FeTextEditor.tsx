"use client";

import { JSX } from "react";

import { Controller, useFormContext } from "react-hook-form";
import TextEditor from "@/common/components/fe/fe-text-editor/TextEditor";

interface IFeTextEditorProps {
  id?: string;
  name: string;
  value?: string;
  onChange?: (content: string) => void;
}

function FeTextEditor({ id, name }: IFeTextEditorProps): JSX.Element | null {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <TextEditor id={id} {...field} />}
    />
  );
}

export default FeTextEditor;
