<?php
/**
* Rotate a Matrix 90-degrees counter-clockwise
*
* @param  Array  $matrix
* @return array
*/
function rotateMatrixClockWise($matrix): array {
    matrixValidation($matrix);
    array_unshift($matrix, null);
    $matrix = array_map('array_reverse', $matrix);
    $matrix = call_user_func_array('array_map', $matrix);
    return $matrix;
}

/**
* Validate a n by n matrix
*
* @param  Array  $matrix
* @return true
*/
function matrixValidation($matrix): bool {
    // If matrix is not array, it isn't matrix
    if (!is_array($matrix) || count($matrix) === 0) {
        throw new InvalidArgumentException('Invalid matrix');
    }
    // Validate the matrix is n by n
    $matrixLength = count($matrix);
    if ($matrixLength % 2 !== 0 && $matrixLength > 1 && count($matrix[$matrixLength / 2]) !== $matrixLength) {
        throw new InvalidArgumentException('Invalid matrix');
    }
    for ($i = 0; $i < $matrixLength / 2; $i++) {
        if (count($matrix[$i]) !== $matrixLength || count($matrix[$matrixLength - 1 - $i]) !== $matrixLength) {
            throw new InvalidArgumentException('Invalid matrix');
        }
    }
    return true;
}
?>