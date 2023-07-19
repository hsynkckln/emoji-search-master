import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import emojiList from '../emojiList.json'
import App from '../App'

describe('Emoji Test', () => {
    beforeEach(()=>{
        render(<App/>)
    })
    test("Emoji render", () => {
        let emoji = emojiList.slice(0, 20);
        emoji.map((item) => {
            expect(screen.getByText(item.title)).toBeInTheDocument()
        })
    })


})