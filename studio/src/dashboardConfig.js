export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '601ec094b9896ff1484c3e9f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-fh3oogvt',
                  apiId: '23f51726-71a6-414d-8f04-bc3a31932a6c'
                },
                {
                  buildHookId: '601ec094a96f4c2fbb17c18d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-6vqhr5ye',
                  apiId: 'f8614b23-bcc8-4ea4-b040-55bc2c3879b3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fabioctetsuo/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-6vqhr5ye.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
