import { NextRequest } from "next/server";
import { useSession } from "next-auth/react";


// Define the expected structure of the session
interface UserSession {
  user?: {
    email?: string;
  };
}

export async function getSession(req: NextRequest): Promise<UserSession | null> {
    const { data: session } = useSession();
    if (!session) return null;

    return {
        user: {
            email: session.user?.email ?? undefined,
        },
    };
}


