const { render } = require("@testing-library/react");
const { Header } = require("../Header");

describe(Header, () => {
    it('should render correctly', () => {
        const component = render(<Header />)

        expect(component).toBeDefined()
    })

    it('should render the children when passed as a prop', () => {
        const { getByText } = render(<Header>This is the children</Header>)
        const children = getByText('This is the children')

        expect(children).toBeDefined()
    })

    it('should render the code with a path', () => {
        const { getByText } = render(<Header>Children</Header>)
        const code = getByText('src/pages/index.js')

        expect(code).toBeDefined()
    })
})