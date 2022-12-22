const moment = require("moment");
const db = require("../config/db");

exports.Upload = async (req, res, next) => {
  const { fname } = req.body;
  const { filename } = req.file;
  if (!fname || !filename) {
    res.status(422).json({ status: 422, message: "fill all the details" });
    db.query(
      "INSERT INTO doi_bong SET ?",
      { Logo: filename },
      (err, result) => {
        if (err) {
          console.log("error");
        } else {
          console.log("data added");
          res.status(201).json({ status: 201, data: req.body });
        }
      }
    );
  }
  try {
    let date = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");
  } catch (e) {
    res.status(422).json({ status: 422, e });
  }
};
