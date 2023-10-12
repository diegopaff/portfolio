import SmallProjectDetail from "./SmallProjectDetail"
import SmallProjectsNav from "./SmallProjectsNav"

const SmallProjectsContainer = () => {
  return (
    <div className="w-[60%] bg-slate-300 h-[600px] flex flex-row">
        <SmallProjectsNav/>
        <SmallProjectDetail/>
    </div>
  )
}

export default SmallProjectsContainer