import api from "configs/api"
//import { getCookie } from "src/utils/cookie";
//console.log(getCookie("accessToken"))

//const token=getCookie("accessToken");

const getProfile=()=>api.get("user/whoami").then((res)=>res || false);

const getPosts=()=>api.get("post/my");

const getAllPosts=()=>api.get("")

export {getProfile,getPosts,getAllPosts}