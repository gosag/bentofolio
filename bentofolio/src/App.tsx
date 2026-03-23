import ProfileCard from "./ProfileCard";
import InfoGrid from "./InfoGrid";
export default function App() {
  return (
    <div className=" min-h-screen grid grid-cols-3 gap-2 p-2">
      <ProfileCard />
      <InfoGrid />
    </div>
  );
}