export default function handler(req, res) {
  res.setPreviewData({
    user: "Sujeong Ji",
  });
  //   res.end("Preview mode enabled");
  res.redirect(req.query.redirect);
}
