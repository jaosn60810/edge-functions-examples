import { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {

  const joke = await fetch("https://memes.tw/wtf/api", {
    "headers": {
      "Accept": "application/json"
    }
  });
  const jsonData = await joke.json();
  return context.json(jsonData);
};
