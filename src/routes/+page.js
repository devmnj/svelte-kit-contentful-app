import { getAllPostsForHome } from "$lib/api";

export async function load({ preview = false }) {
    const allPosts = (await getAllPostsForHome(preview)) ?? [];
    return {
        preview,
        allPosts
    };
}
