import * as AWS from 'aws-sdk';

const bucketName = process.env.IMAGES_S3_BUCKET;
const urlExpiration = process.env.SIGNED_URL_EXPIRATION;

const s3 = new AWS.S3({
    signatureVersion: 'v4'
});

export function getUploadUrl(todoId: string){
    return s3.getSignedUrl('putObject', {
    Bucket: bucketName,
    Key: todoId,
    Expires: urlExpiration
    });
}

export function getPreformedURL(todoId: string){
    return `https://${bucketName}.s3.amazonaws.com/${todoId}`
} 
