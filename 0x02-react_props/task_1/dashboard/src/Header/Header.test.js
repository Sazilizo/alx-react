import React from "react"
import {shallow } from "enzyme";
import { Header } from "./Header"

describe("renders without crashing",()=>{
    it("renders without crashing",()=>{
        shallow(<Header />)
    }),
    
    it("contains a paragaph", ()=>{
        const wrapper = shallow( <Header />);
        expect(wrapper.find('p').text()).toEqual("School dashboard")
    })
})