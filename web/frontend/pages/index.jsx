import {Page,} from "@shopify/polaris";
import AllRoutes from "./AllRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";
export default function HomePage() {
  
  return (
    <Page >
      {/* <Setting /> */}
      <Navbar/>
      {/* <AllRoutes/> */}
    </Page>
  );
}
