import { NextResponse} from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {

  const verify =  request.cookies.get('auth')?.value;
  const reqPath = request.nextUrl.pathname
  console.log(reqPath)

  // if(!verify){
  //     return NextResponse.redirect(new URL('/SignIn', request.url))
  // }
  // if(verify && reqPath === '/SignIn'){
  //     return NextResponse.redirect(new URL('/Dashboard', request.url))
  // }

  
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/Dashboard',
    '/Activities',
    '/Calender',
    '/Messeges',
    '/MyTasks',
    '/Projects',
    '/Schedule',
    '/TeamMembers',

]
}