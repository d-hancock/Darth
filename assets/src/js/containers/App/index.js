import React from 'react';
import Title from '../../components/Title';
import Content from '../../components/Content'

class App extends React.Component {
    render() {
        const text = 'Title text prop from App ';
        const content = "I'm content";
        return (
            <Title text={text}/>,
            <Content content={content}/>
    )
    }
}

export default App;