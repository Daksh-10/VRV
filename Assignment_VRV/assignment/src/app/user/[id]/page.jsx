import React from "react";
import Image from "next/image";
function User() {
  return (
    <>
      <div>Group Name</div>
      <Image
        src="/images/backgroundGame.jpg"
        alt="Image"
        width={100}
        height={100}
      />

      <div>UserName</div>
    </>
  );
}

export default User;
