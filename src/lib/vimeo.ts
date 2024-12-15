import { Vimeo } from "vimeo";


export const client = new Vimeo(
    String(process.env.VIMEO_CLIENT_ID),
    String(process.env.VIMEO_CLIENT_SECRET),
    String(process.env.VIMEO_ACCESS_TOKEN)
);


export const getVimeoStories = () => {
    return new Promise((resolve, reject) => {
        client.request(
            {
                method: "GET",
                path: `/users/232053563/projects/23274712/items`,
            },
            function (error, body) {
                if (error) {
                    reject(error);
                } else {
                    resolve(body);
                }
            }
        );
    });
};