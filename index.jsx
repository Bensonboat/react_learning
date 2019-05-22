import React from 'react';
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { store, addMessage } from './index.js'





class MessageList extends React.Component {
    render(){
        let message = this.props.data1.map((item) => {
            return <li key={item.key}>{item.name}:{item.message}</li>
        })

        return(
            <ul>
                {message}
            </ul>
        )
    }
}


const mapStateToProps = state => {
    return {
        data1: state.message
    }
}

const List = connect(mapStateToProps)(MessageList)

// class MessageForm extends React.Component {
//     render(){
//         return(
//             <Provider store={ store }>
//                 <List />
//             </Provider>
//         )
//     }
// }

// ReactDOM.render(<MessageForm/>,document.getElementById('root'))


class InputMessage extends React.Component {
    constructor(props){
        super(props)
        this.state = {name: '', message: ''}
        this.clearMessage = this.clearMessage.bind(this)
        this.changeState = this.changeState.bind(this)
        this.submitMessage = this.submitMessage.bind(this)
    }

    changeState(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    clearMessage(){
        this.setState({name: '', message: ''})
    }

    submitMessage(){
        let messageData = {
            key: '',
            name: this.state.name,
            message: this.state.message
        }

        this.props.addMessage(messageData)
        this.clearMessage()
    }

    render(){
        return(
            <div>
                name: <input type="text" name='name' value={ this.state.name } onChange={ this.changeState }/>
                <br/>
                message:
                <br/>
                <textarea name='message' value={ this.state.message } onChange={ this.changeState }></textarea>
                <input type="button" value='submit' onClick={ this.submitMessage }/>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addMessage: article => dispatch(addMessage(article))
    }
}


class ConnectMessageForm extends React.Component {
    render(){
        return(
            <div>
                <InputMessage addMessage={ this.props.addMessage } />
                <MessageList data1={this.props.data1} />
            </div>
        )
    }
}


const MessageForm = connect(mapStateToProps, mapDispatchToProps)(ConnectMessageForm)


ReactDOM.render(
                <Provider store={store}>
                    <MessageForm />
                </Provider>,
                document.getElementById('root')
                )
