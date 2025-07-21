import { Card, CardContent } from "~/components/ui/atoms/card";

import { RegisterForm } from "~/components/ui/organisms/registerForm";

const LoginPage = () => {
  return (
    <Card className="w-10/12 m-auto">
      <CardContent className="grid grid-cols-2">
        <div
          className="bg-gradient-to-br from-accent   via-accent-foreground/40 to-accent rounded-2xl 
        transition-shadow duration-300 ease-in-out
        hover:shadow-inner hover:shadow-accent"
        ></div>
        <RegisterForm />
      </CardContent>
    </Card>
  );
};

export default LoginPage;
