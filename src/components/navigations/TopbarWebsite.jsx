import React from "react";
import { Moon, Sun } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger,} from "@/components/ui/sheet";
import { CircleHelp, Menu } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle,} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";

const TopbarWebsite = () => {
  const { setTheme } = useTheme();
  const navigate = useNavigate();

  const btnLoginClick = () => {
    navigate("/login");
  };

  const btnSignupClick = () => {
    navigate("/signup");
  };


  const components = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ]


  const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  })

  return (
    <nav className="min-h-16 border-b sticky top-0 z-50 bg-background">
      <div className="h-full container mx-auto flex justify-between items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Menu className={`cursor-pointer block md:hidden`} />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <SheetHeader>
              <SheetTitle>smooth_initiative</SheetTitle>
              <SheetDescription>
                Your partner in smoother business initiatives
              </SheetDescription>
            </SheetHeader>

            <div className="flex justify-between my-5 gap-8">
              <Button
                variant="ghost"
                className={cn("w-1/2")}
                onClick={btnLoginClick}
              >
                Login
              </Button>
              <Button
                className={cn("text-white w-1/2")}
                onClick={btnSignupClick}
              >
                Create an Account
              </Button>
            </div>

            {/* <ul className={`space-y-2 mt-2`}>
                        {navItems.map((item) => (
                        <li key={item.href}>
                            <SheetClose asChild>
                                <Link to={item.href} className={`w-full flex items-center gap-3 px-2 py-2 transition-all hover:bg-primary hover:text-white flex-row rounded-xl`}>
                                    <item.icon className="h-5" />
                                    <p className={`text-nowrap `}>{item.label}</p>
                                </Link>
                            </SheetClose>
                        </li>
                        ))}
                    </ul> */}
          </SheetContent>
        </Sheet>

        <Link to="/" className="font-semibold text-xl">
          smooth_initiative
        </Link>

        <div className="flex items-center gap-3">

          <Sheet>
            <SheetTrigger asChild>
              <CircleHelp className="hidden md:block h-[1.4rem] aspect-square cursor-pointer" />
            </SheetTrigger>
            <SheetContent>
              <Link to="/dashboard">Dashboard</Link>
            </SheetContent>
          </Sheet>

          <div className="hidden md:block">

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            to="/"
                          >
                            {/* <Icons.logo className="h-6 w-6" /> */}
                            smooth_initiative_logo
                            <div className="mb-2 mt-4 text-lg font-medium">
                              smooth_initiative
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautifully designed components that you can copy and
                              paste into your apps. Accessible. Customizable. Open
                              Source.
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/docs" title="Introduction">
                        Re-usable components built using Radix UI and Tailwind CSS.
                      </ListItem>
                      <ListItem href="/docs/installation" title="Installation">
                        How to install dependencies and structure your app.
                      </ListItem>
                      <ListItem href="/docs/primitives/typography" title="Typography">
                        Styles for headings, paragraphs, lists...etc
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Documentation
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/login" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Login
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>   

                <NavigationMenuItem>
                  <Link to="/signup" legacyBehavior passHref>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ${'!bg-primary'}`}>
                      Create an Account
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>  
                

              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className={cn(
                  "outline-none border-none focus:outline-none focus:border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:invisible"
                )}
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

        </div>
      </div>
    </nav>
  );
};

export default TopbarWebsite;
