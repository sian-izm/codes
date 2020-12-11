# frozen_string_literal: true

# Matrix rolation class
class MyMatrix
  def initialize(matrix = [])
    @matrix = matrix
    raise ArgumentError, 'not a valid matrix' unless squar_matrix?
  end

  def rotate_counter_clockwise
    return matrix if [0, 1].include?(dimension)

    matrix.each_with_object(dup_empty_matrix) do |row, obj|
      row.each_with_index do |value, row_index|
        obj[dimension - row_index - 1] << value
      end
    end
  end

  private

  attr_reader :matrix

  def squar_matrix?
    return false unless matrix.is_a?(Array)
    return true if [0, 1].include?(dimension)
    return false if matrix.any? { |row| !row.is_a?(Array) || row.size != dimension }

    true
  end

  def dimension
    matrix.size
  end

  def dup_empty_matrix
    matrix.map { |_m| [] }
  end
end
