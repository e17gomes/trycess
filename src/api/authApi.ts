import { fakeRequestTime } from "~/utils/fakeRequestTime";

/**
 * Tipo que representa um usuário do sistema.
 * A senha está em texto plano aqui só para simulação (não faça assim em produção).
 */
type User = {
  id: number;
  username: string;
  name: string;
  email: string;
  password: string;
};

/**
 * Tipo para resposta da função login.
 * Retorna sucesso, o usuário (sem senha) ou mensagem de erro.
 */
type LoginResponse = {
  success: boolean;
  user?: Omit<User, "password">; // usuário sem a senha
  error?: string;
};

/**
 * Tipo para resposta da função register.
 * Similar ao login, mas para cadastro.
 */
type RegisterResponse = {
  success: boolean;
  user?: Omit<User, "password">;
  error?: string;
};

/**
 * Lista simulada de usuários cadastrados no sistema.
 * Começa com um usuário fixo.
 */
const users: User[] = [
  {
    id: 1,
    username: "admin",
    name: "Admin User",
    email: "admin@example.com",
    password: "1234", // só para mock, jamais em produção
  },
];

/**
 * Variável para armazenar o usuário logado na sessão simulada.
 * Null significa que ninguém está logado.
 */
let loggedInUser: User | null = null;

/**
 * Objeto que simula o gerenciador de autenticação.
 * Possui métodos para login, logout, obter usuário atual e registro.
 */
export const authManager = {
  /**
   * Faz login verificando username e senha.
   * Se válidos, armazena usuário como "logado" e retorna sucesso com dados.
   * Se inválidos, retorna erro.
   */
  async login(username: string, password: string): Promise<LoginResponse> {
    await fakeRequestTime; // simula atraso de rede

    // Procura usuário que bate com username e senha fornecidos
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    // Se achou, marca como logado e retorna dados sem a senha
    if (user) {
      loggedInUser = user;
      const { password, ...userWithoutPass } = user;
      return { success: true, user: userWithoutPass };
    }

    // Caso contrário, erro de login
    return { success: false, error: "Usuário ou senha inválidos" };
  },

  /**
   * Faz logout simplesmente limpando o usuário logado.
   */
  async logout(): Promise<void> {
    await fakeRequestTime; // atraso simulado
    loggedInUser = null; // remove usuário logado
  },

  /**
   * Retorna o usuário logado (sem a senha).
   * Retorna null se ninguém estiver logado.
   */
  async getCurrentUser(): Promise<Omit<User, "password"> | null> {
    await fakeRequestTime; // atraso simulado

    if (!loggedInUser) return null;

    const { password, ...userWithoutPass } = loggedInUser;
    return userWithoutPass;
  },

  /**
   * Registra um novo usuário, se username não existir ainda.
   * Em caso de sucesso, adiciona usuário à lista e marca como logado.
   * Retorna o usuário criado (sem senha) ou erro.
   */
  async register(
    username: string,
    password: string,
    name: string,
    email: string
  ): Promise<RegisterResponse> {
    await fakeRequestTime; // atraso simulado

    // Verifica se username já está cadastrado
    const exists = users.some((u) => u.username === username);

    if (exists) {
      return { success: false, error: "Usuário já existe" };
    }

    // Cria novo usuário com id sequencial
    const newUser: User = {
      id: users.length + 1,
      username,
      password,
      name,
      email,
    };

    // Adiciona na lista de usuários
    users.push(newUser);

    // Marca como logado
    loggedInUser = newUser;

    // Retorna usuário sem senha
    const { password: _, ...userWithoutPass } = newUser;
    return { success: true, user: userWithoutPass };
  },
};
