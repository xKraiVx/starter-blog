"use client";

import FeTextEditor from "@/common/components/fe/fe-text-editor/FeTextEditor";
import { useCreateComment } from "@/features/comments/hooks/useCreateComment";
import { Box, Button, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { JSX } from "react";
import { FormProvider, useForm } from "react-hook-form";

interface ICommentForm {
  comment: string;
}

const DEFAULT_VALUES: ICommentForm = {
  comment: "",
};

export default function Comments(): JSX.Element {
  const methods = useForm<ICommentForm>({
    defaultValues: DEFAULT_VALUES,
  });
  const { handleSubmit, reset } = methods;

  const { mutate, isLoading } = useCreateComment(reset);
  const { slug } = useParams();

  const onSubmit = ({ comment }: ICommentForm) => {
    const data = {
      articleSlug: slug as string,
      text: comment,
    };

    mutate({
      data,
    });
  };

  return (
    <FormProvider {...methods}>
      <Box>
        <Typography variant="h2">Comments</Typography>
        <FeTextEditor name="comment" />
        <Button
          loading={isLoading}
          variant="contained"
          type="submit"
          sx={{ mt: 2 }}
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </Button>
      </Box>
    </FormProvider>
  );
}
