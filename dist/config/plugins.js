module.exports = ({ env }) => ({
    // ...
    upload: {
        config: {
            provider: "aws-s3",
            providerOptions: {
                credentials: {
                    accessKeyId: "AKIAVWABJYHYKCOGIIOA",
                    secretAccessKey: "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",
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
