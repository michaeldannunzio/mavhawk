module.exports = (index) => {
  index.get('/', (req, res, next) => {
    res.json({message: 'MavHawk'});
  });
}
