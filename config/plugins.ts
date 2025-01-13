module.exports = ({ env }) => ({
  // "vercel-deploy": {
  //   enabled: true,
  //   config: {
  //     deployHook:
  //       "https://api.vercel.com/v1/integrations/deploy/prj_<deploy-hook>",
  //     apiToken: "<vercel-api-token>",
  //     appFilter: "your-app-name-on-vercel",
  //     teamFilter: "team_djjmnnN9oxAnOzT2cZy400tf",
  //     roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
  //   },
  // },

  // ...
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
        },
        region: "ap-south-1",
        baseUrl: `https://av-blog.s3.ap-south-1.amazonaws.com`, // This line sets the custom url format
        params: {
          ACL: process.env.AWS_ACL || "public-read",
          signedUrlExpires: process.env.AWS_SIGNED_URL_EXPIRES || 15 * 60,
          Bucket: "av-blog",
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});
