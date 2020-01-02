module.exports = {
  success: (res, data) => {
    res.status(200).json({
      status: 200,
      msg: "Success",
      data
    });
  }
};
