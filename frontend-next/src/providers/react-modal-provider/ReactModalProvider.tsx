"use client";

import { JSX, PropsWithChildren } from "react";
import { ModalProvider } from "react-modal-hook";
import { TransitionGroup } from "react-transition-group";

export default function ReactModalProvider({
  children,
}: PropsWithChildren): JSX.Element {
  return (
    <ModalProvider rootComponent={TransitionGroup}>{children}</ModalProvider>
  );
}
