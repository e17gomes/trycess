"use client"
import { LogOut } from 'lucide-react';
import React from 'react';
import { Button } from '../atoms/button';
import { useLogout } from '~/hooks/useLogout';

const LogOutButton  = () => {
  const {handleLogout, isPending } = useLogout()

    return (
        <Button size="icon" variant="ghost" className="rounded-full" onClick={()=>handleLogout()}>
            <LogOut />
          </Button>
    );
};

export default LogOutButton;