import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import App from "../App.jsx"


describe('Header test',()=>{
    let header;
    beforeEach(()=>{
        render(<App></App>)
        header=screen.getByText("Emoji Search")

    })

    test('Headerın render edilmesi', () => {
        expect(headerComp).toBeInTheDocument()
    })
})

