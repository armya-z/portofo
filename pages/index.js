import IntroCard from "../components/introCard.js";
import Ourservices from "../components/our-services.jsx";
import MainPost from "../components/posts.jsx";

export default function Home({ members }) {
  return (
    <>
      <div>
        <MainPost />
      </div>

      <div>
        <h1 className="items-center p-5 text-center font-serif text-4xl text-black">
          Chap Click Team Members
        </h1>
        <div className="fllex-row flex w-full bg-white bg-opacity-0">
          {members.map((member) => {
            return (
              <div key={member.id}>
                <IntroCard member={member} />
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <Ourservices />
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
