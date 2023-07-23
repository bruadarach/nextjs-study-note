export default function hadnler(req, res) {
  res.clearPreviewData();
  res.end("Preview mode disabled");
}
