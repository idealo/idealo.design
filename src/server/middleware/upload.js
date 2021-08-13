import util from 'util'
import multer from 'multer'
import path from 'path'

import aws from 'aws-sdk'
import multerS3 from 'multer-s3'
import { file } from 'mock-fs/lib/filesystem'

const maxSize = 2 * 1024 * 1024;

const S3_BUCKET = process.env.S3_BUCKET
const S3_ACCESS_KEY = process.env.S3_ACCESS_KEY
const S3_ACCESS_SECRET = process.env.S3_ACCESS_SECRET

// const s3 = new aws.S3({

// })

// const s3Storage = multerS3({
//     s3,
//     bucket: S3_BUCKET,
//     metadata: (req, res, cb) => {
//         cb(null, { fieldName: file.originalname })
//     },
//     key: (req, res, cb) => {
//         cb(null, file.originalname)
//     },
// })

const screenshotStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname,'../resources/static/assets/uploads/'+req.body.screenshotFolderName));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const uploadFile = multer({
    storage: screenshotStorage,
    limits: {fileSize: maxSize},
}).array('screenshots', 10);

const uploadFileMiddleware = util.promisify(uploadFile);
export default uploadFileMiddleware