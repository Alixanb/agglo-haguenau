import { Main } from "@/components/layout";
import { H1 } from "@/components/typos";
import NotificationDrawer from "@/components/widgets/NotificationDrawer";
const PageRoot = () => {
  return (
    <Main>
      <H1>Page de test</H1>
      <NotificationDrawer
        drawerArray={[
          {
            title: "drawerTest",
            subtitle: "drawer test est un test",
          },
          {
            title: "drawerTest",
            subtitle: "drawer test est un test12",
          },
        ]}
      />
    </Main>
  );
};

export default PageRoot;
