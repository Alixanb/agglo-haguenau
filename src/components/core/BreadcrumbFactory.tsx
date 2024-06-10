import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

export type BreadcrumbItemsProp = Array<{ label: string; link?: string }>;

const BreadcrumbFactory = ({ items }: { items: BreadcrumbItemsProp }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, i) => {
          const isLast = items.length - 1 === i;

          return (
            <>
              <BreadcrumbItem key={i}>
                {item.link ? (
                  <BreadcrumbLink href={item.link}>{item.label}</BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadcrumbFactory;
