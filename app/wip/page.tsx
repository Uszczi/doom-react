import Link from "next/link";

export default function WipHome() {
  return (
    <div className="grid justify-center items-center h-screen">
      <div className="flex flex-col gap-4">
        <Link href="wip/listmaps">List of maps</Link>
        <Link href="wip/map01">Map 01</Link>
      </div>
    </div>
  );
}
