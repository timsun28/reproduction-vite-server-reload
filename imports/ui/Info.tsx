import React, { useEffect, useState } from "react";
import { Link } from "../api/links";
import { getLinks } from "/imports/methods/links";

export const Info = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [links, setLinks] = useState<Link[]>([]);

    useEffect(() => {
        getLinks({})
            .then(setLinks)
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Learn Meteor!</h2>
            <ul>
                {links.map((link) => (
                    <li key={link._id}>
                        <a href={link.url} target="_blank">
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
