import ProfileCard from "./ProfileCard";
import InfoGrid from "./InfoGrid";
import DetailsPanel from "./DetailsPanel";
export default function App() {
  return (
    <div className=" min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-2 m-3">
      <ProfileCard />
      <InfoGrid />
      <DetailsPanel/>
    </div>
  );
}