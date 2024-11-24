import { ProjectData } from "@/types/general";
import { ProjectUnit } from "@/types/general";

export const projectData: ProjectData = {
    name: "Greenwood Project",
    location: "Downtown",
    project_size: "150 Acres",
    title: "Luxury Housing",
    delivery_date: "2025-06-15",
    status: "In Progress",
    project_photos: [
        { name: "Entrance", file: "https://via.placeholder.com/300x200?text=Entrance" },
        { name: "Garden", file: "https://via.placeholder.com/300x200?text=Garden" },
        { name: "GCC III", file: "https://via.placeholder.com/300x200?text=GCC III" },
        { name: "GCC IV", file: "https://via.placeholder.com/300x200?text=GCC IV" },
    ],
    project_videos: [
        { name: "Overview", video_link: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
        { name: "Construction Progress", video_link: "https://www.youtube.com/embed/3JZ_D3ELwOQ" },
        { name: "Amenities Tour", video_link: "https://www.youtube.com/embed/2Vv-BfVoq4g" },
    ],
    project_landmark_photos: [
        {
            name: "Central Park",
            file: "https://images.unsplash.com/photo-1570057289633-0f7cfb2211bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGNlbnRyYWwlMjBwYXJrfGVufDB8fHx8MTY4MjQ2MDY2Mg&ixlib=rb-1.2.1&q=80&w=400",
          },
          {
            name: "Famous Monument",
            file: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGZhbW91cyUyMG1vbnVtZW50fGVufDB8fHx8MTY4MjQ2MDczOQ&ixlib=rb-1.2.1&q=80&w=400",
          },
          {
            name: "Botanical Garden",
            file: "https://images.unsplash.com/photo-1599317375438-1eae7e6c5216?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDd8fGJvdGFuaWNhbCUyMGdhcmRlbnxlbnwwfHx8fDE2ODI0NjA3NDg&ixlib=rb-1.2.1&q=80&w=400",
          },
          {
            name: "City Square",
            file: "https://images.unsplash.com/photo-1598300058447-2d25fefb51c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNpdHklMjBzcXVhcmV8ZW58MHx8fHwxNjgyNDYwNzU5&ixlib=rb-1.2.1&q=80&w=400",
          },
    ],
    project_amenities: [
        {
        name: "Swimming Pool",
        file: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGd5bXxlbnwwfHx8fDE2ODI0NTk4MzA&ixlib=rb-1.2.1&q=80&w=400",
        },
        {
        name: "Gym",
        file: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGd5bXxlbnwwfHx8fDE2ODI0NTk4MzA&ixlib=rb-1.2.1&q=80&w=400",
        },
        {
        name: "Community Hall",
        file: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNvbW11bml0eSUyMGhhbGx8ZW58MHx8fHwxNjgyNDU5ODM2&ixlib=rb-1.2.1&q=80&w=400",
        },
        {
        name: "Children's Play Area",
        file: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGNvbW11bml0eSUyMGhhbGx8ZW58MHx8fHwxNjgyNDU5ODM2&ixlib=rb-1.2.1&q=80&w=400",
        },
    ],
    floor_units: [
        {
          units: [
            { id: 1, name: "Unit A", additional_fee_component: "Maintenance", price: "500,000", initial_deposit: "50,000", photos: [
                { name: "Entrance", file: "https://via.placeholder.com/300x200?text=Entrance" },
                { name: "Garden", file: "https://via.placeholder.com/300x200?text=Garden" }
            ] },
            { id: 2, name: "Unit B", additional_fee_component: "Maintenance", price: "550,000", initial_deposit: "55,000", photos: [
                { name: "Entrance", file: "https://via.placeholder.com/300x200?text=Entrance" },
                { name: "Garden", file: "https://via.placeholder.com/300x200?text=Garden" }
            ] }
          ],
          viewModal: (unit: ProjectUnit) => console.log(unit),
          FloorUnitProps: "Floor 1",
          detailName: "Ground Floor",
          detailSize: "Size: 500 sqft",
        },
        {
          units: [
            { id: 3, name: "Unit C", additional_fee_component: "Maintenance", price: "600,000", initial_deposit: "60,000", photos: [
                { name: "Entrance", file: "https://via.placeholder.com/300x200?text=Entrance" },
                { name: "Garden", file: "https://via.placeholder.com/300x200?text=Garden" }
            ] },
            { id: 4, name: "Unit D", additional_fee_component: "Maintenance", price: "650,000", initial_deposit: "65,000", photos: [
                { name: "Entrance", file: "https://via.placeholder.com/300x200?text=Entrance" },
                { name: "Garden", file: "https://via.placeholder.com/300x200?text=Garden" }
            ] }
          ],
          viewModal: (unit: ProjectUnit) => console.log(unit),
          FloorUnitProps: "Floor 2",
          detailName: "First Floor",
          detailSize: "Size: 600 sqft",
        }
      ]
  };
  