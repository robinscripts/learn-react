function customRender(root, reactElement)
{
    const node = document.createElement(reactElement.type);
    node.innerHTML = reactElement.children;
    for(let key in reactElement.props)
    {
        node.setAttribute(key, reactElement.props[key]);
    }
    root.appendChild(node);
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: "Click me to visit Google"
}

const root = document.getElementById("root");

customRender(root, reactElement);