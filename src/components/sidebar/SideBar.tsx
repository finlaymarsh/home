import profilePicture from "../../assets/profile-picture.png";

export default function SideBar() {
  return (
    <aside className="w-1/3 px-10 py-16 bg-slate-500 text-stone-50 md:w-80 rounded-r-md text-center">
      <img
        src={profilePicture}
        alt="profile picture"
        className="mb-6 rounded-lg shadow-lg border border-gray-500"
      />
      <h1 className="mb-2 font-bold md:text-4xl font-poppins">Finlay Marsh</h1>
      <hr className="mb-10" />
      <h2 className="mb-4 font-semibold md:text-xl font-mono">
        Areas of Interest
      </h2>
      <ul>
        <li className="font-mono my-0.5">Design Patterns</li>
        <li className="font-mono my-0.5">Operating Systems</li>
        <li className="font-mono my-0.5">Core Algorithms</li>{" "}
        {/* sorting, bfs dfs*/}
        <li className="font-mono my-0.5">Data Types</li>{" "}
        {/* images, videos, music*/}
        <li className="font-mono my-0.5">Recommendation Algorithms</li>
        <li className="font-mono my-0.5">Graph Theory</li>
        <li className="font-mono my-0.5">Computer Vision</li>
        <li className="font-mono my-0.5">NLP / NLU / NLG</li>
        <li className="font-mono my-0.5">Maps</li>
        <li className="font-mono my-0.5">Payments</li>
        <li className="font-mono my-0.5">Containerization</li>{" "}
        {/* Kernals and uni-kernals*/}
      </ul>
    </aside>
  );
}
