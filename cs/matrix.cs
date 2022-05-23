[TestMethod]
        public void Rotate90DegreeSquareMatric()
        {
            int[,] squareMatrix = new int[,] {
                { 1,  2,  3,  4,  5 },
                { 6,  7,  8,  9,  10 },
                { 11, 12, 13, 14, 15 },
                { 16, 17, 18, 19, 20 },
                { 21, 22, 23, 24, 25 }
            };

            int[,] rotateMatrix = Api.Rotate90SquareMatrix(squareMatrix);

            int[,] expectedMatrix = new int[,] {
                { 5, 10, 15, 20, 25},
                { 4, 9, 14, 19, 24},
                { 3, 8, 13, 18, 23},
                { 2, 7, 12, 17, 22},
                { 1, 6, 11, 16, 21},
            };
            Assert.AreEqual(squareMatrix, expectedMatrix, "Not matching");
        }


public static int[,] Rotate90SquareMatrix(int[,] originalMatrix)
        {
            int matrixLength = originalMatrix.GetLength(0);
            int[,] newMatrix = new int[matrixLength, matrixLength];
            
            for(var x = 0; x < matrixLength; x++)
            {
                for (var y = 0; y < matrixLength; y++)
                {
                    newMatrix[x, y] = originalMatrix[y, matrixLength - x - 1];
                }
            }

            return newMatrix;
        }
