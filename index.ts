import TDH from "turbo-dynamic-html";
import express from "express";
import path from "path";
TDH.__init__({
  TDH_RENDER_PATH: path.join(process.cwd(), "pages"),
});

const app = express();

app.use(express.static("public"));
app.use(async (req, res, next) => {
  const html = await TDH.render(req.path, {
    chaibg:
      "https://img.freepik.com/free-photo/steaming-cup-chai-tea-with-star-anise-cinnamon-sticks-cloves-black-surface_9975-124486.jpg",
  });
  console.log(html);
  if (html) {
    res.contentType("html");
    res.send(html);
  } else next();
});

app.listen(3080, () => {
  console.log("server started");
});
