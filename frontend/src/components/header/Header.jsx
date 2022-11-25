import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";

import CartModal from "./CartModal";

function Header() {
  return (
    <div className=" d-flex justify-content-between bg-success bg-opacity-75 p-2">
      <Link
        to="/"
        className="text-decoration-none text-white fw-bold fs-3 d-flex justify-content-center align-items-baseline gap-2"
      >
        SIAMI
      </Link>
      <Stack direction="horizontal" gap={3}>
        <CartModal />
      </Stack>
    </div>
  );
}

export default Header;
