import Image from "next/image";
import RenderModel from "./components/RenderModel";
import ModelMain from "./components/models/Scene";
import bg from "../../public/background-1.png";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen h-full w-full">
      <div className="w-full h-full">
        <RenderModel>
          <ModelMain />
        </RenderModel>
      </div>
      <Link href="/old_site" legacyBehavior>
        <a className="absolute bottom-4 left-4 bg-blue-500 text-white px-4 py-2 rounded">
          Go to old website
        </a>
      </Link>
    </main>
  );
}