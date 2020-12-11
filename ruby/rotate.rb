class MyMatrix
  attr_reader :grid, :rows, :cols

  def initialize(r = 3, c = 3)
    @rows, @cols = r, c
    counter = 0
    @grid = Array.new(r) { Array.new(c) { counter += 1 } }
  end

  def rotate
    new_grid = []
    (0...cols).each do |col|
      new_row = []
      (rows-1).downto(0) do |row|
        new_row << grid[row][col]
      end
      new_grid << new_row
    end
    @grid = new_grid
  end

  def get(r, c)
    grid[r][c]
  end

  def set(val, r, c)
    grid[r][c] = val
  end

  def print_cell(r,c)
    print get(r,c).to_s.ljust(4,' ')
  end

  def each_row
    grid.each_with_index { |row,r| yield(r) }
  end

  def each_col(r=0)
    grid[r].each_with_index { |col,c| yield(r,c) }
  end

  def to_s
    each_row do |r|
      each_col(r) { |r,c| print_cell(r,c) }
      puts
    end
  end
end
