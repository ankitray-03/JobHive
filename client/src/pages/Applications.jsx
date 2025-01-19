import ApplicationList from "../components/Dashboard/ApplicationList";
import DashboardHeader from "../components/Dashboard/DashboardHeader";

import DashboardSidebar from "../components/Dashboard/DashboardSidebar";

const Applications = () => {
  return (
    <div>
      <DashboardHeader />
      <div className="float-left">
        <DashboardSidebar />
      </div>

      <div className="text-3xl px-4 font-semibold">All Applications</div>
      <ApplicationList />
    </div>
  );
};

export default Applications;
