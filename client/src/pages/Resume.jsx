import { useState } from "react";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import DashboardSidebar from "../components/Dashboard/DashboardSidebar";
import { FileUp } from "lucide-react";
import api from "../axios";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { useNavigate } from "react-router-dom";

const Resume = () => {
  const [file, setFile] = useState(null);
  const [isUplaoding, setIsUplaoding] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // functions to handle drag and drop file uploads
  const dropHandler = (e) => {
    e.preventDefault();

    if (e.dataTransfer.items) {
      [...e.dataTransfer.items].forEach((item, i) => {
        // if not pdf files reject them
        if (item.type === "application/pdf") {
          const file = item.getAsFile();
          setFile(file);
          // const fileName = file.name;
          // console.log(`file[${i}]-->` + fileName);
        }
      });
    }
  };
  const dragOverHandler = (e) => {
    e.preventDefault();
  };

  // function to uplaod file
  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      setIsUplaoding(true);
      const response = await api.post("/api/fileUplaod/upload", formData);

      if (response.status === 200) {
        setIsUplaoding(false);
        navigate("/dashboard/viewResume");
      } else {
        setError(response);
      }
    } catch (error) {
      setIsUplaoding(false);
      setError(error);
      console.log("Error Uploading the file, try again!", error);
    }
  };
  return (
    <>
      <DashboardHeader />
      <div className="float-left">
        <DashboardSidebar />
      </div>

      <div
        id="drop_zone"
        onDrop={(e) => dropHandler(e)}
        onDragOver={(e) => dragOverHandler(e)}
        className="w-[60%] h-[40%] border-[5px] bg-slate-5000 border-dotted rounded-2xl mx-auto mt-7 px-[10%] py-[4%]"
      >
        <div className="px-[50%] text-blue-600 text-2xl">
          <FileUp size={100} />
          <span className="text-sm mx-2 text-slate-500">
            {file ? file.name : ""}
          </span>
        </div>
        <button
          className="bg-red-300 border-4 rounded-xl border-red-300 p-2 font-bold ml-[48%]"
          onClick={handleUpload}
        >
          {isUplaoding ? "Uploading..." : "Start Uplaoding"}
        </button>
        <div className="pl-[25%] pt-[2%] text-2xl font-thin">
          <p>
            <b>Click here</b> to upload your file or drag and drop.
          </p>
        </div>
      </div>

      <div className="mx-[45%] my-[3%]">
        <ClimbingBoxLoader
          color={"#1883BF"}
          loading={isUplaoding}
          size={35}
          speedMultiplier={1.5}
        />
      </div>
    </>
  );
};

export default Resume;
