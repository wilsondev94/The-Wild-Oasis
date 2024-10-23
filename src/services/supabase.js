import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vfdtltxgluidwzixufkw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmZHRsdHhnbHVpZHd6aXh1Zmt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcwNTcxNzAsImV4cCI6MjA0MjYzMzE3MH0.J35dC6V_S7i6-dF5He0UxkjgMKOIA2b2Xzre8oPRK3E";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
