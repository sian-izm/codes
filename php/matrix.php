<?php
function _validate_matrix($m) {
	if (!is_array($m)) {
		return false;
	}
	$n = count($m[0]);
	foreach ($m as $row){
		if ($n != count($row)) {
			return false;
		}
	}
	return true;
}
function rotate_matrix_90($matrix) {
	if (empty($matrix)) {
		return $matrix;
	}
	$result = array();
	$w = count($matrix);
	$h = count($matrix[0]);
	for ($i = 0; $i < $w; $i++) {
        for ($j = 0; $j < $h; $j++) {
            $result[$h - $i - 1][$j] = $matrix[$h - $j - 1][$i];
        }
    }
    return $result;
}
?>