import { createMethod } from "meteor/zodern:relay";
import { LinksCollection } from "/imports/api/links";
import { z } from "zod";

export const getLinks = createMethod({
    name: "links.get",
    schema: z.object({}),
    run: async () => {
       return await LinksCollection.find().fetchAsync();
    },
});

export const testMessage = createMethod({
    name: "links.test",
    schema: z.object({}),
    run: async () => {
        return "Hello World";
    },
});
