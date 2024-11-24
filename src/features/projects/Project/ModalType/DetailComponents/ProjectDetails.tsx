import { ProjectData } from "@/types/general";

interface ProjectDetailsProps {
    data: ProjectData;
}
  
  const ProjectDetails: React.FC<ProjectDetailsProps> = ({ data }) => (
    <div className="py-5">
      <h2 className="text-gray-800 font-bold my-1 text-lg">Project Details</h2>
      <div className="grid grid-cols-3 gap-y-3">
        <DetailItem label="Name" value={data.name} />
        <DetailItem label="Location" value={data.location} />
        <DetailItem label="Project Size" value={data.project_size} />
        <DetailItem label="Title" value={data.title} />
        <DetailItem
          label="Delivery Date"
          value={data.delivery_date && new Date(data.delivery_date).toLocaleDateString()}
        />
        <DetailItem label="Status" value={data.status} />
      </div>
    </div>
  );
  
  interface DetailItemProps {
    label: string;
    value: string | number | null;
  }
  
  const DetailItem: React.FC<DetailItemProps> = ({ label, value }) => (
    <div>
      <p className="font-semibold">{label}</p>
      <p>{value}</p>
    </div>
  );
  
  export default ProjectDetails;