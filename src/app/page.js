import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center  p-24 justify-center align-middle">
      <div>
        <h1 className="text-6xl">Welcome to My Website!</h1>
        <div className="text-center mt-5">
          <p className="text-2xl">Explore my blog to read interesting posts.</p>
          <button className="mt-5 pl-8 pr-8 pt-4 pb-4 rounded-full bg-orange-400 cursor-pointer">
            <Link href={`/blog`}>Go to Blog</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
