import { ProjectVideo } from "@/types/general";

interface ProjectVideosProps {
    videos: ProjectVideo[];
}
  
const ProjectVideos: React.FC<ProjectVideosProps> = ({ videos }) => (
    <div className="py-5">
        <h2 className="text-gray-800 font-bold my-1 text-lg">Project Videos</h2>
        <div className="grid grid-cols-2 gap-4">
        {videos.map((video, index) => (
            <div key={index} className="flex flex-col">
            <iframe
                src={video.video_link}
                className="w-full h-48 rounded-lg"
                title={video.name}
                allowFullScreen
            ></iframe>
            <p className="mt-2 text-sm">{video.name}</p>
            </div>
        ))}
        </div>
    </div>
);

export default ProjectVideos;
  