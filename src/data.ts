export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/",
        icon: "home.svg",
      },
      {
        id: 2,
        title: "Profile",
        url: "/users/1",
        icon: "user.svg",
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: "user.svg",
      },
      {
        id: 2,
        title: "Projects",
        url: "/products",
        icon: "product.svg",
      },
      {
        id: 3,
        title: "Deals",
        url: "/orders",
        icon: "order.svg",
      },
      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icon: "post2.svg",
      },
    ],
  },
  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/",
        icon: "element.svg",
      },
      {
        id: 2,
        title: "Notes",
        url: "/",
        icon: "note.svg",
      },
      {
        id: 3,
        title: "Forms",
        url: "/",
        icon: "form.svg",
      },
      {
        id: 4,
        title: "Calendar",
        url: "/",
        icon: "calendar.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/",
        icon: "setting.svg",
      },
      {
        id: 2,
        title: "Backups",
        url: "/",
        icon: "backup.svg",
      },
    ],
  },
  {
    id: 5,
    title: "analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: "chart.svg",
      },
      {
        id: 2,
        title: "Logs",
        url: "/",
        icon: "log.svg",
      },
    ],
  },
];

export const topDealUsers = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    username: "Bagmane Capital",
    email: "elva@gmail.com",
    amount: "25350M",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "District One",
    email: "linnie@gmail.com",
    amount: "1350.98M",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Emerald Heights",
    email: "brent@gmail.com",
    amount: "1472.754M",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Habitat 78",
    email: "adeline@gmail.com",
    amount: "1900.9M",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Hamilton Mayfair Residency",
    email: "juan@gmail.com",
    amount: "1200M",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Terra Lavinium",
    email: "augusta@gmail.com",
    amount: "1430M",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Ved Bungalow Green",
    email: "angel@gmail.com",
    amount: "740M",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Residential Apartments",
    email: "angel@gmail.com",
    amount: "2200M",
  },
  {
    id: 9,
    img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Office Complex",
    email: "angel@gmail.com",
    amount: "7250M",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: "/userIcon.svg",
  title: "construction companies",
  number: "1,75,000+",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 600 },
    { name: "Tue", users: 500 },
    { name: "Wed", users: 700 },
    { name: "Thu", users: 400 },
    { name: "Fri", users: 500 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxProduct = {
  color: "skyblue",
  icon: "/productIcon.svg",
  title: "Total Projects",
  number: "1,41,00,000",
  dataKey: "products",
  percentage: 21,
  chartData: [
    { name: "Sun", products: 400 },
    { name: "Mon", products: 600 },
    { name: "Tue", products: 500 },
    { name: "Wed", products: 700 },
    { name: "Thu", products: 400 },
    { name: "Fri", products: 500 },
    { name: "Sat", products: 450 },
  ],
};

export const chartBoxConversion = {
  color: "gold",
  icon: "/conversionIcon.svg",
  title: "Total Ratio",
  number: "2.6",
  dataKey: "ratio",
  percentage: 12,
  chartData: [
    { name: "Sun", ratio: 400 },
    { name: "Mon", ratio: 600 },
    { name: "Tue", ratio: 500 },
    { name: "Wed", ratio: 700 },
    { name: "Thu", ratio: 400 },
    { name: "Fri", ratio: 500 },
    { name: "Sat", ratio: 450 },
  ],
};
export const chartBoxRevenue = {
  color: "teal",
  icon: "/revenueIcon.svg",
  title: "Total Civil Consultancy",
  number: "4,500+",
  dataKey: "revenue",
  percentage: -12,
  chartData: [
    { name: "Sun", revenue: 400 },
    { name: "Mon", revenue: 600 },
    { name: "Tue", revenue: 500 },
    { name: "Wed", revenue: 700 },
    { name: "Thu", revenue: 400 },
    { name: "Fri", revenue: 500 },
    { name: "Sat", revenue: 450 },
  ],
};

export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 3000,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1890,
    },
    {
      name: "Fri",
      profit: 2390,
    },
    {
      name: "Sat",
      profit: 3490,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 4000,
    },
    {
      name: "Mon",
      visit: 3000,
    },
    {
      name: "Tue",
      visit: 2000,
    },
    {
      name: "Wed",
      visit: 2780,
    },
    {
      name: "Thu",
      visit: 1890,
    },
    {
      name: "Fri",
      visit: 2390,
    },
    {
      name: "Sat",
      visit: 3490,
    },
  ],
};

