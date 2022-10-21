import { getPreviewPostBySlug } from "$lib/api";

// @ts-ignore
export async function load({params,preview=false}){
    const data = await getPreviewPostBySlug(params.slug)
    // console.log(data);
    return{
         post:data??null,
         preview
    }
}