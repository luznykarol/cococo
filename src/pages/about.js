import React from 'react'
import PropTypes from 'prop-types'
import ReactSVG from 'react-svg'
import Layout from '@/components/Layout'
import Img from 'gatsby-image'
import ReactMarkdown from 'react-markdown'
import BackgroundImage from 'gatsby-background-image'

export const AboutPageTemplate = ({ data }) => {
  const pageData = data.markdownRemark.frontmatter

  console.log('aboutdata', pageData)
  return (
    <>
      <div className='bg-green mt-8'>
        <section className='hero'>
          <div className='container-lg '>
            <BackgroundImage
              fluid={pageData.herobackground.childImageSharp.fluid}
              className='hero__main--bg'
            />
          </div>
        </section>
        <section className='topsection'>
          <div className='container-lg'>
            <ReactSVG src='../../img/svg/CCC-sygnet-2-big.svg' />
            <div className='flex justify-between'>
              <div className='col'>
                <ReactMarkdown
                  className='weddings'
                  source={pageData.weddings}
                />
              </div>
              <div className='col'>
                <ReactMarkdown
                  className='scenarios'
                  source={pageData.scenarios}
                />
              </div>
            </div>
          </div>
        </section>
        <section className='events bg-white py-20'>
          <div className='container-lg'>
            <div className='flex justify-between'>
              <div className='col'>
                <Img fluid={pageData.eventsimg.childImageSharp.fluid} />
              </div>
              <div className='col'>
                <ReactMarkdown className='events' source={pageData.events} />
              </div>
            </div>
          </div>
        </section>
        <section className='events bg-grey  py-20'>
          <div className='container-lg'>
            <div className='flex justify-between'>
              <div className='col'>
                {' '}
                <ReactMarkdown
                  className='consultancy'
                  source={pageData.consultancy}
                />
              </div>
              <div className='col'>
                <Img fluid={pageData.consultancyimg.childImageSharp.fluid} />
              </div>
            </div>
            <figure className='line-full' />
            <ReactMarkdown
              className='consultancybar'
              source={pageData.consultancybar}
            />
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
