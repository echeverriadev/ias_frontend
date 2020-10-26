import './App.scss';
import { Switch, Route } from "react-router-dom";
// views
import Home from "./views/Home";
import ServiceReports from "./views/ServiceReports";
import ServiceReportForm from "./views/ServiceReports/ServiceReportForm";
import WorkHours from "./views/WorkHours";
// components
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/service-reports/form"  component={ServiceReportForm}  />
        <Route path="/service-reports" component={ServiceReports}  />
        <Route path="/work-hours" component={WorkHours}  />
      </Switch>
    </div>
  );
};

export default App;
