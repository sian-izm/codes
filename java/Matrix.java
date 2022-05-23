import java.util.Arrays;

public class Matrix {
  public static void main(String[] args) {
    int[][] a = { { 1, 2, 3, 4 }, { 5, 6, 7, 8 }, { 9, 10, 11, 12 }, { 13, 14, 15, 16 } };
    int[][] rotateMatrix = Matrix.rotate(a, 4);
    System.out.println(Arrays.deepToString(rotateMatrix));
  }

  public static int[][] rotate(int[][] a, int n) {
    if (n < 2) {
      throw new RuntimeException("dimention should be 2 or bigger");
    }

    int[][] result = new int[n][n];
    for (int loop = 0; loop < n / 2; loop++) {
      for (int i = loop; i < n - loop; i++) {
        result[n - 1 - i][loop] = a[loop][i];
        result[i][n - 1 - loop] = a[n - 1 - loop][n - 1 - i];
        result[n - 1 - loop][n - 1 - i] = a[n - 1 - i][loop];
        result[loop][i] = a[i][n - 1 - loop];
      }
    }
    return result;
  }
}
