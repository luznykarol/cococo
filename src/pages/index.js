import React from "react";
import PropTypes from "prop-types";
import ReactSVG from "react-svg";
import Layout from "@/components/Layout";
import GitHubButton from "react-github-btn";

export const HomePageTemplate = ({ data }) => {
  return (
    <>
      <div className="container-lg">
        <div className="logo-wrap">
          <span className="logo__helper logo__helper--1">
            Brought
            <br />
            to you
          </span>
          <h1 className="font-cozy text-black leading-none font-bold">
            <span className="block left">Cozy</span>
            <span className="block">Cocktail</span>
            <span className="block left">Collective</span>
          </h1>
          <span className="logo__helper logo__helper--2">
            By one
            <br />
            and only
          </span>
        </div>
      </div>
      <div className=" flex items-center justify-center bg-yellow">
        <div className="container px-5 sm:px-10">
          <section className="w-full-100 py-20 px-5"></section>
        </div>
      </div>
    </>
  );
};

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout hideNav={true}>
      <HomePageTemplate data={frontmatter} />
    </Layout>
  );
};

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export const pageQuery = graphql`
  query HomePageTemplate {
    markdownRemark(frontmatter: { template: { eq: "index" } }) {
      frontmatter {
        title
        links {
          link {
            content
            url
          }
        }
      }
    }
  }
`;

export default HomePage;
