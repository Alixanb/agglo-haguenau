"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import * as React from "react";

interface NotificationDrawerContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  onIndexChange: (change: number) => void;
  isLast?: boolean;
  isFirst?: boolean;
}

const NotificationDrawerContent: React.FC<NotificationDrawerContentProps> = ({
  title,
  subtitle,
  isLast = false,
  isFirst = false,
  onIndexChange,
  children,
  className,
}) => {
  const isAlone = isLast && isFirst;
  return (
    <DrawerContent className={className}>
      <div className="mx-auto w-full max-w-sm">
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{subtitle}</DrawerDescription>
        </DrawerHeader>
        {children}
        <DrawerFooter>
          {!isAlone && (
            <div className="flex gap-2 w-full grow">
              <Button
                onClick={() => onIndexChange(-1)}
                className="grow flex gap-2"
                disabled={isFirst}
              >
                <ArrowLeftIcon className="size-4" />
                Précédent
              </Button>
              <Button
                onClick={() => onIndexChange(1)}
                className="grow flex gap-2"
                disabled={isLast}
              >
                Suivant
                <ArrowRightIcon className="size-4" />
              </Button>
            </div>
          )}
          <DrawerClose asChild>
            <Button variant="outline">Fermer {!isAlone && "tout"}</Button>
          </DrawerClose>
        </DrawerFooter>
      </div>
    </DrawerContent>
  );
};

interface NotificationDrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  drawerArray: Array<Omit<NotificationDrawerContentProps, "onIndexChange">>;
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
            title={drawerArray[notifIndex].title}
            subtitle={drawerArray[notifIndex].subtitle}
            onIndexChange={handleIndexChange}
            isLast={notifIndex === drawerArray.length - 1}
            isFirst={notifIndex === 0}
            className={drawerArray[notifIndex].className}
          >
            {drawerArray[notifIndex].children}
          </NotificationDrawerContent>
        )}
      </Drawer>
    </div>
  );
};

export default NotificationDrawer;
