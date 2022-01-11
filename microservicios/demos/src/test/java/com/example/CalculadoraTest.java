package com.example;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.Assumptions.assumeFalse;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.DisplayNameGeneration;
import org.junit.jupiter.api.DisplayNameGenerator;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

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
	@Tag("Actuales")
	class SumaTest {
		@Test
		@Tag("Rapida")
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
		
		@ParameterizedTest(name = "{index} => {0} + {1} = {2}")
		@CsvSource({ "1.0,1.0,2.0", "-1,1,0", "2,-3,-1","0,0,0" })
		void test_sumas_validadas(double a, double b, double rslt) {
			assumeFalse(rslt == 0);
			assertEquals(rslt, calc.suma(a, b));
		}
		@ParameterizedTest(name = "{index} => {0} + {1} = {2}")
		@CsvSource({ "0.1, 0.2, 0.3", "1,-0.9,0.1" })
		void test_sumas_invalidas(double a, double b, double rslt) {
			assertNotEquals(rslt, calc.suma(a, b));
		}


	}
	@Nested
	class RestaTest {
		@Test
		@Tag("Rapida")
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
	@Tag("Rapida")
	void testDivideDoubleDouble() {
		assertTrue(Double.isInfinite(calc.divide(1.0, 0.0)));
	}

	@Test
//	@Disabled
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
				() -> assertTrue(cad.length() > 10, "long min"),
				() -> assertTrue(cad.contains("Calc"), "Contiene cad")
			);
		
	}

}
