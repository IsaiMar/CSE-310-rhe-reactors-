import Categories from './CategoriesPage/Categories';
import { Link } from "react-router-dom";

export const Menu = [
    {
        title: "Home",
        url: '/',
        cName: 'nav-links',
        icon: 'fa-solid fa-house-user', 
    },
    {
        title: "Categories",
        url: "/Categories",
        cName: 'nav-links',
        icon: 'fa-solid fa-list', 
    },
    {
        title: "MyBudget",
        url: '/Budget',
        cName: 'nav-links',
        icon: 'fa-solid fa-coins', 
    },

]