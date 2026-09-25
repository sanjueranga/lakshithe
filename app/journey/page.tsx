import { redirect } from "next/navigation";

// The journey now lives on the single-page home route.
export default function JourneyPage() {
  redirect("/");
}
