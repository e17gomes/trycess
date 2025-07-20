"use client";
import { useLogin } from "~/hooks/useLogin";
import { Button } from "~/components/ui/atoms/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "~/components/ui/atoms/card";

import { LoginForm } from "~/components/ui/organisms/loginForm";

const LoginPage = () => {
  return (
    <Card className="w-10/12 m-auto">
      <CardContent className="grid grid-cols-2">
        <LoginForm />
        <div className="bg-gradient-to-br from-accent to-accent-foreground rounded-2xl"> 
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginPage;
