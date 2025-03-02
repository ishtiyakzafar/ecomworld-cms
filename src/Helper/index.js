export const formatNumbers = (number) => {
  const nfObject = new Intl.NumberFormat('en-IN');
  return nfObject.format(number);
};

export const calculateStock = (data) => {
  let stock = 0

  data.forEach(element => {
    stock += element.quantity;
  });

  return stock;
}

export const getOrderStatus = (item) => {

  const statusOptions = [
    {
      title: "Order Confirmed",
      value: "CONFIRMED",
      isEnable: true,
      isChecked: false,
      color: '#1c1c1c'
    },
    {
      title: "Out for Delivery",
      value: "OFD",
      isEnable: false,
      isChecked: false,
    },
    {
      title: "Delivered",
      value: "DELIVERED",
      isEnable: false,
      isChecked: false,
    }
  ];

  if (item.orderStatus === 'CONFIRMED') {
    statusOptions[0].isEnable = false;
    statusOptions[0].isChecked = true;

    statusOptions[1].isEnable = true;

    statusOptions[1].color = '#1c1c1c';
  } else if (item.orderStatus === 'OFD') {
    statusOptions[0].isEnable = false;
    statusOptions[0].isChecked = true;

    statusOptions[1].isEnable = true;
    statusOptions[1].isChecked = true;

    statusOptions[2].isEnable = true;

    statusOptions[1].color = '#1c1c1c';
    statusOptions[2].color = '#1c1c1c';
  } else if (item.orderStatus === 'DELIVERED') {
    statusOptions[0].isEnable = false;
    statusOptions[0].isChecked = true;


    statusOptions[1].isEnable = false;
    statusOptions[1].isChecked = true;


    statusOptions[2].isEnable = false;
    statusOptions[2].isChecked = true;

    statusOptions[1].color = '#1c1c1c';
    statusOptions[2].color = '#1c1c1c';
  }

  return statusOptions;
}

export const formatEnum = (item) => item.replace("_", " ").toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());

export const addIsShowToCategories = (categories, showVal) =>
  categories.map((category) => ({
    ...category,
    isShow: category.isShow ?? showVal,
    secondLevelCategories: category.secondLevelCategories.map((secondLevel) => ({
      ...secondLevel,
      isShow: secondLevel.isShow ?? showVal,
    })),
  }));


export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;