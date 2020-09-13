import React from "react";
import { Link } from "gatsby";
import ReactSVG from "react-svg";
import ReactMarkdown from "react-markdown";
import { graphql, useStaticQuery } from "gatsby";
import Form from "@/components/Forms/Contact";

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(
        filter: { frontmatter: { templateKey: { eq: "footer" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              image {
                publicURL
              }
              heading
              contact {
                text
                mail
                phone
              }
              socials
            }
          }
        }
      }
    }
  `);
  const footerData = data.allMarkdownRemark.edges[0].node.frontmatter;

  console.log("AAAAAA", footerData);
  console.log(data);
  return (
    <footer
      className="footer py-20 absolute bottom-0 w-full bg-red"
      id="contact"
    >
      <div className="container-lg ">
        <div className="flex justify-between">
          <div className="w-1/3">
            <ReactSVG className="mb-5" src={footerData.image.publicURL} />

            <h2 className="text-yellow text-left text-h5 font-cozy">
              {footerData.heading}
            </h2>
            <div className="text-yellow mt-10">
              <p className="font-bold ">{footerData.contact.text}</p>
              <a href={`mailto:${footerData.contact.mail}`}>
                {footerData.contact.mail}
              </a>
              <a className="block" href={`tel:${footerData.contact.phone}`}>
                {footerData.contact.phone}
              </a>
            </div>
            <ReactMarkdown
              className="text-yellow text-left md:max-w-full mt-5"
              source={footerData.socials}
              renderers={{
                link: (props) => (
                  <a
                    href={props.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {props.children}
                  </a>
                ),
              }}
            />
          </div>
          <div className="w-1/3">
            <Form />
          </div>
        </div>
      </div>
    </footer>
  );
};

{
  /* */
}

export default Footer;
