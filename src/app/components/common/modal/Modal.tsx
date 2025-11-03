"use client";
import {
  Button,
  CloseButton,
  Dialog,
  Portal,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState, type ReactNode, cloneElement, isValidElement } from "react";
import "../../../styles/Modal.css";

type ModalProps = {
  title: string;
  trigger?: ReactNode;
  children: React.ReactElement<{ onClose?: () => void }>;
  footer?: ReactNode;
  onOpenChange?: (open: boolean) => void;
  hideFooter?: boolean;
};

const Modal = ({
  title,
  trigger,
  children,
  footer,
  onOpenChange,
  hideFooter,
}: ModalProps) => {
  const [open, setOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleChange = (e: { open: boolean }) => {
    setOpen(e.open);
    onOpenChange?.(e.open);
  };

  const onClose = () => {
    setOpen(false);
    onOpenChange?.(false);
  };

  return (
    <Dialog.Root
      lazyMount
      open={open}
      onOpenChange={handleChange}
      size={isMobile ? "full" : "md"}
    >
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner
          display="flex"
          alignItems={isMobile ? "stretch" : "center"}
          justifyContent="center"
        >
          <Dialog.Content
            w="full"
            maxW={isMobile ? "100%" : "1007px"}
            h={isMobile ? "100dvh" : "auto"}
            bg="white"
            borderRadius={isMobile ? "0px" : "15px"}
            overflow="hidden"
            className="project-modal-content"
          >
            {!isMobile && (
              <Dialog.Header>
                <Dialog.Title fontSize="24px">{title}</Dialog.Title>
              </Dialog.Header>
            )}
            <Dialog.Body overflowY="auto" px={isMobile ? 0 : 6} py={4}>
              {isValidElement(children)
                ? cloneElement(children, { onClose })
                : children}
            </Dialog.Body>
            <Dialog.Footer>
              {!hideFooter &&
                (footer ? (
                  footer
                ) : (
                  <>
                    <Dialog.ActionTrigger asChild>
                      <Button variant="outline">Отмена</Button>
                    </Dialog.ActionTrigger>
                    <Button>Сохранить</Button>
                  </>
                ))}
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              {!isMobile && <CloseButton />}
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default Modal;
