import Link from "next/link";

import MemberCard from "../../components/member";

export default function allTeam({ members }) {
  return (
    <>
      <h1 className="my-8 text-center text-4xl">
        All team
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => {
          return (
            <div key={member.id}>
              <Link href={`/team/${member.id}`}>
                <MemberCard member={member} />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://634d1dd9acb391d34a944653.mockapi.io/api/v1/portofo"
  );
  const data = await response.json();
  return {
    props: {
      members: data,
    },
  };
}
