"use client";
import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react";
import { useState, ReactNode } from "react";

type ModalProps = {
  title: string;
  trigger?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  onOpenChange?: (open: boolean) => void;
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

  const handleChange = (e: { open: boolean }) => {
    setOpen(e.open);
    onOpenChange?.(e.open);
  };

  return (
    <Dialog.Root lazyMount open={open} onOpenChange={handleChange}>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content
            maxW="1000px"
            w="full"
            bg="white"
            borderRadius="lg"
            overflow="hidden"
          >
            <Dialog.Header>
              <Dialog.Title>{title}</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body maxH="70vh" overflowY="auto" px={6} py={4}>
              {children}
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
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};
export default Modal;
