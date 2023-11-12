import profilePicture from "../../assets/profile-picture.png";
import NavBarButton from "../widgets/button/NavBarButton";

export default function SideBar() {
  return (
    <aside className="flex flex-col md:w-80 px-10 py-16 bg-slate-500 text-stone-50 rounded-r-md text-center">
      <img
        src={profilePicture}
        alt="profile picture"
        className="mb-6 rounded-lg shadow-lg border border-gray-500"
      />
      <h1 className="mb-2 font-bold md:text-4xl font-poppins">Finlay Marsh</h1>
      <hr className="mb-6" />
      <NavBarButton>About Me</NavBarButton>
      <NavBarButton>Design Patterns</NavBarButton>
      <NavBarButton>Operating Systems</NavBarButton>
      <NavBarButton>Core Algorithms</NavBarButton> {/* sorting, bfs dfs*/}
      <NavBarButton>Data Types</NavBarButton> {/* images, videos, music*/}
      <NavBarButton>Recommendation Algorithms</NavBarButton>
      <NavBarButton>Graph Theory</NavBarButton>
      <NavBarButton>Computer Vision</NavBarButton>
      <NavBarButton>NLP / NLU / NLG</NavBarButton>
      <NavBarButton>Maps</NavBarButton>
      <NavBarButton>Payments</NavBarButton>
      <NavBarButton>Containerization</NavBarButton>{" "}
      {/* Kernals and uni-kernals*/}
    </aside>
  );
}
