module.exports = {
    getLanding: (_, res) => {
      res.json ({
        status: 200,
        msg: 'Selamat Datang, Selamat Berbelanja',
      });
    },
  };
  