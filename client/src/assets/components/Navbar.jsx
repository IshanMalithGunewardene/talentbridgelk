import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <div>Talentbridge LK</div>
      <div className="flex gap-10">
        <div>
          <ul className="flex gap-4">
            <li>Home</li>
            <li>Jobs</li>
            <li>About us</li>
          </ul>
        </div>
        <div>
          <button>sign in</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
