import IntroCard from "../components/introCard.jsx";
import MainPost from "../components/postCard.jsx";
import OurServices from "../components/our-services";
import HeroSection from "../components/hero-section.jsx";

export default function Home({ members, posts }) {
  return (
    <>
      <div>
        <div>
          <HeroSection />
        </div>
        <h2 className="items-center p-5 text-center font-serif text-4xl text-black">
          Blog Articles
        </h2>
        <div className="flex flex-row justify-evenly p-5">
          {posts.slice(0, 3).map((post) => {
            return (
              <div key={post.id}>
                <MainPost post={post} />
              </div>
            );
          })}
        </div>
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
        <OurServices />
      </div>
    </>
  );
}
export async function getStaticProps() {
  const response = await fetch(
    "https://634d1dd9acb391d34a944653.mockapi.io/api/v1/portofo"
  );
  const data = await response.json();

  const postResponse = await fetch(
    "https://634d1dd9acb391d34a944653.mockapi.io/api/v1/posts"
  );
  const postData = await postResponse.json();
  return {
    props: {
      members: data,
      posts: postData,
    },
  };
}
