import { cn } from "@/lib/utils";
import React from "react";

interface StatusBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  dateFrom: Date;
  dateTo: Date;
}

const statusVariants = {
  COMING: { className: "bg-blue-500/30 border-blue-500/40", label: "À venir" },
  ONLINE: {
    className: "bg-green-500/30 border-green-500/40",
    label: "En lige",
  },
  PASSED: { className: "bg-red-500/30 border-red-500/40", label: "Passé" },
};

const StatusBadge: React.FC<StatusBadgeProps> = ({
  className,
  dateFrom,
  dateTo,
  ...props
}) => {
  let status: keyof typeof statusVariants = "PASSED";

  const now = new Date();
  if (now < dateFrom) {
    status = "COMING";
  } else if (now < dateTo) {
    status = "ONLINE";
  }

  return (
    <div
      className={cn(
        "whitespace-nowrap py-1 px-4 rounded-3xl border flex justify-center",
        statusVariants[status].className,
        className
      )}
      {...props}
    >
      {statusVariants[status].label}
    </div>
  );
};

export default StatusBadge;
