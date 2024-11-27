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

      <div>
        <div>Job: </div>
        <div>Maintainer</div>
        <div>Permission:</div>
        <div>Write or Delete</div>
      </div>

      <div>
        <textarea>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste nulla,
          tenetur corrupti corporis, beatae consectetur soluta accusamus
          molestias tempore cum quos doloribus dignissimos placeat iure rerum
          fuga odio labore aperiam? At nihil molestiae quibusdam odit nulla
          quasi minus labore excepturi saepe facere voluptatem atque,
          necessitatibus modi asperiores facilis quas nemo eligendi quod sequi
          veritatis non sapiente corporis obcaecati magni? Laudantium.
        </textarea>
        <button>Write</button>
        <button>Delete</button>
      </div>
    </>
  );
}

export default User;
