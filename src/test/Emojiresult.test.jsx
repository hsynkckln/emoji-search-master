import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import App from '../App'

describe("Emoji Result",() =>{
    let list;
    beforeEach(()=>{
        render(<App/>)
        list = screen.getByText("Joy")
    })
    test("Emoji kopyalama",()=>{
        userEvent.click(list)
        expect(list.parentElement.getAttribute("data-clipboard-text")).toMatch("😂")
    })
})