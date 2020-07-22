import Admin from "../../views/Admin/AdminApp.vue";
import Products from "../../views/Admin/Products/index";
import Categories from "../../views/Admin/Categories/index";

export default [
  {
    path: "/admin",
    name: "admin",
    component: Admin,

    //Nested Routes This is a child of Admin Route
    children: [
      {
        name: "products",
        path: "/products",
        component: Products,
      },
      {
        name: "categories",
        path: "/categories",
        component: Categories,
      },
    ],
  },
];
