/** @format */

import React from "react";
import { tether, Button, Subheading, Appbar } from "@triframe/designer";

export const NavBar = tether(function* ({ Api, redirect }) {
  const { User } = Api;
  const user = yield User.current();

  let handleLogout = async () => {
    try {
      await redirect("/");
      await User.logout();
    } catch (error) {
      console.log(error);
    }
  };
  const modalView = yield {
    visible: false,
  };

  // this wont exist until we have a place to enter what company 
  // we want on the creat-a-review page
  // const handleCreateReview = () => {
  //   if (user !== null) {
  //     redirect(`/create-review/${id}`);
  //   } else {
  //     modalView.visible = true;
  //     console.log(modalView.visible);
  //   }
  // };

  return (
    <Appbar style={{ backgroundColor: "black" }}>
      <Button
        style={{ backgroundColor: "black" }}
        onPress={async () => await redirect("/")}
      >
        Home
      </Button>
      <Button
        style={{ backgroundColor: "black" }}
        onPress={async () => await redirect("/main")}
      >
        Reviews
      </Button>
      <Button
        style={{ backgroundColor: "black" }}
        onPress={async () => await redirect("/companies")}
      >
        Companies
      </Button>
      {user === null ? (
        <Button
          style={{ backgroundColor: "black" }}
          onPress={async () => await redirect("/login")}
        >
          Login
        </Button>
      ) : (
        <Button style={{ backgroundColor: "black" }} onPress={handleLogout}>
          Log Out
        </Button>
      )}
      {user === null ? (
        <Button
          style={{ backgroundColor: "black" }}
          onPress={async () => await redirect("/signup")}
        >
          Sign Up
        </Button>
      ) : (
        <Button
          style={{ backgroundColor: "black" }}
          onPress={async () => await redirect(`/user/${user.id}`)}
        >
          {user.username}
        </Button>
      )}
    </Appbar>
  );
});
