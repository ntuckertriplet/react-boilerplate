import BooleanProvider from "../boolean-provider";
import { PageRouter } from "../page-router";

const App = () => {
  return (
    <BooleanProvider>
      <PageRouter />
    </BooleanProvider>
  );
};

export default App;
