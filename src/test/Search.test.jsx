import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import App from '../App'

describe('Input arama', () => { 
    let searchInput;
    beforeEach(()=>{
        render(<App/>)
        searchInput = screen.getByLabelText("inputTest")
    })
    test("Filter",() =>{
        const value = "Joy"
        userEvent.type(searchInput,value)
        expect(screen.getByText(value)).toBeInTheDocument();
    })

})