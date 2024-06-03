import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormEvent, useState } from "react";
import { Main } from "../layout";

interface AuthFormProps {
  onSubmit: (password: string) => void;
}

const AuthForm = ({ onSubmit }: AuthFormProps) => {
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(password);
  };

  return (
    <Main>
      <Card className="my-auto">
        <CardHeader>
          <CardTitle>Connectez-vous</CardTitle>
          <CardDescription>
            Rentrez le mot de passe administrateur afin d&apos;acceder au
            dashboard.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="pass">Mot de passe</Label>
                <Input
                  id="pass"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <CardFooter className="flex justify-between px-0 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setPassword("")}
              >
                Annuler
              </Button>
              <Button type="submit">Connexion</Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </Main>
  );
};

export default AuthForm;
