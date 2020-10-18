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
            Img
            <div className='hero-info-wrap'>
              {' '}
              <div className='flex justify-between'>
                <div>
                  <ReactMarkdown
                    className='herobackgroundsignature mt-5 font-bold'
                    source={pageData.herobackgroundsignature}
                  />
                  <ReactMarkdown
                    className='aboutleft markdown-wrap std-para mt-12'
                    source={pageData.aboutleft}
                  />
                </div>
                <div className='col pt-13'>
                  <ReactSVG className='' src='../../img/svg/spinner.svg' />
                  <ReactMarkdown
                    className='pt-20 aboutright markdown-cozy'
                    source={pageData.aboutright}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='about-bar bg-white py-20'>
          <div className='container'>
            <div className='flex justify-between items-center'>
              <div className='flex items-center'>
                <p className='font-bold mr-16'>{pageData.abouthelper}</p>
                <ReactMarkdown
                  className='aboutbar font-cozy leading-64 font-bold '
                  source={pageData.aboutbar}
                />
              </div>
              <ReactSVG src='../../img/svg/arrowRight.svg' />
            </div>
          </div>
        </section>
        <section className='projects bg-cream py-20'>
          <div className='container'>
            <div className='flex items-center'>
              <ReactSVG src='../../img/svg/CCC-sygnet.svg' />
              <figure className='line'></figure>
              <p>{pageData.projectshelper}</p>
            </div>
            <div className='collage-wrap pt-8'>
              <div className='flex'>
                <div className='collage-col w-2/5 flex flex-col items-end'>
                  <Img
                    className='collage-item collage-1'
                    fluid={pageData.collage1.childImageSharp.fluid}
                  />
                  <Img
                    className='collage-item collage-3'
                    fluid={pageData.collage3.childImageSharp.fluid}
                  />
                </div>
                <div className='collage-col w-3/5'>
                  <Img
                    className='collage-item collage-2'
                    fluid={pageData.collage2.childImageSharp.fluid}
                  />
                  <Img
                    className='collage-item collage-4'
                    fluid={pageData.collage4.childImageSharp.fluid}
                  />
                </div>
              </div>
            </div>

            <ReactMarkdown
              className='projectsbar text-center text-yellow font-cozy leading-64 font-bold pt-34'
              source={pageData.projectsbar}
            />
            <ReactSVG
              className='mx-auto pt-10'
              src='../../img/svg/spinner.svg'
            />
            <ReactMarkdown
              className='projectstext pt-10'
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
