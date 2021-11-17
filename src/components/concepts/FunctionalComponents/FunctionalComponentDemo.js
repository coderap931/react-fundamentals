const FunctionalComponentDemo = () => {
    return(
        <div className='main'>
            <div className='mainDiv'>
                <h1>Functional Compnent</h1>
                <p>Functional components are the primary tool in React to build a small, modular piece of your page.</p>
                <dl>
                    <dt>Can use state</dt>
                    <dd>With the 'useState' hook, functional compnents can now both render a display to the page and update hte information to be shown.</dd>
                    <dt>No 'this' keyword</dt>
                    <dd>Older class compnenets in React use 'this'. Functional compnents have no 'this' object.</dd>
                    <dt>Can use effects</dt>
                    <dd>With the 'useEffect' hook, functional compnents can perform side effects with any props or state changes.</dd>
                    <dt>return()</dt>
                    <dd>Must return a single element, but this element may have nested elements inside of it.</dd>
                </dl>
                <h1>Functional Syntax vs Arrow Function</h1>

                <h1>Challenge</h1>
                <HellowWorld />
                <HelloWorldFatArrow />
            </div>
        </div>
    );
};

export default FunctionalComponentDemo;

const HellowWorld = function() {
    return(
        <div>
            <dl>
                <dt>Regular Function Boi</dt>
                <dd>Oh hai</dd>
            </dl>
        </div>
    );
};

const HelloWorldFatArrow = () => 
    <div>
        <dl>
            <dt>Fat Arrow Function Boi</dt>
            <dd>Oh hai again</dd>
        </dl>
    </div>