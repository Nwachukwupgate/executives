type projectType = {
  id: string;
  name: string;
  location: string;
  size: string;
  deliveryDate: string;
};

type contractType = {
  id: string;
  name: string;
  duration: string;
  remark: string;
  task: string;
  amount: string;
  address: string;
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
  fullName: string;
  orderDate: string;
  materialName: string;
  totalPrice: string;
  depositedAmount: string;
  balance: string;
};

type reportType = {
  weeklyEngagement: string;
  achievement: string;
  challenges: string;
  comment: string;
  grade: string;
  suggestion: string;
};
