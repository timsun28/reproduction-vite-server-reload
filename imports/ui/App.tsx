import React from "react";
import { Hello } from "/imports/ui/Hello";
import { Info } from "/imports/ui/Info";
import { testMessage } from "/imports/methods/links";
import { Meteor } from "meteor/meteor";
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
            Test zodern
        </button>
        <button
            onClick={() => {
                Meteor.callAsync("testing.regular").then((res) => {
                    alert(res);
                });
            }}
        >
            Test regular
        </button>
    </div>
);
