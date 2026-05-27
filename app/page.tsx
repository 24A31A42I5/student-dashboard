import { DashboardShell } from "@/components/dashboard/dashboard-shell";
import { createClient } from "@/lib/supabase/server";
import type { Course } from "@/types/course";

export const dynamic = "force-dynamic";

async function getCourses(): Promise<Course[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("courses")
    .select("id,title,progress,icon_name,created_at")
    .order("created_at", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return data ?? [];
}

export default async function Home() {
  const courses = await getCourses();

  return <DashboardShell courses={courses} studentName="Amaresh" />;
}
