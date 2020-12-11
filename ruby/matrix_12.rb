def rotate_90_counter_clockwise(matrix)
  result = matrix.is_a?(Array)
  raise ArgumentError.new(
    "Expected a array with an n-by-n matrix"
  ) unless result

  result = square_matrix?(matrix)
  raise ArgumentError.new(
    "Expected a array with an n-by-n matrix"
  ) unless result

  matrix_length = matrix.length
  for i in 0...matrix_length / 2 do

    inner_loop = matrix_length - i - 1
    for j in i...inner_loop do

      temp = matrix[i][j]

      # right to top
      matrix[i][j] = matrix[j][inner_loop]

      # bottom to right
      matrix[j][inner_loop] = matrix[inner_loop][matrix_length - 1 - j];

      # left to bottom 
      matrix[inner_loop][matrix_length - 1 - j] = matrix[matrix_length - 1 - j][i]; 

      # assign temp to left 
      matrix[matrix_length - 1 - j][i] = temp; 
    end
  end

  matrix
end

def square_matrix?(matrix)
  matrix_length = matrix.length
  result = matrix_length.positive?
  return result unless result

  (0...matrix_length).each do |i|
    result = matrix[i].length == matrix_length

    break unless result
  end

  result
end

p rotate_90_counter_clockwise([[1,2],[3,4]])
