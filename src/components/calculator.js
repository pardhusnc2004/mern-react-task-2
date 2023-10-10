import { Component } from "react";
import "../App.css"
export class Calculator extends Component{
    constructor(){
        super();
        this.state = {
            history: [],
            expression: ""
        }
    }
    add_to_expression = (event) => {
        this.setState({ expression: this.state.expression + event.target.id });
    };
    clear_expression = () => {
        if(this.state.expression === "") this.setState({history: []})
        this.setState({expression: ""})
    }
    getDecimalPlaces = (number) => {
        var x = number.toString();
        const index = x.indexOf(".");
        if(index == -1) return 0;
        return x.length - index + 1;
    }
    evaluate_expression = () => {
        try {
            let result = eval(this.state.expression);

            if (isNaN(result)) {
                throw new Error("Invalid expression");
            }

            const decimals = this.getDecimalPlaces(result);
            if (decimals > 4) {
                result = parseFloat(result.toFixed(4));
            }

            if (result > 999999) {
                result = result.toExponential();
            }

            const newHistoryItem = `${this.state.expression} = ${result}`;
            const newHistory = [newHistoryItem, ...this.state.history];

            if (newHistory.length > 8) {
                newHistory.pop();
            }

            this.setState({
                history: newHistory,
                expression: result.toString(),
            });
        } 
        catch (error) {
            this.setState({ expression: "Error!" });
            console.error("Error: ", error.message);
        }
    }
    render() {
        return(
            <div class="custom-container">
                <div class="row">
                    <div class="col-sm-12 text-dark" style={{minHeight: "270px", textAlign: "right", backgroundColor: "#172d67"}}>
                            <h5 className="text-secondary">History Log</h5>
                            {this.state.history.reverse().map((item, index) => (
                                <h6 className="text-light">{item}</h6>
                            ))}
                    </div>
                    <div className="bottom-div mt-0 col-sm-12 text-light"  style={{backgroundColor: "#172d67"}}><h6>{this.state.expression}</h6></div>
                </div>
                <div class="row" style={{width: "330px"}}>
                    <div class="col-sm-3 btn btn-dark text-light text-center p-4 effect" onClick={this.add_to_expression} id = "7">7</div>
                    <div class="col-sm-3 btn btn-dark text-light text-center p-4 effect" onClick={this.add_to_expression} id = "8">8</div>
                    <div class="col-sm-3 btn btn-dark text-light text-center p-4 effect" onClick={this.add_to_expression} id = "9">9</div>
                    <div class="col-sm-3 btn btn-dark text-light text-center p-4 effect" onClick={this.clear_expression} id = "clear">clear</div>
                    <div class="col-sm-3 btn btn-dark text-light text-center p-4 effect" onClick={this.add_to_expression} id = "4">4</div>
                    <div class="col-sm-3 btn btn-dark text-light text-center p-4 effect" onClick={this.add_to_expression} id = "5">5</div>
                    <div class="col-sm-3 btn btn-dark text-light text-center p-4 effect" onClick={this.add_to_expression} id = "6">6</div>
                    <div class="col-sm-3 btn btn-dark text-light text-center p-4 effect" onClick={this.add_to_expression} id = "/">/</div>
                    <div class="col-sm-3 btn btn-dark text-light text-center p-4 effect" onClick={this.add_to_expression} id = "1">1</div>
                    <div class="col-sm-3 btn btn-dark text-light text-center p-4 effect" onClick={this.add_to_expression} id = "2">2</div>
                    <div class="col-sm-3 btn btn-dark text-light text-center p-4 effect" onClick={this.add_to_expression} id = "3">3</div>
                    <div class="col-sm-3 btn btn-dark text-light text-center p-4 effect" onClick={this.add_to_expression} id = "*">x</div>
                    <div class="col-sm-3 btn btn-dark text-light text-center p-4 effect" onClick={this.add_to_expression} id = "0">0</div>
                    <div class="col-sm-3 btn btn-dark text-light text-center p-4 effect" onClick={this.add_to_expression} id = ".">.</div>
                    <div class="col-sm-3 btn btn-dark text-light text-center p-4 effect" onClick={this.evaluate_expression} id = "=">=</div>
                    <div class="col-sm-3 btn btn-dark text-light text-center p-4 effect" onClick={this.add_to_expression} id = "+">+</div>
                </div>
            </div>
        )
    }
}