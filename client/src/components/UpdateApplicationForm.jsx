import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../axios.js";

const UpdateApplicationForm = () => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState("");
  const [dateApplied, setDateApplied] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [jobUrl, setJobUrl] = useState("");
  const [notes, setNotes] = useState("");
  const params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobData = async () => {
      const response = await api.get(`/api/jobs/singleJob/${params.jobId}`);

      if (response.status === 200) {
        const job = response.data;

        setCompany(job.company);
        setPosition(job.position);
        setStatus(job.status);
        setDateApplied(job.dateApplied.toString().substr(0, 10));
        setLocation(job.location);
        setSalary(job.salary);
        setJobUrl(job.jobUrl);
        setNotes(job.notes);
      } else {
        console.log(response);
      }
    };

    fetchJobData();
  }, []);

  const onClose = () => {
    navigate("/dashboard");
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const response = await api.post(`/api/jobs/updateJob/${params.jobId}`, {
      company,
      position,
      status,
      dateApplied,
      location,
      salary,
      jobUrl,
      notes,
    });

    if (response.status === 200) {
      navigate("/dashboard");
    } else {
      console.log(response);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-xl font-semibold mb-4">Update Application</h2>

        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 ">
              Company
            </label>

            <input
              type="text"
              name="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="mt-1 block w-full rounded-md border-2 
               border-gray-300 shadow-sm hover:border-blue-500 focus:border-blue-800"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Position
            </label>
            <input
              type="text"
              name="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="mt-1 block w-full rounded-md border-2 
               border-gray-300 shadow-sm hover:border-blue-500 focus:border-blue-800"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="mt-1 block w-full rounded-md border-2 
               border-gray-300 shadow-sm hover:border-blue-500 focus:border-blue-800"
            >
              <option value="PENDING">Pending</option>
              <option value="APPLIED">Applied</option>
              <option value="INTERVIEWING">Interviewing</option>
              <option value="REJECTED">Rejected</option>
              <option value="ACCEPTED">Accepted</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date Applied
            </label>
            <input
              type="date"
              name="dateApplied"
              value={dateApplied}
              onChange={(e) => setDateApplied(e.target.value)}
              className="mt-1 block w-full rounded-md border-2 
               border-gray-300 shadow-sm hover:border-blue-500 focus:border-blue-800"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-1 block w-full rounded-md border-2 
               border-gray-300 shadow-sm hover:border-blue-500 focus:border-blue-800"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Salary (Optional)
            </label>
            <input
              type="text"
              name="salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              className="mt-1 block w-full rounded-md border-2 
               border-gray-300 shadow-sm hover:border-blue-500 focus:border-blue-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Job URL (Optional)
            </label>
            <input
              type="text"
              name="url"
              value={jobUrl}
              onChange={(e) => setJobUrl(e.target.value)}
              className="mt-1 block w-full rounded-md border-2 
               border-gray-300 shadow-sm hover:border-blue-500 focus:border-blue-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Notes (Optional)
            </label>
            <textarea
              name="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={3}
              className="mt-1 block w-full rounded-md border-2 
               border-gray-300 shadow-sm hover:border-blue-500 focus:border-blue-800"
            />
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateApplicationForm;
