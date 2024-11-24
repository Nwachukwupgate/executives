import { ProjectAmenity } from "@/types/general";

interface ProjectAmenitiesProps {
    amenities: ProjectAmenity[];
}
  
const ProjectAmenities: React.FC<ProjectAmenitiesProps> = ({ amenities }) => (
    <div className="py-5">
        <h2 className="text-gray-800 font-bold my-1 text-lg">Project Amenities</h2>
        <div className="grid grid-cols-3 gap-4">
        {amenities.map((amenity, index) => (
            <div key={index} className="flex flex-col items-center">
            <img src={amenity.file} alt={amenity.name} className="w-full h-auto rounded-lg" />
            <p className="mt-2 text-sm">{amenity.name}</p>
            </div>
        ))}
        </div>
    </div>
);
  
export default ProjectAmenities;
  