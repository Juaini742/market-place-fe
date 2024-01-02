import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {rootItem} from "./item";

function RootRouter() {
  return (
    <Router>
      <Routes>
        {rootItem.map((item, i) => (
          <Route key={i} path={item.path} element={item.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default RootRouter;
