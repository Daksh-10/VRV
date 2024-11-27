"use client";
import Image from "next/image";
import { useState } from "react";
// import { useRouter } from "next/router";

export default function Home() {
  const [data, setData] = useState({
    userName: String,
    groupName: String,
    email: String,
  });
  // const router = useRouter();

  const handleSubmit = async (num) => {
    try {
      const response = await fetch("api-url", { method: "POST" });
      if (num == 1) {
        if (response) {
          alert("Group Created"); //change with redirect
          // router.push("/admin");
        }
      } else {
        // router.push("/user/1");
      }
    } catch (e) {
      alert("A problem occured");
    }
  };

  return (
    <div>
      <div>GroupName</div>
      <Image
        src="/images/backgroundGame.jpg"
        alt="Group Photo"
        width={100}
        height={400}
      />
      <input
        type="text"
        placeholder="Enter UserName"
        onChange={(e) => setData({ ...data, userName: e.target.value })}
      ></input>
      <input
        type="text"
        placeholder="Enter Group Name"
        onChange={(e) => setData({ ...data, groupName: e.target.value })}
      ></input>
      <input
        type="text"
        placeholder="Enter email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      ></input>
      <button onClick={() => handleSubmit(1)}>Create Group</button>
      <button onClick={() => handleSubmit(2)}>Join Group</button>
    </div>
  );
}
