import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import { useFetch } from '../common/hooks';
import { graphql } from 'gatsby';

const Index = ({ data }) => {
  const { result } = useFetch('http://localhost:9000/myrepos', {});
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (result.data) {
      setRepos(result.data.viewer.repositories.nodes);
    }
  }, [result]);

  return (
    <Layout>
      <Box>
        <div
          dangerouslySetInnerHTML={{
            __html: data.homeJson.content.childMarkdownRemark.html,
          }}
        />
      </Box>
      <Gallery
        items={repos.map(r => ({ title: r.name, description: r.description }))}
      />
      <div style={{ height: '50vh' }} />
      <IOExample />
    </Layout>
  );
};
Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
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
