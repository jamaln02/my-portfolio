import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import DarkLightMode from "./DarkLightMode";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium hover:underline underline-offset-8"
      >
        <a
          href="#"
          className="flex items-center dark:text-gray-300 transition-colors hover:text-orange-900 dark:hover:text-orange-900"
        >
          About me
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium hover:underline underline-offset-8"
      >
        <a
          href="#"
          className="flex items-center dark:text-gray-300 transition-colors hover:text-orange-900 dark:hover:text-orange-900"
        >
          Projects
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium hover:underline underline-offset-8"
      >
        <a
          href="#"
          className="flex items-center dark:text-gray-300 transition-colors hover:text-orange-900 dark:hover:text-orange-900"
        >
          Contact me
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium hover:underline underline-offset-8"
      >
        <a
          href="#"
          className="flex items-center dark:text-gray-300 transition-colors "
        >
          <DarkLightMode />
        </a>
      </Typography>
    </ul>
  );
}

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-lg px-6 py-3 bg-transparent bg-opacity-0 border-none shadow-none ">
      <div className="flex items-center justify-between text-blue-gray-900  dark:text-gray-300">
        <Typography
          as="a"
          href="#"
          variant="h5"
          className="mr-4 cursor-pointer py-1.5 "
        >
          Jamal Nabaa
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <hr />
        <NavList />
      </Collapse>
    </Navbar>
  );
};

export default Header;
