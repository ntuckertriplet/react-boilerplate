import { Grid } from "@mui/material";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import PageContainerProps from "./PageContainer.props";

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Navbar />
      {children}
      <Footer />
    </Grid>
  );
};

export default PageContainer;
