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
  weeklyEngagement: string;
  achievement: string;
  challenges: string;
  comment: string;
  grade: string;
  suggestion: string;
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