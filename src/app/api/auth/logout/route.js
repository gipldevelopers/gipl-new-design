import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.delete("admin_token");
  
  return Response.json({ status: "success", message: "Logged out" });
}
