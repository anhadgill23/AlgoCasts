class Stack
  def initialize
    @data = []
  end

  def push(something)
    @data.push(something)
  end

  def pop(something)
    @data.pop()
  end
end


stack = Stack.new
stack.push(3)
stack.push(4)


