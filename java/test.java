/*
 * Copyright (c) 2021 Thermo Fisher Scientific
 * All rights reserved.
 */

package test.raksul.be;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertArrayEquals;

/**
 * TODO: Class description
 */
public class Problem2Test {
    private Problem2 problem;

    /**
     * TODO: Method description
     */
    @Before
    public void init() {
        problem = new Problem2();
    }

    /**
     * TODO: Method description
     */
    @Test
    public void shouldCorrectlyRotateMatrixIfNIsLessThan2() {
        int[][] expected = { { 1 } };
        int[][] a = { { 1 } };
        problem.rotateMatrix(a, 1);

        assertArrayEquals(expected, a);
    }

    /**
     * TODO: Method description
     */
    @Test
    public void shouldCorrectlyRotateMatrixIfNIsGreaterThan2AndNISEVEN() {
        int[][] expected = { { 4, 8, 12, 16 }, { 3, 7, 11, 15 }, { 2, 6, 10, 14 }, { 1, 5, 9, 13 } };
        int[][] a = { { 1, 2, 3, 4 }, { 5, 6, 7, 8 }, { 9, 10, 11, 12 }, { 13, 14, 15, 16 } };

        problem.rotateMatrix(a, 4);
        assertArrayEquals(expected, a);
    }

    @Test
    public void shouldCorrectlyRotateMatrixIfNIsGreaterThan2AndNISODD() {
        int[][] expected = { { 21, 22, 23, 24, 35 }, { 4, 8, 12, 16, 34 }, { 3, 7, 11, 15, 33 }, { 2, 6, 10, 14, 32 },
                { 1, 5, 9, 13, 31 } };
        int[][] a = { { 1, 2, 3, 4, 21 }, { 5, 6, 7, 8, 22 }, { 9, 10, 11, 12, 23 }, { 13, 14, 15, 16, 24 },
                { 31, 32, 33, 34, 35 } };

        problem.rotateMatrix(a, 5);
        assertArrayEquals(expected, a);
    }
}
