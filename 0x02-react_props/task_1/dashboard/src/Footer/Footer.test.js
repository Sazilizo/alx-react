
import React from "react";
import {render, screen} from "@testing-library/react";
import Footer from "./Footer";

test("Footer renders without crashing", ()=>{
    const wrapper = render(<Footer />);
    expect(wrapper.firstChild).toBeDefined();
})
test("Footer renders Copyright", ()=>{
    render(<Footer/>)
    expect(screen.getByText(/Copyright/i)).toBeInTheDocument()
})