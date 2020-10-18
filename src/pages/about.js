import React from 'react'
import PropTypes from 'prop-types'
import ReactSVG from 'react-svg'
import Layout from '@/components/Layout'
import Img from 'gatsby-image'
import ReactMarkdown from 'react-markdown'
import BackgroundImage from 'gatsby-background-image'
import { ScrollRotate } from 'react-scroll-rotate'

export const AboutPageTemplate = ({ data }) => {
  const pageData = data.markdownRemark.frontmatter

  console.log('aboutdata', pageData)
  return (
    <>
      <div className='bg-green mt-8 overflow-x-hidden'>
        <section className='hero  relative'>
          <div className='container-lg '>
            <div className='spinner-wrap relative'>
              <BackgroundImage
                fluid={pageData.herobackground.childImageSharp.fluid}
                className='hero__sub--bg'
              />
              <div className='scroll-svg-wrap'>
                <ScrollRotate throttle={0.1} loops={1} animationDuration={5}>
                  <ReactSVG
                    className='spinner-large'
                    src='../../img/svg/spinner-large.svg'
                  />
                </ScrollRotate>
              </div>
            </div>
          </div>
        </section>
        <section className='topsection py-24'>
          <div className='container'>
            <div className='flex justify-between'>
              <div className='col'>
                <ReactMarkdown
                  className='markdown-cozy text-yellow markdown__weddings'
                  source={pageData.weddings}
                />
              </div>
              <div className='col'>
                <ReactMarkdown
                  className='markdown-cozy text-yellow markdown__scenarios'
                  source={pageData.scenarios}
                />
              </div>
            </div>
          </div>
        </section>
        <section className='events bg-white py-24'>
          <div className='container'>
            <div className='flex justify-between'>
              <div className='col'>
                <Img fluid={pageData.eventsimg.childImageSharp.fluid} />
              </div>
              <div className='col flex items-center'>
                <ReactMarkdown
                  className='markdown__events  markdown-cozy'
                  source={pageData.events}
                />
              </div>
            </div>
          </div>
        </section>
        <section className='events bg-cream  py-24'>
          <div className='container'>
            <div className='flex justify-between'>
              <div className='col'>
                {' '}
                <ReactMarkdown
                  className='markdown__consultancy markdown-cozy text-green'
                  source={pageData.consultancy}
                />
              </div>
              <div className='col'>
                <Img fluid={pageData.consultancyimg.childImageSharp.fluid} />
              </div>
            </div>
            <figure className='line-full' />
            <ReactMarkdown
              className='markdown-cozy text-red text-center'
              source={pageData.consultancybar}
            />
            <ReactSVG className='mx-auto' src='../../img/svg/spinner.svg' />
          </div>
        </section>
      </div>
    </>
  )
}

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <AboutPageTemplate data={data} />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const pageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { template: { eq: "about" } }) {
      frontmatter {
        title
        herobackground {
          childImageSharp {
            fluid(quality: 70, maxWidth: 1900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        weddings
        scenarios
        events
        eventsimg {
          childImageSharp {
            fluid(quality: 70, maxWidth: 1900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        consultancyimg {
          childImageSharp {
            fluid(quality: 70, maxWidth: 1900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        consultancy
        consultancybar
      }
    }
  }
`

export default AboutPage
