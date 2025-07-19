import { NextRequest, type MiddlewareConfig ,NextResponse } from 'next/server'
 
const publicRoutes = [{
    path:'/', whenAuthIsAllowed:'next'
},{
    path:'/login', whenAuthIsAllowed:'redirect'
    },
{
    path:'/register', whenAuthIsAllowed:'redirect'
    },] as const

export function middleware(req: NextRequest) {
    const currentPath = req.nextUrl.pathname;
    const publicRoute = publicRoutes.find(route => route.path === currentPath)
    const authToken = req.cookies.get('tkn')

    if (!authToken && !publicRoute) {
        const urlToRedirect = req.nextUrl.clone()
        urlToRedirect.pathname = '/login'

        return NextResponse.redirect(urlToRedirect)
    }
    
    if (authToken && !publicRoute) {
        const urlToRedirect = req.nextUrl.clone()
        urlToRedirect.pathname = '/login'

        return NextResponse.redirect(urlToRedirect)
    }

    if (authToken && publicRoute && publicRoute.whenAuthIsAllowed === 'redirect') {
        const urlToRedirect = req.nextUrl.clone()
        urlToRedirect.pathname = '/dashboard'

        return NextResponse.redirect(urlToRedirect)
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
      //Basicamente é a configuração em condições que o middleware não deve ser ativado
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}

export default middleware