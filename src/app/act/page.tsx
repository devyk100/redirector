import { redirect } from "next/navigation"

export default function Act() {
    redirect("https://docs.google.com/document/d/1t6dKXV-VutebO_03MX-ewLSAwkdP662-JxY34nZDQsY/edit?tab=t.0")
    return (<>Redirecting...</>)
}