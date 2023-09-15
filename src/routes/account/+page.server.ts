import { error, fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { handleLoginRedirect } from "$lib/helpers";

export const load: PageServerLoad = async (event) => {
  const session = await event.locals.getSession();
  if (!session) {
    throw redirect(302, handleLoginRedirect(event));
  }

  const { data, error: supabaseError } = await event.locals.supabase.from("user_profiles").select("*");
};
