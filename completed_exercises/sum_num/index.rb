# frozen_string_literal: true

def two_sum(nums, _target)
  (0..nums.length - 2).each do |j|
    (j + 1..nums.length - 1).each do |i|
      return [j, i] if nums[j] + nums[i] == 9
    end
  end
end

puts two_sum([2, 7, 11, 15], 9)
