import React from "react";
import FetureProduct from "./FetureProduct";
import Lproduct from "./Lproduct";
import Sbrand from "./Sbrand";
import Head from "./Head";
import Support from "./Support";
import Comment from "./Comment";
import Brand from "./Brand";
function Home()
{
    return(
        <>
        <Head />
        <Support />
        <FetureProduct />
        <Lproduct />
        <Sbrand />
        <Comment />
        <Brand />
        </>
    )
}
export default Home;