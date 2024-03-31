import { NavBar, Bell, ButtonClick } from "@/components/Home";

export default function home() {
  return (
    <div className="max-w-sm md:max-w-lg mx-auto bg-black px-7 py-5">
      <NavBar />
      <Bell />
      <ButtonClick />
    </div>
  )
}
