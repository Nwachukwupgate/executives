import { ProjectPhoto } from "@/types/general";

interface ProjectPhotosProps {
    photos: ProjectPhoto[];
  }
  
  const ProjectPhotos: React.FC<ProjectPhotosProps> = ({ photos }) => (
    <div className="py-5">
      <h2 className="text-gray-800 font-bold my-1 text-lg">Project Photos</h2>
      <div className="grid grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={photo.file} alt={photo.name} className="w-full h-auto rounded-lg" />
            <p className="mt-2 text-sm">{photo.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
  
export default ProjectPhotos;
  