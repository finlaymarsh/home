import { Outlet } from "react-router-dom";
import SideBar from "../../components/sidebar/SideBar";
import PageWrapper from "../../components/widgets/wrapper/PageWrapper";

export default function Root() {
  return (
    <main className="h-screen flex gap-8">
      <SideBar />
      <PageWrapper>
        <Outlet />
      </PageWrapper>
    </main>
  );
}
