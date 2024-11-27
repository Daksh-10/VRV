"use client";
import Image from "next/image";
import React from "react";
import Dropdown from "./components/dropdown";
import { useState } from "react";
function Admin() {
  const [toggler, setToggler] = useState(1);

  const [addUser, setAddUser] = useState({
    email: String,
    role: String,
    status: String,
    permission: [String],
  });

  const handleAddUser = (e, name) => {
    setAddUser({ ...addUser, [name]: e.target.value });
  };

  const handleSelect = (option) => {
    setAddUser({ ...addUser, role: option });
  };
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
      <button
        onClick={() => {
          setToggler(1);
        }}
      >
        Add User
      </button>
      <button
        onClick={() => {
          setToggler(2);
        }}
      >
        Remove User
      </button>
      <button
        onClick={() => {
          setToggler(3);
        }}
      >
        Edit Roles
      </button>

      {toggler == 1 && (
        <div>
          <div>Add User</div>
          <input
            type="text"
            placeholder="Enter Email"
            onChange={(e) => handleAddUser(e, "email")}
          ></input>
          <Dropdown
            options={["Maintainer", "Contributor", "Publisher", "Subscriber"]}
            onSelect={handleSelect}
          />
          <input
            type="text"
            placeholder="Enter permission"
            onChange={(e) => handleAddUser(e, permission)}
          ></input>
          <button>Add this User</button>
        </div>
      )}
      {toggler == 2 && (
        <div>
          <div>Add User</div>
          <input type="text" placeholder="Enter Email"></input>
          <button>Remove this user</button>
        </div>
      )}
      {toggler == 3 && (
        <div>
          <div>Add User</div>
          <input
            type="text"
            placeholder="Enter Email"
            onChange={(e) => handleAddUser(e, "email")}
          ></input>
          <Dropdown
            options={["Maintainer", "Contributor", "Publisher", "Subscriber"]}
            onSelect={handleSelect}
          />
          <input
            type="text"
            placeholder="Enter permission"
            onChange={(e) => handleAddUser(e, permission)}
          ></input>
          <button>Edit this user</button>
        </div>
      )}
    </>
  );
}

export default Admin;
