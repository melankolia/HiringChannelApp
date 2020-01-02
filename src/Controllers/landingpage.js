module.exports = {
  getLanding: (_, res) => {
    res.json({
      status: 200,
      msg: "Welcome to Hiring Channel App"
    });
  }
};
