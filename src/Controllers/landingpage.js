module.exports = {
    getLanding: (_, res) => {
      res.json ({
        status: 200,
        msg: 'Selamat Datang di Hiring Channel App',
      });
    },
  };
  