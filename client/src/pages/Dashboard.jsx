import ApplicationStats from "../components/Dashboard/ApplicationStats";
import ApplicationList from "../components/Dashboard/ApplicationList";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import DashboardSidebar from "../components/Dashboard/DashboardSidebar";

const Dashboard = () => {
  return (
    <>
      <DashboardHeader />
      <div className="float-left md:w-64 h-screen text-white">
        <DashboardSidebar />
      </div>
      <div className="flex-1 flex-row items-center">
        {/* <div className="float-left w-64 h-screen text-white">
          <DashboardSidebar />
        </div> */}

        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">
              Job Applications
            </h1>

            <ApplicationStats />
            <ApplicationList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
