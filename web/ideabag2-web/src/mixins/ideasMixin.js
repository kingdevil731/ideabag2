export const ideasMixin = {
  data() {
    return {
      categories: [
        {
          categoryLbl: 'Numbers',
          categoryCount: 34,
          description: 'Mathematics and number based challenges',
          items: [
            {
              category: 'Numbers',
              title: 'Distance Between Two Cities',
              difficulty: 'Beginner',
              id: 1,
              description:
                'Develop a program that calculates the distance between two cities and allows the user to specify a unit of distance. This program may require finding coordinates for the cities like latitude and longitude.'
            },
            {
              category: 'Numbers',
              title: 'Tax Calculator',
              difficulty: 'Beginner',
              id: 2,
              description:
                'Develop a program that asks the user to enter a cost and either a country or state tax. It then returns the tax plus the total cost with tax.'
            },
            {
              category: 'Numbers',
              title: 'Factorial Finder',
              difficulty: 'Beginner',
              id: 3,
              description:
                'The Factorial of a positive integer, n, is defined as the product of the sequence n, n-1, n-2, ...1. Also the factorial of zero, 0, is defined as being 1. Develop a program that solves the factorial of any user given number using both loops and recursion.'
            },
            {
              category: 'Numbers',
              title: 'Happy Numbers',
              difficulty: 'Beginner',
              id: 4,
              description:
                'A happy number is defined by the following process. Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers. Find the first 8 happy numbers.'
            },
            {
              category: 'Numbers',
              title: 'Coin Flip Simulation',
              difficulty: 'Beginner',
              id: 5,
              description:
                'Write some code that simulates flipping a single coin however many times the user decides. The code should record the outcomes and count the number of tails and heads.'
            },
            {
              category: 'Numbers',
              title: 'Household Budget Program',
              difficulty: 'Expert',
              id: 6,
              description:
                'Create a full GUI program that allows the user to enter in and setup a household\r\nbudget. They can enter in unlimited number of budget categories like Utilities, Travel Expenses,or Child Care. Then let the user enter in X number of sub-items for each of these categories listing their monthly expenses along with any income items. Have the program keep track of their expenses and their cash flow. This program should let the user know if they are overspending or how much they are saving for the month or year.'
            },
            {
              category: 'Numbers',
              title: 'Calculator',
              difficulty: 'Intermediate',
              id: 7,
              description:
                'A simple calculator to do basic operations. Make it a scientific calculator for added complexity.'
            },
            {
              category: 'Numbers',
              title: 'Find Pi to the Nth Digit',
              difficulty: 'Beginner',
              id: 8,
              description:
                'Develop a program that has the user enter a number. Your program should print out Pi up to that many decimal places. Try to keep a limit as to how far the program will go.'
            },
            {
              category: 'Numbers',
              title: 'Find e to the Nth Digit',
              difficulty: 'Beginner',
              id: 9,
              description:
                "Develop a program that has the user enter a number. Your  program should then print out 'e' up to that many decimal places. Keep a limit as to how far the program will go."
            },
            {
              category: 'Numbers',
              title: 'Fibonacci Sequence',
              difficulty: 'Beginner',
              id: 10,
              description:
                'Develop a program that has the user enter a number. Your program should print out the Fibonacci sequence to that number or to the Nth number.'
            },
            {
              category: 'Numbers',
              title: 'Prime Factorization',
              difficulty: 'Beginner',
              id: 11,
              description:
                'Develop a program that has the user enter a number and find all the Prime Factors (if there are any) and display them.'
            },
            {
              category: 'Numbers',
              title: 'Next Prime Number',
              difficulty: 'Beginner',
              id: 12,
              description:
                'Develop a program that starting at any number the user inputs, generates the next prime number. Ask the user for confirmation to keep going, if it is granted print the next prime number again otherwise quit the program.'
            },
            {
              category: 'Numbers',
              title: 'Mortgage Calculator',
              difficulty: 'Intermediate',
              id: 13,
              description:
                'Develop a program that calculate the monthly payments of a fixed term mortgage over given Nth terms at a given interest rate. Also, figure out how long it will take the user to pay back the loan. For added complexity, add an option for users to select the compounding interval (Monthly, Weekly, Daily, Continually).'
            },
            {
              category: 'Numbers',
              title: 'Change Return Program',
              difficulty: 'Beginner',
              id: 14,
              description:
                'Develop a program that has the user enter the cost of an item and then the amount the user paid for the item. Your program should figure out the change and the number of quarters, dimes, nickels, pennies needed for the change.'
            },
            {
              category: 'Numbers',
              title: 'Binary to Decimal and Back Converter',
              difficulty: 'Intermediate',
              id: 15,
              description:
                'Develop a program that converts a decimal number to binary or a binary number to its decimal equivalent. For added complexity, try adding converters to Octals and Hexadecimals too.'
            },
            {
              category: 'Numbers',
              title: 'Alarm Clock',
              difficulty: 'Intermediate',
              id: 16,
              description:
                'Develop a simple alarm clock that plays a sound after X number of minutes/seconds or at a particular time. For added complexity, add the ability to add sticky notes and a date to the alarm.'
            },
            {
              category: 'Numbers',
              title: 'Unit Converter',
              difficulty: 'Beginner',
              id: 17,
              description:
                'Develop a program that converts various units between one another. The user enters the type of unit being entered, the type of unit they want to convert to and then the value. The program will then make the conversion.'
            },
            {
              category: 'Numbers',
              title: 'Least/Greatest Common Denominator',
              difficulty: 'Beginner',
              id: 18,
              description:
                'Create a program that asks the user to enter two fractions. Have the program find the least common or the greatest common denominator between those two fractions and print it out.'
            },
            {
              category: 'Numbers',
              title: 'Kaprekar numbers',
              difficulty: 'Intermediate',
              id: 19,
              description:
                "In mathematics, a Kaprekar number for a given base is a non-negative integer, the representation of whose square in that base can be split into two parts that add up to the original number again. For instance, 45 is a Kaprekar number, because 452 = 2025 and 20+25 = 45. The Kaprekar numbers are named after D. R. Kaprekar. Your program will receive two integers per line telling you the start and end of the range to scan, inclusively. Example: '1 50'. Your program should emit the Kaprekar numbers in that range. From the example: 45 is the Kaprekar number in that range. For your program focus only on base 10 numbers. For added complexity, see if you can make it work in arbitrary bases."
            },
            {
              category: 'Numbers',
              title: 'Guess the Number',
              difficulty: 'Intermediate',
              id: 20,
              description:
                'Your program asks the user to guess and number and keep it in their head. It then asks the user to input a range that would dictates the maximum and minimun range your program should guess the number from. If your program guesses too high or too low, the user should be able to input "too high" or "too low" to notify you to fix your guess.\r\n\r\nSubmitted by Sebastien Cadot'
            },
            {
              category: 'Numbers',
              title: 'Find the N-th Natural Number',
              difficulty: 'Intermediate',
              id: 21,
              description:
                "The task is to find which natural number (or rather a digit between 0-9) is at the 1986th position. The number range is from 1 to 1000. \r\n\r\nOptionally find the number that the 0-9 digit is a part of.\r\n\r\nExample:\r\n\r\nGiven number range from 1-20 (1234567891011121314151617181920) the digit at position 17 would be '3' and it is a part of number '13'.\r\n\r\nSubmitted by Dusan N."
            },
            {
              category: 'Numbers',
              title: 'Neon Number',
              difficulty: 'Intermediate',
              id: 22,
              description:
                'A number is said to be a Neon Number if the sum of digits of the square of the number is equal to thenumber itself. Example- 9 is a Neon Number. 9*9=81 and 8+1=9.Hence it is a Neon Number.\r\nThe user is prompted to input a range eg 1-90. Your program should print out the neon numbers in that range.\r\n\r\nSubmitted by Shib Shankar Ghosh'
            },
            {
              category: 'Numbers',
              title: 'Hardy-Ramanujan Number',
              difficulty: 'Intermediate',
              id: 23,
              description:
                '1729 is a Hardy-Ramanujan number. It is the smallest number representable in two ways as a sum of two cubes.\r\n\r\n        1729 = 12^3 + 1^3\r\n        Also, 1729 = 10^3+9^3\r\n\r\nYour program should generate all numbers between 1 and n that can be expressed as the sum of two cubes in two or more ways.\r\n\r\nSubmitted by Izaki Bikas'
            },
            {
              category: 'Numbers',
              title: 'Roman Number Generator',
              difficulty: 'Intermediate',
              id: 24,
              description:
                'Develop a program that accepts an integer and outputs the Roman Number equivalent of that number.\r\n\r\nExamples:\r\n\r\n4 - IV\r\n12 - XII\r\n20 - XX\r\n\r\nSubmitted by SoReNa'
            },
            {
              category: 'Numbers',
              title: 'Newtonian Gravity Simulation',
              difficulty: 'Expert',
              id: 25,
              description:
                'Create an application that simulate Newtonian gravity. There are lots of ways to do this! Use threading for a performance boost. This is probably best done in a compiled language, as there are lots of complex calculations to do.\r\n\r\nExample: http://justfound.co/gravity/\r\nMore info: https://en.wikipedia.org/wiki/Gravity\r\n\r\nSubmitted by osmarks'
            },
            {
              category: 'Numbers',
              title: "Pascal's Triangle",
              difficulty: 'Intermediate',
              id: 26,
              description:
                "Create a program to print the Pascal's Triangle representation for a number N where N is an integer specified by the user.\r\n\r\nFor more info on Pascal's Triangle, look here: https://en.m.wikipedia.org/wiki/Pascal's_triangle\r\n\r\nSubmitted by Imperial_Squid"
            },
            {
              category: 'Numbers',
              title: 'Vigenère Cipher',
              difficulty: 'Intermediate',
              id: 27,
              description:
                'Make a program to accept some plaintext and a key from the user and use them to perform a Vigenère Cipher and output the result.\r\n\r\nMore info on Vigenère Ciphers: https://en.m.wikipedia.org/wiki/Vigenère_cipher\r\n\r\nBonus points: Give the user a message if their input is invalid (empty/just numbers/etc)\r\n\r\nSubmitted by Imperial_Squid'
            },
            {
              category: 'Numbers',
              title: 'Gray Code',
              difficulty: 'Intermediate',
              id: 28,
              description:
                'Gray code, so named after discoverer Frank Gray, is a binary numeral system where two successive values differ in only one bit (binary digit). The reflected binary code was originally designed to prevent spurious output from electromechanical switches. Today, Gray code is widely used to facilitate error correction in digital communications such as digital terrestrial television and some cable TV systems.\r\n\r\nGray code differs from regular binary counting sequences in one key way: because sequential values can have only a single bit difference from their predecessor, you wind up with a non-linear progression of base 10 integers.\r\n\r\nIMPORTANT: Read the document linked below as it is important to be able to implement this idea > https://docs.google.com/document/d/17U_sV5wZr-ioHg-llR3xJIoWVh0iJOoq_7bP1DebQeU/edit?usp=sharing\r\n\r\nWrite a program that can generate a Gray code sequence of a decimal the user inputs. For example, if you were given input = 2 your program should emit:\r\n\r\n00\r\n01\r\n11\r\n10 - 2'
            },
            {
              category: 'Numbers',
              title: 'Lotto',
              difficulty: 'Beginner',
              id: 29,
              description:
                'Create a program which asks for 6 numbers in the range 1-49. The program should then display 6 random numbers from the same range. and check how many numbers the user guessed correctly. For added complexity, make the program into a mini-game. Allow the user to retry the lotto, show their payout after each round, their highest payout etc. Feel free to add as much complexity as you want.\r\n\r\nSubmitted by Filipekczek7'
            },
            {
              category: 'Numbers',
              title: 'Roman to Arabic numeral converter',
              difficulty: 'Beginner',
              id: 30,
              description:
                'Create a program that converts Roman numbers (such as MCMLIV) to Arabic numbers (1954) and back.\r\n\r\nRoman numerals are read from left to right, as you add or subtract the value of each symbol.\r\n\r\nIf a value is lower than the following value, it will be subtracted. Otherwise it will be added. \r\n\r\nFor example, we want to convert the Roman numeral MCMLIV to an Arabic number:\r\n\r\nM = 1000 must be added, because the following letter C =100 is lower.\r\nC = 100 must be subtracted because the following letter M =1000 is greater.\r\nM = 1000 must be added, because the following letter L = 50 is lower. \r\nL = 50 must be added, because the following letter I =1 is lower.\r\nI = 1 must be subtracted, because the following letter V = 5 is greater.\r\nV = 5 must be added, because there are no more symbols left.\r\n\r\nWe can now calculate the number: \r\n1000 - 100 + 1000 + 50 - 1 + 5 = 1954\r\n\r\nSubmitted by Alex Lushiku'
            },
            {
              category: 'Numbers',
              title: 'Circular Primes',
              difficulty: 'Intermediate',
              id: 31,
              description:
                'A number is a circular prime if all of its cycles are also primes.\r\n\r\nTo cycle a number just take its first digit and stick it on its end. For example, 197 -> 971 -> 719 -> 197.\r\n\r\nMake a program that takes in a input of a number and outputs if the given number is a circular prime. The output should look something like:\r\n\r\nINPUT 197 -> OUTPUT [971 -> 719 -> 197] - Valid/Invalid\r\n\r\nFor added complexity, allow the program to accept two numbers and output all the circular primes between them, inclusive. You could choose to format the output for each circular prime just like in the example above. Also you could try to do the cycling part purely mathematically - without converting to a string and slicing it.\r\n\r\nSubmitted by Lovecraft.'
            },
            {
              category: 'Numbers',
              title: 'Pseudo-Random Number Generator',
              difficulty: 'Intermediate',
              id: 32,
              description:
                "A pseudorandom number generator (PRNG), also known as a deterministic random bit generator (DRBG) is an algorithm for generating a sequence of numbers whose properties approximate the properties of sequences of random numbers. The PRNG-generated sequence is not truly random, because it is completely determined by a relatively small set of initial values, called the PRNG's seed (which may include truly random values).\r\n\r\nMake your own (pseudo) random number generator. Accept input from the user specifying the number of random numbers to generate and the PRNG seed. Output a list of pseudo-random numbers.\r\n\r\nFor more info >> https://en.wikipedia.org/wiki/Pseudorandom_number_generator\r\n\r\nSubmitted by David Hildebrandt"
            },
            {
              category: 'Numbers',
              title: 'Friday the 13th',
              difficulty: 'Intermediate',
              id: 33,
              description:
                'The user enters a year amd your program should output the number and dates of Friday the 13th in that given year. Try not to rely on any Time library like for example in Ruby — Time() class and make your own methods or functions for that.\r\n\r\nTo make it more complex, try to input not only the year but any given dates with starting Date(Month, Day, Year) and End Date and ouput if there is an existing one.\r\n\r\nFor example,\r\n\r\nInput: 2017\r\n\r\nOutput:\r\nJanuary 13, 2017\r\nOctober 13, 2017\r\n\r\nInput: 04/14/2017 - 07/14/2018 (mm/dd/yyyy)\r\n\r\nOutput: \r\nOctober 13, 2017\r\nApril 13, 2018\r\nJuly 13, 2018\r\n\r\nSubmitted by Jerome'
            },
            {
              category: 'Numbers',
              title: 'Latin Squares',
              difficulty: 'Beginner',
              id: 34,
              description:
                'A Latin square is an n x n array filled with n different symbols each occuring exactly once in each row and exactly once in each column.\r\n\r\nFor example\r\n1\r\n\r\nAnd,\r\n1  2 \r\n2  1\r\n\r\nare both valid Latin squares.\r\n\r\nFor this program you have to check whether a given array is a Latin square. If it is a Latin square, then display true otherwise display false.\r\n\r\nThe user will provide two inputs:\r\n1. n - The length of a row in the array\r\n2. A string representing the array of symbols\r\n\r\nExample input\r\n\r\n5\r\n1 2 3 4 5 5 1 2 3 4 4 5 1 2 3 3 4 5 1 2 2 3 4 5 1\r\n2\r\n1 3 3 4\r\n4\r\n1 2 3 4 1 3 2 4 2 3 4 1 4 3 2 1 \r\n\r\nExample output\r\n\r\ntrue\r\nfalse\r\nfalse'
            }
          ]
        },
        {
          categoryLbl: 'Text',
          categoryCount: 32,
          description: 'Text based challenges',
          items: [
            {
              category: 'Text',
              title: 'RSS Feed Creator',
              difficulty: 'Intermediate',
              id: 1,
              description:
                'A program which can read in text from other sources and put it in RSS or Atom news format for syndication.'
            },
            {
              category: 'Text',
              title: 'Morse Code Maker',
              difficulty: 'Intermediate',
              id: 2,
              description:
                'Make a program which takes in a string from the user and then outputs that as a string of Morse Code. If you are unfamiliar with Morse Code, you can find it on Wikipedia.'
            },
            {
              category: 'Text',
              title: 'Guestbook / Journal',
              difficulty: 'Beginner',
              id: 3,
              description:
                'Develop an application where the user can keep track of journal entries or create a\r\npublic guestbook where multiple people can write in it to say “there were here”. This application lends itself perfectly for online sites but could certainly be done as a stand-alone application. It is also possible that this guestbook / journal could reside on a network and people can access it from multiple computers. The program should keep track of the date and time of a post, allow the user to browse through various days, edit/delete offensive posts or queue posts before showing publicly.'
            },
            {
              category: 'Text',
              title: 'News Ticker and Game Scores',
              difficulty: 'Intermediate',
              id: 4,
              description:
                'Create an application which links to major sporting web sites (or web services) and pulls down current news headlines and game scores then scrolls them across the desktop or web site.'
            },
            {
              category: 'Text',
              title: 'Random Gift Suggestions',
              difficulty: 'Intermediate',
              id: 5,
              description:
                'Make a program which asks the user to input people’s names and the various gift\r\nideas they would eventually like to get for them. Ask the user to also input various important dates related to the people they input (like an anniversary, birthday, Christmas etc). When a given date rolls around, have the program remind the user of the date and show them the gift list they have created for that person.'
            },
            {
              category: 'Text',
              title: 'Text to HTML Generator',
              difficulty: 'Intermediate',
              id: 6,
              description:
                'Come up with a simple program that will allow a user to enter in various bits of text data. Have it then generate the HTML equivalent or create a HTML page based on the data. The idea here is to give the user the option of writing simple text data and it would generate the code afterward. For instance, if the user enters in a title and a few paragraphs, the program would generate the necessary <h1>, <p>, <quote>, bulleting tags needed to format that text on the web.'
            },
            {
              category: 'Text',
              title: 'Pig Latin',
              difficulty: 'Expert',
              id: 7,
              description:
                "Pig Latin is a game of alterations played on the English language game. To create the pig latin form of a word the inital consonant sound is transposed to the end of the word and an 'ay' is affixed. Example: \"banana\" would yield 'ananabay'. Make a program that converts a word or a sentence to Pig Latin. For added difficulty, if users input only numbers notify them of a translation error."
            },
            {
              category: 'Text',
              title: 'Rovarspraket',
              difficulty: 'Intermediate',
              id: 8,
              description:
                "Rovarspraket which means \"Robber's language\" in Swedish is not very complicated. You take an ordinary word and replace the consonants with the consonant doubled with an 'o' between them. For example 'b' becomes 'bob', m becomes 'mom'. Vowels are left intact. Make a program that translates any length of string into Rovarspraket. For added difficulty, make it able to translate to and from Rovarspraket."
            },
            {
              category: 'Text',
              title: 'Disemvoweler',
              difficulty: 'Intermediate',
              id: 9,
              description:
                "Make a program that removes every vowel and whitespace found  in a string. It should output the resulting disemvoweled string with the removed vowels concatenated to the end of it. For example 'Hello world' outputs 'hllwrld eoo'."
            },
            {
              category: 'Text',
              title: 'In Order',
              difficulty: 'Intermediate',
              id: 10,
              description:
                "Make a program that notifies a user if an entered word is in alphabetical order or not. For example, 'almost' would output 'almost - in order', 'baton' would output 'baton - not in order', 'biopsy billowy chef' would output 'biopsy - in order billowy - in order chef - not in order'."
            },
            {
              category: 'Text',
              title: 'Typoglycemia',
              difficulty: 'Intermediate',
              id: 11,
              description:
                "Make a program that accepts a string and outputs the typoglycemic version of it. Typoglycemia is the mind's ability to decipher a mispelled word if the first and last letters of the word are correct. For example, an input of 'I deciphered a mispelled word' yields 'I dceipeherd a msiepeelld wrod'."
            },
            {
              category: 'Text',
              title: 'Regex Query Tool',
              difficulty: 'Intermediate',
              id: 12,
              description:
                'Create a tool that allows the user to specify a string and then a regular expression to match against it. It will then return all matches it finds as output. This can be done within a form where then each match can be highlighted in the string itself. This will help developers who want to know, on the fly, if a string can be matched by a given regular expression.'
            },
            {
              category: 'Text',
              title: 'Fizz Buzz',
              difficulty: 'Beginner',
              id: 13,
              description:
                'Develop a program that prints the numbers from 1 to 100. For multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.'
            },
            {
              category: 'Text',
              title: 'Reverse a String',
              difficulty: 'Beginner',
              id: 14,
              description:
                'Develop a program that has the user enter a string. Your program should reverse the string and print it out.'
            },
            {
              category: 'Text',
              title: 'Count Vowels',
              difficulty: 'Beginner',
              id: 15,
              description:
                'Develop a program that has the user enter a string. Your program counts the number of vowels in the text and prints it out. For added complexity, have it report a sum of each vowel found and its position/index in the string.'
            },
            {
              category: 'Text',
              title: 'Check if Palindrome',
              difficulty: 'Beginner',
              id: 16,
              description:
                'Develop a program that checks if a string entered by a user is a palindrome. A palindrome is a word that reads the same forwards as backwards. An example is “racecar” or "madam".'
            },
            {
              category: 'Text',
              title: 'Count Words in a String',
              difficulty: 'Beginner',
              id: 17,
              description:
                'Develop a program that counts the number of individual words in a string. For added complexity, try to see if you can find the number of paragraphs in it too.'
            },
            {
              category: 'Text',
              title: 'Text Editor',
              difficulty: 'Expert',
              id: 18,
              description:
                'Develop a Notepad style application that can open, edit, and save text documents. For added complexity, add syntax highlighting, find and replace, text formatting etc.'
            },
            {
              category: 'Text',
              title: 'CD Key Generator',
              difficulty: 'Intermediate',
              id: 19,
              description:
                'Develop a program which generates keys for an application that you may put on a CD. A great example would be the keys you use for installation of a major software product from companies like Microsoft or Adobe. Have the user specify the length of keys and the types of characters they can use in the key (only letters, letters & numbers or just numbers, any special characters etc). Your program will then generate a random key value that can also be verified. For added complexity, create the mechanism for validating the generated key.'
            },
            {
              category: 'Text',
              title: 'Stock Tracker',
              difficulty: 'Intermediate',
              id: 20,
              description:
                'Develop a program which can go online and check the current value of stocks for a list of symbols entered by the user. The user can set how often the stocks are checked and the program should show green up and red down arrows to show which direction the stock value has moved.'
            },
            {
              category: 'Text',
              title: 'Post it Notes',
              difficulty: 'Intermediate',
              id: 21,
              description:
                'A program where you can add text reminders and post them. You can have the program also add popup reminders.'
            },
            {
              category: 'Text',
              title: 'Horoscope Teller',
              difficulty: 'Intermediate',
              id: 22,
              description:
                'Develop a program which allows the user to specify their birthday, and based on that\r\ninformation along with today’s date, tell them their horoscope. This could be generated from a list of predefined horoscopes or pulled from a web site service.'
            },
            {
              category: 'Text',
              title: 'Wandering Fingers',
              difficulty: 'Intermediate',
              id: 23,
              description:
                'Software like Swype and SwiftKey lets smartphone users enter text by dragging their finger over the on-screen keyboard, rather than tapping on each letter.\r\nYou\'ll be given a string of characters representing the letters the user has dragged their finger over. For example, if the user wants "rest", the string of input characters might be "resdft" or "resert".\r\nGiven the following input strings, find all possible output words 5 characters or longer from:\r\n1. qwertyuytresdftyuioknn\r\n2. gijakjthoijerjidsdfnokg\r\n\r\nYour program should find all possible words (5+ characters) that can be derived from the strings supplied.\r\nUse http://norvig.com/ngrams/enable1.txt as your search dictionary. The order of the output words doesn\'t matter.'
            },
            {
              category: 'Text',
              title: 'Half the String',
              difficulty: 'Beginner',
              id: 24,
              description:
                "Make a program that prompts the user to enter a string. If the string's length is an even number, output exactly half of it. If it is odd, notify the user that the string is invalid.\r\n\r\nSubmitted by Ayushman Thakur (Abt)"
            },
            {
              category: 'Text',
              title: 'MD5 Hash Generator',
              difficulty: 'Intermediate',
              id: 25,
              description:
                'Make an MD5 hash code generator for strings and files. MD5 is a widely used hash function algorithm that produces a 128 bit hash value.\r\n\r\nSubmitted by JoFo'
            },
            {
              category: 'Text',
              title: "Caesar's cipher",
              difficulty: 'Intermediate',
              id: 26,
              description:
                'The user first enters a number to be used as the shift parameter. The shift parameter is the key to the cipher and would be used for encrypting and decrypting text. During encryption, shifting is done to the left of the alphabets till the shift parameter matches the number of shifts done. For decryption, reverse the above process.\r\n\r\nFor example with a shift parameter of 3: Plain:        ABCDEFGHIJKLMNOPQRSTUVWXYZ\r\nCipher:   XYZABCDEFGHIJKLMNOPQRSTUVW\r\n\r\nDuring decryption:\r\nPlaintext:  THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG\r\nCiphertext: QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD\r\n\r\nSubmitted by Neo'
            },
            {
              category: 'Text',
              title: 'Calculator',
              difficulty: 'Intermediate',
              id: 27,
              description:
                'Your program will accept a mathematical expression as a string, parse it and ouput the answer of the expression.\r\n\r\nFor example, "2*3+2-(4+5)" will output 9.\r\nFor added complexity, add the ability to calculate expressions with scientific terms like cos, sin, tan, log, mod, sqr etc.\r\n\r\nSubmitted by David'
            },
            {
              category: 'Text',
              title: 'Child Name Generator',
              difficulty: 'Expert',
              id: 28,
              description:
                "Create a program that generates a name based on a query asked by the user. For example, the user could enter an alphabet like 'A', an origin like 'Spain', 'Egypt', profession like 'Scientist', or theme like 'Flower' and your program should output names that match the query like [Alisha, Abigail ...], [Alejandro, Miguel ...], [Seth, Osiris ...], [Lily, Rose ...]  respectively.\r\n\r\nFor added complexity, add sorting by parameters like (Gender, Popularity etc.) Also, provide meanings for each name at the request of the user.\r\n\r\nSubmitted by James Blackburn"
            },
            {
              category: 'Text',
              title: 'Spelling With Chemistry',
              difficulty: 'Intermediate',
              id: 29,
              description:
                "The IUPAC Periodic Table of the Elements is one of the most recognizable features of modern chemistry - the organization of all known chemical elements along with some of their most fundamental properties, together with their names and symbols. Today we're going to use that as we spell some words.\r\n\r\nIMPORTANT: Read this document before proceeding. It contains information that you'd need to implement this idea. https://docs.google.com/document/d/1UDyXDY5M1L36dAdqyaQwqAzQRl1is_okAajM8r7scaU/edit?usp=sharing\r\n\r\nThe user enters a list of words, one per line, write a program that tries to spell the word with chemistry. For example, 'genius' should have your program output 'GeNiUS (germanium nickel uranium sulfur)'. For added complexity, output if the word cannot be spelt with chemistry."
            },
            {
              category: 'Text',
              title: 'Voodlewoodlel',
              difficulty: 'Beginner',
              id: 30,
              description:
                'Boodleb wanted to see how his friend\'s name would look if he changed every vowel to "oodle". But he has no idea what vowels are, or how to change them. Help him realize his life\'s goal. The user inputs n lines, with one name in each line. Your program should print out the voodlewoodlel version of each name.\r\n\r\nExample:\r\n\r\nPeeves\r\nSinistra\r\n\r\noutputs\r\n\r\nPoodleoodlevoodles\r\nSoodlenoodlestroodle'
            },
            {
              category: 'Text',
              title: 'Scooby Doo',
              difficulty: 'Intermediate',
              id: 31,
              description:
                'In the popular kids show "Scooby-Doo", the main character has a speech impediment that makes him replace all consonants at the start of a word until it runs into a vowel with an "r". For example, the word "scooby" would become "rooby".\r\n\r\nWrite a program that "Scooby doos" any word or sentence a user inputs. You can choose to make the letter \'Y\' either a consonant or a vowel.'
            },
            {
              category: 'Text',
              title: 'Password Generator',
              difficulty: 'Intermediate',
              id: 30,
              description:
                "Create a program that allows a user to enter a password name eg: \"Facebook Account Password\" and length eg: '24'. Your program should then proceed to generate a strong password. This strong password should be generated by concatenating random characters, words and numbers in lower or uppercase. The length of the generated password should match the length the user provided.\r\n\r\nFor added complexity, provide a list that shows all the previously generated passwords and their names. Also allow a user to regenerate a new for existing use. For example, if 'Facebook Account Password' was previously 'p@ssw#rc/' and the user clicks Regenerate, generate a new password for 'Facebook Account Password'. Add the ability to save the password as a file that is encrypted using a master password that the user provides.\r\n\r\nSubmitted by Andrew J."
            }
          ]
        },
        {
          categoryLbl: 'Networking',
          categoryCount: 17,
          description: 'Network based applications challenges',
          items: [
            {
              category: 'Networking',
              title: 'Fetch Current Weather',
              difficulty: 'Intermediate',
              id: 1,
              description:
                'Get the current weather for a given zip/postal code. '
            },
            {
              category: 'Networking',
              title: 'Chat Application (IRC or MSN Style)',
              difficulty: 'Expert',
              id: 2,
              description:
                'Create a chat application that can create simple chat rooms like on Internet Relay Chat (IRC) or a more direct chatting style like MSN. For added complexity, create your own protocol to facilitate this chatting.'
            },
            {
              category: 'Networking',
              title: 'P2P File Sharing App',
              difficulty: 'Expert',
              id: 3,
              description:
                'Create a program like LimeWire, FrostWire, Bearshare, or a torrent style application.'
            },
            {
              category: 'Networking',
              title: 'FTP Program',
              difficulty: 'Expert',
              id: 4,
              description:
                'A file transfer program which can transfer files back and forth from a remote web sever.'
            },
            {
              category: 'Networking',
              title: 'Port Scanner',
              difficulty: 'Intermediate',
              id: 5,
              description:
                'Enter an IP address and a port range where the program will then attempt to find open ports on the given computer by connecting to each of them. On any successful connections mark the port as open.'
            },
            {
              category: 'Networking',
              title: 'Mail Checker (POP3 / IMAP)',
              difficulty: 'Intermediate',
              id: 6,
              description:
                'The user enters various account information include web server and IP, protocol type (POP3 or IMAP) and the application will check for email on several accounts at a given interval.'
            },
            {
              category: 'Networking',
              title: 'Packet Sniffer',
              difficulty: 'Expert',
              id: 7,
              description:
                'A utility program that will read packets coming in and out of the machine along with related information like destination and payload size.'
            },
            {
              category: 'Networking',
              title: 'Country from IP Lookup',
              difficulty: 'Intermediate',
              id: 8,
              description:
                'Enter an IP address and find the country that IP is registered in.'
            },
            {
              category: 'Networking',
              title: 'Whois Search Tool',
              difficulty: 'Intermediate',
              id: 9,
              description:
                'Enter an IP or host address and have it look it up through whois and return the results to you.'
            },
            {
              category: 'Networking',
              title: 'Zip / Postal Code Lookup',
              difficulty: 'Intermediate',
              id: 10,
              description:
                'Enter a zip or postal code and have it return which city/cities that are in that zip code.'
            },
            {
              category: 'Networking',
              title: 'Remote Login',
              difficulty: 'Expert',
              id: 11,
              description:
                'Create a remote desktop style application which can see and control the remote computer (given you have permissions). It may require the use of your own private network and a second computer to test with.'
            },
            {
              category: 'Networking',
              title: 'Site Checker with Time Scheduling',
              difficulty: 'Intermediate',
              id: 12,
              description:
                'An application that attempts to connect to a website or server every so many minutes or a given time and check if it is up. If it is down, it will notify you by email or by posting a notice on screen.'
            },
            {
              category: 'Networking',
              title: 'Small Web Server',
              difficulty: 'Expert',
              id: 13,
              description:
                'A simple web server that can serve HTML files that contain Javascript and other forms of non-code executing code. Added complexity would be to try and implement streaming video, create a server-side language, or serve up other stream types.'
            },
            {
              category: 'Networking',
              title: 'Web Bot',
              difficulty: 'Expert',
              id: 14,
              description:
                'An automated program which carries out tasks on the web including checking websites, page scraping, and summarization of data or web posting.'
            },
            {
              category: 'Networking',
              title: 'Get Atomic Time from Internet Clock',
              difficulty: 'Intermediate',
              id: 15,
              description:
                "International Atomic Time (TAI, from the French name Temps Atomique International is a high-precision atomic coordinate time standard based on the notional passage of proper time on Earth's geoid. Develop a program will get the true atomic time from an atomic time clock on the Internet. There are various clocks across the world. Do a search for a list of them and use one."
            },
            {
              category: 'Networking',
              title: 'Youtube Subscriber Notification',
              difficulty: 'Expert',
              id: 16,
              description:
                "The user inputs the link to any Youtube channel's account and the program will track the subscriber count. Ideally, it should check every 10 minutes and play a tone if the subscriber count has increased. For added complexity, allow users to be able to set the check interval and subscriber increased tone. Also, add a checkbox that when selected makes the subscriber increment notification realtime. \r\n\r\nTo be able to implement this idea, you'd need to have a firm grasp of querying APIs, JSON and REST. \r\nTo know how to get the subscriber count of an account, browse the Youtube API documentation > https://developers.google.com/youtube/v3/docs\r\n\r\nSubmitted by Xelostar"
            }
          ]
        },
        {
          categoryLbl: 'Enterprise Applications',
          categoryCount: 7,
          description: 'Enterprise application challenges',
          items: [
            {
              category: 'Enterprise Applications',
              title: 'Product Inventory Project',
              difficulty: 'Expert',
              id: 1,
              description:
                'Create an application which manages an inventory of products. Create a product class which has a price, id, and quantity on hand. Then create an inventory class which keeps track of various products and can sum up the inventory value.'
            },
            {
              category: 'Enterprise Applications',
              title: 'Movie Store',
              difficulty: 'Expert',
              id: 2,
              description:
                'Manage video rentals and controls when videos are checked out, due to return, overdue fees and for added complexity create a summary of those accounts which are overdue for contact.'
            },
            {
              category: 'Enterprise Applications',
              title: 'Airline / Hotel Reservation System',
              difficulty: 'Expert',
              id: 3,
              description:
                'Create a reservation system which books airline seats or hotel rooms. It charges various rates for particular sections of the plane or hotel. Example, first class is going to cost more than coach. Hotel rooms have penthouse suites which cost more. Keep track of when rooms will be available and can be scheduled.'
            },
            {
              category: 'Enterprise Applications',
              title: 'Student Grade Book Application',
              difficulty: 'Intermediate',
              id: 4,
              description:
                'Keep track of students (with a student class that has their name, average, and scores) in a class and their grades. Assign their scores on tests and assignments to the students and figure out their average and grade for the class. For added complexity put the students on a bell curve.'
            },
            {
              category: 'Enterprise Applications',
              title: 'Library Catalog',
              difficulty: 'Intermediate',
              id: 5,
              description:
                'Create a book class with a title, page count, ISBN and whether or not it is checked out or not. Manage a collection of various books and allow the user to check out books or return books. For added complexity generate a report of those books overdue and any fees. Also allow users to put books on reserve.'
            },
            {
              category: 'Enterprise Applications',
              title: 'Bank Account Manager',
              difficulty: 'Intermediate',
              id: 6,
              description:
                'Create a class called “Account” which will be an abstract class for three other classes called “CheckingAccount”, “SavingsAccount” and “BusinessAccount”. Manage credits and debits from these accounts through an ATM style program.'
            },
            {
              category: 'Enterprise Applications',
              title: 'Download Manager',
              difficulty: 'Beginner',
              id: 7,
              description:
                'Allow your program to download various files and each one is downloading in the background on a separate thread. The main thread will keep track of the other thread’s progress and notify the user when downloads are completed.'
            }
          ]
        },
        {
          categoryLbl: 'Threading',
          categoryCount: 5,
          description: 'Thread intensive applications challenges',
          items: [
            {
              category: 'Threading',
              title: 'Download Manager',
              difficulty: 'Expert',
              id: 1,
              description:
                'Allow your program to download various files and each one is downloading in the background on a separate thread. The main thread will keep track of the other thread’s progress and notify the user when downloads are completed.'
            },
            {
              category: 'Threading',
              title: 'Create A Progress Bar for Downloads',
              difficulty: 'Intermediate',
              id: 2,
              description:
                'Create a progress bar for applications that can keep track of a download in progress. The progress bar will be on a separate thread and will communicate with the main thread using delegates.'
            },
            {
              category: 'Threading',
              title: 'Chat Application (remoting style)',
              difficulty: 'Intermediate',
              id: 3,
              description:
                'Create a chat application which allows you to connect directly to another computer by their IP through the use of remoting and allow your “server” application handle multiple incoming connections.'
            },
            {
              category: 'Threading',
              title: 'Bulk Thumbnail Creator',
              difficulty: 'Intermediate',
              id: 4,
              description:
                'Picture processing can take a bit of time for some transformations. Especially if the image is large. Create an image program which can take hundreds of images and converts them to a specified size in the background thread while you do other things. For added complexity, have one thread handling re-sizing, have another bulk renaming of thumbnails etc.'
            },
            {
              category: 'Threading',
              title: 'Multi-Threaded Logger',
              difficulty: 'Beginner',
              id: 5,
              description:
                "Imagine developing a very heavily multi-threaded application, and there is a bug that you cannot seem to figure out where it's from because almost everything is multi-threaded and running in the background. You figured out that what you need is a Logger class that logs errors, exceptions and successful completion of background tasks and supports multiple threads  writing to the logs at any point in time. Write the logger class and a simple multi-threaded application to test that the logger works. The advantage is that you will understand synchronization in multi-threaded applications and also how to structure applications that run lots of background tasks."
            }
          ]
        },
        {
          categoryLbl: 'Web',
          categoryCount: 18,
          description: 'Web/Internet dependent applications challenges',
          items: [
            {
              category: 'Web',
              title: 'WYSIWG (What you see is what you get) Editor',
              difficulty: 'Intermediate',
              id: 1,
              description:
                'Create an editor online which allows people to move around elements, create tables, write text, set colors etc for web pages without having to know HTML. Think Dreamweaver or FrontPage but for online sites. If you need an example check out the DIC page used to create a post.'
            },
            {
              category: 'Web',
              title: 'Web Browser with Tabs',
              difficulty: 'Intermediate',
              id: 2,
              description:
                'Create a small web browser that allows you to navigate the web and contains tabs which can be used to navigate to multiple web pages at once. For simplicity don’t worry about executing Javascript or other client side code.'
            },
            {
              category: 'Web',
              title: 'Page Scraper',
              difficulty: 'Intermediate',
              id: 3,
              description:
                'Create an application which connects to a site and pulls out all links, or images, and saves them to a list. For added complexity, organize the indexed content and don’t allow duplicates. Have it put the results into an easily searchable index file.'
            },
            {
              category: 'Web',
              title: 'File Downloader',
              difficulty: 'Intermediate',
              id: 4,
              description:
                'An application which can download various objects on a page including video streams or all files on a page. Great for pages with a lot of download links.'
            },
            {
              category: 'Web',
              title: 'Telnet Application',
              difficulty: 'Intermediate',
              id: 5,
              description:
                'Create an application which can telnet into servers across the internet and run basic commands.'
            },
            {
              category: 'Web',
              title: 'Bandwidth Monitor',
              difficulty: 'Expert',
              id: 6,
              description:
                'A small utility program that tracks how much data you have uploaded and downloaded from the net during the course of your current online session. See if you can find out what periods of the day you use more and less and generate a report or graph that shows it'
            },
            {
              category: 'Web',
              title: 'Bookmark Collector and Sorter',
              difficulty: 'Expert',
              id: 7,
              description:
                'An application that you can put online for people to upload bookmarks to, have it sort them, remove duplicates and export the entire list as a Firefox/IE/Safari bookmark file. For added complexity see if you can group the bookmark items into various folders.'
            },
            {
              category: 'Web',
              title: 'Password Safe',
              difficulty: 'Intermediate',
              id: 8,
              description:
                'A program which keeps track of passwords for sites or applications and encrypts them with a key so that no one can read them.'
            },
            {
              category: 'Web',
              title: 'Scheduled Auto Login and Action',
              difficulty: 'Intermediate',
              id: 9,
              description:
                'Make an application which logs into a given site on a schedule and invokes a certain action and then logs out. This can be useful for checking web mail, posting regular content, or getting info for other applications and saving it to your computer'
            },
            {
              category: 'Web',
              title: 'E-Card Generator',
              difficulty: 'Intermediate',
              id: 10,
              description:
                'Make a site that allows people to generate their own little e-cards and send them to other people. Use a picture library and perhaps insightful mottos or quotes.'
            },
            {
              category: 'Web',
              title: 'Content Management System',
              difficulty: 'Expert',
              id: 11,
              description:
                'Create a content management system (CMS) like Joomla, Drupal, PHP Nuke etc. Start small and allow for the addition of modules/addons later.'
            },
            {
              category: 'Web',
              title: 'CAPTCHA Maker',
              difficulty: 'Expert',
              id: 12,
              description:
                'Ever see those images with letters a numbers when you signup for a service and then asks you to enter what you see? It keeps web bots from automatically signing up and spamming. Try creating one yourself for online forms. If you use PHP, take a look at the image functions of GD.'
            },
            {
              category: 'Web',
              title: 'Web Board (Forum)',
              difficulty: 'Expert',
              id: 13,
              description:
                'Create a forum for you and your buddies to post, administer and share thoughts and ideas.'
            },
            {
              category: 'Web',
              title: 'Alarm Clock',
              difficulty: 'Expert',
              id: 14,
              description:
                'Make a program that accepts command line arguments for what time to go off, and when it does it should launch a random video from your favorite youtube channel in-app or in an external browser. The command line arguments should be in the form of --hour --minute --pm/am.'
            },
            {
              category: 'Web',
              title: 'Random Youtube Video Generator',
              difficulty: 'Expert',
              id: 15,
              description:
                'Finding top notch content on youtube can be hard sometimes. Make a program that on launch generates a random youtube video for the user to watch. You can improve your algorithm to find random videos that are also intriguing videos so as to  keep the user engaged.'
            },
            {
              category: 'Web',
              title: 'SQL Injection checker',
              difficulty: 'Expert',
              id: 16,
              description:
                'SQL injection is a code injection technique, used to attack data-driven applications, in which nefarious SQL statements are inserted into an entry field for execution (e.g. to dump the database contents to the attacker). Create a program that checks if a site is vulerable to SQL injection. For more info > https://en.wikipedia.org/wiki/SQL_injection\r\n\r\nSubmitted by Duchy'
            },
            {
              category: 'Web',
              title: 'Simple forums',
              difficulty: 'Intermediate',
              id: 17,
              description:
                'In order to boost your HTML, CSS, PHP, MySQL and Javascript skills you need to challenge yourself. You need to be good at all of the above to create a Simple forum.\r\n\r\nTask:\r\n\r\nThis simple forum should be built from the ground up, meaning nothing like bootstrap. It should at least contain a registration form, and a login form. Users should be able to add their username and date of birth, as well as a small bio to their user profiles. They will be able to post in admin created categories, and their posts are threads. Other users should be able to comment on these threads. You should also create an administrative panel to add these sections, and also manage users.\r\n\r\nFor added complexity:\r\n\r\nInclude all of the above, but also add panels for recent posts, who\'s online, a rank manager in the administrative panel and a new rank - moderators. Create a full new panel for them named the moderation panel and allow them to do tasks that you believe they should be allowed to do. Also add a section in the administrative panel for managing individual user\'s permissions and ranks. Add a Sticky thread button to sections which will basically move the thread up top, and make it so it looks important. Add close, delete, copy and move buttons and add a way to tell if the forum is closed, stickied, read or unread. Make sure to add a way to tell if the user has already read a post, and add a time spent online timer.\r\n\r\nSubmitted by Arek "AG_Developer" Golding.'
            }
          ]
        },
        {
          categoryLbl: 'Files',
          categoryCount: 17,
          description: 'File management applications challenges',
          items: [
            {
              category: 'Files',
              title: 'Quiz Maker',
              difficulty: 'Intermediate',
              id: 1,
              description:
                'Make an application which takes various questions form a file, picked randomly, and puts together a quiz for students. Each quiz can be different and then reads a key to grade the quizzes.'
            },
            {
              category: 'Files',
              title: 'Sort File Records Utility',
              difficulty: 'Beginner',
              id: 2,
              description:
                'Reads a file of records, sorts them, and then writes them back to the file. Allow the user to choose various sort style and sorting based on a particular field.'
            },
            {
              category: 'Files',
              title: 'Quick Launcher',
              difficulty: 'Intermediate',
              id: 3,
              description:
                'A utility program that allows the user to assign various programs to icons on a toolbar. Then by clicking the buttons they can quickly launch the programs with parameters etc. Much like Windows quick launch.'
            },
            {
              category: 'Files',
              title: 'File Explorer',
              difficulty: 'Expert',
              id: 4,
              description:
                'Create your own windows explorer program but with added features, better searching, new icons and other views.'
            },
            {
              category: 'Files',
              title: 'Add Transactions In File and Find Averages',
              difficulty: 'Intermediate',
              id: 5,
              description:
                'Read in a file of financial transactions, group them into accounts, add up fields or find averages or apply credits and debits to each account.'
            },
            {
              category: 'Files',
              title: 'Create Zip File Maker',
              difficulty: 'Intermediate',
              id: 6,
              description:
                'The user enters various files from different directories and maybe even another computer on the network and the program transfers them and zips them up into a zip file. For added complexity, apply actual compression to the files.'
            },
            {
              category: 'Files',
              title: 'Bulk Renamer and Organizer',
              difficulty: 'Intermediate',
              id: 7,
              description:
                'This program will take a series of files and renames them with a specific filename filter entered by the user. For instance if the user enters myimage###.jpg it will rename all files with a “minimum” of three numbers like “myimage001.jpg”, “myimage145.jpg” or even “myimage1987.jpg” since 1987 has at least three numbers.'
            },
            {
              category: 'Files',
              title: 'PDF Generator',
              difficulty: 'Expert',
              id: 8,
              description:
                'An application which can read in a text file, html file or some other file and generates a PDF file out of it. Great for a web based service where the user uploads the file and the program returns a PDF of the file.'
            },
            {
              category: 'Files',
              title: 'Mp3 Tagger',
              difficulty: 'Expert',
              id: 9,
              description:
                'Modify and add ID3v1 tags to MP3 files. See if you can also add in the album art into the MP3 file’s header as well as other ID3v2 tags.'
            },
            {
              category: 'Files',
              title: 'Log File Maker',
              difficulty: 'Intermediate',
              id: 10,
              description:
                'Make an application which logs various statistics in response to given events. This can be something that logs what an application does, what the system is doing, when something like a file changes etc.'
            },
            {
              category: 'Files',
              title: 'Excel Spreadsheet Exporter',
              difficulty: 'Expert',
              id: 11,
              description:
                'Create an application which can read in a file and create an Excel Spreadsheet to export back. This can be through CVS or other file formats. For added complexity, see if you can create formula fields as well.'
            },
            {
              category: 'Files',
              title: 'RPG Character Stat Creator',
              difficulty: 'Expert',
              id: 12,
              description:
                'Make a program which will randomly create a character’s stats based on several rules set forth by the user. Have it generate a class, gender, strength/magic/dexterity points, and extra abilities or trades. Have it save it to a file which can then be printed out by a dungeon master.'
            },
            {
              category: 'Files',
              title: 'Image Map Generator',
              difficulty: 'Intermediate',
              id: 13,
              description:
                'Image maps are those images on the web that have multiple hover points that link to different pages. Such images may include maps or splash pages. See if you can make one where the user specifies an image, clicks hotspots in the image and specify links. It will then generate the HTML code to a file that the user can then copy and paste into their website to make the image map.'
            },
            {
              category: 'Files',
              title: 'File Copy Utility',
              difficulty: 'Intermediate',
              id: 14,
              description:
                'Create a utility that can do bulk file copying and backups of other files.'
            },
            {
              category: 'Files',
              title: 'Code Snippet Manager',
              difficulty: 'Intermediate',
              id: 15,
              description:
                'Another utility program that allows coders to put in functions, classes or other tidbits to save for use later. Organized by the type of snippet or language the coder can quickly look up code. For extra practice try adding syntax highlighting based on the language.'
            },
            {
              category: 'Files',
              title: 'Versioning Manager',
              difficulty: 'Intermediate',
              id: 16,
              description:
                'Create your own versioning system for code files. Users are forced to check out items and lock items during reading and writing so that a group of programmers are not accidentally overwriting code files on one another.'
            },
            {
              category: 'Files',
              title: 'Mass MP3 Renamer',
              difficulty: 'Expert',
              id: 17,
              description:
                "You have songs in a folder that you want to rename but you'd hate to do it one by one.\r\n\r\nWrite a program that takes three(3) inputs. \r\n1. The path to the directory in which the songs are.\r\n2. An input format string that lets the program know how the songs are currently named.\r\n3. An output format string that should form the new song filename.\r\n\r\nThe program should finish by printing a list of old -> new filename tuples.\r\n\r\nThe input/output format string can be any string that contains any number of the following labels: <artiste>, <album>, <track>, <year>\r\n\r\nAssume that the filenames of the songs to be renamed matches the input format string.\r\n\r\nSample list of input files:\r\n\r\nBob Dylan - 01 You're No Good (1962).mp3 \r\nBob Dylan - 02 Talkin' New York (1962).mp3 \r\nBob Dylan - 03 In My Time of Dyin' (1962).mp3 \r\nBob Dylan - 04 Man of Constant Sorrow (1962).mp3 \r\nBob Dylan - 05 Fixin' to Die (1962).mp3 \r\nBob Dylan - 06 Pretty Peggy-O (1962).mp3 \r\n\r\nSample input format string:\r\n\r\n<artiste> - <track> <title> (<year>).mp3 \r\n\r\nSample output format string:\r\n\r\n<year> <artiste>/<track> <title>.mp3 \r\n\r\nExpected output:\r\n\r\nBob Dylan - 01 You're No Good (1962).mp3 -> 1962 Bob Dylan/01 You're No Good.mp3 \r\nBob Dylan - 02 Talkin' New York (1962).mp3 -> 1962 Bob Dylan/02 Talkin' New York.mp3 \r\nBob Dylan - 03 In My Time of Dyin' (1962).mp3 -> 1962 Bob Dylan/03 In My Time of Dyin'.mp3 \r\nBob Dylan - 04 Man of Constant Sorrow (1962).mp3 -> 1962 Bob Dylan/04 Man of Constant Sorrow.mp3 \r\nBob Dylan - 05 Fixin' to Die (1962).mp3 -> 1962 Bob Dylan/05 Fixin' to Die.mp3 \r\nBob Dylan - 06 Pretty Peggy-O (1962).mp3 -> 1962 Bob Dylan/06 Pretty Peggy-O.mp3\r\n\r\nSubmitted by Kaustubh"
            }
          ]
        },
        {
          categoryLbl: 'Databases',
          categoryCount: 15,
          description: 'Database dependent applications challenges',
          items: [
            {
              category: 'Databases',
              title: 'SQL Query Analyzer',
              difficulty: 'Intermediate',
              id: 1,
              description:
                'A utility application which a user can enter a query and have it run against a local database and look for ways to make it more efficient.'
            },
            {
              category: 'Databases',
              title: 'Remote SQL Tool',
              difficulty: 'Expert',
              id: 2,
              description:
                'A utility that can execute queries on remote servers from your local computer across the Internet. It should take in a remote host, user name and password, run the query and return the results.'
            },
            {
              category: 'Databases',
              title: 'Baseball / Other Card Collector',
              difficulty: 'Expert',
              id: 3,
              description:
                'Create an application for keeping track of a collection of cards. Let the user enter all cards in a set, check off which ones they have, which ones they need and generate lists of cards they are looking for. For extra complexity, have it sum up sets and generate reports on how close they are of completing sets or the current value of a set.'
            },
            {
              category: 'Databases',
              title: 'Report Generator',
              difficulty: 'Expert',
              id: 4,
              description:
                'Create a utility that generates a report based on some tables in a database. Generates a sales reports based on the order/order details tables or sums up the days current database activity.'
            },
            {
              category: 'Databases',
              title: 'Database Backup Script Maker',
              difficulty: 'Expert',
              id: 5,
              description:
                'A program which reads a database’s objects, relationships, records and stored procedures and creates a .sql file which can then be imported into another database or kept as a backup file to rebuild the database with.'
            },
            {
              category: 'Databases',
              title: 'Event Scheduler and Calendar',
              difficulty: 'Intermediate',
              id: 6,
              description:
                'Make an application which allows the user to enter a date and time of an event, event notes and then schedule those events on a calendar. The user can then browse the calendar or search the calendar for specific events. For added complexity, allow the application to create reoccurrence events that reoccur every day, week, month, year etc.'
            },
            {
              category: 'Databases',
              title: 'Budget Tracker',
              difficulty: 'Intermediate',
              id: 7,
              description:
                'Write an application that keeps track of a household’s budget. The user can add expenses, income, and recurring costs to find out how much they are saving or losing over a period of time. For added complexity allow the user to specify a date range and see the net flow of money in and out of the house budget for that time period.'
            },
            {
              category: 'Databases',
              title: 'Address Book',
              difficulty: 'Beginner',
              id: 8,
              description:
                'Keep track of various contacts, their numbers, emails and little notes about them like a Rolodex in the database. For extra complexity, allow the user to connect to a website publish their address book based on specific options the user has set.'
            },
            {
              category: 'Databases',
              title: 'TV Show Tracker',
              difficulty: 'Intermediate',
              id: 9,
              description:
                'Got a favorite show you don’t want to miss? Don’t have a PVR or want to be able to find the show to then PVR it later? Make an application which can search various online TV Guide sites, locate the shows/times/channels and add them to a database application. The database/website then can send you email reminders that a show is about to start and which channel it will be on.'
            },
            {
              category: 'Databases',
              title: 'Travel Planner System',
              difficulty: 'Intermediate',
              id: 10,
              description:
                'Make a system that allows users to put together their own little travel itinerary and keep track of the airline / hotel arrangements, points of interest, budget and schedule.'
            },
            {
              category: 'Databases',
              title: 'Entity Relationship Diagram (ERD) Creator',
              difficulty: 'Intermediate',
              id: 11,
              description:
                ' A program that allows the user to put together ERD diagram and save it or have it generate some basic SQL syntax to give them a jump start.'
            },
            {
              category: 'Databases',
              title: 'Database Translation (MySQL <-> SQL Server)',
              difficulty: 'Expert',
              id: 12,
              description:
                'A simple utility that reads in from one database and constructs SQL compliant with another database. Then saves that to another database. One popular transition would be to and from MySQL server for databases like SQL Server and Oracle.'
            },
            {
              category: 'Databases',
              title: 'Gym Manager',
              difficulty: 'Intermediate',
              id: 13,
              description:
                "An app for a fictional gym. Stores gym member's membership data, Notifies you when membership renewal payment date is due. Stores customer enquiries for review. Has a feature to backup and restore database. Has a dashboard to visualize all the data accumulated eg: Payments made, Number of Enquiries etc."
            },
            {
              category: 'Databases',
              title: 'Pokedex',
              difficulty: 'Expert',
              id: 14,
              description:
                'Make a Pokemon database app that allows functional searching, sorting, filtering, detailed information with images of the various Pokemon.\r\n\r\nSubmitted by Ngoc Dang'
            },
            {
              category: 'Databases',
              title: 'University Chatbot',
              difficulty: 'Expert',
              id: 15,
              description:
                "A bot that receives a query and retrieves the result from a database. Queries being faculty information, upcoming events, timetables, fee enquiries, location queries, general queries, etc. Your answer pool should be generated from a back-end database. The bot will scan the user's input for specific keywords, generate an answer pool from the database and return the respective information. This chatbot can be implemented for web, PC or mobile.\r\n\r\nSubmitted by Ashlesh"
            }
          ]
        },
        {
          categoryLbl: 'Graphics and Multimedia',
          categoryCount: 16,
          description: 'Graphics and Multimedia applications challenges',
          items: [
            {
              category: 'Graphics and Multimedia',
              title: 'Slide Show',
              difficulty: 'Intermediate',
              id: 1,
              description:
                'Make an application that shows various pictures in a slide show format. For extra complexity try adding various effects like fade in/out, star wipe and window blinds transitions.'
            },
            {
              category: 'Graphics and Multimedia',
              title: 'Bulk Picture Manipulator',
              difficulty: 'Intermediate',
              id: 2,
              description:
                'This program will take in a directory of pictures and apply a certain effect to them whether it be reducing color count, changing its format, or alter file attributes. For something extra try to see if you can also create a system to tag them.'
            },
            {
              category: 'Graphics and Multimedia',
              title: 'CD Burning App',
              difficulty: 'Intermediate',
              id: 3,
              description: 'Create a utility that simply burns data to a CD.'
            },
            {
              category: 'Graphics and Multimedia',
              title: 'YouTube Downloader',
              difficulty: 'Expert',
              id: 4,
              description:
                ' A program which can download videos to your hard drive from youtube.com. Save the files in various formats including FLV and AVI.'
            },
            {
              category: 'Graphics and Multimedia',
              title: 'Signature Maker',
              difficulty: 'Expert',
              id: 5,
              description:
                'Ever seen those web board posts where someone has a generated signature made up? See if you can make a program that allows the user to specify a background, text, colors and alignment to make their own signatures or userbars.'
            },
            {
              category: 'Graphics and Multimedia',
              title: 'Screen Saver',
              difficulty: 'Beginner',
              id: 6,
              description:
                'Make a screensaver program that will run while your computer sits idle. To make a simple one use some standard pictures and then for added complexity try a 3D object that spins around the screen and bounces off the sides.'
            },
            {
              category: 'Graphics and Multimedia',
              title: 'Watermarking Application',
              difficulty: 'Intermediate',
              id: 7,
              description:
                'Have some pictures you want copyright protected? Add your own logo or text lightly across the background so that no one can simply steal your graphics off your site. Make a program that will add this watermark to the picture.'
            },
            {
              category: 'Graphics and Multimedia',
              title: 'Dominant Colors',
              difficulty: 'Beginner',
              id: 8,
              description:
                "Develop a program that accepts an image either via the device's camera (if it has one) or a file dialog. Your program should intelligently determine three of the most dominant colors in the image and present it to the user. The dominant colors in this case are the colors that appear most in a given image. For added complexity, generate the RGB, HSB, CYMK and HEX color codes for each dominant color. Also you can add the ability to save the generated color palette with all the above information."
            },
            {
              category: 'Graphics and Multimedia',
              title: 'Resizer',
              difficulty: 'Beginner',
              id: 9,
              description:
                'Develop a program that generates the mdpi, hdpi, xhdpi, xxhdpi, xxxhdpi versions of any given image that has its height equal to its width.\r\nThe dimensions for each screen density:\r\nMDPI - 48px, HDPI - 72px, XHDPI - 96px, XXHDPI - 144px, XXHDPI - 192px. Note that the above sizes account for both the height and width of the image so 48px means height = 48px, width = 48px.'
            },
            {
              category: 'Graphics and Multimedia',
              title: 'Import Picture and Save as Grayscale',
              difficulty: 'Intermediate',
              id: 10,
              description:
                'Make a utility that sucks the color right out of an image and saves it. You could add more features including ability to adjust contrast, saturation, darkness, brightness and vignette effects etc.'
            },
            {
              category: 'Graphics and Multimedia',
              title: 'Video Streamer',
              difficulty: 'Expert',
              id: 11,
              description: 'Try to create your own streaming video player.'
            },
            {
              category: 'Graphics and Multimedia',
              title: 'Mind Mapper',
              difficulty: 'Intermediate',
              id: 12,
              description:
                'A mind map is a graphical way to represent ideas and concepts. It is a visual thinking tool that helps structuring information, helping you to better analyze, comprehend, synthesize, recall and generate new ideas. Create a program that allows the user to put down ideas and quickly brainstorm how they are related into a mind map. The goal here is speed so let the user quickly write in an idea and drag it around in a visual map to show relationships.'
            },
            {
              category: 'Graphics and Multimedia',
              title: 'Mp3 Player (and Other Formats)',
              difficulty: 'Intermediate',
              id: 13,
              description:
                'A simple program for playing your favorite music files. It should have the ability to Play, Pause, Fast Forward, Rewind, Next, Previous, Repeat Once, Repeat Forever and Randomly Shuffle. For extra complexity see if you can add the ability to create playlists and an equalizer. You could also generate a Like/Dislike playlist by rating songs based on if a song is skipped or played to the end or if the volume is increased/decreased whilst the song is being played.'
            },
            {
              category: 'Graphics and Multimedia',
              title: 'Music Rater',
              difficulty: 'Intermediate',
              id: 14,
              description:
                'Create a music app that intelligently plays songs that the user would like based on a rating scheme where song skip or volume lowering means dislike and song full listen or volume increase means like.'
            },
            {
              category: 'Graphics and Multimedia',
              title: 'Wallpaper Manager',
              difficulty: 'Intermediate',
              id: 15,
              description:
                'Make a program which keeps track of your favorite wallpapers, changes them regularly and maybe even re-sizes them for your resolution (aka tiles one and stretches another).'
            },
            {
              category: 'Graphics and Multimedia',
              title: 'Screen Capture Program',
              difficulty: 'Intermediate',
              id: 16,
              description:
                'Make a utility that will capture screenshots. Add the ability to add arrows that would highlight relevant info in the screenshots. For added complexity, add the ability to stitch several screenshots together, crop, edit saturation, contrast and brightness etc.'
            }
          ]
        },
        {
          categoryLbl: 'Games',
          categoryCount: 20,
          description: 'Games challenges',
          items: [
            {
              category: 'Games',
              title: 'Crossword Puzzle',
              difficulty: 'Beginner',
              id: 1,
              description:
                'Create a crossword puzzle which links words together on common letters. Provide a list of clues for each word and let the user enter fill in the words until the entire crossword is filled in.\r\n'
            },
            {
              category: 'Games',
              title: 'Memory Puzzle',
              difficulty: 'Beginner',
              id: 2,
              description:
                'A board full of overturned cards. There is a pair for each card. The player flips over two cards. If they match, then they stay overturned. Otherwise they flip back. The player needs to overturn all the cards in the fewest moves to win.'
            },
            {
              category: 'Games',
              title: 'Simon',
              difficulty: 'Beginner',
              id: 3,
              description:
                'Four colored buttons light up in a specific pattern. After displaying the pattern, the player must repeat the pattern by clicking the buttons in proper order. The pattern gets longer each time the player completes the pattern. If the player presses a wrong button, the game ends.'
            },
            {
              category: 'Games',
              title: 'Bejeweled',
              difficulty: 'Intermediate',
              id: 4,
              description:
                'The board is filled with seven different types of jewels. The player can swap two adjacent jewels to form a three-in-a-row, causing the jewels to disappear and the jewels on top of them to fall down. Creating chain reactions gives bonus points.'
            },
            {
              category: 'Games',
              title: 'Connect Four',
              difficulty: 'Intermediate',
              id: 5,
              description:
                'Two players of different colors drop their tokens on an upright board. The player to make four tokens in a row, column, or diagonal wins. Creating an AI for this requires a simple minimax algorithm.'
            },
            {
              category: 'Games',
              title: 'Nibbles',
              difficulty: 'Intermediate',
              id: 6,
              description:
                'A worm or snake constantly moves around the board. The player controls the direction the "head" of the worm moves, and the worm must try to eat apples that randomly appear. Eating an apply causes the worm to grow in length. The game ends if the worm crashes into the edge of the board or into itself.'
            },
            {
              category: 'Games',
              title: 'Chess and Checkers',
              difficulty: 'Intermediate',
              id: 7,
              description:
                'Simply put a game of chess or checkers. Try to make it playable online and if you can use a graphical user interface that can also undo or redo a step as well as keep a history of moves for replay.'
            },
            {
              category: 'Games',
              title: 'Tic-tac-toe',
              difficulty: 'Intermediate',
              id: 8,
              description:
                'Players put down their X or O symbol on a 3x3 board and try to get three in a row.'
            },
            {
              category: 'Games',
              title: 'Maze',
              difficulty: 'Intermediate',
              id: 9,
              description:
                'Player runs through a maze to the exit. This is more of an exercise in writing maze-generation algorithms.'
            },
            {
              category: 'Games',
              title: 'Fruit Ninja',
              difficulty: 'Intermediate',
              id: 10,
              description:
                'Objects are thrown up over the screen and the player must drag the mouse over them.'
            },
            {
              category: 'Games',
              title: 'Typespeed',
              difficulty: 'Intermediate',
              id: 11,
              description:
                'A typing game where words slowly move to the right side of the screen. The player must type the word to make them disappear. The player loses after enough words hit the right side of the screen.'
            },
            {
              category: 'Games',
              title: 'Game of Threes',
              difficulty: 'Expert',
              id: 12,
              description:
                "The user enters a single number like 100 and your program repeatedly does the following:\r\n1. If the number is divisible by 3, divide it by 3.\r\n2. If it is not, either add or subtract 1  to make it divisible by three then divide it by 3.\r\nThe game stops when the number reaches three. Your program's output should be the list of valid steps taken to arrive at the final answer 1. For the number 100, 100 -1 33 0 11 1 4 1 would be the valid output."
            },
            {
              category: 'Games',
              title: 'Words with Enemies',
              difficulty: 'Intermediate',
              id: 13,
              description:
                "There is a valley. On each side there are two cannons firing words at each other. In the middle of the valley the words make contact and explode. Similar letters from each word cancel each other out and the leftover falls into the valley and fills it up. Make a Player1 versus CPU program that generates a word to counter the user's own. For example, user inputs 'held', CPU randomly generates 'jelly'. E cancels out. Player1 has 3 characters left (H,L,D), CPU has 4 characters left (J,L,L,Y) so CPU wins. Make your AI fair so the game is enjoyable."
            },
            {
              category: 'Games',
              title: 'Connect Four',
              difficulty: 'Expert',
              id: 14,
              description:
                "There's a 4*4 square playing area. Two players take turns putting their signs in any one of the 16 squares in the playing area. A player wins when ever there are four of his signs in a row. The row could either be horizontal, vertical or diagonal.\r\n\r\nSubmitted by Coen"
            },
            {
              category: 'Games',
              title: 'Game of Life',
              difficulty: 'Expert',
              id: 15,
              description:
                "Recreate Conway's Game of Life. This Wikipedia article should provide your with all the needed information to recreate it > https://en.wikipedia.org/wiki/Conway's_Game_of_Life\r\n\r\nSubmitted by VicPlasma58"
            },
            {
              category: 'Games',
              title: 'CMD RPG',
              difficulty: 'Beginner',
              id: 16,
              description:
                'A role-playing game (RPG) is a game in which players assume the roles of characters in a fictional setting. Players take responsibility for acting out these roles within a narrative, either through literal acting or through a process of structured decision-making or character development. Create a command line style RPG game, which has multiple actions the user can perform, in different locations and scenarios. At the very least, the player should encounter monsters, engage in quests, buy items in a shop and save the game for later.\r\n\r\nSubmitted by MCGods'
            },
            {
              category: 'Games',
              title: 'Dodger',
              difficulty: 'Intermediate',
              id: 17,
              description:
                'Several bad guys fall from the top of the screen and move randomly around the screen(to make it more challenging, some bad guys may follow the main character trying to kill him), and the user must avoid them. The player can either be controlled with the arrow keys or more directly with the mouse. The longer the player lasts without being killed, the higher the score. For every 3 minutes, the game gets more challenging.\r\n\r\nSubmitted by V0rTeX'
            },
            {
              category: 'Games',
              title: 'CMD Pokemon',
              difficulty: 'Intermediate',
              id: 18,
              description:
                "Create a cmd based pokemon game. Its gameplay should like this:\r\n\r\nTime to catch some pokemon!\r\n\r\nWhich pokemon have you caught? Pikachu\r\n\r\nWould you like to keep catching pokemon [y/n]?\r\n- Y\r\n\r\nSo far you have caught.\r\n['Pikachu']\r\n\r\nWhich new pokemon have you caught? Wabufeet\r\n\r\nWould you like to keep catching pokemon [y/n]?\r\n- Y\r\n\r\nSo far you have caught..\r\n['Pikachu','wabufeet']\r\n\r\nWould you like to keep catching pokemon [y/n]?\r\n- N\r\n\r\nTime to head to pokemon gym\r\n\r\nPokemon in your collection\r\n['Pikachu','Wabufeet']\r\n\r\nPokemon in your gym team\r\n[]\r\n\r\nWhat pokemon will you add to your team?\r\n- Pikachu\r\n\r\nI choose you, Pikachu!\r\n\r\nPokemon(s) in your collection\r\n['Wabufeet']\r\n\r\nPokemon(s) in your gym team\r\n['Pikachu']\r\n\r\nDo you want to train more pokemon?\r\n- N\r\n\r\npress Enter to exit.\r\n\r\nFor added complexity, save the game state when the user exits so that the user can resume where they left off when they quit the game.\r\n\r\nSubmitted by Amab Biswas"
            },
            {
              category: 'Games',
              title: 'Backgammon',
              difficulty: 'Intermediate',
              id: 17,
              description:
                'Create a game of backgammon that two players can play. Here is a wiki article that has the rules of the game:\r\nhttps://en.m.wikipedia.org/wiki/Backgammon\r\n\r\nFor added complexity, add the option to play against an AI.\r\n\r\nSubmitted by Abdulaziz Reda.'
            },
            {
              category: 'Games',
              title: 'Horse Racing Betting',
              difficulty: 'Intermediate',
              id: 20,
              description:
                'The player starts with a certain amount of money (eg. £100) and then gets to bet on horse races. Before a race, the stats and probability of each horse is shown to let the player bet a certain amount on that race. At the end of the race (after the results have been randomly generated), either add the money or notify the player of their loss.\r\nThe player could win/lose when they have a certain amount of money.\r\nThe game should probably have slightly better odds than what they would be in real life to allow the player to do well.\r\nFor added complexity, a GUI could be created or even a live view of the horses as they race.\r\n\r\nSubmitted by Oyyee'
            }
          ]
        }
      ]
    };
  }
};
