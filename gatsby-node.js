exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const response = await graphql(`
    query QueryAllBlogs {
      allContentfulBlogPost {
        edges {
          node {
            id
            title
            slug
            publishDate
            content {
              raw
            }
          }
        }
      }
    }
  `);

  response.data.allContentfulBlogPost.edges.forEach(({ node: blogPost }) => {
    createPage({
      path: `/blog-posts/${blogPost.slug}/`,
      component: require.resolve("./src/templates/blogPost.tsx"),
      context: {
        title: blogPost.title,
        publishDate: blogPost.publishDate,
        content: blogPost.content.raw,
      },
    });
  });

  createPage({
    path: "my-dynamic-page",
    component: require.resolve("./src/templates/dynamicPage.tsx"),
    context: {
      // Data passed to context is available
      // in pageContext props of the template component
      name: "Sharjeel",
    },
  });
};

// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  // Only update the `/app` page.
  if (page.path.match(/^\/app/)) {
    // page.matchPath is a special key that's used for matching pages
    // with corresponding routes only on the client.
    page.matchPath = "/app/*";

    // Update the page.
    createPage(page);
  }
};
