// import { Outlet } from "react-router-dom";
// import Navigation from "../appbar/Navigation";
// import Header from "../header/Header";

// const Layout = () => {
//   return (
//     <>
//       <header>
//         <Navigation />
//       </header>
//       <main>
//         <Outlet />
//       </main>
//     </>
//   );
// };

// export default Layout;

import { Outlet } from "react-router-dom";
import Navigation from "../appbar/Navigation";
import Header from "../header/Header";

const Layout = () => {
  return (
    <>
      <Header /> {/* Kullanıcı durumu, logout vs. buradan kontrol edilecek */}
      {/* <nav>
        <Navigation />
      </nav> */}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
