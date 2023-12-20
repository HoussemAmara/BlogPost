//https://<your-site.com>/api/revalidate?secret=<token>
//http://localhost:3000/api/revalidate?path=/&secret=19e7ef99e536de99fada29ea4c9c184e
import { NextApiRequest, NextApiResponse } from "next"
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Check for secret to confirm this is a valid request
    if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
        return res.status(401).json({ message: 'Invalid token' })
    }
    const path = req.query.path as string
    await res.revalidate(path)
    return res.json({ revalidated: true })
}
