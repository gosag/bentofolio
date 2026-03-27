import ProfileCard from "./ProfileCard";
import DetailsPanel from "./DetailsPanel";
import SocialBar from "./SocialsBar";
export default function App() {
  return (
    <div className=" min-h-screen grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-[8fr_4fr_1fr] gap-2 p-3 my-0 dark:bg-black">
      <ProfileCard />
      <DetailsPanel/>
      <SocialBar/>
    </div>
  );
}