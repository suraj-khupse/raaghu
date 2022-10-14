// // const mfePage = path.resolve("./src/pages/{markdownRemark.frontmatter__slug}.js");

// exports.createPages = ({ graphql, boundActionCreators }) => {
//   const { createPage } = boundActionCreators;
//   return new Promise((resolve, reject) => {
//     resolve(
//       graphql(
//         `
//            {
//               allMarkdownRemark {
//                 nodes {
//                   fields {
//                     slug
//                   }
//                 }
//               }
//             }
//         `
//       ).then((result) => {
//         const posts = result.data.posts.nodes;
//         console.log(posts);
//         posts.forEach((post) => {
//           createPage({
//             path: post.fields.slug,
//             component: path.resolve("./src/pages/{markdownRemark.frontmatter__slug}.js"),
//             context: {
//               slug: post.fields.slug,
//             },
//           });
//         });
//       })
//     );
//   });
// };

// const path = require('path')

// exports.createPage = async ({ graphql, actions })=> {

//     const { data } = await graphql(`
//     query {
//       allMarkdownRemark {
//         nodes {
//           frontmatter {
//             slug
//           }
//         }
//       }
//     }`)
//    data.allMarkdownRemark.nodes.forEach(node => {
//        actions.createPage({
//         path: '../projects/libs/rds-elements/src' + node.frontmatter.slug,
//         component: path.resolve('./src/pages/{markdownRemark.frontmatter__slug}.js'),
//         context: { slug:node.frontmatter.slug }
//        })
//    });
// }