import ProfileCard from "./ProfileCard";
import InfoGrid from "./InfoGrid";
import DetailsPanel from "./DetailsPanel";
import SocialBar from "./SocialsBar";
export default function App() {
  return (
    <div className=" min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[3fr_3fr_3fr_1fr] gap-2 p-2 m-3">
      <ProfileCard />
      <InfoGrid />
      <DetailsPanel/>
      <SocialBar/>
    </div>
  );
}