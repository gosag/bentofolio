import ProfileCard from "./ProfileCard";
import InfoGrid from "./InfoGrid";
export default function App() {
  return (
    <div className=" min-h-screen flex gap-3 p-2">
      <ProfileCard />
      <InfoGrid />
    </div>
  );
}