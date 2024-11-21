import moment from "moment";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface EmployeeProfileProps {
  employee: any;  
}

const EmployeeProfile: React.FC<EmployeeProfileProps> = ({ employee }) => {
//   const prevButtonRef = useRef<HTMLButtonElement>(null);
//   const nextButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="bg-white shadow rounded-lg p-6 mb-6">
      <div className="flex items-center mb-6">
        <img
          src={employee.id_card_photo}
          alt="Employee ID"
          className="w-24 h-24 rounded-full mr-6"
        />
        <div>
          <h2 className="text-2xl font-semibold text-primaryColor">
            {employee.first_name} {employee.last_name}
          </h2>
          <p className="text-gray-600">{employee.role}</p>
          <p className="text-gray-500">Employee ID: {employee.employee_id}</p>
        </div>
      </div>
      <div className="space-y-4">
        <p><strong>Email:</strong> {employee.user.email}</p>
        <p><strong>Phone:</strong> {employee.phone}</p>
        <p><strong>Address:</strong> {employee.street}, {employee.state}</p>
        <p><strong>Marital Status:</strong> {employee.marital_status}</p>
        <p><strong>Nationality:</strong> {employee.nationality}</p>
        <p><strong>Date of Birth:</strong> {employee.date_of_birth}</p>
      </div>

      <div className="my-4 relative">
        {/* <button
          ref={prevButtonRef}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow image-swiper-button-prev"
        >
          &#8592;
        </button>
        <button
          ref={nextButtonRef}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow image-swiper-button-next"
        >
          &#8594;
        </button> */}

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="border-2 border-solid border-black p-2 rounded">
              <p>
                <span>Date of Birth</span> <span>{employee?.date_of_birth ? moment(employee?.date_of_birth).format("YYYY-MM-DD") : null}</span>
              </p>
              <p><span>Phone</span> <span>{employee?.phone}</span></p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border-2 border-solid border-black p-2 rounded">
              <p><span>No of Children</span> <span>{employee?.number_of_children}</span></p>
              <p><span>No of Dependent</span> <span>{employee?.number_of_dependent}</span></p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border-2 border-solid border-black p-2 rounded">
              <p><span>Nationality</span> <span>{employee?.nationality}</span></p>
              <p><span>State of Origin</span> <span>{employee?.state_of_origin}</span></p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border-2 border-solid border-black p-2 rounded">
              <p><span>LGA of Origin</span> <span>{employee?.lga_of_origin}</span></p>
              <p><span>A/C Name</span> <span>{employee?.account_name}</span></p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border-2 border-solid border-black p-2 rounded">
              <p><span>A/C Number</span> <span>{employee?.account_number}</span></p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default EmployeeProfile;
