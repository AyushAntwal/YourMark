import Link from "next/link";

export default function NotFound() {
  return (
    <div className=" h-screen w-screen  text-center flex justify-center items-center">
      <div>
        <h1 className="text-7xl font-bold mb-6">Page Not Found</h1>
        <Link className="border rounded-lg text-2xl bg-black/30 text-gray-900 px-9 py-1" href="/">
          Return To Home
        </Link>
      </div>
    </div>
  );
}
