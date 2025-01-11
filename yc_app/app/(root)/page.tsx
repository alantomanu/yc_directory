import SearchForm from "../components/SearchForm";
export default function Home() {
  return (
    <>
    <section className="pink_container pattern">
    <h1 className="heading">
    Pitch your Startups <br />
    connect with enterprenures
   </h1>
<p className="subheading !max-w-3xl">
  Submit Ideas, Vote on Pitches,and Get Noticed in virtual competitions
</p>
<SearchForm />
    </section>
    </>
   
  );
}
