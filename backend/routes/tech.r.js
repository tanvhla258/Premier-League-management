const express = require("express");
const router = express.Router();
const multer = require("multer");
const { dirname } = require("path");

const techC = require("../controllers/tech.c");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/img");
  },
  filename: (req, file, cb) => {
    cb(null, `image${Date.now()}.${file.originalname}`);
  },
});

const isImage = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(null, Error("only image is allow"));
  }
};

var upload = multer({ storage: storage, fileFilter: isImage });

// router.get("/upload", techC.Upload);
// router.post("/upload", upload.single("imgUpload"), techC.Upload);
router.get("/upload", techC.Upload);
router.post("/upload", upload.single("imgUpload"), techC.Upload);
module.exports = router;