export const userRows = [
  {
    id: 1,
    img: "",
    lastName: "CEO: Punit Garg",
    firstName: "Reliance Infrastructure Ltd.",
    email: "Reliance@gmail.com",
    phone: "123 456 789",
    createdAt: "1 October 1929",
    verified: true,
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "CEO: S. N. Subrahmanyan",
    firstName: "Larsen & Toubro Ltd.",
    email: "larsen@gmail.com",
    phone: "123 456 789",
    createdAt: "7 February 1938",
    verified: true,
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "",
    firstName: "Macrotech Developers Pvt Ltd",
    email: "marcrotech@hottmail.com",
    phone: "123 456 789",
    createdAt: "1980",
    verified: true,
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Atul Punj",
    firstName: "Punj Lloyd Ltd.",
    email: "punj@gmail.com",
    phone: "123 456 789",
    createdAt: "1982",
    verified: true,
  },
  {
    id: 5,
    img: "",
    lastName: "Pallonji Mistry",
    firstName: "Shapoorji Pallonji & Co. Ltd.",
    email: "shapoor@yahoo.com",
    phone: "123 456 789",
    createdAt: "1865",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: " Vishnubhai M. Patel",
    firstName: "Sadbhav Engineering Ltd.",
    email: "vishnu@mail.com",
    phone: "123 456 789",
    createdAt: "3 October 1988",
    verified: true,
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Dilip Suryavanshi",
    firstName: "Dilip Buildcon Ltd. ",
    email: "dilip.bilid@gmail.com",
    phone: "123 456 789",
    createdAt: "",
  },
  {
    id: 8,
    img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Walchand Hirachand",
    firstName: "Hindustan Construction Co. Ltd.",
    email: "hindu@mail.com",
    phone: "123 456 789",
    createdAt: "27 January 1926",
    verified: true,
  },
  {
    id: 9,
    img: "",
    lastName: "AVS Raju",
    firstName: "NCC Ltd.",
    email: "ncc@gmail.com",
    phone: "123 456 789",
    createdAt: "1978",
  },
  {
    id: 10,
    img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "",
    firstName: "Simplex Infrastructures Ltd.",
    email: "simpleinfa@gmail.com",
    phone: "123 456 789",
    createdAt: "",
    verified: true,
  },
  {
    id: 11,
    img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Ratan Tata",
    firstName: "Tata Projects",
    email: "tata@gmail.com",
    phone: "123 456 789",
    createdAt: "1975",
    verified: true,
  },
  {
    id: 12,
    img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Gayatri",
    firstName: "Gayatri Projects",
    email: "gayatri@hotmail.com",
    phone: "123 456 789",
    createdAt: "01.02.2023",
  },
  {
    id: 13,
    img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "AFCONS",
    firstName: "AFCONS Infrastructure",
    email: "afcon@gmail.com",
    phone: "123 456 789",
    createdAt: "1999",
  },
  {
    id: 14,
    img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    lastName: "Oberoi",
    firstName: "Oberoi Realty Limited",
    email: "oberoi@hotmail.com",
    phone: "123 456 789",
    createdAt: "1988",
  },
  {
    id: 15,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    lastName: "gammon ",
    firstName: " Gammon India Limited",
    email: "gil@gmail.com",
    phone: "123 456 789",
    createdAt: "28 Sept 2000",
  },
];

