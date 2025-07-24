import { Card, CardContent } from "~/components/ui/atoms/card";
import { RegisterForm } from "~/components/ui/organisms/registerForm";
import { SquareDashedKanban } from "lucide-react";
import { AnimatedCard } from "~/components/ui/animatedCard";

const RegisterPage = () => {
  return (
    <div className="w-10/12 m-auto">
      <div className="grid grid-cols-2">
        <div className="flex flex-col items-center gap-4 p-4">
          <div className="bg-gradient-to-br from-primary to-secondary w-32 h-32 rounded-full flex items-center justify-center">
            <SquareDashedKanban size={64} color="white" />
          </div>

          <h1 className="px-4 text-5xl font-bold tracking-tight primary-foreground transition-all duration-300 ease-in-out cursor-pointer flex items-center">
            Try
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Cess
            </span>
          </h1>

          <div className="grid grid-cols-3 gap-4 opacity-20">
            {[...Array(9)].map((_, i) => (
              <AnimatedCard
                key={i}
                className="w-24 h-24 bg-white/10 rounded-lg backdrop-blur-sm"
              >
                <div className="min-w-24 min-h-24 bg-muted rounded-lg" />
              </AnimatedCard>
            ))}
          </div>
        </div>
        <Card>
          <CardContent>
          <RegisterForm />
          </CardContent>
          </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
