import { createRouter, createWebHistory } from "vue-router";


import Home from "@/views/Home.vue";
import Forbidden from "@/views/result/Forbidden.vue";
import NotFound from "@/views/result/NotFound.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/user/Register.vue";
import Notification from "@/views/user/Notification.vue";
import CreatePost from "@/views/userPost/CreatePost.vue";
import UserPost from "@/views/userPost/UserPost.vue";
import Friend from "@/views/friend/Friend.vue";
import Profile from "@/views/user/Profile.vue";
import ProfileTest from "@/views/test/ProfileTest.vue";
import PersonalModalTest from "@/views/test/PersonalModalTest.vue";
import Category from "@/views/Category/category.vue";
import Product from "@/views/Product/Product.vue";
import CartProductList from "@/views/Cart/CartProductList.vue";
import ShowProductDetail from "@/views/Cart/ShowProductDetail.vue";
import UserCart from "@/views/Cart/UserCart.vue";
import Payment from "@/views/Order/Payment.vue";
import UserOrders from "@/views/Order/UserOrders.vue";



const routes = [
    { path: "/", name: "home-link", component: Home },
    { path: "/403", name: "403-link", component: Forbidden },
    { path: "/404", name: "404-link", component: NotFound},
    { path: "/login", name: "login-link", component: Login },
    { path: "/user/register", name: "register-link", component: Register },
    { path: "/user/profile", name: "profile-link", component: Profile },
    { path: "/user/notification", name: "notification-link", component: Notification },
    { path: "/product/category", name: "product-category", component: Category},
    { path: "/post/createPost", name: "post-create-link", component: CreatePost},
    { path: "/post/userPost", name: "user-post-link", component: UserPost},
    { path: "/friend", name: "friend-link", component: Friend },
    { path: "/profile", name: "profiletest-link", component: ProfileTest },
    { path: "/personal", name: "personal-link", component: PersonalModalTest },
    { path: "/product/product", name: "product-product", component: Product },
    { path: "/product/Cart", name: "product-cart", component: CartProductList },
    { path: "/product/ProductCartDetail/:id", name: "product-cartDetail", component: ShowProductDetail },
    { path: "/cart", name: "cart-user", component: UserCart },
    { path: "/order/payment", name: "order-payment", component: Payment },
    { path: "/order/userOrders", name: "user-orders", component: UserOrders }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})



export default router;