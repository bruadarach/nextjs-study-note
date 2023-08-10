import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function Navbar() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">NextAuth</a>
      </h1>
      <ul className={`main-nav ${!session && loading ? "loading" : "loaded"}`}>
        {/* <ul className="main-nav"> */}
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        {!loading && !session && (
          <li>
            <a
              href="/api/auth/signin"
              onClick={(e) => {
                e.preventDefault();
                // signIn();
                signIn("github", {
                  callbackUrl: NEXTAUTH_URL,
                });
              }}
            >
              Sign In
            </a>
          </li>
        )}
        {session && (
          <li>
            <a
              href="/api/auth/signout"
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign Out
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
