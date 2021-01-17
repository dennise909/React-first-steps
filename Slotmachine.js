class Slotmachine extends React.Component {

    render() {
        let orange = this.props.s1
        let lemon = this.props.s2
        let watermelon = this.props.s3
        let fruits = [orange, lemon, watermelon]
        let machine = []
        const allEqual = arr => arr.every(v => v === arr[0])
        for (let fruit in fruits) {
            let result = fruits[Math.floor(Math.random() * fruits.length)];
            machine.push(result)
        }

        let results = allEqual(machine)

        function answerFromResult(list) {
            let result;
            if (list === true) {
                result = "you win"
                
            } else {
                result = "you lose"
            }
            return result
        }

        let outcome = answerFromResult(results)
        


        return <div>
            <h2>{machine}</h2>
            <h2>{outcome}</h2>
        </div>
    }
}