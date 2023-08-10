import { getSession } from "next-auth/react";

const handler = async (req, res) => {
  // use getSession to get the session
  const session = await getSession({ req });
  // if session does not exist
  if (!session) {
    res.status(401).json({ message: "Unauthorized user" });
    return;
  }
  // if session exists
  else {
    res.status(200).json({ message: "Success", session });
  }
};

export default handler;
