import IntroCard from "../components/introCard.js";

export default function Home({ members }) {
  return (
    <>
      <h1 className="text-center text-4xl m-5 font-serif font-medium">
        Chap Click Team Members
      </h1>

      <div className="flex fllex-row w-auto">
        {members.map((member) => {
          return (
            <div key={member.id}>
              <IntroCard member={member} />
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
