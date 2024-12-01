import React from "react";
import { SubsData as data } from "@/databank/subscriber";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faAdd, faFill } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

const ViewDetails: React.FC = () => {
  
  return (
    <div className="container mx-auto p-6">
        <div className="flex flex-col">
            <div className="">
                <div className="flex justify-between items-center border-b pb-4 mb-4">
                <h2 className="text-gray-800 font-bold text-xl">Subscriber</h2>
                <div className="flex space-x-3">
                    <button className="text-blue-600 hover:text-blue-800 transition">
                    <FontAwesomeIcon icon={faEdit} className="text-lg" />
                    </button>
                    <button className="text-red-600 hover:text-red-800 transition">
                    <FontAwesomeIcon icon={faTrash} className="text-lg" />
                    </button>
                </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                    { label: "First Name", value: data?.firstname },
                    { label: "Last Name", value: data?.surname },
                    { label: "Other Names", value: data?.othernames },
                    { label: "Email", value: data?.user.email },
                    { label: "DOB", value: data?.date_of_birth ? moment(data?.date_of_birth).format("YYYY-MM-DD") : "null" },
                    { label: "Nationality", value: data?.nationality },
                    { label: "Phone", value: data?.phone },
                    { label: "Title", value: data?.title },
                    { label: "Residential Address", value: data?.residential_address },
                    { label: "Marital Status", value: data?.marital_status },
                    { label: "Occupation", value: data?.occupation },
                    { label: "Place of Work", value: data?.place_of_work },
                    { label: "Office Address", value: data?.office_address },
                    { label: "Number of Unit Applied", value: data?.number_of_unit_applied },
                    { label: "How You Heard", value: data?.how_you_heard },
                    { label: "Next of Kin", value: data?.next_of_kin },
                    { label: "Relationship", value: data?.relationship },
                    { label: "Status", value: data?.status },
                    { label: "Preferred Payment", value: data?.preferred_payment_option },
                ].map((item, index) => (
                    <div key={index}>
                    <p className="font-semibold text-gray-600">{item.label}</p>
                    <p className="text-gray-800">{item.value || "N/A"}</p>
                    </div>
                ))}
                </div>
            </div>

            {data?.subscriberAttachment.map((attach) => (
                <div className="bg-white rounded-lg shadow p-6 mt-6" key={attach.id}>
                <div className="flex justify-between items-center border-b pb-4 mb-4">
                    <h2 className="text-gray-800 font-bold text-lg">Subscriber Attachment</h2>
                    <div className="flex space-x-3">
                    <button className="text-blue-600 hover:text-blue-800 transition">
                        <FontAwesomeIcon icon={faEdit} className="text-lg" />
                    </button>
                    <button className="text-red-600 hover:text-red-800 transition">
                        <FontAwesomeIcon icon={faTrash} className="text-lg" />
                    </button>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                    <p className="font-semibold text-gray-600">Document Name</p>
                    <p className="text-gray-800">{attach?.document_name || "N/A"}</p>
                    </div>
                    <div>
                    <p className="font-semibold text-gray-600">File</p>
                    <p>
                        <a
                        href={attach?.file || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                        >
                        {attach?.file ? attach.file.split("/").pop() : "N/A"}
                        </a>
                    </p>
                    </div>
                </div>
                </div>
            ))}

            {data?.subscriberProject.map((project) => (
                <div className="bg-white rounded-lg shadow p-6 mt-6" key={project.id}>
                <div className="flex justify-between items-center border-b pb-4 mb-4">
                    <h2 className="text-gray-800 font-bold text-lg">Subscriber Project</h2>
                    <div className="flex space-x-3">
                    <button className="text-blue-600 hover:text-blue-800 transition">
                        <FontAwesomeIcon icon={faFill} className="text-lg" />
                    </button>
                    <button className="text-blue-600 hover:text-blue-800 transition">
                        <FontAwesomeIcon icon={faEdit} className="text-lg" />
                    </button>
                    <button className="text-red-600 hover:text-red-800 transition">
                        <FontAwesomeIcon icon={faAdd} className="text-lg" />
                    </button>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                    <p className="font-semibold text-gray-600">Project</p>
                    <p className="text-gray-800">{project?.project?.name || "N/A"}</p>
                    </div>
                    <div>
                    <p className="font-semibold text-gray-600">Project Title</p>
                    <p className="text-gray-800">{project?.project?.title || "N/A"}</p>
                    </div>
                </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default ViewDetails;
