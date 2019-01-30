import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import { graphql } from 'gatsby';

const Index = ({ data }) => {
  return (
    <Layout>
      <Box>
        <div
          dangerouslySetInnerHTML={{
            __html: data.homeJson.content.childMarkdownRemark.html,
          }}
        />
      </Box>
      <Gallery items={data.homeJson.gallery} />
      <div style={{ height: '50vh' }} />
      <IOExample />
    </Layout>
  );
};
Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const pageQuery = graphql`
  query HomePageQuery {
    homeJson {
      content {
        childMarkdownRemark {
          html
          frontmatter {
            path
          }
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

// export const query = graphql`
//   query HomepageQuery {
//     homeJson {
//       title
//       gallery {
//         title
//         copy
//         image {
//           childImageSharp {
//             fluid(maxHeight: 500, quality: 90) {
//               ...GatsbyImageSharpFluid_withWebp
//             }
//           }
//         }
//       }
//     }
//       content {
//         childMarkdownRemark {
//           html
//           rawMarkdownBody
//         }
//       }
//   }
// `;
