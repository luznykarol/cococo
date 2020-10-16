import React from 'react'
import PropTypes from 'prop-types'
import ReactSVG from 'react-svg'
import Layout from '@/components/Layout'
import GitHubButton from 'react-github-btn'
import Img from 'gatsby-image'
import ReactMarkdown from 'react-markdown'
import BackgroundImage from 'gatsby-background-image'

export const HomePageTemplate = ({ data }) => {
  const pageData = data.markdownRemark.frontmatter

  console.log('indexdata', pageData)
  // const { frontmatter } = data.markdownRemark
  return (
    <>
      <div className='bg-yellow mt-8'>
        <section className='hero pb-20'>
          <div className='container-lg '>
            <BackgroundImage
              fluid={pageData.herobackground.childImageSharp.fluid}
              className='hero__main--bg'
            />
            <ReactMarkdown
              className='herobackgroundsignature'
              source={pageData.herobackgroundsignature}></ReactMarkdown>
            <ReactMarkdown
              className='aboutleft'
              source={pageData.aboutleft}></ReactMarkdown>
            <ReactMarkdown
              className='aboutright'
              source={pageData.aboutright}></ReactMarkdown>
          </div>
        </section>
        <section className='about-bar bg-white py-20'>
          <div className='container-lg'>
            <div className='flex'>
              <p>{pageData.abouthelper}</p>
              <ReactMarkdown className='aboutbar' source={pageData.aboutbar} />
              <ReactSVG src='../../img/svg/arrowRight.svg' />
            </div>
          </div>
        </section>
        <section className='projects bg-grey py-20'>
          <div className='container-lg'>
            <div className='flex items-center'>
              <ReactSVG src='../../img/svg/CCC-sygnet.svg' />
              <figure className='line'></figure>
              <p>{pageData.projectshelper}</p>
            </div>
            <div className='collage-wrap'>
              <div className='collage-top  relative flex items-start'>
                <Img
                  className='collage-item collage-1'
                  fluid={pageData.collage1.childImageSharp.fluid}
                />
                <Img
                  className='collage-item collage-2'
                  fluid={pageData.collage2.childImageSharp.fluid}
                />
              </div>
              <div className='collage-bottom relative flex items-end'>
                <Img
                  className='collage-item collage-3'
                  fluid={pageData.collage3.childImageSharp.fluid}
                />
                <Img
                  className='collage-item collage-4'
                  fluid={pageData.collage4.childImageSharp.fluid}
                />
              </div>
            </div>

            <ReactMarkdown
              className='projectsbar text-center'
              source={pageData.projectsbar}
            />
            <ReactSVG src='../../img/svg/spinner.svg' />
            <ReactMarkdown
              className='projectstext'
              source={pageData.projectstext}
            />
          </div>
        </section>
      </div>
    </>
  )
}

const HomePage = ({ data }) => {
  return (
    <Layout hideNav={true}>
      <HomePageTemplate data={data} />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const pageQuery = graphql`
  query HomePageTemplate {
    markdownRemark(frontmatter: { template: { eq: "index" } }) {
      frontmatter {
        title
        herobackground {
          childImageSharp {
            fluid(quality: 70, maxWidth: 1900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        herobackgroundsignature
        aboutleft
        aboutright
        aboutbar
        abouthelper
        projectshelper
        projectsbar
        projectstext
        collage1 {
          childImageSharp {
            fluid(quality: 70, maxWidth: 1900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        collage2 {
          childImageSharp {
            fluid(quality: 70, maxWidth: 1900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        collage3 {
          childImageSharp {
            fluid(quality: 70, maxWidth: 1900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        collage4 {
          childImageSharp {
            fluid(quality: 70, maxWidth: 1900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default HomePage
