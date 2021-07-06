import util from 'util'
import multer from 'multer'

const maxSize = 2 * 1024 * 1024;

const screenshotStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../resources/static/assets/uploads/');
    },
    filename: (req, file, cb) => {
        console.log(file.originalname);
        cb(null, file.originalname);
    },
});

const uploadFile = multer({
    storage: screenshotStorage,
    limits: {fileSize: maxSize},
}).array('file', 10);

const uploadFileMiddleware = util.promisify(uploadFile);
export default uploadFileMiddleware