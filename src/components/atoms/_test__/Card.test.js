const { render } = require("@testing-library/react")
const { Card } = require("../Card")

const inter = jest.fn(() => ({
    className: 'string'
}))

const MockComponent = (props) => render(
    <Card
        inter={inter}
        url="http://google.com"
        title="title"
        body="body"
        {...props}/>
)

describe(Card, () => {
    it('should render correctly', () => {
        const component = MockComponent()

        expect(component).toBeDefined()
    })

    it('should render the title', () => {
        const { getByText } = MockComponent()
        const title = getByText('title')

        expect(title).toBeDefined()
    })

    it('should render a different title', () => {
        const { getByText } = MockComponent({ title: 'new title'})
        const title = getByText('new title')

        expect(title).toBeDefined()
    })
})