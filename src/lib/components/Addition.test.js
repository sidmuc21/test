import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import {expect, test} from "vitest";
import Addition from "./Addition.svelte";

test('Addition Component Test', async ()=> {
    render (Addition);
    const [input1, input2] = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');
    await userEvent.type(input1, '4');
    await userEvent.type(input2, '3');
    await userEvent.click(button);

    expect(screen.getByText('Result: 7')).toBeTruthy();
});
