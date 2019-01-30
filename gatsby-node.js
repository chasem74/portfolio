const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

// exports.createPages = ({ actions, graphql }) => {
//   const { createPage } = actions;

//   const indexPage = path.resolve('./src/pages/index.js');

//   return graphql(`
//     {
//       allMarkdownRemark {
//         edges {
//           node {
//             frontmatter {
//               path
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//     if (result.errors) {
//       return Promise.reject(result.errors);
//     }

//     result.data.allMarkdownRemark.edges.forEach(({ node }) => {
//       createPage({
//         path: node.frontmatter.path,
//         component: indexPage,
//         context: {},
//       });
//     });
//   });
// };

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      plugins: [new DirectoryNamedWebpackPlugin()],
    },
  });
};
