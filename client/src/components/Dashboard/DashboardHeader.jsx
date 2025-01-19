import React from "react";
import {
  Bell,
  User,
  LogOut,
  Briefcase,
  FileCheck,
  CloudUpload,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../store/user/userSlice";
import api from "../../axios";

const DashboardHeader = () => {
  const dispatch = useDispatch();
  const handleSignout = async () => {
    try {
      dispatch(userActions.signOutUserStart());
      const res = await api.post("/api/auth/logout");
      if (res.status === 200) {
        // succeess logout
        dispatch(userActions.signOutUserSuccess());
        return;
      }
      dispatch(userActions.signOutUserFailure());
    } catch (err) {
      dispatch(userActions.signOutUserFailure(err.message));
      console.log(err.message);
    }
  };
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-blue-600">
              <Briefcase className="float-left mr-2" />
              <Link to="/">JobHive</Link>
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-400 hover:text-gray-500">
              <Bell className="h-6 w-6" />
            </button>
            <button className="text-gray-400 hover:text-gray-500">
              <CloudUpload className="h-6 w-6" />
            </button>

            <button className="text-gray-400 hover:text-gray-500">
              <LogOut className="h-6 w-6" onClick={handleSignout} />
            </button>
            <Link to="/profile">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                <User className="h-6 w-6" />
                <span>Profile</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
