// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const {
    query: { name },
    method
  } = req;

  switch(method) {
    case "GET":
      res.status(200).json({ message: `Hii ${name}` })
      break;
    case "POST":
      res.status(201).json({ message: `${name}, thank-you for registering` })
      break;
    default:
      res.status(405)
  }
}
