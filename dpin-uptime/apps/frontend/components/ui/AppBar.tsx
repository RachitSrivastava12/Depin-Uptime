"use client";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function AppBar() {
  return (
    <div className="flex justify-between items-center p-4">
      <div>DPIN-UPTIME</div>

      <div className="flex gap-2">
        <SignedOut>
          <SignUpButton />
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
