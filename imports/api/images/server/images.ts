import { FilesCollection } from "meteor/ostrio:files";

export const FileCollection = new FilesCollection({
    storagePath: `images`,
    collectionName: "images",
    // Disallow Client to execute remove, use the Meteor.method
    allowClientCode: false,
});
