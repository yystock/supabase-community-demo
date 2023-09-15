// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import { SupabaseClient, Session } from "@supabase/supabase-js";
import { Database } from "./lib/schema";

declare global {
  namespace App {
    interface Locals {
      supabase: SupabaseClient<Database>;
      getSession(): Promise<Session | null>;
      //   user: CombinedUserMapper | null;
    }

    interface PageData {
      session: Session | null;

      //   flash?: { type: "success" | "error"; message: string };
    }

    // interface Error {}
    // interface Platform {}

    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }
}
