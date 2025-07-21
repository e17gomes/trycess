"use client";
import { LogOut } from "lucide-react";
import React from "react";
import { Button } from "../atoms/button";
import { useLogout } from "~/hooks/useLogout";

const LogOutButton = () => {
  const { handleLogout, isPending } = useLogout();

  return (
    <Button
      size="icon"
      className="rounded-full w-8 h-8 bg-accent-foreground/30"
      onClick={() => handleLogout()}
      disabled={isPending}
    >
      <LogOut />
    </Button>
  );
};

export default LogOutButton;
