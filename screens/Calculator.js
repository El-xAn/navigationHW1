import React , {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../styles/calcStyles';

class Calculator extends Component {
  constructor(props){
    super(props);

    this.state = {
      operations: "",
      result: ""
    }
  }

  isOps = false;
  isDot = false;
  isDivide = true;
  isZero = true;
  isWrongOps = false;
  isNumber = true;

  clearAll = () => {
    this.setState({
      operations: this.state.operations = "" ,
      result: this.state.result = ""
    });

    this.isOps = false;
    this.isDot = false;
    this.isWrongOps = false;
    this.isNumber = true;
  }

  backBtn = () => {
    opsDisp = this.state.operations ;
    resDisp = this.state.result;

    lastSym = opsDisp[opsDisp.length-1];

    if(opsDisp === "") {
      console.log("if");
      this.setState({
        operations: this.state.operations = "" ,
        result: this.state.result = ""
      });
    // } else if (opsDisp === resDisp) {
    //   this.setState({
    //     operations: opsDisp.substring(0, opsDisp.length - 1),
    //     // result: opsDisp.substring(0, opsDisp.length - 1) 
    //   });
    } else {
      switch(lastSym) {
        case '.': 
          this.isDot = true;
          this.isOps = false;
          this.isNumber = true;
        case '+': 
          this.isOps = false;
          this.isDot = true;
          this.isNumber = true;
        case '-':
          this.isOps = true;
          this.isDot = false;
          this.isNumber = false;
        case '*':
          this.isOps = true;
          this.isDot = false;
          this.isNumber = false;
        case '/':
          this.isOps = true;
          this.isDot = false;
          this.isNumber = false;
      }

      this.setState({
        operations: opsDisp.substring(0, opsDisp.length - 1)
      });
    }    
  }

  getButton = (text) => {
    opsDisp = this.state.operations ;
    resDisp = this.state.result;
    
    if (text == '0') {
      this.setState({operations: opsDisp + text}) ;
      this.isZero = false;
      this.isDot = true;
    }else if (this.isWrongOps || opsDisp == "0" || opsDisp == ".") { 
      this.setState({
        operations: text,
        result: ""
      });
      this.isOps = true;
      this.isDot = true;
      this.isDivide = false;
      this.isWrongOps = false;
    } else if (text != '0') { 
      this.setState({operations: opsDisp + text}) ;
      this.isOps = true;
      this.isDot = true;
      this.isDivide = false;
    }
  } 

  getOps = (ops) => {
    opsDisp = this.state.operations;

    if (!this.isDivide && ops === '/') {
      this.setState({operations: opsDisp + ops});
      this.isDivide = true;
      this.isOps = false;
      this.isDot = false;
      this.isNumber = true;
    }else if (this.isOps && ops != '.' && ops != '/') {
      this.setState({operations: opsDisp + ops});
      this.isOps = false;
      this.isDot = false;
      this.isNumber = true;
      this.isDivide = true;
    } else if (this.isDot && this.isNumber) {
      this.setState({operations: opsDisp + ops});
      this.isOps = false;
      this.isDot = false;
      this.isZero = true;
      this.isNumber = false;
      this.isDivide = true;
    }
  }

  equal = () => {
    opsDisp = this.state.operations;
    resDisp = this.state.result;

    if(opsDisp == "" || this.isWrongOps) {
      this.setState({
        operations: this.state.operations = "" ,
        result: this.state.result = ""
      });
    } else if (!this.isOps || !this.isDot) {
      this.resDisp = eval(opsDisp.substring(0, opsDisp.length - 1));
      this.setState({
        result: this.resDisp,
        operations: this.resDisp
      });
      this.isOps = true;
      this.isDot = true;
    } else if (!this.isZero && !this.isDivide ) {
      this.setState({operations: "no no no"});
      this.isWrongOps = true;
      this.isDivide = true;
      this.isZero = true;
    }else { 
      this.resDisp = eval(opsDisp);
      this.setState({
        result: this.resDisp,
        operations: this.resDisp
      });
      this.isNumber = false;
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.display}>
          <Text style={styles.text}>{this.state.operations}</Text>
        </View>

        <View style={styles.display}>
          <Text style={styles.text}>{this.state.result}</Text>
        </View>

        <View style={styles.buttons}>
        <View style={styles.numbers}>
          <View style={styles.clrButton}>
              <TouchableOpacity style={styles.clrBtnBack} onPress={this.clearAll}>
                <Text style={styles.text}>CA</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.delBtnBack} onPress={() => this.backBtn()}>
                <Text style={styles.text}>⌫</Text>
              </TouchableOpacity>
          </View>
          
          
          <View style={styles.numbers}>
            <View style={styles.numbersRow}>
              <TouchableOpacity style={styles.buttonsBack} onPress={() => this.getButton('7')}>
                <Text style={styles.text}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonsBack} onPress={() => this.getButton('8')}>
                <Text style={styles.text}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonsBack} onPress={() => this.getButton('9')}>
                <Text style={styles.text}>9</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.numbersRow}>
              <TouchableOpacity style={styles.buttonsBack} onPress={() => this.getButton('4')}>
                <Text style={styles.text}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonsBack} onPress={() => this.getButton('5')}>
                <Text style={styles.text}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonsBack} onPress={() => this.getButton('6')}>
                <Text style={styles.text}>6</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.numbersRow}>
              <TouchableOpacity style={styles.buttonsBack} onPress={() => this.getButton('1')}>
                <Text style={styles.text}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonsBack} onPress={() => this.getButton('2')}>
                <Text style={styles.text}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonsBack} onPress={() => this.getButton('3')}>
                <Text style={styles.text}>3</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.numbersRow}>
              <TouchableOpacity style={styles.zeroBack} onPress={() => this.getButton('0')}>
                <Text style={styles.text}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonsBack} onPress={() => this.getOps('.')}>
                <Text style={styles.text}>.</Text>
              </TouchableOpacity>
            </View>
            </View>
          </View>
          
          <View style={styles.operators}>
            <TouchableOpacity style={styles.operatorsBack} onPress={() => this.getOps('/')}>
              <Text style={styles.text}>÷</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorsBack} onPress={() => this.getOps('*')}>
              <Text style={styles.text}>*</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorsBack} onPress={() => this.getOps('-')}>
              <Text style={styles.text}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorsBack} onPress={() => this.getOps('+')}>
              <Text style={styles.text}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operatorsBack} onPress={() => this.equal()}>
              <Text style={styles.text}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
};



export default Calculator;