const { render, queryByText, queryAllByText } = require("@testing-library/react")
const { Footer } = require("../Footer")

const inter = jest.fn(() => ({
    className: 'string'
}))

describe(Footer, () => {
    it('should render correctly', () => {
        const component = render(<Footer inter={inter} />)

        expect(component).toBeDefined()
    })

    it('should render four card children', () => {
        const { getByTestId } = render(<Footer inter={inter} />)
        const footer = getByTestId('footer')
        
        expect(footer.children.length).toBe(4)
    })

    it('should render four card children', () => {
        const { queryAllByText } = render(<Footer inter={inter} />)
        const cards = queryAllByText(/Deploy/)
        
        expect(cards.length).toBe(4)
    })
})