import React from "react";
import { Hello } from "/imports/ui/Hello";
import { Info } from "/imports/ui/Info";
import { testMessage } from "/imports/methods/links";

export const App = () => (
    <div>
        <h1>Welcome to Meteor!</h1>
        <Hello />
        <Info />
        <button
            onClick={() => {
                testMessage({}).then((res) => {
                    alert(res);
                });
            }}
        >
            Test
        </button>
    </div>
);
