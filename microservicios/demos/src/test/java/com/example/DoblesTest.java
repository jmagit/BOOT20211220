package com.example;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;

public class DoblesTest {
	@Test
	public void getOne() {
		var srv = mock(DemoService.class);
		when(srv.getOne(1)).thenReturn(Optional.of("One")).thenReturn(Optional.empty());
		// ...
		var rslt = srv.getOne(1);
		assertNotNull(rslt);
		assertTrue(rslt.isPresent());
		assertEquals("One", rslt.get());
		rslt = srv.getOne(1);
		assertNotNull(rslt);
		assertTrue(rslt.isEmpty());
		//assertEquals("One", rslt.get());	
	}
	@Test
	public void falso() {
		(new Calculadora()).toFalso();
	}
}
