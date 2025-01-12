import SearchForm from "../../components/SearchForm";
export default async function Home({searchParams}:{
  searchParams:Promise<{query:string}>
}) {
  const query = (await searchParams).query;
  return (
    <>
    <section className="pink_container pattern">
    <h1 className="heading">
    Pitch your Startups <br />
    connect with enterprenures
   </h1>
<p className="subheading !max-w-3xl text-white">
  Submit Ideas, Vote on Pitches,and Get Noticed in virtual competitions
</p>
<SearchForm query={query} />
    </section>
    </>
   
  );
}
