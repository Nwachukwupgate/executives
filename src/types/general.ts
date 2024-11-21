import { TIconPack } from "@/common/icons";

export type navLinkProps = {
  link: string;
  icon: TIconPack;
  text: string;
  iconSize?: number;
};

export interface Medical {
  id: number;
  date_of_last_medical_checkup: string | null;
  hospital_conducted: string;
  genotype: string | null;
  bloodgroup: string;
  document_name: string | null;
  file: string | null;
  reason_for_checkup: string;
}

export interface Kin {
  id: number;
  next_of_kin_fullname: string;
  relationship: string;
  kin_address: string | null;
  email: string | null;
  phone: string | null;
  occupation: string | null;
  office_address: string | null;
}

export interface Sanction {
  id: number;
  descriptions: string;
}

export interface SalaryAdvance {
  id: number;
  salary_advance: number | null;
  salary_balance: number;
}

export interface EmploymentHistorys {
  id: number;
  name_of_company: string;
  role: string;
  start_date: string;
  end_date: string;
}

export interface Career {
  id: number;
  training_name: string;
  date: string;
  duration: string;
  facilitator: string;
  venue: string;
  document_name: string | null;
  file: string | null;
}

export interface Academic {
  id: number;
  school_name: string;
  degree: string;
  graduation_date: string;
}

export interface Employee {
  id: number;
  employee_id: string;
  first_name: string;
  last_name: string;
  gender: string;
  user: { email: string };
  id_card_photo: string;
  street: string;
  state: string;
  marital_status: string;
  department: string;
  role: string;
  salary: string;
  resumption_date: string;
  referral_code: string;
  date_of_birth: string;
  phone: string;
  number_of_children: number;
  number_of_dependent: number;
  nationality: string;
  state_of_origin: string;
  lga_of_origin: string;
  account_name: string;
  account_number: string;
  employee_medicals: Medical[];
  employee_kins: Kin[];
  employee_sanctions: Sanction[];
  employee_salary_advances: SalaryAdvance[];
  employee_employment_histories: EmploymentHistorys[];
  employee_careers: Career[];
  employee_academics: Academic[];
}
