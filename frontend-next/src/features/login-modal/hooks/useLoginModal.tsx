import { useModal } from "react-modal-hook";

import LoginModal from "@/features/login-modal/LoginModal";

export const useLoginModal = (): [VoidFunction, VoidFunction] => {
  const [show, hide] = useModal(
    ({ in: open }) => <LoginModal isOpen={open} onClose={hide} />,
    []
  );

  return [show, hide];
};