export const products = [
  {
    id: 1,
    
    title: "Bagmane Capital",
    color: "Karnataka",
    producer: "2000118191021",
    price: "₹25350 M",
    createdAt: "21-Oct-2019",
    inStock: true,
  },
  {
    id: 2,
    
    title: "District One",
    color: " Punjab",
    producer: "2000518191021",
    price: "₹1350.98 M",
    createdAt: "21-Oct-2019",
    inStock: true,
  },
  {
    id: 3,
    
    title: "Emerald Heights",
    color: " Haryana",
    producer: "2000818191021",
    price: "₹1472.754 M",
    createdAt: "21-Oct-2019",
    inStock: true,
  },
  {
    id: 4,
    
    title: "Habitat 78",
    color: "Haryana",
    producer: "2001418191021",
    price: "₹1900.9",
    createdAt: "21-Oct-2019",
    inStock: true,
  },
  {
    id: 5,
    
    title: "Hamilton Mayfair Residency",
    color: "Punjab",
    producer: "2001518191021",
    price: "₹1200 M",
    createdAt: "21-Oct-2019",
  },
  {
    id: 6,
    
    title: "Multilevel Car Parking",
    color: "Delhi",
    producer: "2001818191021",
    price: "₹6700 M",
    createdAt: "21-Oct-2019",
    inStock: true,
  },
  {
    id: 7,
    
    title: "Regent Hill Residential Project",
    color: "Maharashtra",
    producer: "2002318191021",
    price: "₹5000 M",
    createdAt: "21-Oct-2019",
  },
  {
    id: 8,
    
    title: "Sattva Knowledge Park",
    color: "Telangana",
    producer: "2002418191021",
    price: "₹4500 M",
    createdAt: "21-Oct-2019",
    inStock: true,
  },
  {
    id: 9,
    
    title: "Terra Lavinium",
    color: "Haryana",
    producer: "2002718191021",
    price: "₹1430 M",
    createdAt: "21-Oct-2019",
  },
  {
    id: 10,
    
    title: "Ved Bungalow Green",
    color: "Gujarat",
    producer: "200301819102",
    price: "₹740 M",
    createdAt: "21-Oct-2019",
    inStock: true,
  },
];



export const singleUser = {
  id: 1,
  title: "NN & AKY",
  img: "https://images.pexels.com/photos/17397364/pexels-photo-17397364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  info: {
    username: "Nehanayak99",
    fullname: "Neha Nayak and Ayush Kumar",
    email: "nehanayak1229@gmail.com",
    phone: "9910488130",
    status: "verified",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "clicks", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        clicks: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        clicks: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        clicks: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        clicks: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        clicks: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        clicks: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        clicks: 4300,
      },
    ],
  },
  activities: [
    {
      text: "NN $ AKY consulting the Jaypee Greens's Projects",
      time: "3 day ago",
    },
    {
      text: "NN $ AKY was assigned for Bagmane Capital's Project",
      time: "1 week ago",
    },
    {
      text: "NN & AKY has finished their consultany on terra Lavinium's project",
      time: "2 weeks ago",
    },
    {
      text: "NN $ AKY helping small builders for assign the projects",
      time: "1 month ago",
    },
    {
      text: "NN $ AKY made transparency in their consulting",
      time: "1 month ago",
    },
    {
      text: "NN $ AKY reviewed to the builder's work",
      time: "2 months ago",
    },
  ],
};
export const singleProduct = {
  id: 1,
  title: "Playstation 5 Digital Edition",
  img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
  info: {
    productId: "Ps5SDF1156d",
    color: "white",
    price: "₹250.99",
    producer: "Sony",
    export: "Japan",
  },
  chart: {
    dataKeys: [
      { name: "visits", color: "#82ca9d" },
      { name: "orders", color: "#8884d8" },
    ],
    data: [
      {
        name: "Sun",
        visits: 4000,
        orders: 2400,
      },
      {
        name: "Mon",
        visits: 3000,
        orders: 1398,
      },
      {
        name: "Tue",
        visits: 2000,
        orders: 3800,
      },
      {
        name: "Wed",
        visits: 2780,
        orders: 3908,
      },
      {
        name: "Thu",
        visits: 1890,
        orders: 4800,
      },
      {
        name: "Fri",
        visits: 2390,
        orders: 3800,
      },
      {
        name: "Sat",
        visits: 3490,
        orders: 4300,
      },
    ],
  },
  activities: [
    {
      text: "John Doe purchased Playstation 5 Digital Edition",
      time: "3 day ago",
    },
    {
      text: "Jane Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 week ago",
    },
    {
      text: "Mike Doe purchased Playstation 5 Digital Edition",
      time: "2 weeks ago",
    },
    {
      text: "Anna Doe reviewed the product",
      time: "1 month ago",
    },
    {
      text: "Michael Doe added Playstation 5 Digital Edition into their wishlist",
      time: "1 month ago",
    },
    {
      text: "Helen Doe reviewed the product",
      time: "2 months ago",
    },
  ],
};
