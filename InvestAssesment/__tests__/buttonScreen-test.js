import React from "react";
import { create } from "react-test-renderer";
import ButtonsScreen from "../src/screens/buttonsScreen";

const tree = create (<ButtonsScreen/>)
test('snapshot', ()=>{
    expect(tree).toMatchSnapShot();
} );
