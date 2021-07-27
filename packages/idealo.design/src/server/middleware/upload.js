import util from 'util'
import multer from 'multer'
import path from 'path'

const maxSize = 2 * 1024 * 1024;

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