/*
 * Copyright (c) 2021 Thermo Fisher Scientific
 * All rights reserved.
 */

package test.raksul.be;

/**
 * TODO: Class description
 */
public class Problem2 {
  /**
   * TODO: Method description
   *
   * @param a
   * @param n
   */
  public void rotateMatrix(int[][] a, int n) {
    if (n < 2) {
      return;
    }

    int loop = 0;
    while (loop < n / 2) {
      int[] tmpTop = new int[n];
      int[] tmpLeft = new int[n];
      int[] tmpBottom = new int[n];
      int[] tmpRight = new int[n];

      for (int i = loop; i < n - loop; i++) {
        tmpTop[i] = a[loop][i];
        tmpLeft[i] = a[i][loop];
        tmpBottom[i] = a[n - 1 - loop][i];
        tmpRight[i] = a[i][n - 1 - loop];
      }

      // top
      for (int i = loop; i < n - loop; i++) {
        a[i][loop] = tmpTop[n - 1 - i];
      }

      // left

      for (int i = loop; i < n - loop; i++) {
        a[n - 1 - loop][i] = tmpLeft[i];
      }

      // bottom
      for (int i = n - loop - 1; i >= loop; i--) {
        a[i][n - 1 - loop] = tmpBottom[n - 1 - i];
      }

      // right
      for (int i = n - 1 - loop; i >= loop; i--) {
        a[loop][i] = tmpRight[i];
      }

      loop++;
    }
  }
}
