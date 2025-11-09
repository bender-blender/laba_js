import SideNavigation from '../../components/_components/SideNavigation';

export default function Layout({ children }){
  return (
    <div className="container grid grid-cols-[16rem_1fr] gap-6 py-8">
      <div><SideNavigation /></div>
      <div>{children}</div>
    </div>
  )
}
