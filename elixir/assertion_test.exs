ExUnit.start()

defmodule AssertionTest do
  use ExUnit.Case, async: true

  test "the truth" do
    assert true, "every time true"
  end

  test "fail" do
    assert 1 + 2 + 3 + 4 > 15, "it will never be true"
  end
end
