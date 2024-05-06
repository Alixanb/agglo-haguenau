"use client";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { H2, H3, P, Small } from "../typos";
import { Button } from "../ui/button";
import { Url } from "next/dist/shared/lib/router/router";

// Define the variants for the modal component
const modalVariants = cva("", {
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ModalProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalVariants> {
  title: string;
  text: string;
  period: string;
  href: Url;
  src?: string;
}

/**
 * Modal Component
 *
 * Renders a modal overlay with customizable content. !Must be used for alert only!
 *
 * @param className Additional CSS classes for the modal container.
 * @param variant Variant style for the modal container.
 * @param title Title displayed in the modal.
 * @param text Text content displayed in the modal.
 * @param period Additional information displayed in the modal.
 * @param href URL for the link button displayed in the modal.
 * @param src Image source URL displayed in the modal.
 * @param props Additional HTML attributes to be passed to the modal container.
 * @returns JSX.Element or React.HTMLAttributes<HTMLDivElement>.
 */
const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ className, variant, title, text, period, href, src, ...props }, ref) => {
    const [modal, setModal] = useState<boolean>(true);

    const toggleModal = () => {
      setModal(!modal);
    };

    return (
      <>
        {modal && (
          <div
            className="fixed h-full w-full bg-black bg-opacity-50 z-20 top-0 left-0 flex items-center justify-center"
            onTouchStart={toggleModal}
          >
            <div
              className={cn(
                modalVariants({ className, variant }),
                "w-full m-2 overflow-hidden rounded-xl relative bg-blue-100 flex flex-col gap-4 pb-4"
              )}
              {...props}
              ref={ref}
            >
              <div
                className="absolute top-3 right-3 z-30 p-2 bg-blue-100 rounded-full"
                onClick={toggleModal}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M480-437.85 277.08-234.92q-8.31 8.3-20.89 8.5-12.57.19-21.27-8.5-8.69-8.7-8.69-21.08 0-12.38 8.69-21.08L437.85-480 234.92-682.92q-8.3-8.31-8.5-20.89-.19-12.57 8.5-21.27 8.7-8.69 21.08-8.69 12.38 0 21.08 8.69L480-522.15l202.92-202.93q8.31-8.3 20.89-8.5 12.57-.19 21.27 8.5 8.69 8.7 8.69 21.08 0 12.38-8.69 21.08L522.15-480l202.93 202.92q8.3 8.31 8.5 20.89.19 12.57-8.5 21.27-8.7 8.69-21.08 8.69-12.38 0-21.08-8.69L480-437.85Z" />
                </svg>
              </div>
              {src && (
                <div className="h-48 w-full relative">
                  <Image
                    src={src}
                    alt="Image"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              )}
              <div className="flex flex-col gap-4 px-4">
                <div className="flex flex-col gap-2">
                  <H2>{title}</H2>
                  <Small className="text-blue-400">{period}</Small>
                  {text && <P>{text}</P>}
                </div>
                <Link href={href}>
                  <Button className="bg-blue-400 w-full">Voir</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
);
Modal.displayName = "Modal";

export { Modal };
