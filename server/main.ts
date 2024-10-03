import { Meteor } from "meteor/meteor";
import { LinksCollection } from "../imports/api/links";
import "/imports/methods/links";
import "/server/react-refresh.ts";
import { FileCollection } from "/imports/api/images/server/images";

async function insertLink({ title, url }: { title: string; url: string }) {
    await LinksCollection.insertAsync({ title, url, createdAt: new Date() });
}

Meteor.startup(async () => {
    const files = await FileCollection.find().fetchAsync();
    console.log(files);
    // If the Links collection is empty, add some data.
    if ((await LinksCollection.find().countAsync()) === 0) {
        await insertLink({
            title: "Do the Tutorial",
            url: "https://www.meteor.com/tutorials/react/creating-an-app",
        });

        await insertLink({
            title: "Follow the Guide",
            url: "https://guide.meteor.com",
        });

        await insertLink({
            title: "Read the Docs",
            url: "https://docs.meteor.com",
        });

        await insertLink({
            title: "Discussions",
            url: "https://forums.meteor.com",
        });
    }

    // We publish the entire Links collection to all clients.
    // In order to be fetched in real-time to the clients
    Meteor.publish("links", function () {
        return LinksCollection.find();
    });
});
