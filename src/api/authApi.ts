import { validCredentials } from "~/data/mockUsers";
import { User } from "~/types/userType";
import { fakeRequestTime } from "~/utils/fakeRequestTime";

let loggedInUser: User | null = null;

export const authManager = {

  async login(
    email: string,
    password: string
  ): Promise<Omit<User, "password">> {
    await fakeRequestTime;

    const user = validCredentials.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      throw new Error("Usuário ou senha inválidos");
    }

    loggedInUser = user;

    const { password: _, ...userWithoutPass } = user;
    return userWithoutPass;
  },

  async logout(): Promise<void> {
    await fakeRequestTime;
    document.cookie = "tkn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

    loggedInUser = null;
  },

  async getCurrentUser(): Promise<Omit<User, "password"> | null> {
    await fakeRequestTime;

    if (!loggedInUser) return null;

    const { password: _, ...userWithoutPass } = loggedInUser;
    return userWithoutPass;
  },

  async register(
    username: string,
    password: string,
    name: string,
    email: string
  ): Promise<Omit<User, "password">> {
    await fakeRequestTime;

    const exists = validCredentials.some((u) => u.email === email);

    if (exists) {
      throw new Error("Usuário já existe");
    }

    const newUser: User = {
      id: validCredentials.length + 1,
      username,
      password,
      name,
      email,
    };

    validCredentials.push(newUser);
    localStorage.setItem("users", JSON.stringify(validCredentials));

    loggedInUser = newUser;

    const { password: _, ...userWithoutPass } = newUser;
    return userWithoutPass;
  },
};
