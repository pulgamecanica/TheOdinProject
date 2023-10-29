# Exercises: https://launchschool.com/books/ruby/read/basics

# 1) Add two strings together that, when concatenated, return your first and last name as your full name in one string.
my_name = "Andre" << " H. R."

# 2) Use the modulo operator, division, or a combination of both to take a 4 digit number and find the digit in the:
#    0. thousands place
#    1. hundreds place
#    2. tens place
#    3. ones place
def find_digit_at(num, at)\
  return unless num > 999 && num < 10000 && at >= 0 && at < 4
  return (num / (at ? (10 ** at) : 1)) % 10
end
find_digit_at(1239, 0) # thousands place = 9
find_digit_at(1239, 1) # hundreds place = 3
find_digit_at(1239, 2) # tens place = 2
find_digit_at(1239, 3) # ones place = 1


# 3) Write a program that uses a hash to store a list of movie titles with the year they came out.
#    Then use the puts command to make your program print out the year of each movie to the screen.
#    The output for your program should look something like this.
movies_data = { :jaws => 1975,
                :anchorman => 2004,
                :man_of_steel => 2013,
                :a_beautiful_mind => 2001,
                :the_evil_dead => 1981 }
movies_data.each {|key, value| puts key}

# 4) Use the dates from the previous example and store them in an array.
#    Then make your program output the same thing as exercise 3.
movies_data.to_a.each {|elem| puts elem[1] }

# 5) Write a program that outputs the factorial of the numbers 5, 6, 7, and 8.
factorials = [5, 6, 7, 8]
factorials.each { |num| puts (1..num).inject(&:*) || 1}

# 6) Write a program that calculates the squares of 3 float numbers of your choosing and outputs the result to the screen.
puts 999.0 ** 2
puts 239.57 ** 2
puts 42.42 ** 2