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
import * as React from "react";

interface NotificationDrawerContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle: string;
  onIndexChange: (change: number) => void;
  isLast?: boolean;
}

const NotificationDrawerContent: React.FC<NotificationDrawerContentProps> = ({
  title,
  subtitle,
  isLast = false,
  onIndexChange,
  children,
  className,
}) => {
  return (
    <DrawerContent className={className}>
      <div className="mx-auto w-full max-w-sm">
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{subtitle}</DrawerDescription>
        </DrawerHeader>
        {children}
        <DrawerFooter>
          {!isLast && (
            <div className="flex gap-2 w-full">
              <Button onClick={() => onIndexChange(1)}>Suivant</Button>
              <Button onClick={() => onIndexChange(-1)}>Précédent</Button>
            </div>
          )}
          <DrawerClose asChild>
            <Button variant="outline">Fermer tout</Button>
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
