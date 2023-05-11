package assignment2;
import java.util.Scanner;
public class alphabets {

        public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            System.out.print("Enter a string: ");
            String input = scanner.nextLine();
            boolean containsAll = containsAllLetters(input);
            System.out.println("Contains all letters: " + containsAll);
            scanner.close();
        }


        public static boolean containsAllLetters(String input) {

            boolean[] seen = new boolean[26];


            for (char c : input.toCharArray()) {

                c = Character.toLowerCase(c);


                if (c >= 'a' && c <= 'z') {
                    seen[c - 'a'] = true;
                }
            }


            for (boolean b : seen) {
                if (!b) {
                    return false;
                }
            }
            return true;
        }
    }


