import User from "../components/user";

const UserList = ({ users }) => {
  return (
    <div>
      <h1>List of Users</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            {/* <p>{user.name}</p>
            <p>{user.email}</p> */}
            <User user={user} />
          </div>
        );
      })}
    </div>
  );
};

export default UserList;

export async function getStaticProps() {
  // Fetch data from external API
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await response.json();
  console.log(data);

  // Pass data to the page via props
  // return must be an object
  return { props: { users: data } };
}
