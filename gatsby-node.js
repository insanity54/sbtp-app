/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// const { createRemoteFileNode } = require('gatsby-source-filesystem');
// 
// 
//  exports.createResolvers = ({
//    actions,
//    cache,
//    createNodeId,
//    createResolvers,
//    store,
//    reporter,
//  }) => {
//    const { createNode } = actions
//    createResolvers({
//      StrapiProduct: {
//        mediaFile: {
//          type: `[File]`,
//          resolve(source, args, context, info) {
//            console.log('DA SOURCE <===========')
//            console.log(source);
// 
//            return createRemoteFileNode({
//              url: `${source.url}`, // for S3 upload. For local: `http://localhost:1337${source.url}`,
//              store,
//              cache,
//              createNode,
//              createNodeId,
//              reporter,
//            })
//          },
//        },
//      },
//    })
//  }
