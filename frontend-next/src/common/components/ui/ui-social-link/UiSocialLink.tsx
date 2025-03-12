import { Enum_Componentcomponentssosiallink_Icon } from "@/graphql/graphql-generated-types/types";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import NextLink from "next/link";
import { JSX } from "react";

interface IUiSocialLinkProps {
  href?: string;
  type?: Enum_Componentcomponentssosiallink_Icon | null;
}

//create constant with mapp of icons

const SOCIAL_ICONS = new Map<
  Enum_Componentcomponentssosiallink_Icon,
  JSX.Element
>([
  [Enum_Componentcomponentssosiallink_Icon.Linkedin, <LinkedIn />],
  [Enum_Componentcomponentssosiallink_Icon.Github, <GitHub />],
]);

export default function UiSocialLink({
  href,
  type,
}: IUiSocialLinkProps): JSX.Element | null {
  if (!href) {
    return null;
  }

  const icon = type ? SOCIAL_ICONS.get(type) : null;

  return (
    <IconButton
      color="primary"
      LinkComponent={NextLink}
      href={href}
      target="_blank"
      aria-label={type || "link"}
    >
      {icon}
    </IconButton>
  );
}
