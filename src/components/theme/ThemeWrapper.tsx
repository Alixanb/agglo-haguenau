import "@css";

const ThemeWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div>{children}</div>;
};

export default ThemeWrapper;
