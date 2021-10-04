import util from "util";
import multer from "multer";
import aws from "aws-sdk";
import path from "path";
import multerS3 from "multer-s3";

const maxSize = 5 * 1024 * 1024;

const S3_BUCKET = process.env.S3_BUCKET;
const S3_ACCESS_KEY = process.env.S3_ACCESS_KEY;
const S3_ACCESS_SECRET = process.env.S3_ACCESS_SECRET;

const s3 = new aws.S3({
  accessKeyId: S3_ACCESS_KEY,
  secretAccessKey: S3_ACCESS_SECRET,
  region: "eu-central-1",
  Bucket: S3_BUCKET,
});

const s3Storage = multerS3({
  s3: s3,
  bucket: S3_BUCKET,
  metadata: (req, file, cb) => {
    cb(null, { fieldName: file.originalname });
  },
  key: (req, file, cb) => {
    const fullPath =
      "/screenshots/" + req.body.screenshotFolderName + "/" + file.originalname;
    cb(null, fullPath);
  },
});


const screenshotStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname,'../scripts/resources/static/assets/uploads/'+req.body.screenshotFolderName));
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const uploadFile = multer({
  storage: s3Storage,
  limits: { fileSize: maxSize },
}).array("screenshots", 10);

const uploadFileMiddleware = util.promisify(uploadFile);
export default uploadFileMiddleware;
