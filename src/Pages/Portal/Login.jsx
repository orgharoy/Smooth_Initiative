import React from 'react'
import { Link } from 'react-router-dom'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import rosePetals from '../../assets/images/rose-petals.svg'

const Login = () => {
  return (
    <div className="w-full lg:grid h-screen lg:grid-cols-2 ">
          
          <div className="hidden bg-muted lg:block relative">
            <h1 className='font-extrabold text-3xl absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 z-10 text-white'>BIMS</h1>
            <img src={rosePetals} alt="" className="h-full w-full object-cover dark:brightness-[0.5]"/>
            {/* <Image
              src={rosePetals}
              alt="Image"
              width="1920"
              height="1080"
              className="h-full w-full object-cover dark:brightness-[0.5]"
            /> */}
          </div>
          <div className="flex items-center justify-center py-12">
            <div className="mx-auto grid w-[350px] gap-6">
              <div className="grid gap-2 text-center">
                <h1 className="text-3xl font-bold">Login</h1>
                {/* <p className="text-balance text-muted-foreground">
                  Enter your email below to login to your account
                </p> */}
              </div>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      href="/forgot-password"
                      className="ml-auto inline-block text-sm underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
                <Button variant="outline" className="w-full">
                  Login with Google
                </Button>
              </div>
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link to="/signup" className="underline">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Login