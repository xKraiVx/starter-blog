import { useModal } from "react-modal-hook";

import AuthModal from "@/features/auth-modal/AuthModal";
import { TAuthModalMode } from "@/features/auth-modal/types/authModalMode";

export const useAuthModal = (
  mode?: TAuthModalMode
): [VoidFunction, VoidFunction] => {
  const [show, hide] = useModal(
    ({ in: open }) => (
      <AuthModal isOpen={open} onClose={hide} defaultMode={mode} />
    ),
    []
  );

  return [show, hide];
};
