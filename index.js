class App extends React.Component {
    render() {
        return (
            <div>
               <h1>Slot Machines</h1> 
               <Slotmachine 
                s1 ="🍊"
                s2 ="🍋"
                s3 ="🍉"
               />
               <Slotmachine 
                s1 ="🍊"
                s2 ="🍋"
                s3 ="🍉"
               />
               <Slotmachine 
                s1 ="🍊"
                s2 ="🍋"
                s3 ="🍉"
               />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))