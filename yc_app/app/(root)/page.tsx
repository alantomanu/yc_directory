import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const query = searchParams?.query || ""; // Safely access the query parameter
  
  return (
    <>
      <section className="pink_container pattern">
        <h1 className="heading">
          Pitch your Startups <br />
          Connect with Entrepreneurs
        </h1>
        <p className="subheading !max-w-3xl text-white">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section-container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
        {posts?.length > 0?(
          posts.map((post:StartupCardType,index:number)=>(
            <StartupCard key={post?._id} post={post} />
        ))
      ):(
        <p className="no-results">No startups found</p>
      )}
        </ul>
        
      </section>
    </>
  );
}
