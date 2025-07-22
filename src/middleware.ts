import { type NextRequest, NextResponse } from "next/server";

const publicRoutes = [
  { path: "/", whenAuthIsAllowed: "next" },
  { path: "/login", whenAuthIsAllowed: "redirect" },
  { path: "/register", whenAuthIsAllowed: "redirect" },
] as const;

export function middleware(req: NextRequest) {
  const currentPath = req.nextUrl.pathname;
  const publicRoute = publicRoutes.find((route) => route.path === currentPath);
  const authToken = req.cookies.get("tkn");
  // Usuário não autenticado e rota não pública: redireciona para login
  if (!authToken && !publicRoute) {
    const urlToRedirect = req.nextUrl.clone();
    urlToRedirect.pathname = "/login";
    return NextResponse.redirect(urlToRedirect);
  }

  // Usuário autenticado e rota não pública: passa sem problemas (como são dados mockados não seria necessário validação)
  if (authToken && !publicRoute) {
    return NextResponse.next();
  }

  // Usuário autenticado e rota pública que exige redirecionamento: redireciona para dashboard
  if (
    authToken &&
    publicRoute &&
    publicRoute?.whenAuthIsAllowed === "redirect"
  ) {
    const urlToRedirect = req.nextUrl.clone();
    urlToRedirect.pathname = "/dashboard";
    return NextResponse.redirect(urlToRedirect);
  }

  // Caso padrão: segue normalmente
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};

export default middleware;
