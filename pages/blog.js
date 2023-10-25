import { getSession, useSession } from "next-auth/react";

const Blog = ({ data }) => {
  const { session } = useSession();

  return <div>Blog Page - {data}</div>;
};

export default Blog;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  //securing pages - if youre not logged in to access this page
  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin?callbackUrl=http://localhost:3000/blog",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
      data: session ? "List of 100 blog post" : "List of free blog",
    },
  };
}
