
import SideBraleft from "./components/SideBraleft.jsx";
import SidebarRigth from "./components/SidebarRigth.jsx";
import Layout from "./components/layout.jsx";
import Home from "./pages/home.jsx";

import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <Layout>
     <SideBraleft/>
      <Home/>
      <SidebarRigth/>
    </Layout>
  );
}
