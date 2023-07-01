import ContainerMain from "../ui/ContainerMain";
import ContentChart from "./ContentChart";
import Features from "./Features";
import Header from "./Header";

function RightDashboard() {
  return (
    <ContainerMain>
      <Header />
      <main>
        <ContentChart />
        <Features />
      </main>
    </ContainerMain>
  );
}

export default RightDashboard;
