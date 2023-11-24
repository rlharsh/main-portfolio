import { createClient } from "contentful";

const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_KEY
});

export const getInfoContent = async(id) => {
    try {
        const res = await client.getEntry(id);
        return {
            title: res.fields.title,
            content: res.fields.body
        }
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
};
