import { ActiveButton } from "../components/ActiveButton.jsx"

export const LandingPage = () => {
  return <div className="bg-slate-300 h-screen flex justify-center">
  <div className="flex flex-col justify-center">
    <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
      <div className="pt-4">
        <ActiveButton label={"Sign up"} />
        <ActiveButton label={"Sign in"} />
      </div>
    </div>
  </div>
  </div> 
}