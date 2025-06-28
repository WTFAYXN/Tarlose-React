import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Cursor from "../Cursor";
import BlogTabsNav from "./BlogTabsNav";
import "./BlogDetailPage.css"; 

const BlogDetailPage = () => {
  return (
    <>
      <Cursor />

      <Navbar />
      <BlogTabsNav className="blog-tabs-nav" />

      <header className="blog-detail-header">
        <div className="container">
          <div className="grid">

            <div className="column-one">
              <h2>How AI Can Help You Deliver Multilingual Support</h2>
              <div className="PostAuthorsstyles">
                <div className="AvatarsRow">
                    <img src="https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F1fdaLBuBELIc9AbULUzoDH%2Ffddea4af5e3d31715ddeeac25e3410f6%2FHow_AI_Can_Help_You_Scale_Multilingual_Support__1_.png?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=1678&h=942&s=96b2356ac8953ce9c6b50439f9e94ce7" alt="" />
                  <a href="#">
                    <div className="Avatar size--S"></div>
                  </a>
                </div>

                <span className="authors ">
                  Written By
                  <a href="#">Author Name</a>
                </span>
                <span className="divider">•</span>
                <span className="">December 17, 2024</span>
              </div>
            </div>

            <div className="column-two">
                <div className="postImage"> 
                    <img src="https://hs-marketing-contentful.imgix.net/https%3A%2F%2Fimages.ctfassets.net%2Fp15sglj92v6o%2F1fdaLBuBELIc9AbULUzoDH%2Ffddea4af5e3d31715ddeeac25e3410f6%2FHow_AI_Can_Help_You_Scale_Multilingual_Support__1_.png?ixlib=gatsbySourceUrl-2.1.3&auto=format%2C%20compress&q=75&w=1678&h=942&s=96b2356ac8953ce9c6b50439f9e94ce7" alt="" className="img-fluid" />
                </div>

            </div>


          </div>
        </div>
      </header>

      <Footer />
    </>
  );
};

export default BlogDetailPage;
