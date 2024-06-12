import { cn, formatDate } from "@/lib/utils";
import { Notification as NotificationModel } from "@prisma/client";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { P, Small } from "../typos";
import { LeadingButton } from "../ui/LeadingButton";

interface NotificationProps extends React.HTMLAttributes<HTMLDivElement> {
  notification: NotificationModel;
}

type NotificationState = "COMING" | "ALIVE" | "DEAD";

const NotificationWidget: React.FC<NotificationProps> = ({
  notification,
  className,
  ...props
}) => {
  const dateFrom = new Date(notification.dateFrom);
  const dateTo = new Date(notification.dateTo);
  const now = new Date();

  let state: NotificationState = "DEAD";
  if (now > dateFrom && now < dateTo) {
    state = "ALIVE";
  } else if (now < dateFrom) {
    state = "COMING";
  }

  const badgeBgColor = state === "ALIVE" ? "bg-red-500" : "bg-gray-300";

  return (
    <span {...props}>
      <Link
        href={notification.link}
        className="flex  justify-between  rounded py-1 px-2  items-center"
      >
        <span className="flex gap-4 ">
          <div className="flex items-center justify-center p-3">
            <div className={cn("size-2 rounded-full", badgeBgColor)}></div>
          </div>
          <div>
            <P variant="medium">{notification.title}</P>
            <Small className="truncate">{`Jusuqu'au ${formatDate(
              dateTo
            )}`}</Small>
          </div>
        </span>
        <LeadingButton variant="buttonOnly" size="fit" accent="gray">
          <ExternalLink className="size-4" />
        </LeadingButton>
      </Link>
    </span>
  );
};

export default NotificationWidget;
