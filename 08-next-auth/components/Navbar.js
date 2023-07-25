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
      <ul className={`main-nav ${loading ? "loading" : "loaded"}`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>

        {/* In the new grammar, no need to check loading and session, just check session */}
        {session ? (
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
        ) : (
          <li>
            <a
              href="/api/auth/signin"
              onClick={(e) => {
                e.preventDefault();
                signIn("github");
              }}
            >
              Sign In
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
