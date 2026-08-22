"use client";

import { ReactNode, MouseEvent, useEffect, useState } from "react";
import { AlertTriangle, Loader2, Trash2, X } from "lucide-react";

type DeleteConfirmProps = {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  onDelete: () => void | Promise<void>;
  className?: string;
  trigger?: ReactNode;
  triggerText?: string;
  title?: string;
  description?: ReactNode;
  confirmText?: string;
  cancelText?: string;
  disabled?: boolean;
  closeOnBackdrop?: boolean;
};

export default function DeleteConfirm({
  onClick,
  onDelete,
  className = "",
  trigger,
  triggerText = "Delete",
  title = "Delete this item?",
  description = "This action cannot be undone. The item will be permanently deleted.",
  confirmText = "Delete",
  cancelText = "Cancel",
  disabled = false,
  closeOnBackdrop = true,
}: DeleteConfirmProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const openModal = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);

    if (!event.defaultPrevented) {
      setIsOpen(true);
    }
  };

  const closeModal = () => {
    if (isDeleting) return;

    setIsOpen(false);
  };

  const handleDelete = async () => {
    try {
      setIsDeleting(true);

      await onDelete();

      setIsOpen(false);
    } catch (error) {
      console.error("Delete failed:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !isDeleting) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, isDeleting]);

  return (
    <>
      <button
        type="button"
        disabled={disabled}
        onClick={openModal}
        className={`
          group
          inline-flex items-center justify-center gap-2
          rounded-xl
          border border-red-300/20
          bg-red-500/10
          px-4 py-2.5
          text-sm font-medium
          text-red-500
          shadow-sm
          backdrop-blur-xl
          transition-all duration-300
          hover:border-red-400/30
          hover:bg-red-500/15
          hover:shadow-md
          hover:shadow-red-500/10
          active:scale-[0.97]
          disabled:pointer-events-none
          disabled:opacity-50
          ${className}
        `}
      >
        {trigger ?? (
          <>
            <Trash2
              size={16}
              className="
                transition-transform duration-300
                group-hover:scale-110
              "
            />
            {triggerText}
          </>
        )}
      </button>

      {isOpen && (
        <div
          className="
            fixed inset-0 
            flex items-center justify-center
            bg-black/40
            p-4
            backdrop-blur-md
            animate-in
            fade-in
            duration-200
          "
          onMouseDown={(event) => {
            if (closeOnBackdrop && event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="delete-dialog-title"
            className="
              relative
              w-full max-w-md
              overflow-hidden
              rounded-[28px]
              border border-white/20
              bg-white/10
              shadow-2xl
              shadow-black/30
              backdrop-blur-3xl
              animate-in
              zoom-in-95
              slide-in-from-bottom-4
              duration-300
              dark:border-white/10
            "
          >
            <div
              className="
                pointer-events-none
                absolute -left-20 -top-24
                h-20 w-50
                rounded-full
                bg-white/20
                blur-3xl
              "
            />
            <div
              className="
                pointer-events-none
                absolute -bottom-24 -right-20
                h-52 w-52
                rounded-full
                bg-red-500/20
                blur-3xl
              "
            />

            <div
              className="
                relative
                overflow-hidden
                rounded-[27px]
                bg-white/70
                p-6
                shadow-inner
                backdrop-blur-2xl
                dark:bg-zinc-950/65
              "
            >
              <div
                className="
                  pointer-events-none
                  absolute inset-x-0 top-0
                  h-px
                  from-transparent
                  via-white/80
                  to-transparent
                  opacity-80
                "
              />

              <button
                type="button"
                onClick={closeModal}
                disabled={isDeleting}
                aria-label="Close delete confirmation"
                className="
                  absolute right-4 top-4
                  flex h-9 w-9
                  items-center justify-center
                  rounded-full
                  border border-black/5
                  bg-black/5
                  text-zinc-500
                  backdrop-blur-xl
                  transition-all duration-200
                  hover:bg-black/10
                  hover:text-zinc-900
                  active:scale-95
                  dark:border-white/10
                  dark:bg-white/5
                  dark:text-zinc-400
                  dark:hover:bg-white/10
                  dark:hover:text-white
                  cursor-pointer
                "
              >
                <X size={17} />
              </button>
              <div
                className="
                  mb-5
                  flex h-12 w-12
                  items-center justify-center
                  rounded-xl
                  border border-red-500/20
                  bg-red-500/10
                  shadow-lg
                  shadow-red-500/10
                  backdrop-blur-xl
                "
              >
                <AlertTriangle size={25} className="text-red-500" />
              </div>

              <div className="pr-7">
                <h2
                  id="delete-dialog-title"
                  className="
                    text-xl font-semibold
                    tracking-tight
                    text-zinc-950
                    dark:text-white
                  "
                >
                  {title}
                </h2>

                <div
                  className="
                    mt-2
                    text-sm leading-6
                    text-zinc-600
                    dark:text-zinc-400
                  "
                >
                  {description}
                </div>
              </div>

              <div
                className="
                  mt-7
                  flex flex-col-reverse
                  gap-3
                  sm:flex-row
                  sm:justify-end
                "
              >
                <button
                  type="button"
                  onClick={closeModal}
                  disabled={isDeleting}
                  className="
                    inline-flex
                    h-11
                    items-center justify-center
                    rounded-xl
                    border border-black/10
                    bg-white/50
                    px-5
                    text-sm font-medium
                    text-zinc-700
                    shadow-sm
                    backdrop-blur-xl
                    transition-all duration-200
                    hover:bg-white/80
                    active:scale-[0.98]
                    disabled:pointer-events-none
                    disabled:opacity-50
                    dark:border-white/10
                    dark:bg-white/5
                    dark:text-zinc-300
                    dark:hover:bg-white/10
                    cursor-pointer
                  "
                >
                  {cancelText}
                </button>

                <button
                  type="button"
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className="
                    group
                    inline-flex
                    h-11
                    items-center justify-center
                    gap-2
                    rounded-xl
                    border border-red-400/30
                    from-red-500
                    to-red-600
                    px-5
                    text-sm font-semibold
                    text-white
                    shadow-lg
                    shadow-red-500/20
                    transition-all duration-200
                    hover:-translate-y-0.5
                    hover:shadow-xl
                    hover:shadow-red-500/25
                    active:translate-y-0
                    active:scale-[0.98]
                    disabled:pointer-events-none
                    disabled:opacity-70
                    cursor-pointer
                  "
                >
                  {isDeleting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Deleting...
                    </>
                  ) : (
                    <>
                      <Trash2
                        size={16}
                        className="
                          transition-transform
                          group-hover:scale-110
                        "
                      />
                      {confirmText}
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
