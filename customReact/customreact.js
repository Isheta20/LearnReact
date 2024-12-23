
//function for rendering like .render in reactDOM
function customRender(reactElement, container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)

    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for (const prop in props) {
        if(prop == 'children') continue; // if children inside props, done earlier

        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

//basically the html returned in app.jsx converted to this format so directly wrote this format and then we render it
const reactElement = {
    type: 'a', 
    props: {
        href: 'https://google.com',
        target: '_blank',
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)

//the code in APP.JSX returned is converted to this syntax by the bundler to be used in the tree