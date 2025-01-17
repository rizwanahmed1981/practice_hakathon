"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../components/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Women Clothing",
    href: "/womenclothing",
    description:
      "Designer shirts to fillfull your need and take your personality to next level.",
  },
  {
    title: "Shoes/ Accesories..",
    href: "/shoes",
    description:
      "Designer shirts to fillfull your need and take your personality to next level.",
  },
  {
    title: "New Born",
    href: "/newborn",
    description:
      "Collected under very strict supervision of professionals for the care of New Born babies",
  },
  {
    title: "Children",
    href: "/children",
    description:
      "Best and comfortable goods for your precious child.",
  },
  {
    title: "Toys",
    href: "/toys",
    description:
      "How can we forget to not to care about your children Entertainment",
  },
  {
    title: "Home Care",
    href: "/homecare",
    description:
      "Let our preminim products add a value to your life style..",
  }
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <Link href={'/'}>Home</Link>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Catagories</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <Link key={component.title}
                legacyBehavior
                passHref
                  href={component.href}>
                  <ListItem title={component.title}>
                    {component.description}
                  </ListItem>
                </Link>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>

          </Link>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>

          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block bg-myColor3 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
ListItem.displayName = "ListItem"
