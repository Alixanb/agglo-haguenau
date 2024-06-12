"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { formatDate } from "@/lib/utils";
import { Notification } from "@prisma/client";
import { ArrowLeftIcon, ArrowRightIcon, Globe } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { P } from "../typos";

interface NotificationDrawerContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  notification: Notification;
  onIndexChange: (change: number) => void;
  isLast?: boolean;
  isFirst?: boolean;
}

export const NotificationDrawerContent: React.FC<
  NotificationDrawerContentProps
> = ({
  notification,
  isLast = false,
  isFirst = false,
  onIndexChange,
  className,
}) => {
  const isAlone = isLast && isFirst;

  return (
    <DrawerContent className={className}>
      <div className="mx-auto w-full max-w-sm">
        <DrawerHeader>
          <DrawerTitle>{notification.title}</DrawerTitle>
          <DrawerDescription>{`Du ${formatDate(
            notification.dateFrom
          )} au ${formatDate(notification.dateTo)}`}</DrawerDescription>
        </DrawerHeader>
        <P className="grid gap-1.5 p-4 text-center sm:text-left">
          {notification.text}
        </P>
        <DrawerFooter>
          <div className="flex flex-col gap-2">
            <Link href={notification.link}>
              <Button className="flex gap-2 w-full">
                Visualiser sur le web
                <Globe className="size-4 " />
              </Button>
            </Link>
          </div>
          {!isAlone && (
            <div className="flex gap-2 w-full grow">
              <Button
                onClick={() => onIndexChange(-1)}
                className="grow flex gap-2"
                disabled={isFirst}
                variant="outline"
              >
                <ArrowLeftIcon className="size-4" />
                Précédent
              </Button>
              <Button
                onClick={() => onIndexChange(1)}
                className="grow flex gap-2"
                disabled={isLast}
                variant="outline"
              >
                Suivant
                <ArrowRightIcon className="size-4" />
              </Button>
            </div>
          )}
        </DrawerFooter>
      </div>
    </DrawerContent>
  );
};

interface NotificationDrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  drawerArray: Notification[];
}

const NotificationDrawer: React.FC<NotificationDrawerProps> = ({
  drawerArray,
  ...props
}) => {
  const [open, setOpen] = React.useState(true);
  const [notifIndex, setNotifIndex] = React.useState<number>(0);

  const handleIndexChange = (change: number) => {
    setNotifIndex((prevIndex) => {
      const newIndex = prevIndex + change;
      if (newIndex >= 0 && newIndex < drawerArray.length) {
        return newIndex;
      }
      return prevIndex;
    });
  };

  return (
    <div {...props}>
      <Drawer open={open} onOpenChange={setOpen}>
        {drawerArray.length > 0 && (
          <NotificationDrawerContent
            notification={drawerArray[notifIndex]}
            onIndexChange={handleIndexChange}
            isLast={notifIndex === drawerArray.length - 1}
            isFirst={notifIndex === 0}
          ></NotificationDrawerContent>
        )}
      </Drawer>
    </div>
  );
};

export default NotificationDrawer;
