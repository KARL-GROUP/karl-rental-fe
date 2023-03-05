import Link from "next/link";

const NavBar = () => {
  return (
    <>
    <nav className="z-50 flex justify-between w-full pl-28">
      <h1 className="uppercase text-3xl font-bold ">Karla Rentals</h1>
   
<ul className=" flex gap-10">
  <li>Home</li>
  <li><Link href="/dashboard">Dashboard</Link> </li>

  
  <li><Link href="/addCar">Add car</Link></li>
</ul>
</nav>
    </>
  );
}

export default NavBar;