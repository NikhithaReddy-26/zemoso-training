package NamingConventionsAssignment;

public class StringBuilderExample {


        public static void main(String[] args) {


            StringBuilder stringBuilder = new StringBuilder();

            String greeting = "Hello";
            String name = "John";

            stringBuilder.append(greeting).append(" ").append(name);

            String message = stringBuilder.toString();

            System.out.println(message);
        }
    }


