export default function handler(req, res) {
  // 'params' refers to the file name (path after api/...)
  const params = req.query.params;
  console.log(params);

  res.status(200).json(params);
}
