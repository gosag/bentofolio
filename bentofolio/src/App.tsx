import ProfileCard from "./ProfileCard";
import DetailsPanel from "./DetailsPanel";
import SocialBar from "./SocialsBar";
export default function App() {
  return (
    <div className=" min-h-screen grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-[6fr_3fr_1fr] gap-2 p-2 m-3">
      <ProfileCard />
      <DetailsPanel/>
      <SocialBar/>
    </div>
  );
}