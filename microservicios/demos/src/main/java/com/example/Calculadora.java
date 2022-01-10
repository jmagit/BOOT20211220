package com.example;

public class Calculadora {
	public double suma(double a, double b) {
		return a + b;
	}
	public double divide(double a, double b) {
		return a / b;
	}
	public int divide(int a, int b) {
		assert b != 0;
		return a / b;
	}
	@Override
	public String toString() {
		return "Calculadora [toString()=" + super.toString() + "]";
	}
	public double resta(double a, double b) {
		return a - b;
	}
	
	public String toFalso() {
		return "Calculadora [toString()=" + super.toString() + "]";
	}
	
}
