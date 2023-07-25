import { signIn, useSession } from "next-auth/react";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Dashboard = () => {
  // const { data: session, status } = useSession();
  //console.log(session, status === "loading");
  // undefined true

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    };
    securePage();
  }, []);

  if (loading) return <div>Loading...</div>;

  return <div>Dashboard</div>;
};

export default Dashboard;
