type projectType = {
  id: string;
  name: string;
  location: string;
  size: string;
  deliveryDate: string;
  title: string,
  status: string,
  tagline: string,
  unitNumber: string,
  startDate: string,
  actions?: any;
};

type contractType = {
  id: string;
  contractorAddress: string;
  contractorServiceLine: string;
  email: string;
  nameOfCompany: string;
  nameOfPrincipal: string;
  phone: string;
};

type storeKeeperType = {
  materialName: string;
  stokeKeeperName: string;
  orderDate: string;
  suppliersName: string;
  quantityOrdered: string;
};

type supplierType = {
  id: string;
  name: string;
  address: string;
  email: string;
  phoneNumber: string;
  material: string[];
  orderDate?: string;
};

type reportType = {
  id: string;
  weeklyEngagement: string;
  achievement: string;
  challenges: string;
  comment: string;
  grade: string;
  suggestion: string;
  actions?: any;
};

type employeeType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  department: string;
  actions?: any;
  role?: string;
  details?: string; // Adjust based on your requirements
  add?: string; // Adjust based on your requirements
};

type subscriberType = {
  id: string;
  firstName: string;
  lastName: string;
  otherNames: string;
  email: string;
  referralCode: string;
  residentialAddress: string;
  phone: string;
  actions?: any;
};

interface requestType {
  id: string;
  item: string;
  quantity: string;
  unit_price: string;
  account_name: string;
  account_number: string;
  bank_name: string;
  description: string;
  hod_status: string;
  cfo_status: string;
  coo_status: string;
  md_status: string;
  account_status: string;
  message: string;
  actions?: any;
}