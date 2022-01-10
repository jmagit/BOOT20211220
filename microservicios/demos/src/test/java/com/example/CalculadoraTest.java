package com.example;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.DisplayNameGeneration;
import org.junit.jupiter.api.DisplayNameGenerator;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

@DisplayNameGeneration(DisplayNameGenerator.ReplaceUnderscores.class)
class CalculadoraTest {
	private Calculadora calc;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
	}

	@BeforeEach
	void setUp() throws Exception {
		calc = new Calculadora();
	}

	@AfterEach
	void tearDown() throws Exception {
	}

	@Nested
	@DisplayName("Suma de números reales")
	class SumaTest {
		@Test
		@DisplayName("Suma de números positivos")
		void testSuma_Positivos() {
			var rslt = calc.suma(2, 2);
			assertEquals(4, rslt);
		}

		@Test
		void testSuma_Ceros() {
			assertEquals(0, calc.suma(0, 0));
		}

		@Test
		void testSuma_Positivo_Negativo() {
			assertEquals(0, calc.suma(1, -1));
		}

		@Test
		void testSuma_IEEE() {
			assertEquals(0.3, calc.suma(0.1, 0.2), "IEEE Error");
		}

	}
	@Nested
	class RestaTest {
		@Test
		void testPositivos() {
			var rslt = calc.resta(2, 2);
			assertEquals(0, rslt);
		}

		@Test
		void testSuma_Ceros() {
			assertEquals(0, calc.suma(0, 0));
		}

		@Test
		void testSuma_Positivo_Negativo() {
			assertEquals(0, calc.suma(1, -1));
		}

		@Test
		void testSuma_IEEE() {
			assertEquals(0.3, calc.suma(0.1, 0.2), "IEEE Error");
		}

	}

	@Test
	void testDivideDoubleDouble() {
		assertTrue(Double.isInfinite(calc.divide(1.0, 0.0)));
	}

	@Test
	void testDivideIntInt() {
//		fail();
//		assertTrue(Double.isInfinite(calc.divide(1, 0)));
		assertThrows(ArithmeticException.class, () -> Double.isInfinite(calc.divide(1, 0)));
	}
	@Test
	void testToString() {
		var cad = calc.toString();
		assertNotNull(cad);
		assertAll("Cadenas", 
				() -> assertTrue(cad.length() > 100, "long min"),
				() -> assertTrue(cad.contains("calc"), "Contiene cad")
			);
		
	}

}
