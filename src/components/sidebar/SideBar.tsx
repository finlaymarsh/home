import profilePicture from "../../assets/profile-picture.png";
import NavBarButton from "../widgets/button/NavBarButton";

export default function SideBar() {
  return (
    <aside className="flex flex-col min-w-lg max-w-[20rem] px-10 py-16 bg-sky-500 text-stone-50 rounded-r-md text-center">
      <img
        src={profilePicture}
        alt="profile picture"
        className="mb-6 rounded-lg shadow-lg border border-gray-500"
      />
      <h1 className="mb-2 font-bold text-4xl font-poppins">Finlay Marsh</h1>
      <hr className="mb-6" />
      <NavBarButton to="/">About Me</NavBarButton>
      <NavBarButton to="/design-patterns">Design Patterns</NavBarButton>
      <NavBarButton to="/">Operating Systems</NavBarButton>
      <NavBarButton to="/">Core Algorithms</NavBarButton>
      {/* sorting, bfs dfs*/}
      <NavBarButton to="/">Data Types</NavBarButton>
      {/* images, videos, music*/}
      <NavBarButton to="/">Recommendation Algorithms</NavBarButton>
      <NavBarButton to="/">Graph Theory</NavBarButton>
      <NavBarButton to="/">Computer Vision</NavBarButton>
      <NavBarButton to="/">NLP / NLU / NLG</NavBarButton>
      <NavBarButton to="/">Maps</NavBarButton>
      <NavBarButton to="/">Payments</NavBarButton>
      <NavBarButton to="/">Containerization</NavBarButton>
      {/* Kernals and uni-kernals*/}
    </aside>
  );
}
