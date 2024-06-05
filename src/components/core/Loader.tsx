import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {}
interface AlignLoaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {}

const AlignLoader: React.FC<AlignLoaderProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className="size-full flex justify-center items-center ">
      <div className={className} {...props}>
        {children}
      </div>
    </div>
  );
};

const Spinner: React.FC<LoaderProps> = ({ className, ...props }) => {
  return (
    <AlignLoader className={cn("spinner", className)} {...props}></AlignLoader>
  );
};

const DotLoader: React.FC<LoaderProps> = ({ className, ...props }) => {
  return (
    <AlignLoader className={cn("dots", className)} {...props}></AlignLoader>
  );
};

export { AlignLoader, DotLoader, Spinner };
