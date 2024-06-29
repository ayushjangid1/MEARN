import { RecoilRoot } from "recoil"
import { RevenueCard } from "./components/RevenueCard"
import { SideBar } from "./components/SideBar"
import { Table } from "./components/Table"
import { TopPortion } from "./components/TopPortion"

function App() {

  return (<div className="bg-off-white grid grid-cols-8 overscroll-none ">

      {/* {1. Flex} */}
      {/* <div className="flex justify-between">
        <div className="bg-blue-100 w-32">Hi there !</div>
        <div className="bg-red-500 w-64">Hi there !</div>
        <div className="bg-yellow-900 w-14">Hi there !</div>
      </div> */}

      {/* {2. Grids} */}
      {/* <div className="grid grid-cols-12">
        <div className="bg-blue-100 col-span-5">Hi there !</div>
        <div className="bg-red-500 col-span-5">Hi there !</div>
        <div className="bg-yellow-900 col-span-2">Hi there !</div>
      </div> */}

      {/* 3. Responsiveness */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="bg-blue-300">Hi there</div>
        <div className="bg-red-300">Hi there</div>
        <div className="bg-green-300">Hi there</div>
      </div> */}
      <RecoilRoot>
      <div className="sticky bg-dark-blue col-span-1 sm:col-span-0">
      <SideBar></SideBar>
      </div>
      <div className="col-span-8 md:col-span-7 ">
      <TopPortion></TopPortion>
      <RevenueCard></RevenueCard>
      <Table/>
      </div>
      </RecoilRoot>
    </div>
  )
}

export default App
