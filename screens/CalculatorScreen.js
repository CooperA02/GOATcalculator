import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CalculatorScreen = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    setExpression(expression + value);
  };

  const handleClear = () => {
    setExpression('');
    setResult('');
  };

  const calculateResult = () => {
    try {
      const res = eval(expression);
      setResult('= ' + res.toString());
    } catch (error) {
      setResult('= Error');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <View style={styles.border}>
          <Text style={styles.expression}>{expression}</Text>
        </View>
        <View>
          <Text style={styles.result}>{result}</Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('7')}>
            <Text>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('8')}>
            <Text>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('9')}>
            <Text>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.operationButton]} onPress={() => handlePress('+')}>
            <Text style={styles.operationButtonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('4')}>
            <Text>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('5')}>
            <Text>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('6')}>
            <Text>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.operationButton]} onPress={() => handlePress('-')}>
            <Text style={styles.operationButtonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('1')}>
            <Text>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('2')}>
            <Text>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('3')}>
            <Text>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.operationButton]} onPress={() => handlePress('*')}>
            <Text style={styles.operationButtonText}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.emptyButton} disabled={true}>
            <Text></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePress('0')}>
            <Text>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleClear}>
            <Text>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.operationButton]} onPress={() => handlePress('/')}>
            <Text style={styles.operationButtonText}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={[styles.button, styles.equalButton]} onPress={calculateResult}>
            <Text style={styles.equalButtonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  expression: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  displayContainer: {
    width: 350,
    paddingHorizontal: 20,
  },
  border: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultContainer: {
    marginTop: 10,
  },
  result: {
    fontSize: 30,
    color: '#888',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    width: '70%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 20,
    borderRadius: 10,
    width: '22%',
    alignItems: 'center',
  },
  emptyButton: {
    backgroundColor: 'transparent',
    padding: 20,
    borderRadius: 10,
    width: '22%',
    alignItems: 'center',
  },
  operationButton: {
    backgroundColor: '#DDDDDD',
    fontSize: 20,
    fontWeight: 'bold',
  },
  operationButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  equalButton: {
    backgroundColor: '#FF6347',
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
  equalButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});


export default CalculatorScreen;